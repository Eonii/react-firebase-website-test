import React from 'react'
import { Link } from 'react-router-dom'
import SingnedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo">Logo</Link>
                <SingnedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar