// import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard'
import DocuMageV3 from './DocuMageV3'
import { PreTrainedModel } from './PreTrainedModel';
import IntractiveAi from './components/Intractive-AI/IntractiveAi';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/docu-mage-v3' element={<DocuMageV3 />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/pre-trained-models' element={<PreTrainedModel />}></Route>
        <Route path='/intractive-ai' element={<IntractiveAi />}></Route>


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
