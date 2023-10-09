// import './App.css'
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import DocuMageV3 from './DocuMageV3'
import Dashboard from './Dashboard'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/docu-mage-v3' element={<DocuMageV3 />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>



      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
