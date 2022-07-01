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

  function updateRecord(record, doneCallback) {
    const newRecords = data.map((rec) => {
      return rec.id === record.id ? record : rec
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

  function insertRecord(record, doneCallback) {
    const newRecords = [record, ...data];

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

  function deleteRecord(record, doneCallback) {
    const newRecords = data.filter(function (rec) {
      return rec.id != record.id
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
      insertRecord,
      deleteRecord,
    }

};

export default useRequestDelay;
