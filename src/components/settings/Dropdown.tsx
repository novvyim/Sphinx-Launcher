"use client";

import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function Dropdown({ value, options, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={open ? "dropdown open" : "dropdown"} ref={rootRef}>
      <button className="dropdown-trigger" onClick={() => setOpen(!open)}>
        <span>{value}</span>
        <i className="fas fa-chevron-down"></i>
      </button>
      {open && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <button
              key={option}
              className={option === value ? "dropdown-option active" : "dropdown-option"}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
