import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Active from './components/Active';
import Past from './components/Past';
import Profile from './components/Profile';
import Admincarspage from './components/VehicleMain';

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
      </Routes>
    </>
  )
}

export default App
