import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/action";
import {
    addProduct,
    editProduct,
    removeProduct,
} from "../features/product/slice";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

export default function Product() {
    const dispatch = useDispatch();
    const {
        items: products,
        loading,
        error,
    } = useSelector((state) => state.product);
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
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900 ">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        📦 Product
                    </h2>
                </div>
                <div className="p-2 m-">
                    <ProductForm
                        onSubmit={handleSubmit}
                        editingProduct={editingProduct}
                        onCancelEdit={() => setEditingId(null)}
                    />
                </div>

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
            </section>
        </main>
    );
}
