import { Link } from 'react-router-dom';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      className="product-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/product/${product.id}`} className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-image-overlay">
          <span className="view-detail-btn">詳細を見る 🐾</span>
        </div>
        <div className="product-badges">
          {product.isNew && <span className="tag tag-new">NEW</span>}
          {product.salePrice && (
            <span className="tag tag-sale">
              {Math.round((1 - product.salePrice / product.price) * 100)}%OFF
            </span>
          )}
        </div>
        <button className="wishlist-btn" onClick={(e) => { e.preventDefault(); }}>
          <FiHeart size={18} />
        </button>
      </Link>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="product-price-row">
          <div className="product-prices">
            {product.salePrice ? (
              <>
                <span className="price-sale">¥{product.salePrice.toLocaleString()}</span>
                <span className="price-original">¥{product.price.toLocaleString()}</span>
              </>
            ) : (
              <span className="price-current">¥{product.price.toLocaleString()}</span>
            )}
          </div>
          <Link to={`/product/${product.id}`} className="btn-add-quick" title="詳細を見る">
            <FiShoppingBag size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
