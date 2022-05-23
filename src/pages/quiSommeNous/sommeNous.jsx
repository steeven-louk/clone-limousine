import React from 'react'
import "./styles/style.scss";


import { ChauffeurTaxi } from '../../components/prestation';


const QuiSommeNous = () => {


  return (
    <div className='acceuil'>
      <div className="acceuil__header"></div>
      
      <div className="acceuil__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="QUI SOMMES NOUS" description="PHC LIMOUSINE" />
              </div>


              <section className="nous py-5">
                  <div className="row pb-5">
                    <div className="col-md-6">
                      <p>
                        <em className='fw-bold'>PHC Limousine</em>, service de location de limousine avec chauffeur, met à votre disposition des limousines américaines haut de gamme, de 9 mètres de long, blanches, pouvant accueillir jusqu’à 8 personnes, pour tous vos déplacements à Paris.
                      </p>

                      <p>
                        Fondée en 2010 & une expérience de 17 ans dans le domaine et à pour objectif quotidien de toujours faire le maximum pour donner satisfaction en toute discrétion et réaliser avec succès les services.
                      </p>

                      <p>
                        Professionnels reconnus, nos chauffeurs sont titulaires du permis dit « de Grande Remise (G.R.) », délivré par la préfecture de Police de Paris.
                      </p>

                      <p>
                        Dans des limousines de luxe spacieuses et confortables, faites la fête sans contrainte et laissez-vous conduire en totale sécurité par les chauffeurs de <em className="fw-bold">PHC Limousine !</em>
                      </p>

                      <span className='fw-bold'>L’esprit de notre entreprise de limousine</span>

                      <p>
                        Nos chauffeurs répondent aux besoins d’une clientèle exigeante Disponibles, ponctuels, courtois, ils savent faire preuve de discrétion en toute circonstance
                      </p>

                      <span><u>Multilingues et connaissant parfaitement Paris et la Région Parisienne</u></span>
                    </div>

                    <div className="col-md-6">
                      <img src="assets/agence.jpg" alt="" />
                    </div>
                  </div>
              </section>
          </div>
      </div>
    </div>
  )
}

export default QuiSommeNous