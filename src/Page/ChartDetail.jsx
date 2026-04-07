import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

export default function CharDetail() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/${id}`,
                );
                if (!response.ok) throw new Error("Character not found");
                const data = await response.json();
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900 flex items-center gap-4">
                    <Link
                        to="/ricknmorty"
                        className="text-white text-sm font-bold hover:underline"
                    >
                        ← Back
                    </Link>
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        🛸 Character Detail
                    </h2>
                </div>

                {loading && (
                    <p className="px-6 py-4 text-zinc-500">Loading...</p>
                )}

                {error && (
                    <p className="px-6 py-4 text-red-500">Error: {error}</p>
                )}

                {character && (
                    <div className="flex gap-6 p-6">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-48 h-48 rounded-xl border-2 border-zinc-900 object-cover"
                        />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-black text-zinc-900">
                                {character.name}
                            </h2>
                            <p className="text-sm text-zinc-600">
                                Status:{" "}
                                <span className="font-bold">
                                    {character.status}
                                </span>
                            </p>
                            <p className="text-sm text-zinc-600">
                                Species:{" "}
                                <span className="font-bold">
                                    {character.species}
                                </span>
                            </p>
                            <p className="text-sm text-zinc-600">
                                Origin:{" "}
                                <span className="font-bold">
                                    {character.origin?.name}
                                </span>
                            </p>
                            <p className="text-sm text-zinc-600">
                                Location:{" "}
                                <span className="font-bold">
                                    {character.location?.name}
                                </span>
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
