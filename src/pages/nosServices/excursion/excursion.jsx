import React from 'react'
import "./styles/style.scss";

import { ChauffeurTaxi } from '../../../components/prestation';


const Excursion = () => {



  return (
    <div className='excursion'>
      <div className="excursion__header"></div>
      
      <div className="excursion__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="Excursion touristique en limousine" description="Envie de vivre expérience ultraglamour ? Jouez la carte de la voiture avec chauffeur !" />

              </div>

              <section className="py-5">
                  <div className="row pb-5">

                    
                  <div className="col-md-6">
                      <img src="assets/img_zoom4.jpg" width='100%' alt="" />
                    </div>

                    <div className="col-md-6">
                      <p className='fw-bold'>
                        Reserver une excursion sur mesure est le meilleur choix pour éviter les offres parfois trop commerciales ou marathons où vous risquez de passer plus de temps en voiture qu’à visiter un endroit.
                      </p>

                      <p>
                        Vous aimez visiter des musées, des châteaux et des lieux incroyables ?
                      </p>

                      <p>
                        PHC LIMOUSINE vous emmène à bord de ses véhicules de luxe avec chauffeur et vous organise des séjours de dernières minutes selon vos envies, de l'insolite à l'offre all-inclusive.
                      </p>

                      <p>
                        Il est possible de reserver une excursion d’une journée pour avoir une vue globale Paris.
                      </p>

                      <p>
                        En solo, en couple, entre amis ou en famille, découvrez des places idylliques se prêtant parfaitement à un endroit de plaisir et de détente. 
                      </p>

                    </div>

                  </div>
              </section>

              <section className="tarifs_location pb-5">
                  <div className="tarif border border-2 border-dark py-2">
                    <h5 className="text-center text-decoration-underline">TARIFS LOCATION LIMOUSINE POUR EXCURSION TOURISTIQUE</h5>
                  </div>
                  <img src="assets/limousine.png" width="100%"  alt="" />
              </section>
            
          </div>
      </div>
    </div>
  )
}

export default Excursion