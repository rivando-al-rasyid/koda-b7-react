import { useState } from "react";

const ReviewForm = ({ onAddReview }) => {
    const [formData, setFormData] = useState({
        username: "",
        brand: "",
        comment: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddReview(formData);

        // Reset form
        setFormData({ username: "", brand: "", comment: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Nama
                    </label>
                    <input
                        type="text"
                        required
                        className="border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                        placeholder="e.g. Jane Doe"
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                username: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Merokok atau Tidak
                    </label>
                    <input
                        type="text"
                        required
                        className="border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                        placeholder="e.g. 25"
                        value={formData.age}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                age: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Umur
                    </label>
                    <select
                        className="border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all appearance-none"
                        value={formData.smokingStatus}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                smokingStatus: e.target.value,
                            })
                        }
                    >
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Jenis Kelamin
                    </label>
                </div>

                {/* Rating Select */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Brand Rokok Favorit
                    </label>
                    <select
                        className="border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all appearance-none"
                        value={formData.brand}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                brand: e.target.value,
                            })
                        }
                    >
                        <option value="Djarum">Djarum</option>
                        <option value="sempurna">Sempurna</option>
                        <option value="gudang-garam">Gudang Garam</option>
                        <option value="la-light">la Light</option>
                    </select>
                </div>
            </div>

            {/* Comment Input */}
            <div className="flex flex-col gap-1">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Your Review
                </label>
                <textarea
                    required
                    rows={3}
                    className="border-2 border-zinc-900 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-800 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all"
                    placeholder="What did you think about the product?"
                    value={formData.comment}
                    onChange={(e) =>
                        setFormData({ ...formData, comment: e.target.value })
                    }
                />
            </div>

            <button
                type="submit"
                className="mt-1 bg-zinc-900 text-white font-black uppercase tracking-widest text-sm py-3 rounded-xl hover:bg-amber-400 hover:text-zinc-900 active:scale-95 transition-all duration-150"
            >
                Post Review
            </button>
        </form>
    );
};

export default ReviewForm;
