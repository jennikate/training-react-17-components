import { useContext } from 'react';
import ReactPlaceholder from 'react-placeholder';
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay';
import Speaker from "./Speaker";
import { data } from '../../SpeakerData';
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';

const SpeakersList = () => {
  // refactor out to a custom hook 
  // Building your own Hooks lets you extract component logic into reusable functions.
  // to make code cleaner and easier to read
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000, data)

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  // by doing this we've made our SpeakersList comonent
  // once more focused on rendering itself
  // and all the work of getting the data to render has 
  // been delegated to our new custom hook

  if (requestStatus === REQUEST_STATUS.FAILRURE) {
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
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakersData
            .filter((speaker) => {
              // return only speakers who match the search query
              return (
                speaker.first.toLowerCase().includes(searchQuery)
                || speaker.last.toLowerCase().includes(searchQuery)
              );
            })
            .filter((speaker) => {
              // of the speakers who match the search query
              // return only those who have sessions in selected year
              return speaker.sessions.find((session) => {
                return session.eventYear === eventYear;
              });
            })
            .map((speaker) => {
              return (
                <Speaker
                  key={speaker.id}
                  speaker={speaker}
                  onFavoriteToggle={(doneCallback) => { // this is where we declar what onFavoriteToggle does
                    updateRecord({ // it will update the record 
                      ...speaker,
                      favorite: !speaker.favorite,
                    }, doneCallback); // and then it will run the doneCallback function that we've passed down to it here
                  }}
                />)
            })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
