import "./App.css";
import Header from './Header';
import Home from './Home';
import Register from './Register';
import Clients from './Clients';
import Medical from './Medical';
import Reports from './Reports';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <div className="App">
      <div className='grid-container'>
        <Header />
        <Router>
          <Routes>
            <>
          
            <Route path="/" element={<Home/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/medical" element={<Medical />} />
              <Route path="/reports" element={<Reports />} />
              
            </>
          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
