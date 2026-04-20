import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiTruck, FiRefreshCw, FiShield, FiStar } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import SocialFeed from '../components/SocialFeed';
import { products } from '../data/products';

const features = [
  { icon: <FiTruck size={28} />, title: '送料無料', desc: '¥5,000以上のご購入で送料無料' },
  { icon: <FiRefreshCw size={28} />, title: '30日間返品可', desc: 'サイズが合わなくても安心' },
  { icon: <FiShield size={28} />, title: '品質保証', desc: 'プレミアム素材を使用' },
  { icon: <FiStar size={28} />, title: '高評価', desc: 'お客様満足度 98%' },
];

const testimonials = [
  { name: '田中さん', dog: 'ゴールデンレトリバー', text: 'ジャケットがとても暖かくて、うちの子も大喜びです！サイズもぴったりでした。', rating: 5 },
  { name: '佐藤さん', dog: '柴犬', text: '着物がめちゃくちゃ可愛い！お正月に着せたら親戚みんなに褒められました。', rating: 5 },
  { name: '鈴木さん', dog: 'トイプードル', text: 'レインコートのおかげで雨の日のお散歩が楽しくなりました。デザインも最高！', rating: 4 },
];

export default function Home() {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-badge hero-badge">🐾 犬のファッション専門店</div>
            <h1 className="hero-title">
              愛犬に<span className="gradient-text">最高の</span><br />おしゃれを
            </h1>
            <p className="hero-subtitle">
              プレミアム素材で作られた、わんちゃんのための特別なファッションアイテム。
              サイズ豊富で全犬種対応！
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary btn-lg">
                ショッピングを始める →
              </Link>
              <Link to="/shop" className="btn btn-outline btn-lg">
                コレクションを見る
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><strong>500+</strong><span>商品</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><strong>98%</strong><span>満足度</span></div>
              <div className="hero-stat-divider" />
              <div className="hero-stat"><strong>10,000+</strong><span>お客様</span></div>
            </div>
          </motion.div>
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero-image-card glass-card">
              <span className="hero-emoji">🐕</span>
              <p className="hero-image-caption">トレンドコーデ 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">⭐ 人気商品</div>
            <h2 className="section-title">
              おすすめ<span className="gradient-text">アイテム</span>
            </h2>
            <p className="section-subtitle">お客様に一番人気の商品をピックアップ</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn btn-outline btn-lg">
              すべての商品を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Feed */}
      <section className="social-section-wrapper">
        <div className="container">
          <SocialFeed />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">💬 お客様の声</div>
            <h2 className="section-title">
              <span className="gradient-text">レビュー</span>
            </h2>
            <p className="section-subtitle">実際にご購入いただいたお客様の感想</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-stars">
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">🐕</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.dog}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <motion.div
            className="cta-content glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>🐾 あなたのわんちゃんにぴったりの一着を</h2>
            <p>新規会員登録で10%オフクーポンプレゼント中！</p>
            <Link to="/shop" className="btn btn-primary btn-lg">今すぐショッピング</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
