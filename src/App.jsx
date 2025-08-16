import { useState } from "react";
import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "⌫") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      // Prevent leading zero
      if (value === "0" && input === "") return;

      const lastChar = input.slice(-1);
      if (
        value === "0" &&
        ["+", "-", "*", "/"].includes(lastChar) &&
        lastChar !== "."
      ) {
        setInput(input + value);
        return;
      }

      setInput(input + value);
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } h-screen flex items-center justify-center transition-colors duration-300`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        } rounded-2xl shadow-lg p-5 w-80 transition-colors duration-300`}
      >
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Display value={input} darkMode={darkMode} onBackspace={handleBackspace} />
        <ButtonGrid buttons={buttons} onClick={handleClick} darkMode={darkMode} />
      </div>
    </div>
  );
}
