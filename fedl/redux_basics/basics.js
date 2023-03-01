import { assertion, test } from "../../jads/src/util";
import * as Redux from "redux";
import * as ReduxThunk from "redux-thunk";

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

  test(tests);
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

  test(tests);
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

  test(tests);
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

  test(tests);
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

  test(tests);
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

  test(tests);
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

  test(tests);
}

function userConstForActionTypes() {
  // A common practice when working with Redux is to assign action types as 
  // read-only constants, then reference these constants wherever they are used. 
  // You can refactor the code you're working with to write the action types as 
  // const declarations.
  // ---
  // Declare LOGIN and LOGOUT as const values and assign them to the strings 
  // 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the 
  // action creators to reference these constants instead of string values.
  //
  // Note: It's generally a convention to write constants in all uppercase, and 
  // this is standard practice in Redux as well.
  const LOGIN = "LOGIN";
  const LOGOUT = "LOGOUT";

  const defaultState = {
    authenticated: false
  };

  const authReducer = (state = defaultState, action) => {

    switch (action.type) {
      case LOGIN:
        return {
          authenticated: true
        }
      case LOGOUT:
        return {
          authenticated: false
        }

      default:
        return state;

    }

  };

  const store = Redux.createStore(authReducer);

  const loginUser = () => {
    return {
      type: LOGIN
    }
  };

  const logoutUser = () => {
    return {
      type: LOGOUT
    }
  };

  return {
    loginUser,
    logoutUser,
    defaultState,
    store,
    LOGIN,
    LOGOUT,
  };
}

export const CH_8 = "challenge_8";

export function challenge8() {

  const eight = userConstForActionTypes();
  const dispatchTest1 = () => {
    eight.store.dispatch(eight.loginUser());
    return eight.store.getState().authenticated;
  }

  const dispatchTest2 = () => {
    eight.store.dispatch(eight.logoutUser());
    return eight.store.getState().authenticated;
  }

  const tests = [
    assertion(typeof eight.loginUser(), "object"),
    assertion(typeof eight.logoutUser(), "object"),
    assertion(eight.defaultState.authenticated, false),
    assertion(eight.LOGIN, "LOGIN"),
    assertion(eight.LOGOUT, "LOGOUT"),
    assertion(dispatchTest1(), true),
    assertion(dispatchTest2(), false),
  ];

  test(tests);
}

function registerStoreListener() {
  // Another method you have access to on the Redux store object is 
  // store.subscribe(). This allows you to subscribe listener functions to the 
  // store, which are called whenever an action is dispatched against the store. 
  // One simple use for this method is to subscribe a function to your store 
  // that simply logs a message every time an action is received and the store 
  // is updated.
  // ---
  // Write a callback function that increments the global variable count every 
  // time the store receives an action, and pass this function in to the 
  // store.subscribe() method. You'll see that store.dispatch() is called three 
  // times in a row, each time directly passing in an action object. Watch the 
  // console output between the action dispatches to see the updates take place.
  const ADD = 'ADD';

  const reducer = (state = 0, action) => {
    switch (action.type) {
      case ADD:
        return state + 1;
      default:
        return state;
    }
  };

  const store = Redux.createStore(reducer);

  // Global count variable:
  let count = 0;

  // Change code below this line
  const listener = () => {
    count++;
  }

  store.subscribe(listener);
  // Change code above this line

  return {
    ADD,
    getCount: () => count,
    store,
  };
}

export const CH_9 = "challenge_9";

export function challenge9() {
  const nine = registerStoreListener();

  const dispTest = () => {
    nine.store.dispatch({ type: nine.ADD });
    return nine.getCount();
  }

  const tests = [
    // Dispatching the ADD action on the store should increment the state by 1.
    assertion(dispTest(), 1),

    // Waiting:There should be a listener function subscribed to the store using 
    // store.subscribe.

    // Waiting:The store.subscribe should receive a function.

    // Waiting:The callback to store.subscribe should also increment the global 
    // count variable as the store is updated.
    assertion(dispTest(), 2),
  ];
  test(tests);
}

function combineMultipleReducers() {
  // When the state of your app begins to grow more complex, it may be tempting 
  // to divide state into multiple pieces. Instead, remember the first principle 
  // of Redux: all app state is held in a single state object in the store. 
  // Therefore, Redux provides reducer composition as a solution for a complex 
  // state model. You define multiple reducers to handle different pieces of 
  // your application's state, then compose these reducers together into one 
  // root reducer. The root reducer is then passed into the Redux createStore() 
  // method.
  //
  // In order to let us combine multiple reducers together, Redux provides the 
  // combineReducers() method. This method accepts an object as an argument in 
  // which you define properties which associate keys to specific reducer 
  // functions. The name you give to the keys will be used by Redux as the name 
  // for the associated piece of state.
  //
  // Typically, it is a good practice to create a reducer for each piece of 
  // application state when they are distinct or unique in some way. For example, 
  // in a note-taking app with user authentication, one reducer could handle 
  // authentication while another handles the text and notes that the user is 
  // submitting. For such an application, we might write the combineReducers() 
  // method like this:
  //
  // ```
  // const rootReducer = Redux.combineReducers({
  //   auth: authenticationReducer,
  //   notes: notesReducer
  // });
  // ```
  // Now, the key notes will contain all of the state associated with our notes 
  // and handled by our notesReducer. This is how multiple reducers can be 
  // composed to manage more complex application state. In this example, the 
  // state held in the Redux store would then be a single object containing 
  // auth and notes properties.
  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREMENT';

  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };

  const LOGIN = 'LOGIN';
  const LOGOUT = 'LOGOUT';

  const authReducer = (state = { authenticated: false }, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          authenticated: true
        }
      case LOGOUT:
        return {
          authenticated: false
        }
      default:
        return state;
    }
  };

  // There are counterReducer() and authReducer() functions provided in the 
  // code editor, along with a Redux store. Finish writing the rootReducer() 
  // function using the Redux.combineReducers() method. Assign counterReducer 
  // to a key called count and authReducer to a key called auth.
  const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer,
  });

  const store = Redux.createStore(rootReducer);
  return {
    store,
    rootReducer,
  }
}

export const CH_10 = "challenge10";

export function challenge10() {
  const ten = combineMultipleReducers();

  const tests = [
    // The counterReducer should increment and decrement the state.

    // Waiting:The authReducer should toggle the state of authenticated between 
    // true and false.

    // Waiting:The store state should have two keys: count, which holds a number, 
    // and auth, which holds an object. The auth object should have a property 
    // of authenticated, which holds a boolean.
    assertion(typeof ten.store.getState(), "object"),
    assertion(ten.store.getState().hasOwnProperty("count"), true),
    assertion(typeof ten.store.getState().count, "number"),
    assertion(ten.store.getState().hasOwnProperty("auth"), true),
    assertion(typeof ten.store.getState().auth, "object"),
    assertion(
      ten
        .store
        .getState()
        .auth
        .hasOwnProperty("authenticated"),
      true
    ),
    assertion(
      typeof ten
        .store
        .getState()
        .auth
        .authenticated,
      "boolean"
    ),

    // Waiting:The rootReducer should be a function that combines the 
    // counterReducer and the authReducer.
    assertion(typeof ten.rootReducer, "function"),
  ];
  test(tests);
}

function sendActionDataToStore() {
  // By now you've learned how to dispatch actions to the Redux store, but so 
  // far these actions have not contained any information other than a type. 
  // You can also send specific data along with your actions. In fact, this 
  // is very common because actions usually originate from some user 
  // interaction and tend to carry some data with them. The Redux store often 
  // needs to know about this data.
  //
  // ---
  //
  // There's a basic notesReducer() and an addNoteText() action creator 
  // defined in the code editor. Finish the body of the addNoteText() function 
  // so that it returns an action object. The object should include a type 
  // property with a value of ADD_NOTE, and also a text property set to the 
  // note data that's passed into the action creator. When you call the action 
  // creator, you'll pass in specific note information that you can access for 
  // the object.
  //
  // Next, finish writing the switch statement in the notesReducer(). You 
  // need to add a case that handles the addNoteText() actions. This case 
  // should be triggered whenever there is an action of type ADD_NOTE and it 
  // should return the text property on the incoming action as the new state.
  //
  // The action is dispatched at the bottom of the code. Once you're finished, 
  // run the code and watch the console. That's all it takes to send action-
  // specific data to the store and use it when you update store state.

  const ADD_NOTE = 'ADD_NOTE';

  const notesReducer = (state = 'Initial State', action) => {
    switch (action.type) {
      case ADD_NOTE:
        return action.text;
      default:
        return state;
    }
  };

  const addNoteText = (note) => {
    return {
      type: ADD_NOTE,
      text: note,
    };
  };

  const store = Redux.createStore(notesReducer);

  return {
    store,
    addNoteText
  }
}

export const CH_11 = "challenge_11";

export function challenge11() {
  const eleven = sendActionDataToStore();

  const checkActionKey = (key) => {
    const obj = eleven.addNoteText();
    return obj.hasOwnProperty(key);
  }

  const dispatchTest = () => {
    eleven.store.dispatch(eleven.addNoteText("Hello!"));
    return eleven.store.getState();
  }

  const tests = [
    // The action creator addNoteText should return an object with keys type 
    // and text.
    assertion(typeof eleven.addNoteText(), "object"),
    assertion(checkActionKey("type"), true),
    assertion(checkActionKey("text"), true),

    // Dispatching an action of type ADD_NOTE with the addNoteText 
    // action creator should update the state to the string passed to the 
    // action creator.
    assertion(eleven.store.getState(), "Initial State"),
    assertion(dispatchTest(), "Hello!"),
  ];
  test(tests);
}

function useMiddlewareToHandleAsyncActions() {
  // So far these challenges have avoided discussing asynchronous actions, but 
  // they are an unavoidable part of web development. At some point you'll need 
  // to call asynchronous endpoints in your Redux app, so how do you handle 
  // these types of requests? Redux provides middleware designed specifically 
  // for this purpose, called Redux Thunk middleware. Here's a brief 
  // description how to use this with Redux.
  //
  // To include Redux Thunk middleware, you pass it as an argument to Redux.
  // applyMiddleware(). This statement is then provided as a second optional 
  // parameter to the createStore() function. Take a look at the code at the 
  // bottom of the editor to see this. Then, to create an asynchronous action, 
  // you return a function in the action creator that takes dispatch as an 
  // argument. Within this function, you can dispatch actions and perform 
  // asynchronous requests.
  //
  // In this example, an asynchronous request is simulated with a setTimeout()
  // call. It's common to dispatch an action before initiating any 
  // asynchronous behavior so that your application state knows that some data 
  // is being requested (this state could display a loading icon, for instance). 
  // Then, once you receive the data, you dispatch another action which 
  // carries the data as a payload along with information that the action is 
  // completed.
  //
  // Remember that you're passing dispatch as a parameter to this special 
  // action creator. This is what you'll use to dispatch your actions, you 
  // simply pass the action directly to dispatch and the middleware takes care 
  // of the rest.
  // ---
  // Write both dispatches in the handleAsync() action creator. Dispatch 
  // requestingData() before the setTimeout() (the simulated API call). Then, 
  // after you receive the (pretend) data, dispatch the receivedData() action, 
  // passing in this data. Now you know how to handle asynchronous actions in 
  // Redux. Everything else continues to behave as before.
  const REQUESTING_DATA = 'REQUESTING_DATA'
  const RECEIVED_DATA = 'RECEIVED_DATA'

  const requestingData = () => { return { type: REQUESTING_DATA } }
  const receivedData = (data) => { return { type: RECEIVED_DATA, users: data.users } }

  const handleAsync = () => {
    return function(dispatch) {
      dispatch(requestingData());

      setTimeout(function() {
        let data = {
          users: ['Jeff', 'William', 'Alice']
        }
        dispatch(receivedData(data))

      }, 2500);
    }
  };

  const defaultState = {
    fetching: false,
    users: []
  };

  const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
      case REQUESTING_DATA:
        return {
          fetching: true,
          users: []
        }
      case RECEIVED_DATA:
        return {
          fetching: false,
          users: action.users
        }
      default:
        return state;
    }
  };

  const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
  );

  return {
    store,
    requestingData,
    receivedData,
    asyncDataReducer,
    handleAsync,
    REQUESTING_DATA,
    RECEIVED_DATA,
  }
}

export const CH_12 = "challenge_12";

export function challenge12() {
  const obj = useMiddlewareToHandleAsyncActions();

  const dispatchFetching = () => {
    obj.store.dispatch(obj.requestingData());
    return obj.store.getState().fetching;
  }

  const dispatchAsync = () => {
    // reset state
    obj.store.dispatch({
      type: "",
      data: {
        fetching: false,
        users: []
      }
    });
    // dispatch handleAsync
    obj.store.dispatch(obj.handleAsync());
    const result = {
      initial: {
        fetching: obj.store.getState().fetching,
        users: obj.store.getState().users
      }
    }
    return obj.store.getState();
  }

  const tests = [
    // The requestingData action creator should return an object of type equal 
    // to the value of REQUESTING_DATA.
    assertion(typeof obj.requestingData(), "object"),
    assertion(obj.requestingData().hasOwnProperty("type"), true),
    assertion(obj.requestingData().type, obj.REQUESTING_DATA),

    // The receivedData action creator should return an object of type equal to 
    // the value of RECEIVED_DATA.
    assertion(typeof obj.receivedData({ users: [] }), "object"),
    assertion(obj.receivedData({ users: [] }).hasOwnProperty("type"), true),
    assertion(obj.receivedData({ users: [] }).type, obj.RECEIVED_DATA),

    // asyncDataReducer should be a function.
    assertion(typeof obj.asyncDataReducer, "function"),

    // Dispatching the requestingData action creator should update the store 
    // state property of fetching to true.
    assertion(obj.store.getState().fetching, false),
    assertion(dispatchFetching(), true),

    // Dispatching handleAsync should dispatch the data request action and 
    // then dispatch the received data action after a delay.
    assertion(dispatchAsync().fetching, true),
    assertion(dispatchAsync().users.length, 0),
    // solution passing in browser, skipping setup of async tests
  ];

  test(tests);
}
