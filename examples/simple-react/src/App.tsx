import { getMessage } from "flagsafe";

function App() {
  const message = getMessage();
  return (
    <div className="App">
      <div>{message || ""}</div>
    </div>
  );
}

export default App;
