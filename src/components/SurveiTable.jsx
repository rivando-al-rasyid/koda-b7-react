export default function SurveiTable({ surveys, onDelete }) {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "numeric",
            year: "numeric",
        });
    };

    const formatBrands = (brands) => {
        if (!brands || brands.length === 0) return "-";
        const labels = {
            sampoerna: "Sampoerna A Mild",
            gudang_garam: "Gudang Garam",
            djarum: "Djarum Super",
            la_light: "LA Light",
        };
        return brands.map((b) => labels[b] ?? b).join(", ");
    };

    return (
        <section className="overflow-hidden px-6 pb-6 bg-white">
            <h2 className="text-xl p-4 font-black tracking-tight uppercase">
                📋 Hasil Survei
            </h2>

            {surveys.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-zinc-300">
                    <span className="text-5xl mb-3">📭</span>
                    <p className="text-sm font-semibold uppercase tracking-widest">
                        Belum ada data survei
                    </p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <caption className="sr-only">Tabel Survei Perokok</caption>
                            <thead>
                                <tr className="bg-amber-400 text-zinc-900">
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest w-14">
                                        No
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Nama
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Umur
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Jenis Kelamin
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Merokok
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Merek
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Waktu
                                    </th>
                                    <th className="text-left px-4 py-4 font-black uppercase tracking-widest">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-zinc-100">
                                {surveys.map((s, index) => (
                                    <tr
                                        key={s.id}
                                        className={`hover:bg-amber-50 transition-colors ${
                                            index % 2 === 0 ? "bg-white" : "bg-zinc-50"
                                        }`}
                                    >
                                        <td className="px-4 py-4 font-black text-zinc-300">
                                            {String(index + 1).padStart(2, "0")}
                                        </td>
                                        <td className="px-4 py-4 font-bold text-zinc-800">
                                            {s.name}
                                        </td>
                                        <td className="px-4 py-4 text-zinc-600 font-medium">
                                            {s.age} thn
                                        </td>
                                        <td className="px-4 py-4 text-zinc-600 font-medium capitalize">
                                            {s.gender}
                                        </td>
                                        <td className="px-4 py-4">
                                            <span
                                                className={`inline-block px-2 py-1 rounded-lg text-xs font-black uppercase tracking-wide ${
                                                    s.isSmoker === "ya"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-green-100 text-green-700"
                                                }`}
                                            >
                                                {s.isSmoker === "ya" ? "Ya" : "Tidak"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-zinc-500 font-medium max-w-[180px] truncate">
                                            {formatBrands(s.brands)}
                                        </td>
                                        <td className="px-4 py-4 text-zinc-500 font-medium whitespace-nowrap">
                                            {formatDate(s.id)}
                                        </td>
                                        <td className="px-4 py-4">
                                            <button
                                                onClick={() => onDelete(s.id)}
                                                className="cursor-pointer text-red-600 font-bold hover:text-red-800 transition-colors"
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
