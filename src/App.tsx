import React from 'react';
import { getDummyData } from './helpers/dummyGetDataAPI';

// https://media.giphy.com/media/IxaiATywlvNlzjU8Ta/giphy.gif

//CONSTRAINTS:
// 1.) Use React Hooks only. No Class based components.

//GOALS:
// 1.) Fetch data using the mock API request, getDummyData().
// ---- the getDummyData function is already imported on line 2.
// ---- getDummyData returns a promise.
// ---- getDummyData will return an error 20% of the time and successfully return an array of strings 80% of the time.
// ---- getDummyData response time is random so you will need to handle it async
// ---- Be sure to inform the user when there is an error in fetching the data
// 2.) Create an input field with auto complete functionality based on fetched names.
// ---- Typing 'a' or 'A' should show filtered name options such as 'Andrew', 'Andy', 'Angelica'.
// ---- Typing 'bob' or 'Bob' should show filtered name options such as 'Bob', and 'Bobby'.
// 3.) EXTRA - IF TIME ALLOWS: Create a button to add a new name to your list of names in App.tsx. This should NOT mutate the array of names in dummyDataBase.tsx, only the state in your component.
// 4.) EXTRA - IF TIME ALLOWS: Add a button next to each name to delete your list of names in App.tsx. This should NOT mutate the array of names in dummyDataBase.tsx, only the state in your component.

const App = () => {
  return <div></div>;
};

export default App;
