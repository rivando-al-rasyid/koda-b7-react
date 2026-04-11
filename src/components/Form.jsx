import { useState } from "react";
import Button from "./Button";

/**
 * Komponen form untuk menangani input produk baru secara dinamis.
 * * @param {Object} props - Properti komponen.
 * @param {Function} props.onAddProduct - Fungsi callback yang dijalankan saat form dikirim.
 * Menerima objek { id, productName }.
 * @param {string} props.Name - Label dinamis untuk input (misal: "Product", "Item").
 * @returns {JSX.Element} Elemen form yang ter-render.
 */
export default function ProductForm({ onAddProduct, Name }) {
    const [productName, setProductName] = useState("");

    /**
     * Mengelola pengiriman form, melakukan pembersihan data (trimming),
     * dan mereset state input setelah data dikirim.
     * * @param {React.FormEvent} e - Event submit dari form.
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Mencegah penambahan jika input hanya berisi spasi
        if (!productName.trim()) return;

        onAddProduct({
            id: Date.now(), // ID unik berdasarkan timestamp
            productName: productName.trim(),
        });

        setProductName("");
    };

    return (
        <section className="p-6">
            <h2 className="text-xl font-black tracking-tight text-zinc-900 mb-5 uppercase">
                ＋ Add {Name}
            </h2>

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
                <Button type="submit">Submit</Button>
            </form>
        </section>
    );
}
