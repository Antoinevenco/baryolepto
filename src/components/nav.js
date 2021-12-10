import React from 'react'
import { Link } from 'gatsby'
import '../pages/styles/components/nav.scss'

// Import components
import Logo from '../assets/svg/baryo_logo.svg'

const Nav = () => {
    return (
        <div className="nav-temp">
            <Link to="/">
                <Logo />
            </Link>
            <div>
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Nav
