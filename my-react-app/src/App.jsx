import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Active from './components/Active';
import Past from './components/Past';
import VehiclesList from './components/VehiclesList';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='active' element={<Active />}></Route>
        <Route path='past' element={<Past />}></Route>
        <Route path='vehiclesList' element={<VehiclesList />}></Route>
        <Route path='profile' element={<Profile />}></Route>
      </Routes>
    </>
  )
}

export default App
