import Pokemon from "./components/PokemonCard";

function App() {
    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            {/* Pokemon */}
            <Pokemon pokemons={pokemons} />
        </main>
    );
}

export default App;
