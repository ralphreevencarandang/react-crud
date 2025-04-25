import {BrowserRouter, Routes , Route} from 'react-router'
import Home from './pages/Home'
import UpdateUser from './pages/UpdateUser'
import CreateUser from './pages/CreateUser'
import ViewUser from './pages/ViewUser'
import { ToastContainer } from 'react-toastify'

function App() {
  return (

    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/create' element={<CreateUser/>}/>
              <Route path='/update' element={<UpdateUser/>}/>
              <Route path='/view/:id' element={<ViewUser/>}/>
            
          </Routes>
      </BrowserRouter>
      <ToastContainer />
      
    </>
  );
}

export default App;
