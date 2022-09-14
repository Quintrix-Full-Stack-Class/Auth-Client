import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDollar} from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand-left" href="/#!"><FontAwesomeIcon icon={faDollar} size="2x" color='green'></FontAwesomeIcon></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

  
        </div>
    </div>
</nav>
  )
}

export default Nav