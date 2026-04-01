export default function Button({ color, name, onClick }) {
  return (
    <button
      className={`px-6 py-2.5 ${color} font-black uppercase tracking-widest text-sm rounded-xl active:scale-95 active:shadow-none transition-all duration-150`}
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  )
}
