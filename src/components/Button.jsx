export default function Button({ color, name, onClick }) {

  return (
    <button className={`px-6 py-2 ${color} font-semibold rounded-lg transition duration-200 shadow-md active:scale-95`} type="button" onClick={onClick}>
      {name}
    </button>
  )
}
