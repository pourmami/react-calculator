export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-end mb-3">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-3 py-1 rounded-full text-sm font-semibold shadow 
          ${
            darkMode
              ? "bg-yellow-200 text-black"
              : "bg-gray-600 text-white"
          }`}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}