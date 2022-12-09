import './App.css';
import Signup from './Components/Signup';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import DrugsDetails from './Components/DisplayDrugsData';
import PhysiciansDetails from './Components/DisplayPhysiciansData';
import PatientsDetails from './Components/DisplayPatientsDetails';
import Signin from './Components/Signin';
import DisplayUsers from './Components/DisplayUsers';

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
    <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/pharmacists' element={<DrugsDetails />} />
        <Route path= '/physicians'  element={<PhysiciansDetails />} />
        <Route path='/patients' element={<PatientsDetails />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/users' element={<DisplayUsers />}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
