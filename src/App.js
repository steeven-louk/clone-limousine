import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Acceuil from './pages/acceuil/acceuil';
import Contact from './pages/contact/contact';
import Chauffeur from './pages/nosServices/chauffeur/chauffeur';
import Excursion from './pages/nosServices/excursion/excursion';
import Mariage from './pages/nosServices/mariage/mariage';
import QuiSommeNous from './pages/quiSommeNous/sommeNous';
import Reservation from './pages/reservation/reservation';

function App() {
  return (
    <div className="App">
        <Navbar />
        {/** <Acceuil />*/}
        {/**<QuiSommeNous />*/}
      { /** <Reservation /> */}
      <Mariage />
        <Footer />
    </div>
  );
}

export default App;
