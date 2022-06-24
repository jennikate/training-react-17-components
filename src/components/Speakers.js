import { useState } from 'react';
import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';

const Speakers = ({ data, theme, setTheme }) => {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      {/* then pass the theme setter to the child and use it there */}
      <SpeakersToolbar 
        theme={theme} 
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList
        data={data}
        showSessions={showSessions}
      />
    </>
  );
}

export default Speakers;
