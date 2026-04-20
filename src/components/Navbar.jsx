import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'ホーム' },
    { to: '/shop', label: 'ショップ' },
    { to: '/about', label: '私たちについて' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🐕</span>
          <span className="logo-text">WanWan<span className="logo-accent">Fashion</span></span>
        </Link>

        <div className="nav-center">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" title="TikTok">
            <FaTiktok />
          </a>
          <button className="cart-button" onClick={toggleCart} aria-label="カート">
            <FiShoppingBag size={20} />
            {totalItems > 0 && (
              <motion.span
                className="cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={totalItems}
              >
                {totalItems}
              </motion.span>
            )}
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="メニュー"
          >
            {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-link ${location.pathname === link.to ? 'mobile-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /> Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /> TikTok</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
