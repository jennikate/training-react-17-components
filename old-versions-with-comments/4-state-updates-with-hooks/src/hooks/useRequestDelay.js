import { useState, useEffect } from 'react';

export const REQUEST_STATUS = {
  LOADING: 'loading', 
  SUCCESS: 'success',
  FAILRURE: 'failure',
}

const useRequestDelay = (delayTime = 1000, initialData=[]) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime)
        //throw 'Had Error.'
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(initialData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILTURE);
        setError(e)
      }
    }
    delayFunc();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    const newRecords = data.map((rec) => {
      return rec.id === recordUpdated.id ? recordUpdated : rec
    });

    async function delayFunction() {
      try {
        await delay(delayTime);
        if (doneCallback) { // when doneCallback is triggered, then we run the function that has been passed down to this component
          doneCallback();
        }
        setData(newRecords)
      } catch (error) {
        console.log("error thrown inside delayFunction:", error);
      }
    }
    delayFunction();
  }

    return {
      data,
      requestStatus,
      error,
      updateRecord,
    }

};

export default useRequestDelay;
