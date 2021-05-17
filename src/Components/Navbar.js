import React from 'react'
import Logo from '../logo/flowerly-logo.png'
import { FaOpencart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    return (
        <div className="nav-container">
            <div className="container">
                <nav>
                    <div className="logo-container">
                        <div className='logo'>
                            <Link to="/">
                                <img src={Logo} className='logo-image' alt='flowerly-logo' />
                            </Link>
                        </div>
                        <div className="search-bar">
                            <input type='text' placeholder='Search from our vast variety of flowers' className='search-bar-field' autoFocus />
                            <div className="search-icon">
                                <FiSearch className='search-symbol' />
                            </div>
                        </div>
                    </div>
                    <div className="nav-links-container">
                        <ul className='align-nav-links'>
                            <li><Link className='nav-items' to="/">Home</Link></li>
                            <li><Link className='nav-items' to="#">Login</Link></li>
                            <li><Link className='nav-items' to="#">24/7 customer support</Link></li>
                            <Link to='/cart'>
                                <li><a className='nav-items' href="#">
                                    <div className="product-cart">
                                        <FaOpencart style={{ fontSize: 25 }} />
                                        <h4 className='product-count'>{totalQuantities}</h4>
                                    </div>
                                </a></li>
                            </Link>
                        </ul>

                    </div>
                </nav >
            </div >
        </div >
    )
}

export default Navbar
