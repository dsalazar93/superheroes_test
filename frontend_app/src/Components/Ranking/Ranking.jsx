import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Carousel from 'react-elastic-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import Navbar from '../Navbar/Navbar'
import TopTen from '../../Helpers/TopTen'
import Services from '../../Services/Services'

import './styles.css'

export default function Ranking() {

  const [items, setItems] = useState([])
  const [itemsCarousel, setItemsCarousel] = useState(0)

  useEffect(() => {
    const topTenSuperHeroes = TopTen()
    const topTenIds = topTenSuperHeroes.map((hero) => {
      return hero.id
    })

    Services.superheroesRanking(JSON.stringify(topTenIds)).then(response => {
      let dataHeroes = response.data
      const completeDataHeroes = topTenSuperHeroes.map((hero, i) => {
        dataHeroes[i].votes = hero.votes
        return dataHeroes[i]
      })
      setItems(completeDataHeroes)
      if(completeDataHeroes.length < 3){
        setItemsCarousel(completeDataHeroes.length)
      } else {
        setItemsCarousel(3)
      }
    })
  },[])


  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-5 mb-3">
            <h1 className="text-center">Súper Heroes mas votados</h1>
            <div className="row">
              <div className="col-10 offset-1">
                {items.length !== 0 ? (
                  <Carousel itemsToShow={itemsCarousel}>
                    {items.map(hero => 
                      <div className="row" key={hero.id}>
                        <div className="col-12 p-3">
                          <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} className="w-100 ranking-img" alt="" />
                          <h5 className="text-center">{hero.name}</h5>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                              <div className="me-3">
                                <FontAwesomeIcon icon={faStar} /> 
                              </div>
                              {hero.votes}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Carousel>

                ) : (
                  <div>Cargando</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
