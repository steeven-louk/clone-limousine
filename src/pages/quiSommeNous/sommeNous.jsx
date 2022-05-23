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

                  <div className="prestation">

                   
                      
                  </div>
              </div>


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

export default QuiSommeNous