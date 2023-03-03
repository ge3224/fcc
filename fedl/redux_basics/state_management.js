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
