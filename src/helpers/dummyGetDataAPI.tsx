//DO NOT MODIFY
import names from './dummyDatabase';

export const getDummyData = () => {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(function () {
      if (Date.now() % 5 === 0) {
        reject(new Error('Error - Unable to fetch dummy data'));
      }

      resolve(names);
    }, Math.floor(Math.random() * 2000));
  });
};
