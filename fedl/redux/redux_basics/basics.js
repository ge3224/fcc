import { assertion, checkResults } from "../../../jads/src/util";
import * as Redux from "redux";


function createReduxStore() {
  // Redux is a state management framework that can be used with a number of 
  // different web technologies, including React.
  //
  // In Redux, there is a single state object that's responsible for the entire 
  // state of your application. This means if you had a React app with ten 
  // components, and each component had its own local state, the entire state of 
  // your app would be defined by a single state object housed in the Redux store. 
  // This is the first important principle to understand when learning Redux: the 
  // Redux store is the single source of truth when it comes to application state.
  //
  // This also means that any time any piece of your app wants to update state, 
  // it must do so through the Redux store. The unidirectional data flow makes it 
  // easier to track state management in your app.
  // ---
  // The Redux store is an object which holds and manages application state. There
  // is a method called createStore() on the Redux object, which you use to create
  // the Redux store. This method takes a reducer function as a required argument.
  // The reducer function is covered in a later challenge, and is already defined 
  // for you in the code editor. It simply takes state as an argument and 
  // returns state.
  //
  // Declare a store variable and assign it to the createStore() method, passing 
  // in the reducer as an argument.
  //
  // Note: The code in the editor uses ES6 default argument syntax to initialize 
  // this state to hold a value of 5. If you're not familiar with default 
  // arguments, you can refer to the ES6 section in the Curriculum which covers 
  // this topic.
  const reducer = (state = 5) => {
    return state;
  }

  const store = Redux.createStore(reducer);

  return store;
}

// 1. Creete a Redux Store
export const CH_1 = "challenge_1";

// handler for challenge 1
export function challenge1() {
  const store = createReduxStore();
  const tests = [
    assertion(store !== undefined && store !== null, true),
    assertion(store.getState(), 5),
  ];

  runTests(tests);
}

function getStateFromTheReduxStore() {
  //
  // The Redux store object provides several methods that allow you to interact 
  // with it. For example, you can retrieve the current state held in the Redux 
  // store object with the getState() method.
  // ---
  // The code from the previous challenge is re-written more concisely in the 
  // code editor. Use store.getState() to retrieve the state from the store, and 
  // assign this to a new variable currentState.
  const store = Redux.createStore(
    (state = 5) => state
  );

  const currentState = store.getState();

  return currentState;
}

// 2. Get State from the Redux Store
export const CH_2 = "challenge_2";

// Handler for challenge 2
export function challenge2() {
  const state = getStateFromTheReduxStore();

  const tests = [
    assertion(state, 5),
  ];

  runTests(tests);
}

function defineReduxAction() {
  // Since Redux is a state management framework, updating state is one of its 
  // core tasks. In Redux, all state updates are triggered by dispatching actions. 
  // An action is simply a JavaScript object that contains information about an 
  // action event that has occurred. The Redux store receives these action objects, 
  // then updates its state accordingly. Sometimes a Redux action also carries 
  // some data. For example, the action carries a username after a user logs in. 
  // While the data is optional, actions must carry a type property that specifies 
  // the 'type' of action that occurred.
  //
  // Think of Redux actions as messengers that deliver information about events 
  // happening in your app to the Redux store. The store then conducts the 
  // business of updating state based on the action that occurred.
  // ---
  // Writing a Redux action is as simple as declaring an object with a type 
  // property. Declare an object action and give it a property type set to the 
  // string 'LOGIN'.
  const action = {
    type: "LOGIN"
  }

  return action;
}

// 3. Define a Redux Action
export const CH_3 = "challenge_3";

// handler for challenge 3
export function challenge3() {
  const action = defineReduxAction();
  const tests = [
    assertion(action !== undefined && action !== null, true),
    assertion(action.type, "LOGIN"),
  ];

  runTests(tests);
}

function defineActionCreator() {
  //
  // After creating an action, the next step is sending the action to the Redux 
  // store so it can update its state. In Redux, you define action creators to 
  // accomplish this. An action creator is simply a JavaScript function that 
  // returns an action. In other words, action creators create objects that 
  // represent action events.
  // ---
  // Define a function named actionCreator() that returns the action object 
  // when called.
  const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  function actionCreator() {
    return {
      type: "LOGIN"
    }
  }
  return actionCreator;
}

// 4. Define an Action Creator
export const CH_4 = "challenge_4";

// handler for challenge 4
export function challenge4() {
  const func = defineActionCreator();
  const tests = [
    assertion(func !== undefined && func !== null, true),
    assertion(typeof func(), "object"),
    assertion(func().type, "LOGIN"),
  ];

  runTests(tests);
}

function dispatchActionEvent() {
  // `dispatch` method is what you use to dispatch actions to the Redux store. 
  // Calling store.dispatch() and passing the value returned from an action 
  // creator sends an action back to the store.

  // Recall that action creators return an object with a type property that 
  // specifies the action that has occurred. Then the method dispatches an action 
  // object to the Redux store. Based on the previous challenge's example, the 
  // following lines are equivalent, and both dispatch the action of type LOGIN:
  //
  // ```
  // store.dispatch(actionCreator());
  // store.dispatch({ type: 'LOGIN' });
  // ```
  // ---
  // The Redux store in the code editor has an initialized state that's an object 
  // containing a login property currently set to false. There's also an action 
  // creator called loginAction() which returns an action of type LOGIN. Dispatch 
  // the LOGIN action to the Redux store by calling the dispatch method, and pass 
  // in the action created by loginAction().

  const results = {};

  const store = Redux.createStore(
    (state = { login: false }) => state
  );

  const loginAction = () => {
    return {
      type: "LOGIN"
    }
  };

  results.action = loginAction;
  results.initialState = store.getState();

  store.dispatch(loginAction());

  return results;
}

// 5. Dispatch an Action Event 
export const CH_5 = "challenge_5";

//handler for challenge 5
export function challenge5() {
  const five = dispatchActionEvent();
  const tests = [
    assertion(typeof five.action(), "object"),
    assertion(five.initialState.login, false),
  ];

  runTests(tests);
}

function handleActionInStore() {
  // After an action is created and dispatched, the Redux store needs to know 
  // how to respond to that action. This is the job of a reducer function. 
  // Reducers in Redux are responsible for the state modifications that take 
  // place in response to actions. A reducer takes state and action as arguments, 
  // and it always returns a new state. It is important to see that this is the 
  // only role of the reducer. It has no side effects — it never calls an API 
  // endpoint and it never has any hidden surprises. The reducer is simply a 
  // pure function that takes state and action, then returns new state.
  //
  // Another key principle in Redux is that state is read-only. In other words, 
  // the reducer function must always return a new copy of state and never modify 
  // state directly. Redux does not enforce state immutability, however, you are 
  // responsible for enforcing it in the code of your reducer functions. You'll 
  // practice this in later challenges.
  // ---
  // The code editor has the previous example as well as the start of a reducer 
  // function for you. Fill in the body of the reducer function so that if it 
  // receives an action of type 'LOGIN' it returns a state object with login set 
  // to true. Otherwise, it returns the current state. Note that the current state 
  // and the dispatched action are passed to the reducer, so you can access the 
  // action's type directly with action.type.
  const defaultState = {
    login: false
  };

  const reducer = (state = defaultState, action) => {
    if (action.type === "LOGIN") {
      return {
        login: true
      }
    } else {
      return state;
    }
  };

  const store = Redux.createStore(reducer);

  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };

  return {
    defaultState,
    store,
    loginAction,
  };
}

// 6. Handle an Action in the Store
export const CH_6 = "challenge_6";

export function challenge6() {
  const six = handleActionInStore();

  const dispatchTest1 = () => {
    six.store.dispatch({ type: "OTHER" });
    return six.store.getState().login;
  }

  const dispatchTest2 = () => {
    six.store.dispatch(six.loginAction());
    return six.store.getState().login;
  }

  const tests = [
    assertion(typeof six.loginAction(), "object"),
    assertion(six.store.getState().login, false),
    assertion(dispatchTest1(), false),
    assertion(dispatchTest2(), true),
  ];

  runTests(tests);
}

function useSwitchStatementForMultipleActions() {
  // You can tell the Redux store how to handle multiple action types. Say you 
  // are managing user authentication in your Redux store. You want to have a 
  // state representation for when users are logged in and when they are logged 
  // out. You represent this with a single state object with the property 
  // authenticated. You also need action creators that create actions 
  // corresponding to user login and user logout, along with the action objects 
  // themselves.
  // ---
  // The code editor has a store, actions, and action creators set up for you. 
  // Fill in the reducer function to handle multiple authentication actions. 
  // Use a JavaScript switch statement in the reducer to respond to different 
  // action events. This is a standard pattern in writing Redux reducers. The 
  // switch statement should switch over action.type and return the appropriate 
  // authentication state.
  //
  // Note: At this point, don't worry about state immutability, since it is 
  // small and simple in this example. For each action, you can return a new 
  // object — for example, {authenticated: true}. Also, don't forget to write a 
  // default case in your switch statement that returns the current state. This 
  // is important because once your app has multiple reducers, they are all run 
  // any time an action dispatch is made, even when the action isn't related to 
  // that reducer. In such a case, you want to make sure that you return the 
  // current state.
  const results = {};

  const defaultState = {
    authenticated: false
  };

  const authReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "LOGIN":
        return { authenticated: true };
      case "LOGOUT":
        return { authenticated: false };
      default:
        return state;
    }
  };

  const store = Redux.createStore(authReducer);

  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };

  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };

  results.loginUser = loginUser;
  results.logoutUser = logoutUser;
  results.defaultState = defaultState;
  results.store = store;

  return results;
}

// 7. Use a Switch Statement to Handle Multiple Actions
export const CH_7 = "challenge_7";

// handler for challeng 7
export function challenge7() {
  const seven = useSwitchStatementForMultipleActions();

  const dispatchTest1 = () => {
    seven.store.dispatch(seven.loginUser());
    return seven.store.getState().authenticated;
  }

  const dispatchTest2 = () => {
    seven.store.dispatch(seven.logoutUser());
    return seven.store.getState().authenticated;
  }

  const tests = [
    assertion(typeof seven.loginUser(), "object"),
    assertion(typeof seven.logoutUser(), "object"),
    assertion(seven.defaultState.authenticated, false),
    assertion(dispatchTest1(), true),
    assertion(dispatchTest2(), false),
  ];

  runTests(tests);
}

function runTests(tests) {
  checkResults(tests, (left, right) => {
    console.log((left === right) ? "PASS" : `FAIL:\n\t${left}`);
  });
}
