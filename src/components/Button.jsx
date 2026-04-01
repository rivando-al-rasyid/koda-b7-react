export default function Button(name, onClick) {
  return (
    <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition duration-200 shadow-md active:scale-95" type="button" onClick={onClick}>
      {name}
    </button>
  )
}
