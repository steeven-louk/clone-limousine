import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer';
import Navbar from './components/navbar';
import Acceuil from './pages/acceuil/acceuil';
import Contact from './pages/contact/contact';
import Chauffeur from './pages/nosServices/chauffeur/chauffeur';
import Excursion from './pages/nosServices/excursion/excursion';
import Mariage from './pages/nosServices/mariage/mariage';
import Transfert from './pages/nosServices/transfert/transfert';
import QuiSommeNous from './pages/quiSommeNous/sommeNous';
import Reservation from './pages/reservation/reservation';


function App() {
  return (
    <div className="App">

    <Navbar />

      <Routes>

        <Route path='/' exact element={<Acceuil />} />
        <Route path='/QuiSommesNous' element={<QuiSommeNous />} />
        <Route path='/excursion' element={<Excursion />} />
        <Route path='/transfert' element={<Transfert />} />
        <Route path='/chauffeur' element={<Chauffeur />} />
        <Route path='/mariage' element={<Mariage />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      
    <Footer />

    </div>
  );
}

export default App;
