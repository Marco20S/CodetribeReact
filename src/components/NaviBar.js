import React from 'react'
import {Link} from "react-router-dom"

const NavigationBar = () => {
return (
   
    <nav className='Navbar'>
        <h3 className='Logo'><img src="./orange.png" className='team-img' alt='logo'/></h3> 
    <div className="nav-elements">
        <ul className='nav-links'>

            <Link to='/App'><li>Home</li></Link>
            <Link to='/About'><li>About</li></Link>
            <Link to='/Twitter'><li>Twitter</li></Link>
            <Link to='/Twitter'><li>Telegram</li></Link>






        </ul>
    </div>
    </nav>
)

}

export default NavigationBar