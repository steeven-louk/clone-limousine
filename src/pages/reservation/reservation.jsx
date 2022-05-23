import React from 'react'
import "./styles/style.scss";

import { ChauffeurTaxi } from '../../components/prestation';


const Reservation = () => {


  return (
    <div className='acceuil'>
   
      
      <div className="acceuil__content">
          <div className="container">
              <div className="nos__prestation">
                  <ChauffeurTaxi titre="RESERVATION EN LIGNE" description="Offrez vous un transfert prestigieux et confortable !" />
              </div>

              <p className='text-center'>
                 Remplissez le formulaire ci-dessous, notre équipe confirmera votre réservation dans les meilleurs délais par téléphone ou retour e-mail.
              </p>

              <section className="pb-4 text-center formulaire ">

                 <form action="" className='p-3 bg-secondary'>
                    <div className="form-group">
                      <input type="text" placeholder='votre nom et prenom:' className='form-control mt-3' />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder='Adresse de prise en charge' className='form-control mt-3' />
                      </div>
                    <div className="form-group">
                      <input type="text" placeholder='Adresse de fin de parcours' className='form-control mt-3' />
                      </div>
                    <div className="form-group">
                      <input type="text" placeholder='Date' className='form-control mt-3' />
                      </div>
                    <div className="form-group">
                      <input type="text" placeholder='Heure de rendez-vous' className='form-control mt-3' />
                      </div>
                    <div className="form-group">
                      <input type="text" placeholder='Durée de la prestation' className='form-control mt-3' />
                      </div>
                    <div className="form-group">
                      <input type="text" placeholder='Téléphone*' required className='form-control mt-3' />
                      </div>
                    <div className="form-group">
                      <input type="text" placeholder='Email*' required className='form-control mt-3' />
                      </div>
                    <div className="form-group">
                      <textarea name="" placeholder='Remarque ou précision' className='form-control mt-3' id="" cols="30" rows="6"></textarea>
                    </div>

                    <input type="submit" className="btn btn-primary text-center mt-4" value="Envoyer"/>
                 </form>

              </section>
          </div>
      </div>
    </div>
  )
}

export default Reservation