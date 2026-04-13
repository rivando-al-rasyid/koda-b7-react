export default function ProductTable({ products, onDelete }) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
    };

    return (
        <section className="overflow-hidden px-6 pb-6 bg-white">
            <div>
                <h2 className="text-xl p-4 font-black tracking-tight uppercase">
                    📦 Product List
                </h2>
            </div>
            {products.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-zinc-300">
                    <span className="text-5xl mb-3">🗂️</span>
                    <p className="text-sm font-semibold uppercase tracking-widest">
                        No products yet
                    </p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <caption className="sr-only">Product List</caption>
                            <thead>
                                <tr className="bg-amber-400 text-zinc-900">
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest w-16">
                                        No
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Product Name
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest ">
                                        Created At
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest ">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-zinc-100">
                                {products.map((p, index) => (
                                    <tr
                                        key={p.id}
                                        className={`hover:bg-amber-50 transition-colors ${
                                            index % 2 === 0
                                                ? "bg-white"
                                                : "bg-zinc-50"
                                        }`}
                                    >
                                        <td className="px-4 py-4 font-black text-zinc-300">
                                            {String(index + 1).padStart(2, "0")}
                                        </td>
                                        <td className="px-4 py-4 font-bold text-zinc-800">
                                            {p.productName}
                                        </td>
                                        <td className="px-4 py-4 text-zinc-500 font-medium">
                                            {formatDate(p.id)}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => onDelete(p.id)}
                                                className="cursor-pointer"
                                            >
                                                hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </section>
    );
}
