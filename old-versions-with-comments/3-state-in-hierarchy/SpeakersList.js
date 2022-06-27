import { useState } from 'react';
import { data } from '../../SpeakerData';
import Speaker from "./Speaker";

const SpeakersList = ({ showSessions }) => {
  const [speakersData, setSpeakersData] = useState(data);

  // PROPS GO DOWN
  // STATE GOES UP

  const onFavoriteToggle = (id) => {
    // find the record we want to update
    const speakerRecPrevious = speakersData.find((rec) => {
      return rec.id === id;
    });
    // replace the favorite with the opposite of its current boolean state
    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite
    };
    // map over our array and make a new array with the updated record
    const speakersDataNew = speakersData.map((rec) => {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    // set new array to state
    setSpeakersData(speakersDataNew);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id)
              }}
            />)
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
