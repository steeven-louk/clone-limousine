import React from 'react';
import "./styles/style.scss";

import { Link } from 'react-router-dom';

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
                <Link to={card.link}>Plus d'informations</Link>
            </div>
        </div>
          
    </>
  )
}

export default Services