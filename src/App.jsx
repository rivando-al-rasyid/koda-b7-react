import { useState } from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
    const [reviews, setReviews] = useState([]);

    const handleAddReview = (newReview) => {
        if (!newReview.comment || !newReview.username) return;
        const reviewWithMeta = {
            ...newReview,
            id: Date.now(),
            date: new Date().toLocaleDateString(),
        };

        setReviews((prevReviews) => [...prevReviews, reviewWithMeta]);
    };

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                {/* Sub-header */}
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase flex items-center gap-2">
                        <span>💬</span> Write a Review
                    </h2>
                </div>

                {/* Input Area */}
                <div className="p-6 border-b-4 border-zinc-900 bg-zinc-50">
                    <ReviewForm onAddReview={handleAddReview} />
                </div>

                {/* Feedback List Area */}
                <div className="bg-white">
                    <div className="px-6 py-4 border-b-2 border-zinc-200 bg-zinc-100/50">
                        <p className="font-bold text-zinc-900 uppercase text-sm tracking-widest">
                            Recent Activity ({reviews.length})
                        </p>
                    </div>
                    <ReviewList reviews={reviews} />
                </div>
            </section>
        </main>
    );
}

export default App;
