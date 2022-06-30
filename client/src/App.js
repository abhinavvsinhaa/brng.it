// import './App.css';
// import CreatePost from "./components/CreatePost/CreatePost";
// import Navigation from "./components/Navigation/Navigation";
import Calender from "./components/CalenderV1/Calender";
import ContextWrapper from "./hooks/ContextWrapper";

function App() {
  return (
    <ContextWrapper>
      <div className="App">
        <Calender />
      </div>
    </ContextWrapper>
  );
}

export default App;
