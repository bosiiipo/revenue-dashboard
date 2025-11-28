import { useState, useRef, useEffect } from "react";
import { useUser } from "../../lib/hooks/api/useUser";

const ProfileCard = () => {
  const { data: user } = useUser();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile button */}
      <div
        className="flex items-center gap-3 bg-[#F1F3F6] px-2 py-1 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center 
                        text-white text-sm font-semibold
                        bg-gradient-to-b from-gray-700 to-gray-900">
          {user?.first_name?.[0]}
          {user?.last_name?.[0]}
        </div>

        <div className="flex flex-col">
          <div className="w-7 h-[3px] bg-gray-500 rounded-full mb-1"></div>
          <div className="w-7 h-[3px] bg-gray-500 rounded-full mb-1"></div>
          <div className="w-7 h-[3px] bg-gray-500 rounded-full"></div>
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-2xl p-4 z-50 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold">
              {user?.first_name?.[0]}
              {user?.last_name?.[0]}
            </div>
            <div>
              <p className="font-semibold text-left">{user?.first_name} {user?.last_name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-3">
            <DropdownItem label="Settings" />
            <DropdownItem label="Purchase History" />
            <DropdownItem label="Refer and Earn" />
            <DropdownItem label="Integrations" />
            <DropdownItem label="Report Bug" />
            <DropdownItem label="Switch Account" />
          </div>

          <button className="mt-4 w-full text-left text-red-500 font-semibold hover:bg-gray-100 px-2 py-2 rounded-lg">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ label }) => (
  <button className="w-full text-left text-gray-700 font-medium hover:bg-gray-100 px-2 py-2 rounded-lg">
    {label}
  </button>
);

export default ProfileCard;
