import './App.css'
import Layout from './Components/Layout'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'flowbite';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import AdminDashboard from './pages/admin/AdminDashboards';
import Login from "./pages/login"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/adminDashboard' element={<AdminDashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
