import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext'

function Layout({ startingTheme, children }) {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  )
}

// first Layout gets the ThemeProvider
// then LayoutNoThemeProvider can use the theme from it
function LayoutNoThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext)

  return (
      <div className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }>
        {/* children is a js feature that lets us return
        all the children components of whatever our Layout
        component wraps around
        In our example we are wrapping Layout around Header and Speaker
        in the App components, so that is what will get returned here */}
        {children}
      </div>
  );
}

export default Layout;