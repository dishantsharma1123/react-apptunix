import React from 'react'
import PaymentGatewaysIcon from '../payment-gateways-icon/payment-method.png'
import { MdStars } from 'react-icons/md';
import { FiGift } from 'react-icons/fi';
import { BiHelpCircle } from 'react-icons/bi';
import { RiShoppingBag2Line } from 'react-icons/ri';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-menu-section">
                    <ul className='about-footer footer-menu-width'>
                        <li className='footer-menu-head'>About:</li>
                        <li><a href="/" className='footer-links-width'>Contact Us</a></li>
                        <li><a href="/" className='footer-links-width'>About Us</a></li>
                        <li><a href="/" className='footer-links-width'>Careers</a></li>
                        <li><a href="/" className='footer-links-width'>Flowerly Stories</a></li>
                        <li><a href="/" className='footer-links-width'>Press</a></li>
                        <li><a href="/" className='footer-links-width'>Flowerly Wholesale</a></li>
                    </ul>
                    <ul className='help-footer footer-menu-width'>
                        <li className='footer-menu-head'>Help:</li>
                        <li><a href="/" className='footer-links-width'>Payments</a></li>
                        <li><a href="/" className='footer-links-width'>Shipping</a></li>
                        <li><a href="/" className='footer-links-width'>Cancellation & Returns</a></li>
                        <li><a href="/" className='footer-links-width'>FAQ</a></li>
                        <li><a href="/" className='footer-links-width'>Report Infringement</a></li>
                    </ul>
                    <ul className='policy-footer footer-menu-width'>
                        <li className='footer-menu-head'>Policy:</li>
                        <li><a href="/" className='footer-links-width'>Return Policy</a></li>
                        <li><a href="/" className='footer-links-width'>Terms of Use</a></li>
                        <li><a href="/" className='footer-links-width'>Security</a></li>
                        <li><a href="/" className='footer-links-width'>Privacy</a></li>
                        <li><a href="/" className='footer-links-width'>Sitemap</a></li>
                        <li><a href="/" className='footer-links-width'>EPR Compilance</a></li>
                    </ul>
                    <ul className='social-footer footer-menu-width'>
                        <li className='footer-menu-head'>Social:</li>
                        <li><a href="/" className='footer-links-width'>Facebook</a></li>
                        <li><a href="/" className='footer-links-width'>Twitter</a></li>
                        <li><a href="/" className='footer-links-width'>YouTube</a></li>
                    </ul>
                    <ul className='address-footer footer-menu-width'>
                        <li className='footer-menu-head'>Registered Office Address:</li>
                        <li>Gr Flr, 184, Samuel Street, Masjid Bunder (east)</li>
                        <li>Mumbai</li>
                        <li>Maharashtra</li>
                        <li>400009</li>
                        <li>Telephone: 02265058421</li>
                        <li>Mail: sales@flowerly.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright-section">
                <div className='footer-extras'>
                    <RiShoppingBag2Line className='icon-style' />
                    <h5><a href='/'>Sell on Flowerly</a></h5>
                </div>
                <div className='footer-extras'>
                    <MdStars className='icon-style' />
                    <h5><a href='/'>Advertise</a></h5>
                </div>
                <div className='footer-extras'>
                    <FiGift className='icon-style' />
                    <h5><a href='/'>Gift Cards</a></h5>
                </div>
                <div className='footer-extras'>
                    <BiHelpCircle className='icon-style' />
                    <h5><a href='/'>Help Center</a></h5>
                </div>
                <h5>© 2007-2021 Flowerly.com</h5>
                <img src={PaymentGatewaysIcon} alt="supported payment options" />
            </div>
        </div>
    )
}

export default Footer
