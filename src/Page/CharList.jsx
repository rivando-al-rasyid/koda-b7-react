import { useState, useEffect } from "react";

export default function CharList() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "https://rickandmortyapi.com/api/character",
                );
                const data = await response.json();
                setCharacter(data.results);
            } catch (error) {
                console.error("Error fetching character data:", error);
            }
        })();
    }, []);

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        📦 Product Manager
                    </h2>
                </div>
                {character.map((char) => (
                    <div key={char.id}>
                        <h2>{char.name}</h2>
                        <img src={char.image} alt={char.name} />
                    </div>
                ))}
            </section>
        </main>
    );
}
