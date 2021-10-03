import React, { Fragment, useState, useEffect} from 'react'

import Card from '../Card/Card'
import Services from '../../Services/Services'

import './styles/home.css'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    Services.allSuperHeroes().then(response => {
      setHeroes(response.data.data.results)
    })
  },[])

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-5 mb-3">
            <h1 className="text-center">Súper Héroes de MARVEL</h1>
          </div>
          {heroes.map((hero) => ( <Card key={hero.id} data={hero} /> ))}
        </div>
      </div>
    </Fragment>
  )
}
