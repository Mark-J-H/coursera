import './App.css';
import Navigation from './components/navigation'
import Header from './components/header'
import Footer from './components/footer';
import Specials from './components/specials'
import Testimonials from './components/testimonials'
import About from './components/about'


function App() {
  return (
    <>
    <Navigation/>
    <Header/>
    <Specials/>
    <Testimonials/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
