import { useState } from "react";

const CIGARETTE_BRANDS = [
    { id: "sampoerna", label: "Sampoerna A Mild", value: "sampoerna" },
    { id: "gudanggaram", label: "Gudang Garam Filter", value: "gudang_garam" },
    { id: "djarum", label: "Djarum Super", value: "djarum" },
    { id: "lalight", label: "LA Light", value: "la_light" },
];

const inputClass =
    "border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all";

const labelClass = "text-xs font-bold uppercase tracking-widest text-zinc-500";

export default function SurveiForm({ onAddSurvei }) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "laki-laki",
        isSmoker: "ya",
        brands: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            brands: checked
                ? [...prev.brands, value]
                : prev.brands.filter((b) => b !== value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.age) return;
        onAddSurvei({ ...formData, id: Date.now() });
        setFormData({ name: "", age: "", gender: "laki-laki", isSmoker: "ya", brands: [] });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className={labelClass}>
                        Nama
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Budi Santoso"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Age */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="age" className={labelClass}>
                        Umur
                    </label>
                    <input
                        id="age"
                        name="age"
                        type="number"
                        required
                        min={1}
                        max={120}
                        placeholder="e.g. 25"
                        value={formData.age}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="gender" className={labelClass}>
                        Jenis Kelamin
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`${inputClass} bg-white appearance-none`}
                    >
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>

                {/* Smoker */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="isSmoker" className={labelClass}>
                        Merokok atau Tidak
                    </label>
                    <select
                        id="isSmoker"
                        name="isSmoker"
                        value={formData.isSmoker}
                        onChange={handleChange}
                        className={`${inputClass} bg-white appearance-none`}
                    >
                        <option value="ya">Ya</option>
                        <option value="tidak">Tidak</option>
                    </select>
                </div>
            </div>

            {/* Brands — shown only when smoker */}
            {formData.isSmoker === "ya" && (
                <div className="flex flex-col gap-2">
                    <span className={labelClass}>Merek Rokok Favorit</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {CIGARETTE_BRANDS.map((brand) => (
                            <label
                                key={brand.id}
                                className="flex items-center gap-3 p-3 border-2 border-zinc-900 rounded-xl cursor-pointer hover:bg-amber-50 transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    value={brand.value}
                                    checked={formData.brands.includes(brand.value)}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4 accent-zinc-900"
                                />
                                <span className="text-sm font-medium text-zinc-800">
                                    {brand.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

            <button
                type="submit"
                className="mt-1 bg-zinc-900 text-white font-black uppercase tracking-widest text-sm py-3 rounded-xl hover:bg-amber-400 hover:text-zinc-900 active:scale-95 transition-all duration-150"
            >
                Kirim Survei
            </button>
        </form>
    );
}
