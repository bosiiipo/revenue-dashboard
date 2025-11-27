import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const MultiSelectDropdown = ({
  label,
  placeholder,
  options,
  selected,
  setSelected,
}) => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


  const toggleSelect = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="mb-6" ref={dropdownRef}>
      <label className="block text-sm font-semibold text-gray-900 mb-3">
        {label}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full text-left px-4 py-3 bg-white border rounded-xl text-sm text-gray-900 flex justify-between items-center shadow-sm"
        >
          <span className="truncate">
            {selected.length > 0 ? selected.join(", ") : placeholder}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {open && (
          <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg border p-4 space-y-4 z-20">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 text-gray-900 text-sm"
              >
                <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => toggleSelect(option)}
                    className="w-4 h-4 accent-black"
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
