import React from 'react'
import './styles/style.scss';


const Navbar = () => {
  return (
    <>
      <header className=" pt-4 navbar__component text-white">
        <div className="ville text-capitalize">
          <span>Paris</span>-
          <span>saint tropez</span>-
          <span>courchevel</span>-
          <span>cannes</span>-
          <span>deauville</span>-
          <span>tunis</span>-
          <span>londres</span>-
          <span>new york</span>
        </div>

        <nav className="pt-5 navbar navbar-expand-sm ">
            <div className="container-fluid">
                <div className="navbar-brand">
                  <img src="assets/white_icon_phc.png" alt="" />
                  <h3 className='text-uppercase my-1'>limousine</h3>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarID">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Acceuil</a>
                        <a className="nav-link" href="/">Qui sommes nous</a>
                        <a className="nav-link" href="/">Nos services</a>
                        <a className="nav-link" href="/">Réservez en ligne</a>
                        <a className="nav-link" href="/">Contact 01 23 45 67 89</a>
                        
                    </div>
                </div>
            </div>
        </nav>
      </header>
    </>   
  );
}

export default Navbar