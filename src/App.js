import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Acceuil from './pages/acceuil/acceuil';
import QuiSommeNous from './pages/quiSommeNous/sommeNous';

function App() {
  return (
    <div className="App">
        <Navbar />
        {/** <Acceuil />*/}
        <QuiSommeNous />
        <Footer />
    </div>
  );
}

export default App;
