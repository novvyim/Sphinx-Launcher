interface ButtonGroupProps {
  options: string[];
  active: string;
  onChange?: (option: string) => void;
}

export default function ButtonGroup({ options, active, onChange }: ButtonGroupProps) {
  const interactive = Boolean(onChange);

  return (
    <div className="btn-group">
      {options.map((option) => (
        <button
          key={option}
          className={option === active ? "btn-opt active" : "btn-opt"}
          disabled={!interactive}
          onClick={onChange ? () => onChange(option) : undefined}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
