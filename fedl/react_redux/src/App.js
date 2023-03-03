import { DisplayMessages as Challenge1 } from "./Challenge1";
import { DisplayMessages as Challenge2 } from "./Challenge2";
import { Challenge3 } from "./Challenge3";
import AppWrapper from "./Challenge4";

export function App() {
  return (
    <div className="App">
      <h1>React and Redux</h1>
      <h3>Challenge 1: (component add empty div)</h3>
      <Challenge1 />
      <hr />
      <h3>Challenge 2:</h3>
      <Challenge2 />
      <hr />
      <h3>Challenge 3:</h3>
      <Challenge3 />
      <hr />
      <h3>Challenge 4:</h3>
      <AppWrapper />
      <hr />
    </div>
  );
}

export default App;
