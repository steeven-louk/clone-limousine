import React from 'react'
import "./styles/style.scss";

import { ChauffeurTaxi } from '../../../components/prestation';


const Transfert = () => {



  return (
    <div className='transfert'>
      <div className="transfert__header"></div>
      
      <div className="transfert__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="LIMOUSINE AVEC CHAUFFEUR - TRANSFERT AEROPORT/GARE" description="Offrez vous un transfert prestigieux et confortable !" />
              </div>

              <section className="py-5">
                  <div className="row pb-5">
                    
                  <div className="col-md-6">
                      <img src="assets/aeroport-limousine.png" width='100%' alt="" />
                    </div>

                    <div className="col-md-6">
                      <p className='fw-bold text-decoration-underline'>
                      Une limousine de prestige avec chauffeur pour votre transfert aéroport/gare :
                      </p>

                      <p>
                      PHC Limousine vous propose un service professionnel de transport de personnes en limousine avec chauffeur et prend en charge tous vos besoins de transfert de 1 à 8 passagers avec ou sans bagage à Paris et en Île-de-France.
                      </p>

                      <p>
                      Nous vous promettons un accueil personnalisé et VIP, en gare ou en aéroport. Vos trajets seront de rééels moments de plaisir et de détente, grâce à nos services haut de gamme, exclusifs et personnalisés.
                      </p>

                      <p>
                      Nous pouvons accueillir jusqu'à 8 personnes maximum. Le confort de nos limousines de luxe et de nos équipements présents à bord nous permettent d'être le partenaire idéal pour vos besoins de transfert avec chauffeur vers les aéroports et gares.
                      </p>

                      <p>
                      N’attendez plus pour nous contacter et obtenir un devis gratuit et personnalisé en fonction de vos besoins.
                      </p>

                    </div>
                      <p className='my-3'>
                        <span className='fw-bold'>Idéal pour débuter votre voyage à Paris.</span>  Votre chauffeur vous réservera un accueil personnalisé à l'aéroport dès votre sortie des douanes avec un panneau à l'enseigne Authentik Canada et vous déposera par la suite devant votre hôtel. Il se fera un plaisir de répondre à toutes vos questions !
                      </p>
                  </div>

                  <div className="text-uppercase text-center">
                    <h2><a href="/">voir nos services accueil personnalises</a></h2> <br />
                    <img src="assets/plane_icon.png" className='d-flex justify-content-center mx-auto' alt="" />
                  </div>
                  
              </section>

              <section className="tarifs_location pb-5">
                  <div className="tarif text-center border border-2 border-dark py-2">
                    <h5 className="text-decoration-underline pb-2">TARIFS LOCATION LIMOUSINE AVEC CHAUFFEUR - TRANSFERT AEROPORTS/GARES</h5>
                    <li>Tarifs trasfert aéroports en limousine haut de gamme jusqu'à 8 personnes.</li>
                  </div>
                  <img src="assets/prix_airport.png" width="100%"  alt="" />
              </section>

              <section className="aeroport">
                <div className="img-container">
                  <img src="assets/cdg.jpg" alt="" />
                  <img src="assets/taxi_orly.jpg" alt="" />
                  <img src="assets/aeroport-roissy.jpg" alt="" />
                  
                </div>
              </section>
            
          </div>
      </div>
    </div>
  )
}

export default Transfert