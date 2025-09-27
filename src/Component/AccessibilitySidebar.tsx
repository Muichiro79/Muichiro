import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Sun, Moon, Accessibility, Text } from "lucide-react";

export default function AccessibilitySidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState("base");
  const [isExpanded, setIsExpanded] = useState(false);

  // Step 3: Listen for system dark mode preference changes.
  useEffect(() => {
    const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");

    // Use stored theme if available, otherwise fallback to system preference
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      setDarkMode(systemDarkMode);
    }
  }, []);

  // Step 4: Apply theme changes on darkMode state change
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`fixed right-4 top-1/4 bg-gray-800 text-white p-3 rounded-2xl shadow-lg flex flex-col gap-3 z-50 transition-all duration-300 ease-in-out ${isExpanded ? "w-48" : "w-14"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Button 
        onClick={() => setDarkMode(!darkMode)} 
        variant="contained" 
        color="primary" 
        sx={{ width: "100%", height: "40px", minWidth: "30px", padding: "4px" }}
      >
        {darkMode ? <Sun size={12} /> : <Moon size={12} />} {isExpanded && "Theme"}
      </Button>

      <Button 
        onClick={() => setHighContrast(!highContrast)} 
        variant="contained" 
        color="primary" 
        sx={{ width: "100%", height: "40px", minWidth: "30px", padding: "4px" }}
      >
        <Accessibility size={12} /> {isExpanded && (highContrast ? "Normal Mode" : "High Contrast")}
      </Button>

      <Button 
        onClick={() => setFontSize(fontSize === "base" ? "large" : "base")} 
        variant="contained" 
        color="primary" 
        sx={{ width: "100%", height: "40px", minWidth: "30px", padding: "4px" }}
      >
        <Text size={12} /> {isExpanded && (fontSize === "base" ? "Increase Text" : "Decrease Text")}
      </Button>
    </div>
  );
}
