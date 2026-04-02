import { useState } from "react";

export default function Pokemon({ pokemons = [] }) {
    const [query, setQuery] = useState("");

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <section className="bg-white border-2 border-zinc-900 rounded-2xl shadow-[4px_4px_0px_#18181b] overflow-hidden">
            {/* Header Bar */}
            <div className="px-4 py-3 border-b-[3px] border-zinc-900 bg-zinc-900 flex items-center gap-3">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <path
                        d="M2.15 15.5C2.6 8.5 8.5 2.6 15.5 2.15V15.5H2.15ZM29.85 15.5C29.4 8.5 23.5 2.6 16.5 2.15V15.5H29.85Z"
                        fill="#ef4444"
                    />
                    <circle
                        cx="16"
                        cy="16"
                        r="4"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <circle cx="16" cy="16" r="1.5" fill="black" />
                </svg>
                <h2 className="text-xl font-black tracking-widest text-white uppercase italic">
                    Counter
                </h2>
            </div>

            {/* Content Area */}
            <div className="p-6">
                <h1 className="text-4xl font-black mb-6 text-zinc-900">
                    Pokemon
                </h1>

                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search Pokemon..."
                        className="w-full border-[3px] border-zinc-900 rounded-xl px-4 py-3 text-lg font-bold text-zinc-800 placeholder-zinc-300 focus:outline-none shadow-[4px_4px_0px_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                {filteredPokemons.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                        <span className="text-6xl mb-4">🔍</span>
                        <p className="text-xl font-bold">No Pokemon found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {filteredPokemons.map((pokemon, index) => {
                            // Extracting ID for higher quality images if available
                            const pokemonId = pokemon.url
                                .split("/")
                                .slice(-2, -1)[0];
                            return (
                                <div
                                    key={index}
                                    className="bg-white border-[3px] border-zinc-900 rounded-2xl p-3 shadow-[4px_4px_0px_#000] flex flex-col items-center justify-between hover:bg-zinc-50 transition-colors"
                                >
                                    <div className="h-20 flex items-center justify-center">
                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                                            alt={pokemon.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h2 className="text-sm md:text-base font-black capitalize text-center mt-2 leading-tight">
                                        {pokemon.name}
                                    </h2>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
