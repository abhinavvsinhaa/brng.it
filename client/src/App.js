import Navigation from "./components/Navigation/Navigation";
import CalenderProvider from "./context/CalanderProvider";
import "./api/Interceptor/index";

function App() {
  return (
    <CalenderProvider>
      <div className="App">
        <Navigation />
      </div>
    </CalenderProvider>
  );
}

export default App;
