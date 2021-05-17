import React from 'react'
import heroImage from '../hero-section/hero.jpg'

function Header() {
    return (
        <div className='container'>
            <div className="hero-section">
                <img className='hero-image' src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default Header
