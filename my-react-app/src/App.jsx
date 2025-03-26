import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Active from './components/Active';
import Past from './components/Past';
import Profile from './components/Profile';
import Admincarspage from './components/VehicleMain';
import TermsAndConditions from './components/TermsAndConditions';
import Userpickup from "./components/userpickup";
import Userpayment from "./components/userpayment";
import Bookingtype from './components/Bookingtype';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='active' element={<Active />}></Route>
        <Route path='past' element={<Past />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='vehicles' element={<Admincarspage />}></Route>
        <Route path='tandc' element={<TermsAndConditions />}></Route>
        <Route path='userpickup' element={<Userpickup/>}></Route>
        <Route path='userpayment' element={<Userpayment/>}></Route>
        <Route path='bookingtype' element={<Bookingtype/>}></Route>
      </Routes>
    </>
  )
}

export default App
