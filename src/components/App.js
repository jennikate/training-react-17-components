import { useState } from 'react';
import { data } from '../../SpeakerData';
import Header from './Header';
import Speakers from './Speakers';

const App = () => {
  // we can define the theme and theme setter in the parent
  const [theme, setTheme] = useState("light");
  return (
    <div className={
      theme === "light" ? "container-fluid light" : "container-fluid dark"
    }>
      <Header theme={theme} />
      <Speakers
        data={data}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
