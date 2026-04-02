export default function ProductTable({ products }) {
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
        <section className="bg-white border-2 border-zinc-900 rounded-2xl shadow-[4px_4px_0px_#18181b] overflow-hidden">
            <div className="px-6 py-4 border-b-2 border-zinc-900 bg-zinc-900">
                <h2 className="text-xl font-black tracking-tight text-white uppercase">
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
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-amber-400 text-zinc-900">
                                <th className="text-left px-3 py-3 font-black uppercase tracking-widest w-10">
                                    No
                                </th>
                                <th className="text-left px-3 py-3 font-black uppercase tracking-widest">
                                    Product Name
                                </th>
                                <th className="text-left px-3 py-3 font-black uppercase tracking-widest">
                                    Create At
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p, index) => (
                                <tr
                                    key={p.id}
                                    className={`border-t-2 border-zinc-100 hover:bg-amber-50 transition-colors
                    ${index % 2 === 0 ? "bg-white" : "bg-zinc-50"}`}
                                >
                                    <td className="px-3 py-3 font-black text-zinc-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </td>
                                    <td className="px-3 py-3 font-semibold text-zinc-800">
                                        {p.productName}
                                    </td>
                                    <td className="px-3 py-3 text-zinc-500">
                                        {formatDate(p.id)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}
