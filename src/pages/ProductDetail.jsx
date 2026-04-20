import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiHeart, FiShare2, FiChevronLeft } from 'react-icons/fi';
import { FaInstagram, FaTiktok, FaLine } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import SizeGuide from '../components/SizeGuide';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) {
    return (
      <div className="not-found-page container">
        <h2>商品が見つかりません</h2>
        <Link to="/shop" className="btn btn-primary">ショップに戻る</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('サイズを選択してください');
      return;
    }
    addToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const displayPrice = product.salePrice || product.price;
  const shareUrl = window.location.href;

  return (
    <div className="product-detail-page">
      <div className="container">
        <Link to="/shop" className="back-link">
          <FiChevronLeft /> ショップに戻る
        </Link>

        <div className="product-detail-grid">
          <motion.div
            className="product-detail-image"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="detail-image-wrapper">
              <img src={product.image} alt={product.name} />
              <div className="detail-badges">
                {product.isNew && <span className="tag tag-new">NEW</span>}
                {product.salePrice && (
                  <span className="tag tag-sale">
                    {Math.round((1 - product.salePrice / product.price) * 100)}%OFF
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="product-detail-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="detail-category">{product.category}</div>
            <h1 className="detail-name">{product.name}</h1>

            <div className="detail-rating">
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
              <span>{product.rating}</span>
              <span className="review-count">({product.reviews}件のレビュー)</span>
            </div>

            <div className="detail-price">
              {product.salePrice ? (
                <>
                  <span className="price-sale-large">¥{product.salePrice.toLocaleString()}</span>
                  <span className="price-original-large">¥{product.price.toLocaleString()}</span>
                </>
              ) : (
                <span className="price-current-large">¥{product.price.toLocaleString()}</span>
              )}
              <span className="tax-note">（税込）</span>
            </div>

            <p className="detail-description">{product.description}</p>

            <div className="detail-tags">
              {product.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div className="detail-size-section">
              <div className="size-header">
                <span>サイズ選択</span>
                <button className="size-guide-link" onClick={() => setShowSizeGuide(true)}>
                  📏 サイズガイド
                </button>
              </div>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'size-btn-active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="detail-actions">
              <button
                className={`btn btn-primary btn-lg btn-add-to-cart ${addedAnimation ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                <FiShoppingBag />
                {addedAnimation ? 'カートに追加しました！ ✓' : 'カートに入れる'}
              </button>
              <button className="btn-icon">
                <FiHeart size={20} />
              </button>
            </div>

            <div className="detail-share">
              <span>シェアする:</span>
              <a
                href={`https://www.instagram.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={`https://www.tiktok.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn share-btn-line"
              >
                <FaLine size={18} />
              </a>
              <button
                className="share-btn"
                onClick={() => navigator.clipboard.writeText(shareUrl)}
              >
                <FiShare2 size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-section">
            <h2 className="section-title">関連<span className="gradient-text">商品</span></h2>
            <div className="products-grid">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>

      <SizeGuide isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
    </div>
  );
}
