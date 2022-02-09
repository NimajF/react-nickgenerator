import { Navbar } from './Navbar';
import { NickContainer } from './NickContainer';
import { NickProvider } from './contexts/nickContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <NickProvider>
        <Navbar/>
        <NickContainer/>
      </NickProvider>
    </div>
  );
}

export default App;
