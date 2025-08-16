import Button from "./Button";

export default function ButtonGrid({ buttons, onClick, darkMode }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          label={btn}
          onClick={onClick}
          darkMode={darkMode}
          span={idx == buttons.length - 1 ? 4 : 1}
        />
      ))}
    </div>
  );
}