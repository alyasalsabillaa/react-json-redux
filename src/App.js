import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Home from './pages/Home'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
