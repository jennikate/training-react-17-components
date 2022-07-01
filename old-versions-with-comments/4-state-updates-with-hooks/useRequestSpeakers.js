import { useState, useEffect } from 'react';
import { data } from '../../SpeakerData';

// this custom hook is focused on retreiving data
// next step is we're going to generalise it as currently it
// is hardcoded to work for speaker data
// and we start with renaming it to useRequestDelay

// exporting this allows us to use this anywhere we use our
// custom hook
export const REQUEST_STATUS = {
  LOADING: 'loading', 
  SUCCESS: 'success',
  FAILRURE: 'failure',
}

const userRequestSpeakers = (delayTime = 1000) => {
  const [error, setError] = useState('');
  // using hasErrored and isLoading means we must
  // remember to set is loading to false when we have errors
  // otherwise a user could get stuck seeing the loading screen
  // and never see the errors. There is another way!
  // const [hasErrored, setHasErrored] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // As isLoading and hasErrors and success are exclusive states
  // we can make a request_status state to set it to one of the three
  // and remove the ambiguity
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
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
    async function delayFunc() {
      try {
        await delay(delayTime)
        //throw 'Had Error.'
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSpeakersData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILTURE);
        setError(e)
      }
    }
    delayFunc();
  }, []);

    return {
      speakersData, requestStatus, error, onFavoriteToggle
    }

};

export default userRequestSpeakers;
