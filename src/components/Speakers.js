import { useState } from 'react';
import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';

const Speakers = ({ theme, setTheme }) => {
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
        showSessions={showSessions}
      />
    </>
  );
}

export default Speakers;
