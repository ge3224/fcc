import * as Redux from "redux";
import { assertion, test } from "../../jads/src/util";

function neverMutateState() {
  // These final challenges describe several methods of enforcing the key
  // principle of state immutability in Redux. Immutable state means that you
  // never modify state directly, instead, you return a new copy of state.
  //
  // If you took a snapshot of the state of a Redux app over time, you would
  // see something like state 1, state 2, state 3,state 4, ... and so on where
  // each state may be similar to the last, but each is a distinct piece of
  // data. This immutability, in fact, is what provides such features as
  // time-travel debugging that you may have heard about.
  //
  // Redux does not actively enforce state immutability in its store or
  // reducers, that responsibility falls on the programmer. Fortunately,
  // JavaScript (especially ES6) provides several useful tools you can use to
  // enforce the immutability of your state, whether it is a string, number,
  // array, or object. Note that strings and numbers are primitive values and
  // are immutable by nature. In other words, 3 is always 3. You cannot change
  // the value of the number 3. An array or object, however, is mutable. In
  // practice, your state will probably consist of an array or object, as
  // these are useful data structures for representing many types of
  // information.
  //
  // ---
  // There is a store and reducer in the code editor for managing to-do items.
  // Finish writing the ADD_TO_DO case in the reducer to append a new to-do to
  // the state. There are a few ways to accomplish this with standard
  // JavaScript or ES6. See if you can find a way to return a new array with
  // the item from action.todo appended to the end.
  const ADD_TO_DO = 'ADD_TO_DO';

  // A list of strings representing tasks to do:
  const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
  ];

  const immutableReducer = (state = todos, action) => {
    switch (action.type) {
      case ADD_TO_DO:
        return [...state, action.todo];
      default:
        return state;
    }
  };

  const addToDo = (todo) => {
    return {
      type: ADD_TO_DO,
      todo
    }
  }

  const store = Redux.createStore(immutableReducer);

  return {
    todos,
    store,
    addToDo,
    immutableReducer,
  }
}

// 14. Never Mutate State
export const CH_14 = "challenge_14";

// handle challenge 14
export function challenge14() {
  const res = neverMutateState();

  const test_dispatch = () => {
    res.store.dispatch(res.addToDo("Test action"));
    return res.todos;
  }

  const tests = [
    // The Redux store should exist and initialize with a state equal to the
    // todos array in the code editor.
    assertion(res.store.getState().length, 4),
    assertion(res.store.getState()[0], "Go to the store"),
    assertion(res.store.getState()[1], "Clean the house"),
    assertion(res.store.getState()[2], "Cook dinner"),
    assertion(res.store.getState()[3], "Learn to code"),

    // addToDo and immutableReducer both should be functions.
    assertion(typeof res.addToDo, "function"),
    assertion(typeof res.immutableReducer, "function"),

    // Dispatching an action of type ADD_TO_DO on the Redux store should add a
    // todo item and should NOT mutate state.
    assertion(test_dispatch().length, 4),
    assertion(res.store.getState().length, 5),
  ];
  test(tests);
}

function useSpreadOperatorOnArrays() {
  // One solution from ES6 to help enforce state immutability in Redux is the
  // spread operator: .... The spread operator has a variety of
  // applications, one of which is well-suited to the previous challenge of
  // producing a new array from an existing array. This is relatively new, but
  // commonly used syntax. For example, if you have an array myArray and write:
  // 
  // ```
  // let newArray = [...myArray];
  // ```
  //
  // newArray is now a clone of myArray. Both arrays still exist separately in
  // memory. If you perform a mutation like newArray.push(5), myArray doesn't
  // change. The ... effectively spreads out the values in myArray into a new
  // array. To clone an array but add additional values in the new array, you
  // could write [...myArray, 'new value']. This would return a new array
  // composed of the values in myArray and the string new value as the last
  // value. The spread syntax can be used multiple times in array composition
  // like this, but it's important to note that it only makes a shallow copy
  // of the array. That is to say, it only provides immutable array operations
  // for one-dimensional arrays.
  //
  // ---
  //
  // Use the spread operator to return a new copy of state when a to-do is added.
  const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch (action.type) {
      case 'ADD_TO_DO':
        return [...state, action.todo];
      default:
        return state;
    }
  };

  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }

  const store = Redux.createStore(immutableReducer);

  return {
    store,
    addToDo,
    immutableReducer,
  }
}

// 15. Use the Spread Operator on Arrays
export const CH_15 = "challenge_15";

// Handle challenge 15
export function challenge15() {
  const res = useSpreadOperatorOnArrays();

  const tests = [
    // The Redux store should exist and initialize with a state equal to ["Do
    // not mutate state!"].
    assertion(res.store !== undefined && res.store !== null, true),
    assertion(JSON.stringify(res.store.getState()), `["Do not mutate state!"]`),

    // Waiting:addToDo and immutableReducer both should be
    // functions.
    assertion(typeof res.addToDo, "function"),
    assertion(typeof res.immutableReducer, "function"),

    // Dispatching an action of type ADD_TO_DO on the Redux store should add a
    // todo item and should NOT mutate state.

    // The spread operator should be used to return new state.
    // SEE challenge 14 ...
  ];
  test(tests);
}

function removeItemFromArr() {
  // Time to practice removing items from an array. The spread operator can be
  // used here as well. Other useful JavaScript methods include slice() and
  // concat().
  //
  // ---
  // The reducer and action creator were modified to remove an item from an
  // array based on the index of the item. Finish writing the reducer so a new
  // state array is returned with the item at the specific index removed.
  const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
      case 'REMOVE_ITEM':
        return state.filter((item, index) => action.index !== index);
      // let newArr = [];
      // for (let i = 0; i < state.length; i++) {
      //   if (i !== action.index) {
      //     newArr.push(state[i]); 
      //   }
      // }
      // return newArr;
      default:
        return state;
    }
  };

  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }

  const store = Redux.createStore(immutableReducer);

  return {
    store,
    immutableReducer,
    removeItem,
  }
}

// 16. Remove an Item from an Array
export const CH_16 = "challenge_16";

// Handle challenge 16
export function challenge16() {
  const res = removeItemFromArr();

  const dispatchTest = () => {
    res.store.dispatch(res.removeItem(3));
    return res.store.getState().length;
  }

  const tests = [
    // The Redux store should exist and initialize with a state equal to
    // [0,1,2,3,4,5]
    assertion(res.store !== undefined && res.store !== null, true),
    assertion(JSON.stringify(res.store.getState()), `[0,1,2,3,4,5]`),

    // removeItem and immutableReducer both should be functions.
    assertion(typeof res.removeItem, "function"),
    assertion(typeof res.immutableReducer, "function"),

    // Dispatching the removeItem action creator should remove items from the
    // state and should NOT mutate state.
    assertion(dispatchTest(), 5),
    assertion(JSON.stringify(res.store.getState()), `[0,1,2,4,5]`),
  ];
  test(tests);
}
