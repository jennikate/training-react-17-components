import { useState } from 'react';
import { data } from '../../SpeakerData';
import Header from './Header';
import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';

const Speakers = () => {
  // we can define the theme and theme setter in the parent
  const [theme, setTheme] = useState("light");
  return (
    <div className={
      theme === "light" ? "container-fluid light" : "container-fluid dark"
    }>
      <Header theme={theme}/>
      {/* then pass the theme setter to the child and use it there */}
      <SpeakersToolbar theme={theme} setTheme={setTheme} />
      <SpeakersList data={data} />
    </div>
  );
}

export default Speakers;
