import React from 'react'
import "./styles/style.scss";

import { ChauffeurTaxi } from '../../components/prestation';


const Contact = () => {


  return (
    <div className='contact'>
      <div className="contact__header"></div>
      
      <div className="contact__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="NOUS CONTACTER" description="PHC LIMOUSINE" />
              </div>

              <section className="nous py-5">
                  <div className="row pb-5">

                    
                  <div className="col-md-6">
                      <img src="assets/vtc-chauffeur.jpg" width='100%' alt="" />
                    </div>

                    <div className="col-md-6">
                      <p className='fw-bold'>
                        CONTACTEZ-NOUS - NOS ÉQUIPES PRENDRONT CONTACT AVEC VOUS DANS LES PLUS BREFS DÉLAIS.
                      </p>

                      <p className='fw-bold'>
                        Location de véhicules de prestige avec chauffeur
                      </p>

                      <p>Pour toutes informations, merci de nous contacter :</p>

                      <p>
                        <li> Par téléphone au +33 (0)1 79 72 33 63 (de 09h à 19h)</li>
                        <li> Par mail : cliquez-içi</li>
                        <li> Reservation en ligne : cliquez içi</li>
                        <li> Par courrier à l'adresse suivante : Paris </li>
                      </p>

                    </div>

                  </div>
              </section>
            
          </div>
      </div>
    </div>
  )
}

export default Contact