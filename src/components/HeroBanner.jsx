import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaLine } from 'react-icons/fa';

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/hero-bg.png" alt="" className="hero-bg-image" />
        <div className="hero-bg-overlay" />
        <div className="hero-gradient-orb hero-orb-1" />
        <div className="hero-gradient-orb hero-orb-2" />
      </div>

      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="section-badge">🐾 2025年 新コレクション</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            わんちゃんの
            <br />
            <span className="gradient-text">おしゃれ</span>を
            <br />
            もっと楽しく
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            プレミアムなドッグファッションで、<br className="mobile-br" />愛犬との毎日をもっと特別に。
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/shop" className="btn btn-primary btn-lg">
              ショップを見る 🛍️
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              ブランドストーリー
            </Link>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hero-social-btn">
              <FaInstagram size={18} /> Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hero-social-btn">
              <FaTiktok size={18} /> TikTok
            </a>
            <a href="https://line.me/R/ti/p/@wanwanfashion" target="_blank" rel="noopener noreferrer" className="hero-social-btn hero-social-line">
              <FaLine size={18} /> LINE
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="hero-stat">
            <span className="hero-stat-number">10K+</span>
            <span className="hero-stat-label">フォロワー</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">500+</span>
            <span className="hero-stat-label">レビュー</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">50+</span>
            <span className="hero-stat-label">商品数</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="scroll-arrow"
        />
      </div>
    </section>
  );
}
