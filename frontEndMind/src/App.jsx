import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard'
import DocuMage3 from './DocuMageV3'
import { PreTrainedModel } from './PreTrinedModel';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/docu-mage-v3' element={<DocuageV3 />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/pre-trained-models' element={<PrTrainedModel />}></Route>



      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
