import React, { createContext } from 'react';
import useSpeakerFilter from '../hooks/useSpeakerFilter'

const SpeakerFilterContext = createContext();

// components wrapped in this context will have access
// to the state value and the state setter
// and therefore can update the state, which in turn is
// passed back into the context and therefore updates in the
// children wrapped in this context

function SpeakerFilterProvider({ children, startingShowSessions = false, startingEventYear="2019" }) {

  const {
    showSessions, setShowSessions,
    eventYear, setEventYear,
    searchQuery, setSearchQuery,
    EVENT_YEARS,
  } = useSpeakerFilter(
    startingShowSessions,
    startingEventYear,
  );
  return (
    <SpeakerFilterContext.Provider value = {{
      showSessions, setShowSessions,
      eventYear, setEventYear,
      searchQuery, setSearchQuery,
      EVENT_YEARS,
    }}>
      {children}
    </SpeakerFilterContext.Provider>
  );
}

export {SpeakerFilterContext, SpeakerFilterProvider};
