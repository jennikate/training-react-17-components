import { useEffect, useState } from 'react';
import ReactPlaceholder from 'react-placeholder';
import { data } from '../../SpeakerData';
import Speaker from "./Speaker";

const SpeakersList = ({ showSessions }) => {
  const [error, setError] = useState('');
  const [hasErrored, setHasErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [speakersData, setSpeakersData] = useState([]);


  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onFavoriteToggle = (id) => {
    const speakerRecPrevious = speakersData.find((rec) => {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite
    };
    const speakersDataNew = speakersData.map((rec) => {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  }

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(2000); // force a delay 
        //throw "Had Error."
        setIsLoading(false);
        setSpeakersData(data);
      } catch (e) {
        setIsLoading(false);
        setHasErrored(true);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  if (hasErrored === true) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    )
  }
  //replace this isLoading check with react-placeholder which loads a placeholder for anything that's
  // in an isLoading true state
  // react-placeholder just provides a nice looking bit of HTML
  // based on params you give it
  // for GDS we general use a loading spinner instead
  //if (isLoading === true) return <div>Loading ...</div>

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        row={15}
        className="speakerslist-placeholder"
        ready={isLoading === false}
      >
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
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
