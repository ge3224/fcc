import * as Redux from "redux";
import React from "react";
import * as ReactRedux from "react-redux";

// The mapDispatchToProps() function is used to provide specific action
// creators to your React components so they can dispatch actions against the
// Redux store. It's similar in structure to the mapStateToProps() function
// you wrote in the last challenge. It returns an object that maps dispatch
// actions to property names, which become component props. However, instead
// of returning a piece of state, each property returns a function that calls
// dispatch with an action creator and any relevant action data. You have
// access to this dispatch because it's passed in to mapDispatchToProps() as a
// parameter when you define the function, just like you passed state to
// mapStateToProps(). Behind the scenes, React Redux is using Redux's
// store.dispatch() to conduct these dispatches with mapDispatchToProps().
// This is similar to how it uses store.subscribe() for components that are
// mapped to state.
//
// For example, you have a loginUser() action creator that takes a username as
// an action payload. The object returned from mapDispatchToProps() for this
// action creator would look something like:
//
// ```
// {
//   submitLoginUser: function(username) {
//       dispatch(loginUser(username));
//   }
// }
// ```
//
// ---
//
// The code editor provides an action creator called addMessage(). Write the
// function mapDispatchToProps() that takes dispatch as an argument, then
// returns an object. The object should have a property submitNewMessage set
// to the dispatch function, which takes a parameter for the new message to
// add when it dispatches addMessage().

const state = [];

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message))
    }
  }
}

export function Challenge6() {
  return (
    <div>
      <h2>Map Dispatch to Props</h2>
      <ul>
        <li><code>state</code> is an array: {(Array.isArray(state)) ? "true" : "false"}</li>
        <li><code>typeof mapDispatchToProps</code> = {typeof mapDispatchToProps}</li>
      </ul>
    </div>
  );
}
