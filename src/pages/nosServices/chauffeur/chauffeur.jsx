import React from 'react'
import "./styles/style.scss";

import { ChauffeurTaxi } from '../../../components/prestation';


const Chauffeur = () => {


  return (
    <div className='chauffer'>
      <div className="chauffer__header"></div>
      
      <div className="chauffer__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="Mise à disposition de chauffeur limousine" description="La mise à disposition peut être d’ordre privé ou professionnel !" />
              </div>

              <section className="py-5">
                  <div className="row pb-5">

                    
                  <div className="col-md-6">
                      <img src="assets/1.jpg" width='100%' alt="" />
                    </div>

                    <div className="col-md-6">
                      <p className='fw-bold'>
                        Vous avez un emploi du temps chargé et vous voulez tenir votre timing, vous pourrez alors compter sur la qualité de votre véhicule et de l’efficacité de votre chauffeur, tout en respectant vos limites budgétaires et bénéficier d’un tarif fixe et transparent :
                      </p>

                      <span className='fw-bold text-decoration-underline'>
                          Réservation instantanée :
                      </span> <br/> <br />

                        <div className="d-flex flex-column">
                        <span>
                      Un numéro d'appel prioritaire et disponible 24H/7J
                      </span>

                      <span>
                      Aucun frais d'abonnement ou de gestion.
                      </span>

                      <span>
                      Quatre gammes de véhicules au choix, selon vos besoins et budget.
                      </span>

                      <span>
                      Une qualité de prestation unique, quelque soit la gamme du véhicule choisi. 
                      </span>
                      <span>
                      Votre fidélité récompensée. 
                      </span>
                      <span>
                      "Concierge for You", Service exclusif réservé à nos adhérents. 
                      </span>
                        </div>

                    </div>

                  </div>
              </section>


              <section className="tarifs_location pb-5">
                  <div className="tarif border border-2 border-dark py-2">
                    <h5 className="text-center text-decoration-underline text-uppercase">TARIFS LOCATION LIMOUSINE AVEC CHAUFFEUR - MISE A DISPOSITION</h5>
                  </div>
                  <img src="assets/limousine.png" width="100%"  alt="" />
              </section>
            
          </div>
      </div>
    </div>
  )
}

export default Chauffeur