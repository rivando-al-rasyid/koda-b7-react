export default function Footer() {
    return (
        <footer className="w-full bg-zinc-900 border-t-4 border-zinc-900 px-6 py-4 flex items-center justify-center gap-1">
            <span className="text-zinc-400 font-bold text-sm uppercase tracking-widest">
                &copy; {new Date().getFullYear()}
            </span>
            <span className="text-amber-400 font-black text-sm uppercase tracking-widest">
                Vando
            </span>
            <span className="text-zinc-400 font-bold text-sm uppercase tracking-widest">
                . All rights reserved.
            </span>
        </footer>
    );
}
