import React from "react";

// Challenge 5. Map State to Props
//
// The Provider component allows you to provide state and dispatch to your
// React components, but you must specify exactly what state and actions you
// want. This way, you make sure that each component only has access to the
// state it needs. You accomplish this by creating two functions:
// mapStateToProps() and mapDispatchToProps().
//
// In these functions, you declare what pieces of state you want to have
// access to and which action creators you need to be able to dispatch. Once
// these functions are in place, you'll see how to use the React Redux connect
// method to connect them to your components in another challenge.
//
// Note: Behind the scenes, React Redux uses the store.subscribe() method to
// implement mapStateToProps().
//
// ---
//
// Create a function mapStateToProps(). This function should take state as an
// argument, then return an object which maps that state to specific property
// names. These properties will become accessible to your component via props.
// Since this example keeps the entire state of the app in a single array, you
// can pass that entire state to your component. Create a property messages in
// the object that's being returned, and set it to state.
const state = [];

function mapStateToProps(state) {
  return {
    messages: state
  };
}

export function Challenge5() {
  return (
    <div>
      <h2>Map State to Props</h2>
      <ul>
        <li><code>const state</code> = "{state}"</li>
        <li><code>state</code> is and array = {(Array.isArray(state)) ? "true" : "false"}</li>
        <li><code>typeof mapStateToProps</code> = {typeof mapStateToProps}</li>
        <li><code>typeof mapStateToProps()</code> returns "{typeof mapStateToProps()}"</li>
      </ul>
    </div>
  );
}
