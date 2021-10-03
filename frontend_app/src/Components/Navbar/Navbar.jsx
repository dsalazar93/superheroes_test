import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white">SuperHeroes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/ranking" className="nav-link text-white">Top 10 de SuperHeroes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}
