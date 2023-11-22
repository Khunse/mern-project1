import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import About from './pages/about'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<SignUp />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
   </BrowserRouter>
  )
}