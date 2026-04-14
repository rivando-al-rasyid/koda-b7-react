import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/action";
import { addProduct, editProduct, removeProduct } from "../features/product/slice";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

export default function Product() {
    const dispatch = useDispatch();
    const { items: products, loading, error } = useSelector((state) => state.product);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const editingProduct = products.find((p) => p.id === editingId) ?? null;

    const handleSubmit = (formData) => {
        if (editingProduct) {
            dispatch(editProduct({ ...editingProduct, ...formData }));
            setEditingId(null);
        } else {
            dispatch(addProduct({ id: Date.now(), ...formData }));
        }
    };

    return (
        <div className="space-y-6">
            <ProductForm
                onSubmit={handleSubmit}
                editingProduct={editingProduct}
                onCancelEdit={() => setEditingId(null)}
            />

            {loading && <p>Loading products...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <ProductTable
                products={products}
                onEdit={(id) => setEditingId(id)}
                onDelete={(id) => {
                    dispatch(removeProduct(id));
                    if (editingId === id) setEditingId(null);
                }}
            />
        </div>
    );
}
