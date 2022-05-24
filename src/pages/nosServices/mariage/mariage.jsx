import React from 'react'
import "./styles/style.scss";

import { ChauffeurTaxi } from '../../../components/prestation';


const Mariage = () => {



  return (
    <div className='mariage'>
      <div className="mariage__header"></div>
      
      <div className="mariage__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="LOCATION LIMOUSINE - MARIAGE" description="En exclusivité et pour une très très courte durée" />

              </div>

              <section className="py-5">
                  <div className="row pb-5">

                    
                  <div className="col-md-6">
                      <img src="assets/location-limousine.jpg" width='100%' alt="" />
                    </div>

                    <div className="col-md-6">
                      <p className='fw-bold text-decoration-underline'>
                      Un véhicule exceptionnel pour un événement unique :
                      </p>

                      <p>
                      PHC LIMOUSINE se met à votre service pour que tout soit irréprochable le jour de votre mariage.
                      </p>

                      <p>
                      PHC LIMOUSINE  vous propose de vous transporter en limousine pour concrétiser une journée de rêve
                      </p>

                      <p>
                      Il est évident que le jour de votre mariage sera le plus beau jour de votre vie !
                      </p>

                      <p>
                      Les tarifs de la prestation Mariage, incluent la fourniture de décorations florales artificielles.
                      </p>

                      <p>
                      Les boissons non alcoolisées (soft drinks) et une bouteille de champagne sont offertes.
                      </p>

                      <p>
                      N’attendez plus pour nous contacter et obtenir un devis gratuit et personnalisé en fonction de vos besoins.
                      </p>

                    </div>

                  </div>
              </section>

              <section className="tarif__location py-5">
                  <div className="row pb-5">
                    
                  <div className="col-md-4">
                      <img src="assets/euro2.jpg" width='100%' alt="" />
                    </div>

                    <div className="col-md-8">
                      <p className='fw-bold text-decoration-underline'>
                      TARIFS LOCATION LIMOUSINE POUR MARIAGE
                      </p>

                      <li className='fw-bold'> En journée :</li>

                      <p>
                        <span className="fw-bold">5 heures ou 125 Kms :</span>  530,00 € limousine 8 passagers
                      </p>

                      <p>
                        <span className="fw-bold">8 heures ou 200 Kms :</span>  800,00 € limousine 8 passagers
                      </p>

                      <p>
                        <span className="fw-bold">13 heures ou 325 Kms :</span>  1 250,00 € limousine 8 passagers
                      </p>

                      <p>
                      <li><span className='fw-bold'> Forfait "Mariage" :</span> Le forfait mariage comprend 5 heures de mise à disposition de la limousine avec chauffeur, un bouquet sur l'avant du véhicule assorti aux couleurs du mariage, 5 boissons softs et kilométrage illimité*. Tout pour se marier dans les meilleures <span className="fw-bold"> à partir de 350 €.</span></li>
                      </p>

                      <p>
                      <li><span className='fw-bold'> Forfait transfert simple limousine : </span>à partir de 90 euros</li>
                      </p>

                      <p>
                      <li><span className='fw-bold'> Forfait transfert aller/retour limousine : </span>discothèque : à partir de 270 euros selon point de départ</li>
                      </p>

                      <p>
                      <li><span className='fw-bold'> Forfait wine tour pour une demi journée ou à la journée : </span>nous consulter en fonction des différents châteaux à partir de 250 euros.</li>
                      </p>

                    </div>

                  </div>
              </section>

              <section className="tourisme">
                <div className="img-container">
                  <img src="assets/mariage/3-min.jpg" alt="," />
                  <img src="assets/mariage/img_prestation.jpg" alt="" />
                  <img src="assets/mariage/img.jpg" alt="" />
                  <img src="assets/mariage/limousine-mariage.jpg" alt="" />
                  <img src="assets/mariage/linmariage.jpg"  alt="" />
                  <img src="assets/mariage/mariage_en_limousine.jpg"  alt="" />
                  <img src="assets/mariage/mariage-et-nat.jpg"  alt="" />
                  <img src="assets/mariage/prestige.jpg"  alt="" />
                </div>
              </section>
            
          </div>
      </div>
    </div>
  )
}

export default Mariage