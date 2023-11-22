import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import About from './pages/about'
import Header from './components/Header'

export default function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<SignUp />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
    </Routes>
   </BrowserRouter>
  )
}