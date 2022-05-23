import React from 'react'

export const ChauffeurTaxi = ({titre, description}) => {
  return (
    <>
        <div className="top text-center mb-5">
            <img src="/assets/private-chauffeur.png" alt="" />

            <div className="title">
                <h2 className='text-uppercase'>{titre}</h2>
                <span className="text-danger fw-bold">{description}</span>
            </div>
        </div>
    </>
  )
}
