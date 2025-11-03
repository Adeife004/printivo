import { useState, useEffect } from 'react'
import style from './Navbar.module.css'
import whatsappIcon from '../assets/whatsapp.svg'
import nigeriaFlag from '../assets/nigeria-flag.svg'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* header */}
      <header className={isScrolled ? style.scrolled : ''}>
        {/* top-banner */}
        <div className={style.top}>
          <ul>
            <li><a href="#">Cost Calculator</a></li>
            <li><a href="#">Discover Stores</a></li>
            <li><a href="#">Track Orders</a></li>
          </ul>

          {/* call */}
          <div className={style.top_right}>
            {/* phone */}
            <div className={style.phone}>
              <p>Need Help? Call:</p>
              <p>+2348068764209 or +2348081310633</p>
            </div>
            {/* whatsapp and country */}
            <div className={style.whatsapp_country}>
              <a href="#">
<img src={whatsappIcon} alt="WhatsApp" />
              </a>

              <div className={style.country}>
                <img src={nigeriaFlag} alt="Nigeria Flag" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* navbar */}
        <nav className={style.navbar}>
          {/* logo */}
          <div className={style.logo}>
            <img src={logo} alt="Printivo Logo" />

          </div>

          {/* Hamburger Menu */}
          <button
            className={`${style.hamburger} ${isMenuOpen ? style.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${style.nav_right} ${isMenuOpen ? style.open : ''}`}>
            {/* navlinks */}
            <ul className={style.navlinks}>
              <li><a href="#" onClick={closeMenu}>All Products</a></li>
              <li><a href="#" onClick={closeMenu}>Become A Reseller</a></li>
              <li><a href="#" onClick={closeMenu}>Merch Store</a></li>
              <li><a href="#" onClick={closeMenu}>Marketplace</a></li>
            </ul>

            {/* nav-buttons */}
            <div className={style.nav_buttons}>
              <a href="#" onClick={closeMenu}>Sign In</a>
              <a href="#" onClick={closeMenu}>Create Account</a>

              {/* cart */}
              <a href="#" onClick={closeMenu}>
                <button className={style.cart_button}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className={style.cart_number}>0</span>
                </button>
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className={style.overlay} onClick={closeMenu}></div>
        )}
      </header>
    </>
  )
}

export default Navbar