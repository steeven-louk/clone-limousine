import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './styles/style.scss';


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const [scroll, setScroll] = useState(0)

  
useEffect(() => {
  document.addEventListener("scroll", () => {
    const scrollCheck = window.scrollY < 100
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck)
    }
  })
})


  return (
    <>
      <header className=" pt-4 navbar__component text-white">
        <div className={scroll ?  "ville text-capitalize d-flex" : "hide_ville"}>
          <h5>Paris</h5>-
          <h5>saint tropez</h5>-
          <h5>courchevel</h5>-
          <h5>cannes</h5>-
          <h5>deauville</h5>-
          <h5>tunis</h5>-
          <h5>londres</h5>-
          <h5>new york</h5>
        </div>

        <nav className={scroll ? "pt-5 navbar navbar-expand-sm " : "navbar navbar-expand-sm scroll"}>
            <div className="container-fluid">
                <div className="navbar-brand">
                  <img src="assets/white_icon_phc.png" alt="" />
                  <h4 className='text-uppercase my-1'>clone-limousine</h4>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Acceuil</a></li>
                        <li className="nav-item"><Link className="nav-link" to="/QuiSommesNous">Qui sommes nous</Link></li>
                        <li className="nav-item menu" onClick={()=> setShowMenu(!showMenu)}>
                          <span className="nav-link">Nos services &gt;</span> 
                          <ul className={!showMenu ? " text-capitalize sub-menu" : "text-capitalize show-menu"}>
                            <li className='nav-item'><Link to="/excursion">excursion touristique</Link></li>
                            <li className='nav-item'><Link to="/transfert">transfert privé aéroport</Link></li>
                            <li className='nav-item'><Link to="/chauffeur">chauffeur privé à disposition</Link></li>
                            <li className='nav-item'><Link to="/mariage">mariage</Link></li>
                          </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/reservation">Réservez en ligne</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact 01 23 45 67 89</Link></li>
                       
                        
                    </div>
                </div>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar