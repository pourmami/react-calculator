export default function Display({ value, darkMode, onBackspace }) {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      } flex items-center justify-between p-3 rounded-lg text-2xl font-mono mb-4 break-all transition-colors duration-300`}
    >
      <span>{value || "0"}</span>
      <button
        onClick={onBackspace}
        className={`ml-2 pl-2 rounded text-sm font-bold transition-colors duration-200 cursor-pointer text-gray-500`}
      >
        ⌫
      </button>
    </div>
  );
}
