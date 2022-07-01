import React, { useContext, memo, useState } from 'react';
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';
import { SpeakerProvider, SpeakerContext } from '../contexts/SpeakerContext';
import SpeakerDelete from './SpeakerDelete';

const Session = ({ title, room }) => {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  )
}

const Sessions = () => {
  const { eventYear } = useContext(SpeakerFilterContext);
  const { speaker } = useContext(SpeakerContext);
  const sessions = speaker.sessions;
  return (
    <div className="sessionBox card h-250">
      {
        sessions.filter((session) => {
          return session.eventYear === eventYear;
        })
          .map((session) => {
            return (
              <div className="session w-100" key={session.id}>
                <Session {...session} />
              </div>
            )
          })
      }
    </div>
  )
}

function ImageWithFallback({ src, ...props }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  function onError() {
    if (!error) {
      setImgSrc("/images/speaker-99999.jpg");
      setError(true);
    }
  }

  return <img src={imgSrc} {...props} onError={onError} />
}

const SpeakerImage = () => {
  const { speaker: { id, first, last } } = useContext(SpeakerContext);
  return (
    <div className="speak-img d-flex flex-row justify-content-center align-items-center h-300">
      <ImageWithFallback
        className="contain-fit h-300"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  )
}

function SpeakerFavorite() {
  const { speaker, updateRecord } = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);
  // A callback is a function passed as an argument to another function. 
  // This technique allows a function to call another function. 
  // A callback function can run after another function has finished.

  // create a function to run after the onFavoriteToggle function completes
  // we can use this to then trigger actions like 'stop loading spinner'
  function doneCallback() {
    setInTransition(false);
    console.log(`In SpeakerFavorite:doneCallback ${new Date().getMilliseconds()}`);
  }

  return (
    <div className="action padB1">
      <span
        onClick={function () {
          setInTransition(true);
          updateRecord({
            ...speaker,
            favorite: !speaker.favorite,
          },
            doneCallback
          )
        }}
      >
        <i className={speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"} />
        {" "}
        Favorite
        {" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  )
}

function SpeakerDemographics() {
  const { speaker } = useContext(SpeakerContext);
  const { first, last, bio, company, twitterHandle, favorite } = speaker;
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite />
      <div>
        <p className="card-description">
          {bio}
        </p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

// this function now knows to only rerender when the props have changed
// we then pass a second param to memo to tell it whether the props we care about have changed
// it's important here to stop the over re-renders as just say we have 1000 speakers
// this could slow the app down significantly as it rerenders everything
// we don't always want to stop the over re-renders though as it's not always going to offer a performance gain
// e.g we see in profiler that even after doing this the speaker image always re-renders when favourite state is changed
// the image doesn't change so we don't need to re-render it
// we could memoize the speaker image component, but it's not worth it as it's just one
// child that is rerendered (if the image was very large and slow to load, maybe we WOULD want to memoize it)
const Speaker = memo(function Speaker({
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
}) {
  const { showSessions } = useContext(SpeakerFilterContext);
  console.log(`speaker: ${speaker.id} ${speaker.first} ${speaker.last}`);
  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />
          <SpeakerDemographics />
        </div>
        {showSessions === true ? <Sessions /> : null}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
},
areEqualSpeaker);

// the only props we expect to change is the favorite
// as the updateRecord, insert, and delete are static functions
function areEqualSpeaker(prevProps, nextProps) {
  return prevProps.speaker.favorite === nextProps.speaker.favorite;
}

export default Speaker;