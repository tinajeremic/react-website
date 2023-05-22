import React from 'react'
import {BsSearch} from "react-icons/bs"

const Nav = ({pretrazi}) => {
  return (
    <nav className="navbar">
    <div className="container">
    <div className="logo"></div>
    <div className="nav-elements">
        <ul>
            <li>Home</li>
            <li>Dates</li>
            <li>Your dates</li>

            <li>
                <input 
                type="text" 
                id="kriterijum"
                placeholder="Search dates"
                name="search"
                onChange={() =>
                    pretrazi(document.getElementById("kriterijum").value)
                  }
                />
                <button type="submit" className="dugmePretraga">
                {" "}
                <BsSearch></BsSearch>{" "}
                </button>
            </li>
        </ul>

    </div>
    </div>
    </nav>
  )
}

export default Nav
