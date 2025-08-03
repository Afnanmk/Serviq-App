
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import Providers from './pages/Providers'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path="/results"  element={<Providers/>}/>
    </Routes>
    </>
  )
}

export default App
