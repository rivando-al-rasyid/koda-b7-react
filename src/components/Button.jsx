/**
 * A reusable button component
 * @param {Object} param - The props for the button
 * @param {string} param.color - The CSS classes for the button's color
 * @param {string} param.name - The text to display on the button
 * @param {any} param.event - The function to call when the button is clicked
 */
export default function Button({ color, name, event }) {
    return (
        <button
            className={`px-6 py-2.5 ${color} font-black uppercase tracking-widest text-sm rounded-xl active:scale-95 active:shadow-none transition-all duration-150`}
            type="button"
            onClick={event}
        >
            {name}
        </button>
    );
}
