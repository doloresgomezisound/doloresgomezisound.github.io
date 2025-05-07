"use client"

import { createContext, useState, useContext, useEffect } from "react"

// Create the context
const ThemeContext = createContext()

// Create a provider component
export function ThemeProvider({ children }) {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState("dark")

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      console.log("Saved theme:", savedTheme)
      setTheme(savedTheme)
      // Apply theme to document
      document.documentElement.classList.toggle("dark-theme", savedTheme === "dark")
    } else {
      // Default to dark theme if no theme is saved
      setTheme("dark")
      // Apply default theme to document
      document.documentElement.classList.add("dark-theme")
    }
  }, [])

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    // Save to localStorage
    localStorage.setItem("theme", newTheme)

    // Apply theme to document
    document.documentElement.classList.toggle("dark-theme", newTheme === "dark")
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

// Create a custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
