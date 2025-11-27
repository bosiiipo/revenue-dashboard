import React from "react";
import ChevronDown from "../../assets/chevron-down.svg?react";

const DateInput = ({ value, onChange, startDate, endDate, setStartDate, setEndDate, setSelectedPeriod, type }) => {
  const handleChange = (e) => {
    const newDate = e.target.value;
    setSelectedPeriod(null); 

    if (type === "start") {
      setStartDate(newDate);
      if (new Date(newDate) > new Date(endDate)) {
        setEndDate(newDate); 
      }
    } else if (type === "end") {
      if (new Date(newDate) < new Date(startDate)) return; 
      setEndDate(newDate);
    }
  };

  return (
    <div className="flex-1 relative">
      <input
        type="date"
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-[#EFF1F6] rounded-xl text-sm text-gray-900 
                  focus:outline-none focus:ring-2 focus:ring-gray-900 pr-10"
      />
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
      />
    </div>
  );
};

export default DateInput;
