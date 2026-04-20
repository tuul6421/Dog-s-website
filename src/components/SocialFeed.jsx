import { FaInstagram, FaTiktok, FaHeart, FaPlay } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { instagramPosts, tiktokVideos } from '../data/products';

function InstagramSection() {
  return (
    <div className="social-section">
      <div className="social-header">
        <div className="social-icon-wrapper instagram-gradient">
          <FaInstagram size={24} />
        </div>
        <div>
          <h3>Instagram</h3>
          <p>@wanwan_fashion</p>
        </div>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          フォローする <FiExternalLink size={14} />
        </a>
      </div>
      <div className="instagram-grid">
        {instagramPosts.map((post, i) => (
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            key={post.id}
            className="instagram-post"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={post.image} alt={post.caption} loading="lazy" />
            <div className="instagram-post-overlay">
              <span><FaHeart /> {post.likes.toLocaleString()}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function TikTokSection() {
  return (
    <div className="social-section">
      <div className="social-header">
        <div className="social-icon-wrapper tiktok-gradient">
          <FaTiktok size={24} />
        </div>
        <div>
          <h3>TikTok</h3>
          <p>@wanwan_fashion</p>
        </div>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          フォローする <FiExternalLink size={14} />
        </a>
      </div>
      <div className="tiktok-grid">
        {tiktokVideos.map((video, i) => (
          <motion.a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            key={video.id}
            className="tiktok-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="tiktok-thumbnail">
              <img src={video.thumbnail} alt={video.title} loading="lazy" />
              <div className="tiktok-play">
                <FaPlay size={20} />
              </div>
            </div>
            <div className="tiktok-info">
              <h4>{video.title}</h4>
              <div className="tiktok-stats">
                <span>👁 {video.views}</span>
                <span>❤️ {video.likes}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default function SocialFeed() {
  return (
    <section className="social-feed-section">
      <div className="section-header">
        <div className="section-badge">📱 SNSで話題</div>
        <h2 className="section-title">
          <span className="gradient-text">ソーシャルメディア</span>
        </h2>
        <p className="section-subtitle">最新のわんちゃんファッションをチェック！</p>
      </div>
      <InstagramSection />
      <TikTokSection />
    </section>
  );
}
