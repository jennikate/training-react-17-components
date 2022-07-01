import { useContext } from 'react';
import ReactPlaceholder from 'react-placeholder';
import useRequestRest, { REQUEST_STATUS } from '../hooks/useRequestRest';
import Speaker from "./Speaker";
import { data } from '../../SpeakerData';
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';
import SpeakerAdd from './SpeakerAdd';

const SpeakersList = () => {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILRURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    )
  }
  
  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        row={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
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
                  updateRecord={updateRecord}
                  insertRecord={insertRecord}
                  deleteRecord={deleteRecord}
                />)
            })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
