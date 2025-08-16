export default function Button({ label, onClick, darkMode, span=1 }) {
  const baseStyle = "p-4 rounded-lg text-lg font-bold shadow-sm transition-colors duration-200";

  const colorStyle =
    label === "="
      ? "bg-blue-400 text-white hover:bg-blue-600"
      : label === "C"
      ? "bg-red-400 text-white hover:bg-red-600"
      : label === "⌫"
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : darkMode
      ? "bg-gray-600 hover:bg-gray-500"
      : "bg-gray-100 hover:bg-gray-200";

  return (
    <button onClick={() => onClick(label)} className={`${baseStyle} ${colorStyle}`} style={{gridColumn: `span ${span} / span 3`}}>
      {label}
    </button>
  );
}