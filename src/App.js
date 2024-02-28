import React, { createContext, useReducer } from 'react';
import './App.css';
import PostForm from './ components/PostForm';
import HookCounter from './ components/HookCounter';
import HookCounterFour from './ components/HookCounterFour';
import ComponentA from './ components/ComponentA';
import ComponentB from './ components/ComponentB';
import ComponentC from './ components/ComponentC';
import DataFetchingOne from './ components/DataFetchingOne';
import FocusInput from './ components/FocusInput'
import HookTimer from './ components/HookTimer';
import ClassTimer from './ components/ClassTimer';

export const CountContext = React.createContext()

// const initialValue = 0;
// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment' : 
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialValue;
//         default:
//             return state;    
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <ClassTimer />
      <HookTimer />
    </div>
  );
}

export default App;
