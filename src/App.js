import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Profile';
import About from './Components/AboutMe/About';
import Resume from './Components/Resume/Resume';
import Contact from './Components/ContactME/Contact'
import Profile from './Components/Home/Profile';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <BrowserRouter>
      <Profile />
      <Routes>
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Resume' element={<Resume />} />
        <Route path='Contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>


  );
}

export default App;
