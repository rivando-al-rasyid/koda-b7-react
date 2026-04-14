import { useEffect, useState } from "react";

export default function ProductForm({ onSubmit, editingProduct, onCancelEdit }) {
    const [productName, setProductName] = useState("");

    useEffect(() => {
        setProductName(
            editingProduct
                ? (editingProduct.productName ?? editingProduct.title ?? "")
                : ""
        );
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!productName.trim()) return;
        onSubmit({ productName: productName.trim() });
        if (!editingProduct) setProductName("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product name..."
                className="border-2 border-zinc-900 rounded px-3 py-2 flex-1"
            />
            <button type="submit" className="bg-zinc-900 text-white px-4 py-2 rounded font-bold">
                {editingProduct ? "Update" : "Add"}
            </button>
            {editingProduct && (
                <button type="button" onClick={onCancelEdit} className="border-2 border-zinc-900 px-4 py-2 rounded font-bold">
                    Cancel
                </button>
            )}
        </form>
    );
}
