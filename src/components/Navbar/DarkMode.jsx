import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkMode = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme ? storedTheme : "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark"); // Corrected removal
    }
  }, [theme]); // ✅ Added dependency array to re-run when theme changes

  return (
    <div className="cursor-pointer">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme("light")}
          className="text-white"
          size={25}
        />
      ) : (
        <FaMoon
          onClick={() => setTheme("dark")}
          className="text-white"
          size={25}
        />
      )}
    </div>
  );
};

export default DarkMode;
