import './assets/styles/App.css';
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Passport from './pages/Passport';
import Press from './pages/Press';
import About from './pages/About';
import Portal from './pages/Portal';
// import Alem from './pages/subpages/Alem';

function App() {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        {/* <Route path="restaurants/alem" element={<Alem />} /> */}
        <Route path="digital-passport" element={<Portal />} />
        <Route path="passport" element={<Passport />} />
        <Route path="press" element={<Press />} />
        <Route path="about" element={<About />} />
        <Route path="digital-passport" element={<Portal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;