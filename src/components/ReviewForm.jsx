import { useState } from "react";

const ReviewForm = ({ onAddReview }) => {
    const [formData, setFormData] = useState({
        username: "",
        rating: 5,
        comment: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddReview(formData);
        // Reset form
        setFormData({ username: "", rating: 5, comment: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="flex flex-col gap-1">
                    <label className="font-black uppercase text-xs">
                        Your Name
                    </label>
                    <input
                        type="text"
                        required
                        className="border-2 border-zinc-900 p-3 rounded-xl focus:bg-yellow-50 outline-none transition-colors"
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

                {/* Rating Select */}
                <div className="flex flex-col gap-1">
                    <label className="font-black uppercase text-xs">
                        Rating
                    </label>
                    <select
                        className="border-2 border-zinc-900 p-3 rounded-xl bg-white outline-none appearance-none"
                        value={formData.rating}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                rating: Number(e.target.value),
                            })
                        }
                    >
                        <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                        <option value="4">⭐⭐⭐⭐ (4/5)</option>
                        <option value="3">⭐⭐⭐ (3/5)</option>
                        <option value="2">⭐⭐ (2/5)</option>
                        <option value="1">⭐ (1/5)</option>
                    </select>
                </div>
            </div>

            {/* Comment Input */}
            <div className="flex flex-col gap-1">
                <label className="font-black uppercase text-xs">
                    Your Review
                </label>
                <textarea
                    required
                    rows={3}
                    className="border-2 border-zinc-900 p-3 rounded-xl focus:bg-yellow-50 outline-none transition-colors"
                    placeholder="What did you think about the product?"
                    value={formData.comment}
                    onChange={(e) =>
                        setFormData({ ...formData, comment: e.target.value })
                    }
                />
            </div>

            <button
                type="submit"
                className="bg-indigo-600 text-white font-black py-4 px-8 rounded-xl border-2 border-zinc-900 shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 transition-all uppercase tracking-widest"
            >
                Post Review
            </button>
        </form>
    );
};

export default ReviewForm;
