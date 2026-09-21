import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My CV</h1>
      <PersonalInfo />
      <Education />
    </div>
  );
}

export default App;