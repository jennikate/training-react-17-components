import { useState } from 'react';
import SpeakersList from './SpeakersList';
import SpeakersToolbar from './SpeakersToolbar';

const Speakers = () => {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      {/* then pass the theme setter to the child and use it there */}
      <SpeakersToolbar 
        // no longer need to pass theme and setTheme down through this component
        // theme={theme} 
        // setTheme={setTheme}
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
