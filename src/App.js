
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './compnent/Dashboard';
import Login from './compnent/Login';
import Maplocation from './compnent/Maplocation';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path='/dash' element={<Dashboard/>}>
              <Route path='map'element={<Maplocation/>}/>
         </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
