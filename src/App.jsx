import Login from './components/Login'
import Registro from './components/Registro'
import Mostrar from './components/Mostrar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='registro' element={<Registro/>}/>
          <Route path='mostrar' element={<Mostrar/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
