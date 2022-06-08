import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
  return (
        <header>
            <div className='header-container'>
                <div className='title'>
                    <Link to="/homePage">
                        Concentration Game
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/homePage">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/theGamePage">
                                The Game
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutUsPage">
                                About Us
                            </Link>
                        </li>
                        <li>
                        <Link to="/instructionsPage">
                            Instructions
                        </Link>
                        </li>
                    </ul>

                </nav>
            </div>

        </header>


    
  )
}
