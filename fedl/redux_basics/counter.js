import * as Redux from "redux";
import { assertion, test } from "../../jads/src/util";

function writeCounterWithRedux() {
  // Now you've learned all the core principles of Redux! You've seen how to 
  // create actions and action creators, create a Redux store, dispatch your 
  // actions against the store, and design state updates with pure reducers. 
  // You've even seen how to manage complex state with reducer composition and 
  // handle asynchronous actions. These examples are simplistic, but these 
  // concepts are the core principles of Redux. If you understand them well, 
  // you're ready to start building your own Redux app. The next challenges 
  // cover some of the details regarding state immutability, but first, here's 
  // a review of everything you've learned so far.
  // ---
  // In this lesson, you'll implement a simple counter with Redux from scratch. 
  // The basics are provided in the code editor, but you'll have to fill in 
  // the details! Use the names that are provided and define incAction and 
  // decAction action creators, the counterReducer(), INCREMENT and DECREMENT 
  // action types, and finally the Redux store. Once you're finished you should 
  // be able to dispatch INCREMENT or DECREMENT actions to increment or 
  // decrement the state held in the store. Good luck building your first Redux 
  // app!

  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";

  // Define the counter reducer which will increment or decrement the state based on the action it receives
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case DECREMENT:
        return state - 1;
      case INCREMENT:
        return state + 1;
      default:
        return state;
    }
  }

  // Define an action creator for incrementing
  const incAction = () => {
    return {
      type: INCREMENT
    }
  };

  // Define an action creator for decrementing
  const decAction = () => {
    return {
      type: DECREMENT
    }
  };

  // Define the Redux store here, passing in your reducers
  const store = Redux.createStore(counterReducer);

  return {
    incAction,
    INCREMENT,
    decAction,
    DECREMENT,
    counterReducer,
    store,
  };
}

export const CH_13 = "challenge_13";

export function challenge13() {
  const result = writeCounterWithRedux();

  const dispatchInc = () => {
    result.store.dispatch(result.incAction());
    return result.store.getState();
  }

  const dispatchDec = () => {
    result.store.dispatch(result.decAction());
    return result.store.getState();
  }

  const tests = [
    // The action creator incAction should return an action object with type 
    // equal to the value of INCREMENT
    assertion(typeof result.incAction(), "object"),
    assertion(result.incAction().hasOwnProperty("type"), true),
    assertion(result.incAction().type, result.INCREMENT),

    // The action creator decAction should return an action object with type 
    // equal to the value of DECREMENT
    assertion(typeof result.decAction(), "object"),
    assertion(result.decAction().hasOwnProperty("type"), true),
    assertion(result.decAction().type, result.DECREMENT),

    // The Redux store should initialize with a state of 0.
    assertion(result.store.getState(), 0),

    // Dispatching incAction on the Redux store should increment the state by 1.
    assertion(dispatchInc(), 1),

    // Dispatching decAction on the Redux store should decrement the state by 1.
    assertion(dispatchDec(), 0),

    // counterReducer should be a function
    assertion(typeof result.counterReducer, "function"),
  ];
  test(tests);
}
