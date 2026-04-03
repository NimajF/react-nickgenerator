import { NickProvider } from "./contexts/nickContext";
import AppContent from "./components/AppContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NickProvider>
        <AppContent />
      </NickProvider>
    </div>
  );
}

export default App;
