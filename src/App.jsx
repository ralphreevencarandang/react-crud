import {BrowserRouter, Routes , Route} from 'react-router'
import Home from './pages/Home'
import UpdateUser from './pages/UpdateUser'
import CreateUser from './pages/CreateUser'
import ViewUser from './pages/ViewUser'

function App() {
  return (

    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/create' element={<CreateUser/>}/>
              <Route path='/update' element={<UpdateUser/>}/>
              <Route path='/view' element={<ViewUser/>}/>
            
          </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
