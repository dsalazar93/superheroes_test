import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Services from '../../Services/Services'

export default function SuperHero() {

  const { id } = useParams()

  const [hero, setHero] = useState([])

  useEffect(() => {
    Services.superhero(id).then(response => {
      setHero(response.data)
    })
  },[])


  return (
    <Fragment >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-5 mb-3">
            <h1 className="text-center">Súper Héroes de MARVEL</h1>
            <Link to="/">
              Regresar
            </Link>
          </div>
          {hero.length !== 0 ? (
            <div className="col-10 offset-1">
            <div className="row">
              <div className="col-4">
                <div className="row p-3">
                  <div className="col-12">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} className="w-100" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-8 border rounded">
                <div className="row p-3">
                  <div className="col-12">
                    <h3>{hero.name}</h3>
                    <p>{hero.description}</p>
                    <div className="row">
                      <div className="col-12 d-flex justify-content-end">
                        <FontAwesomeIcon icon={faThumbsUp} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) : (
            <div>Cargando</div>
          )}
          
        </div>
      </div>

    </Fragment>
  )
}
