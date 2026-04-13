import { useState, useEffect } from "react";
import Button from "./Button";

export default function ProductForm({
    onAddProduct,
    editingProduct,
    onCancelEdit,
    Name,
}) {
    const [productName, setProductName] = useState("");

    // Sync input ke data produk yang sedang diedit
    useEffect(() => {
        if (editingProduct) {
            setProductName(editingProduct.productName);
        } else {
            setProductName("");
        }
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!productName.trim()) return;
        onAddProduct({
            id: Date.now(),
            productName: productName.trim(),
        });
        setProductName("");
    };

    const isEditing = !!editingProduct;

    return (
        <section className="p-6">
            <h2 className="text-xl font-black tracking-tight text-zinc-900 mb-5 uppercase">
                {isEditing ? "✏️ Edit" : "＋ Add"} {Name}
            </h2>
            <p>
                Press Enter To {isEditing ? "Edit" : "Add"} {Name}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        {Name} Name
                    </label>
                    <input
                        type="text"
                        required
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g. Wireless Headphones"
                        className="border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    />
                </div>
                <div className="flex gap-3">
                    <Button type="submit">
                        {isEditing ? "Update" : "Submit"}
                    </Button>
                    {isEditing && (
                        <button
                            type="button"
                            onClick={onCancelEdit}
                            className="text-sm font-bold text-zinc-500 underline underline-offset-2 hover:text-zinc-800 transition-colors"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </section>
    );
}
