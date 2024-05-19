import './App.css';
import Navigation from './components/navigation'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer';


function App() {
  return (
    <>
    <div className="nav-and-header">
    <Navigation/>
    <Header/>
    </div>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
