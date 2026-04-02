import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import Footer from "../layout/Footer";

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "https://pokeapi.co/api/v2/pokemon?limit=151",
                );
                const data = await response.json();

                const detailedPromises = data.results.map((pokemon) =>
                    fetch(pokemon.url).then((res) => res.json()),
                );
                const detailedPokemons = await Promise.all(detailedPromises);
                setPokemons(detailedPokemons);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        })();
    }, []);

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <PokemonCard pokemons={pokemons} />
            </section>
            <Footer />
        </main>
    );
}
