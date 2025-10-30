
import React from "react";
import { SunIcon, MoonIcon } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="relative w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center transition-all duration-300"
    >
      <div
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-all duration-300 ${
          darkMode ? "translate-x-8" : ""
        }`}
      />
      <div className="absolute left-2 text-yellow-500">
        <SunIcon size={16} />
      </div>
      <div className="absolute right-2 text-blue-400">
        <MoonIcon size={16} />
      </div>
    </button>
  );
};

export default DarkModeToggle;
