const ReviewList = ({ reviews }) => {
    if (reviews.length === 0) {
        return (
            <div className="p-12 text-center text-zinc-400 font-bold italic">
                No reviews yet. Be the first to break the silence!
            </div>
        );
    }

    return (
        <div className="divide-y-2 divide-zinc-900">
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="p-6 hover:bg-zinc-50 transition-colors"
                >
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h4 className="font-black text-lg text-zinc-900">
                                {review.username}
                            </h4>
                            <div className="flex text-yellow-500 text-sm">
                                {"★".repeat(review.rating)}
                                <span className="text-zinc-300">
                                    {"★".repeat(5 - review.rating)}
                                </span>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-zinc-400 uppercase">
                            {review.date}
                        </span>
                    </div>
                    <p className="text-zinc-700 leading-relaxed font-medium">
                        "{review.comment}"
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
