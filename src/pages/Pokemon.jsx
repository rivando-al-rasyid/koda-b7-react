import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import Footer from "../layout/Footer";
import useFetch from "../utils/useFetch";

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([]);
    const { data, loading, error } = useFetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151",
    );
    useEffect(() => {
        (async () => {
            try {
                const detailedPromises = data.results.map((pokemon) =>
                    fetch(pokemon.url).then((res) => res.json()),
                );
                const detailedPokemons = await Promise.all(detailedPromises);
                setPokemons(detailedPokemons);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        })();
    }, [data]);

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                {error && (
                    <p className="px-6 py-4 text-red-500">Error: {error}</p>
                )}
                {loading ? (
                    <p className="px-6 py-4 text-zinc-500">Loading...</p>
                ) : (
                    <PokemonCard pokemons={pokemons} />
                )}
            </section>
            <Footer />
        </main>
    );
}
