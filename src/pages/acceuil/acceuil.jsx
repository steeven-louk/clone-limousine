import React from 'react'
import "./styles/style.scss";

import service from "../../service.json"
import Services from '../../components/card-service/Service';
import { ChauffeurTaxi } from '../../components/prestation';


const Acceuil = () => {

  console.log(service)

  return (
    <div className='acceuil'>
      <div className="acceuil__header"></div>
      
      <div className="acceuil__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="NOS PRESTATIONS" description="En exclusivité et pour une très très courte durée" />

                  <div className="prestation">

                    <div className="row">
                    {service && service.map((card, index) =>{
                    return <Services key={index} card={card}/>
                  })}
                    </div>
                      
                  </div>
              </div>

              <section className="stars mt-5 text-center">
                  <img src="assets/5-stars.png" alt="" />
                  <div className="container">
                    <h2>phc limousine</h2>
                    <p className="py-3">
                      Nos prestations haut-de-gamme se traduisent par un personnel sérieux à l'écoute, des professionnels de sécurité expérimentés ainsi qu'un service de location de limousines et voitures de luxe avec chauffeur. 
                    </p>
                    <span>Demande Spéciale? Appelez nous aujourd'hui</span> <br />
                    <span className="my-3 text-muted fw-bold">01 23 45 67 89</span>
                  </div>
              </section>

              <section className="temoignages pb-4 text-center ">
                  <div className="top flex-column">
                    <img src="assets/forum.png" className='my-3' alt="forum" /> <br />
                    <span>Notre dernier témoignage client !</span>
                  </div>
                  <p className="temoignage mt-3">
                    "Nous avons fait appel à PHC LIMOUSINE pour notre mariage ! Service impécable et un chauffeur très agréable, ce qui à rendu en partie notre mariage exceptionnel ! Un grand merci à PHC LIMOUSINE. "
                  </p>
                  <span className='text-muted'>Martha.b</span>
              </section>
          </div>
      </div>
    </div>
  )
}

export default Acceuil