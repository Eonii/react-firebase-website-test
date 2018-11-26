import React from 'react'
import { Link } from 'react-router-dom'
import SingnedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue-grey darken-4">
            <div className="container">
                <Link to='/' className="brand-logo left">Company</Link>
                <SingnedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar