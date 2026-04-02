import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
    const [productName, setProductName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({
            id: Date.now(),
            productName: productName.trim(),
        });

        setProductName("");
    };

    return (
        <section className="bg-white border-2 border-zinc-900 rounded-2xl p-6 shadow-[4px_4px_0px_#18181b] w-full">
            <h2 className="text-xl font-black tracking-tight text-zinc-900 mb-5 uppercase">
                ＋ Add Product
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Product Name
                    </label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g. Wireless Headphones"
                        className="border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    />
                </div>

                <button className="mt-1 bg-zinc-900 text-white font-black uppercase tracking-widest text-sm py-3 rounded-xl hover:bg-amber-400 hover:text-zinc-900 active:scale-95 transition-all duration-150">
                    Submit
                </button>
            </form>
        </section>
    );
}
