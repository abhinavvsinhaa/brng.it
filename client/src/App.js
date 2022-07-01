import Navigation from "./components/Navigation/Navigation";
import CalenderProvider from "./context/CalanderProvider";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CalenderProvider>
        <div className="App">
          <Navigation />
        </div>
      </CalenderProvider>
    </AuthProvider>
  );
}

export default App;
