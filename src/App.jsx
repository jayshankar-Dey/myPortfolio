
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skils from './components/Skils';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Project from './components/Project';
const App = () => {
  return (
    <div className="bg-zinc-800 w-full  ">
      <ToastContainer/>
      <Container maxWidth="md" sx={{overflow:"hidden",padding:"0px"}} >
      <div className='w-full h-screen overflow-y-scroll  '>
      <Navbar/>
     <div className='w-full h-screen p-2 text-white'>
      <Hero/>
      <About/>
      <Skils/>
      <Project/>
      <Contact/>
     </div>
      </div>
      </Container>
    </div>
  )
}

export default App
