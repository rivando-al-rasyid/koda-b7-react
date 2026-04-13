import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSurvei } from "../features/survei/slice.js"; // Ensure this is a named export or adjust accordingly

function SurveiPerokok() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        isSmoker: "ya",
        brands: [],
    });

    const dispatch = useDispatch();

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
        // 4. Dispatch the actual data object
        dispatch(addSurvei(formData));
        alert("Data sent!");
    };

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        📝 Survei Perokok
                    </h2>
                </div>
                <div className="p-10 flex flex-col items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md bg-zinc-50 border-zinc-900 rounded-2xl p-6 shadow-[4px_4px_0px_#18181b]"
                    >
                        <label htmlFor="name" className="block font-bold mb-1">
                            Nama:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-2 border-zinc-900 rounded-lg px-4 py-2 mb-4"
                            required
                        />

                        <label htmlFor="age" className="block font-bold mb-1">
                            Umur:
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full border-2 border-zinc-900 rounded-lg px-4 py-2 mb-4"
                            required
                        />

                        <label
                            htmlFor="isSmoker"
                            className="block font-bold mb-1"
                        >
                            Merokok atau tidak:
                        </label>
                        <select
                            id="isSmoker"
                            name="isSmoker"
                            value={formData.isSmoker}
                            onChange={handleChange}
                            className="w-full border-2 border-zinc-900 rounded-lg px-4 py-2 mb-4"
                        >
                            <option value="ya">Ya</option>
                            <option value="tidak">Tidak</option>
                        </select>

                        {formData.isSmoker === "ya" && (
                            <div className="space-y-3 mb-4">
                                <label className="block font-bold mb-2">
                                    Merek rokok:
                                </label>
                                {[
                                    {
                                        id: "sampoerna",
                                        label: "Sampoerna A Mild",
                                        value: "sampoerna",
                                    },
                                    {
                                        id: "gudanggaram",
                                        label: "Gudang Garam Filter",
                                        value: "gudang_garam",
                                    },
                                    {
                                        id: "djarum",
                                        label: "Djarum Super",
                                        value: "djarum",
                                    },
                                ].map((brand) => (
                                    <div
                                        key={brand.id}
                                        className="flex items-center space-x-3 p-3 border-2 border-zinc-900 rounded-lg"
                                    >
                                        <input
                                            type="checkbox"
                                            id={brand.id}
                                            value={brand.value}
                                            checked={formData.brands.includes(
                                                brand.value,
                                            )}
                                            onChange={handleCheckboxChange}
                                            className="w-5 h-5 accent-zinc-900"
                                        />
                                        <label
                                            htmlFor={brand.id}
                                            className="flex-1 cursor-pointer"
                                        >
                                            {brand.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button type="submit">submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default SurveiPerokok;
