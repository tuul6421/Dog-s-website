import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { FiHeart, FiStar, FiAward } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="about-hero-content">
            <div className="section-badge">🐕 私たちについて</div>
            <h1 className="section-title">WanWan<span className="gradient-text">Fashion</span></h1>
            <p className="section-subtitle">わんちゃんと飼い主の笑顔のために</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <section className="about-story">
          <div className="about-story-grid">
            <motion.div className="about-image-wrapper" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="/images/profile.png" alt="わんちゃん" className="about-image" />
            </motion.div>
            <motion.div className="about-text" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2>ブランド<span className="gradient-text">ストーリー</span></h2>
              <p>WanWan Fashionは、愛犬家の夢から生まれたブランドです。大切な家族であるわんちゃんに、もっとおしゃれで快適な洋服を届けたい—そんな想いから2023年にスタートしました。</p>
              <p>日本の伝統的なデザインと現代のファッションを融合させた、他にはないドッグウェアをお届けしています。すべての商品は、わんちゃんの動きやすさと快適さを第一に考えて設計されています。</p>
              <p>InstagramとTikTokでは、最新のコーディネートやわんちゃんの日常を発信中！ぜひフォローしてくださいね 🐾</p>
              <div className="about-social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><FaInstagram /> @wanwan_fashion</a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><FaTiktok /> @wanwan_fashion</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="about-values">
          <div className="section-header">
            <h2 className="section-title">私たちの<span className="gradient-text">こだわり</span></h2>
          </div>
          <div className="values-grid">
            {[
              { icon: <FiHeart size={32} />, title: '愛情をこめて', desc: '一つひとつ心を込めて作られた、わんちゃんのための特別な一着' },
              { icon: <FiStar size={32} />, title: 'プレミアム品質', desc: '肌に優しい素材だけを使用。安全性と快適さを最優先に' },
              { icon: <FiAward size={32} />, title: '日本製デザイン', desc: '日本の伝統美と最新トレンドを融合したオリジナルデザイン' },
            ].map((v, i) => (
              <motion.div key={i} className="value-card glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="about-gallery">
          <div className="section-header">
            <h2 className="section-title">ギャラリー<span className="gradient-text"> 📸</span></h2>
          </div>
          <div className="gallery-grid">
            {['/images/dog-jacket.png','/images/dog-kimono.png','/images/dog-sweater.png','/images/dog-hoodie.png','/images/dog-raincoat.png','/images/dog-tshirt.png'].map((img, i) => (
              <motion.div key={i} className="gallery-item" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                <img src={img} alt="ギャラリー" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <motion.div className="cta-content glass-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>🐾 お気に入りの一着を見つけよう</h2>
            <p>今すぐショップをチェック！</p>
            <Link to="/shop" className="btn btn-primary btn-lg">ショップを見る</Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
