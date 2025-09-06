import Home from './components/Home/Home'
import './App.css'
import "@fontsource/poppins"; 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Transactions from './components/Transactins/Transactions';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
function App() {
return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>}/>
     <Route path='/Login' element={ <Login/>}/>
      <Route path='/SignUp' element={ <SignUp/>}/>
     <Route path='/Transactions' element={ <Transactions/>}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
