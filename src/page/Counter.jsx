import { useState } from "react";
import Button from "../components/Button";
import Footer from "../layout/Footer";
export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <main className="mx-auto max-w-4xl flex flex-col gap-6 min-h-screen px-4 py-12">
            <section className="bg-white border-4 border-zinc-900 rounded-2xl overflow-hidden">
                {/* Section Header */}
                <div className="px-6 py-4 border-b-4 border-zinc-900 bg-zinc-900">
                    <h2 className="text-xl font-black tracking-tight text-white uppercase">
                        🔢 Counter
                    </h2>
                </div>
                <div className="p-10 flex flex-col items-center">
                    <div className="bg-amber-400 border-2 border-zinc-900 rounded-2xl px-12 py-8 shadow-[6px_6px_0px_#18181b] mb-10">
                        <span className="text-7xl font-black text-zinc-900 tabular-nums">
                            {count}
                        </span>
                    </div>
                    <div className="flex gap-4 w-full">
                        <Button
                            color="flex-1 py-4 bg-white border-2 border-zinc-900 text-zinc-900 font-bold hover:translate-y-[-2px] active:translate-y-[2px] transition-transform shadow-[4px_4px_0px_#18181b]"
                            name="− Kurang"
                            event={decrement}
                        />
                        <Button
                            color="flex-1 py-4 bg-amber-400 border-2 border-zinc-900 text-zinc-900 font-bold hover:translate-y-[-2px] active:translate-y-[2px] transition-transform shadow-[4px_4px_0px_#18181b]"
                            name="+ Tambah"
                            event={increment}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
