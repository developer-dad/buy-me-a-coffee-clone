import './App.css'
import NavBar from './components/NavBar';
import HeroSec from './components/HeroSec';
import SupportCard from './components/SupportCard';
import MembershipCard from './components/MembershipCard';
import ShopCard from './components/ShopCard';
import PostCard from './components/PostCard';
import CheckList from './components/CheckList';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <HeroSec/>
      <SupportCard/>
      <MembershipCard/>
      <ShopCard/>
      <PostCard/>
      <CheckList/>
      <Features/>
      <Footer/>
    </>
  )
}

export default App
