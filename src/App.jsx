import { Outlet } from 'react-router'
import './App.css'
import Navbar from './component/Navbar'
import Login from './Pages/Login'





function App() {


  return (
    <>
  <Navbar></Navbar>
  <Outlet></Outlet>
  

    </>
  )
}

export default App
