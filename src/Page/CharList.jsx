import { useState, useEffect } from "react";
import { Link } from "react-router";
import slugify from "slugify";

export default function CharList() {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "https://rickandmortyapi.com/api/character",
                );
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                setError(error.message);
            }
        })();
    }, []);

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        🛸 Rick & Morty Characters
                    </h2>
                </div>
                {error && (
                    <p className="px-6 py-4 text-red-500">Error: {error}</p>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
                    {characters.map((char) => (
                        <Link
                            key={char.id}
                            to={`/characters/${char.id}/${slugify(char.name, {
                                lower: true,
                                strict: true,
                            })}`}
                            className="bg-white border-[3px] border-zinc-900 rounded-2xl shadow-[4px_4px_0px_#000]
                       hover:bg-zinc-50 transition-all flex flex-col overflow-hidden h-full"
                        >
                            {/* Image */}
                            <div className="w-full aspect-square overflow-hidden border-b-[3px] border-zinc-900">
                                <img
                                    src={char.image}
                                    alt={char.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex items-center justify-center p-3">
                                <p className="text-center font-bold text-sm text-zinc-900 line-clamp-2">
                                    {char.name}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>{" "}
            </section>
        </main>
    );
}
