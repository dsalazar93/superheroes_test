import React, {Fragment, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Vote from "../../Helpers/Vote"
import RemoveVote from "../../Helpers/RemoveVote"
import CheckVotes from "../../Helpers/CheckVotes"


import './styles/card.css'

export default function Card(hero){

  const [negativeVote, setNegativeVote] = useState(false)

  function handleAddVotes(superhero_id){
    const  activateNegativeVote = Vote(superhero_id)
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
    const activateNegativeVote = CheckVotes(hero.data.id)
    setNegativeVote(activateNegativeVote)
  },[])

  return(
    <Fragment>
      <div className="col-12 col-md-4 mb-3 d-flex align-items-center cardHero">
        <div className="row p-3 h-100 border">
          <div className="col-12 h-100">
            <div className="row">
              <div className="col-4 d-flex align-items-center justify-content-center">
                <Link to={`/superhero/${hero.data.id}`} >
                  <img className="w-100" src={`${hero.data.thumbnail.path}.${hero.data.thumbnail.extension}`} alt="Heroe" />
                </Link>
              </div>
              <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                <Link to={`/superhero/${hero.data.id}`} >
                  <h5>{hero.data.name}</h5>
                </Link>
                <p>{hero.data.description !== '' ? hero.data.description.substring(0, 141) + '...' : ''}</p>
              </div>
              <div className="col-12 d-flex justify-content-end">
                <div className="me-3">
                  <FontAwesomeIcon icon={faThumbsUp} onClick={() => handleAddVotes(hero.data.id)}/>
                </div>
                {negativeVote ? (
                  <FontAwesomeIcon icon={faThumbsDown} onClick={() => handleSubtractVotes(hero.data.id)}/>
                ) : (
                  <div></div>
                )}
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Fragment>
  )
}