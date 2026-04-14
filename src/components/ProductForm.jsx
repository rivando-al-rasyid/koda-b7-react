import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import {
    addProduct,
    editProduct,
    removeProduct,
} from "../features/product/slice";
import { fetchProducts } from "../features/product/action";

export default function Product() {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.product.items);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const editingProduct = useMemo(() => {
        return products.find((item) => item.id === editingId) || null;
    }, [products, editingId]);

    const handleAddOrUpdateProduct = (formData) => {
        if (editingProduct) {
            dispatch(
                editProduct({
                    ...editingProduct,
                    ...formData,
                }),
            );
            setEditingId(null);
            return;
        }

        dispatch(
            addProduct({
                id: Date.now(),
                productName: formData.productName,
                createdAt: new Date().toISOString(),
            }),
        );
    };

    const handleDeleteProduct = (id) => {
        dispatch(removeProduct(id));
        if (editingId === id) setEditingId(null);
    };

    const handleEditProduct = (id) => {
        setEditingId(id);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    return (
        <div className="space-y-6">
            <ProductForm
                onAddProduct={handleAddOrUpdateProduct}
                editingProduct={editingProduct}
                onCancelEdit={handleCancelEdit}
            />

            {loading && <p>Loading products...</p>}
            {error && <p>{error}</p>}

            <ProductTable
                products={products || []}
                onDelete={handleDeleteProduct}
                onEdit={handleEditProduct}
            />
        </div>
    );
}
