import React from 'react';

import "./styles/style.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
          <div className="footer__coordonne text-white w-25">
            <p>
              Accueil, prise en charge, accompagnement d’ordre professionnel ou privé…
            </p> <br />
            <p>
              Vous souhaitez avoir à disposition, pour quelques heures, une journée ou plus, une limousine avec chauffeur : 
            </p> <br />
            <p className='text-capitalize d-flex flex-column'>
              <span className="fw-bold text-uppercase">phc limousine</span>
              chauffeur privé à disposition
            </p>
            <h4>Téléphone : 01 23 45 67 89</h4>
          </div>
      </footer>
      
      <div className="footer__bottom text-center">
            <img src="assets/white_icon_phc.png" alt="" />
            <h3 className="text-uppercase">clone limousine avec chauffeur</h3>
            <span>Tous droits réservés - Mentions légales - Crédits photos - PIXABAY</span>
        </div>
    </>
  )
}

export default Footer