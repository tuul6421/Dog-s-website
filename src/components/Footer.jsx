import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { FiMail, FiMapPin, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span>🐕</span> WanWan<span className="logo-accent">Fashion</span>
            </Link>
            <p className="footer-desc">
              わんちゃんのためのプレミアムファッションブランド。おしゃれで機能的な犬服を、愛犬家のみなさまにお届けします。
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="TikTok">
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>ショップ</h4>
            <Link to="/shop">すべての商品</Link>
            <Link to="/shop?category=ジャケット">ジャケット</Link>
            <Link to="/shop?category=セーター">セーター</Link>
            <Link to="/shop?category=着物">着物・浴衣</Link>
          </div>

          <div className="footer-links-group">
            <h4>サポート</h4>
            <Link to="/about">私たちについて</Link>
            <a href="#">サイズガイド</a>
            <a href="#">配送について</a>
            <a href="#">返品・交換</a>
          </div>

          <div className="footer-contact">
            <h4>お問い合わせ</h4>
            <div className="contact-item">
              <FiMail size={16} />
              <span>info@wanwanfashion.jp</span>
            </div>
            <div className="contact-item">
              <FiMapPin size={16} />
              <span>東京都渋谷区</span>
            </div>
            <div className="newsletter">
              <p>ニュースレター登録</p>
              <div className="newsletter-form">
                <input type="email" placeholder="メールアドレス" />
                <button className="btn btn-primary btn-sm">登録</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 WanWan Fashion. Made with <FiHeart className="heart-icon" /> for dogs 🐾</p>
        </div>
      </div>
    </footer>
  );
}
