export default function ProductTable({ products, onEdit, onDelete }) {
    const getTitle = (p) => p.productName ?? p.title ?? "Untitled";

    if (!products.length) {
        return (
            <div className="border-[3px] border-black p-6 bg-amber-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl font-black uppercase tracking-tight">
                    🗂️ No products in inventory
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse   bg-white ">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="p-4 text-left font-black uppercase tracking-widest text-sm border-r border-zinc-700">
                            No
                        </th>
                        <th className="p-4 text-left font-black uppercase tracking-widest text-sm border-r border-zinc-700">
                            Product Name
                        </th>
                        <th className="p-4 text-left font-black uppercase tracking-widest text-sm">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, index) => (
                        <tr
                            key={p.id}
                            className="border-b-[3px] border-black last:border-b-0 hover:bg-zinc-50 transition-colors"
                        >
                            <td className="p-4 font-mono font-bold border-r-[3px] border-black bg-zinc-100">
                                {String(index + 1).padStart(2, "0")}
                            </td>
                            <td className="p-4 font-black text-lg border-r-[3px] border-black">
                                {getTitle(p)}
                            </td>
                            <td className="p-4">
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => onEdit(p.id)}
                                        className="px-6 py-2 border-[3px] border-black bg-white font-black uppercase text-xs hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0 transition-all"
                                    >
                                        edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(p.id)}
                                        className="px-6 py-2 border-[3px] border-black bg-amber-800 font-black uppercase text-xs hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-0 transition-all"
                                    >
                                        hapus
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
