import './App.css'
import NavBar from './components/NavBar';
import HeroSec from './components/HeroSec';
import CheckList from './components/CheckList';
import Features from './components/Features';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {

  return (
    <>
      <NavBar />
      <HeroSec/>
      <Cards/>
      <CheckList/>
      <Features/>
      <Footer/>
    </> 
  )
}

export default App
