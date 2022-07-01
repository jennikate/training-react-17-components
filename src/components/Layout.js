import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(); // create the context component

function Layout({ startingTheme, children }) {
  const [theme, setTheme] = useState(startingTheme);

  return (
    <ThemeContext.Provider value={{ setTheme, theme, }}>
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
    </ThemeContext.Provider>
  );
}

export default Layout;