import "./App.css";

import HelloWorld from "./components/HelloWorld";
import List from "./components/List";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Welcome />
      <List />
    </div>
  );
}

export default App;
