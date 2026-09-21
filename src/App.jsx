import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>My CV</h1>
      <PersonalInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
