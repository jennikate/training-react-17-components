import { createContext, useState } from 'react';
import Header from './Header';
import Speakers from './Speakers';

export const ThemeContext = createContext(); // create the context component

const App = () => {
  // we can define the theme and theme setter in the parent
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={ //wrap the entire app in the ThemeContext
      {setTheme, theme,} // assign it setTheme and theme
    }>
      <div className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }>
        <Header />
        <Speakers />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
