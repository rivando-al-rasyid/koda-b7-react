import { useState } from "react";

const typePokemon = {
    normal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/1.png",
    fire: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/10.png",
    water: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/11.png",
    electric: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/13.png",
    grass: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/12.png",
    ice: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/15.png",
    fighting: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/2.png",
    poison: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/4.png",
    ground: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/5.png",
    flying: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/3.png",
    psychic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/14.png",
    bug: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/7.png",
    rock: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/6.png",
    ghost: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/8.png",
    dragon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/16.png",
    dark: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/17.png",
    steel: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/9.png",
    fairy: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/18.png",
    stellar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/20.png",
};

export default function PokemonCard({ pokemons = [] }) {
    const [findPokemon, setFindPokemon] = useState("");

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(findPokemon.toLowerCase()),
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
                    <circle cx="16" cy="16" r="14" fill="white" stroke="black" strokeWidth="2" />
                    <path
                        d="M2.15 15.5C2.6 8.5 8.5 2.6 15.5 2.15V15.5H2.15ZM29.85 15.5C29.4 8.5 23.5 2.6 16.5 2.15V15.5H29.85Z"
                        fill="#ef4444"
                    />
                    <circle cx="16" cy="16" r="4" fill="white" stroke="black" strokeWidth="2" />
                    <circle cx="16" cy="16" r="1.5" fill="black" />
                </svg>
                <h2 className="text-xl font-black tracking-widest text-white uppercase italic">
                    Pokedex Search
                </h2>
            </div>

            <div className="p-6">
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Type to search Pokemon..."
                        className="w-full border-[3px] border-zinc-900 rounded-xl px-4 py-3 text-lg font-bold text-zinc-800 placeholder-zinc-300 focus:outline-none shadow-[4px_4px_0px_#000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                        value={findPokemon}
                        onChange={(e) => setFindPokemon(e.target.value)}
                    />
                </div>

                {findPokemon.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-zinc-400 font-bold italic uppercase tracking-tighter">
                        Enter a name to start searching
                    </div>
                ) : filteredPokemons.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-zinc-400">
                        <span className="text-6xl mb-4">🔍</span>
                        <p className="text-xl font-bold">No Pokemon found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filteredPokemons.map((pokemon) => (
                            <div
                                key={pokemon.id}
                                className="bg-white border-[3px] border-zinc-900 rounded-2xl p-4 shadow-[4px_4px_0px_#000] flex flex-col items-center hover:bg-zinc-50 transition-colors"
                            >
                                <div className="h-24 flex items-center justify-center mb-2">
                                    <img
                                        src={pokemon.sprites?.front_default}
                                        alt={pokemon.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h2 className="text-sm md:text-base font-black capitalize text-center mb-3">
                                    {pokemon.name}
                                </h2>
                                <div className="flex flex-col gap-1.5 w-full items-center">
                                    {pokemon.types.map((typeInfo) => (
                                        <img
                                            key={typeInfo.type.name}
                                            src={typePokemon[typeInfo.type.name]}
                                            alt={typeInfo.type.name}
                                            className="h-5 md:h-6 w-auto object-contain"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
