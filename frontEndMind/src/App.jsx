// import './App.css'
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserDashboard from './UserDashboard'
import Dashboard from './Dashboard'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/docu-mege-v3' element={<UserDashboard />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>



      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
