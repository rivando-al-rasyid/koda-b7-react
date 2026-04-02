import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
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

    return <PokemonCard pokemons={pokemons} />;
}
