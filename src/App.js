import "./App.css";
import TabContainer from "./containers/TabContainer";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="center">
        <TabContainer />
      </div>
    </div>
  );
}

export default App;
