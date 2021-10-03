import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Services from '../../Services/Services'
import CheckVotes from '../../Helpers/CheckVotes'
import RemoveVote from '../../Helpers/RemoveVote'
import Navbar from '../Navbar/Navbar'

export default function SuperHero() {

  const { id } = useParams()

  const [hero, setHero] = useState([])
  const [negativeVote, setNegativeVote] = useState(false)

  function handleAddVotes(superhero_id){
    const  activateNegativeVote = CheckVotes(superhero_id)
    if(activateNegativeVote && !negativeVote){
      setNegativeVote(!negativeVote)
    }
  }

  function handleSubtractVotes(superhero_id){
    const deactivateNegativeVote = RemoveVote(superhero_id)
    if(deactivateNegativeVote && negativeVote){
      setNegativeVote(!negativeVote)
    }
  }

  useEffect(() => {
    const activateNegativeVote = CheckVotes(id)
    setNegativeVote(activateNegativeVote)

    Services.superhero(id).then(response => {
      setHero(response.data)
    })
  },[])


  return (
    <Fragment >
      <Navbar />
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
                        <div className="me-3">
                        <FontAwesomeIcon icon={faThumbsUp} onClick={() => handleAddVotes(hero.id)}/> 
                        </div>
                        {negativeVote ? (
                          <FontAwesomeIcon icon={faThumbsDown} onClick={() => handleSubtractVotes(hero.id)}/>
                        ) : (
                          <div></div>
                        )}
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
