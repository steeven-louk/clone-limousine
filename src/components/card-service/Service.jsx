import React from 'react';
import "./styles/style.scss";


const Services = ({card}) => {
  return (
    <>
           
        <div className="card col-md-6 col-12 p-3">
            <img src={card.img} alt={card.title} className="card-img-top border" />
            <div className="card-body text-center">
                <h3 className="card-title">{card.title}</h3>
                <p className="desc">
                    {card.desc}
                </p>
                <a href="/">Plus d'informations</a>
            </div>
        </div>
          
    </>
  )
}

export default Services