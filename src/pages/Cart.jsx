import { Link } from 'react-router-dom';
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page-empty container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="empty-state">
          <span className="empty-icon">🛒</span>
          <h2>カートは空です</h2>
          <p>まだ商品が追加されていません</p>
          <Link to="/shop" className="btn btn-primary btn-lg"><FiShoppingBag /> ショッピングを始める</Link>
        </motion.div>
      </div>
    );
  }

  const shippingFee = totalPrice >= 5000 ? 0 : 500;
  const grandTotal = totalPrice + shippingFee;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page-header">
          <Link to="/shop" className="back-link"><FiArrowLeft /> 買い物を続ける</Link>
          <h1 className="section-title">ショッピング<span className="gradient-text">カート</span></h1>
        </div>
        <div className="cart-layout">
          <div className="cart-items-list">
            {items.map((item, i) => (
              <motion.div key={`${item.id}-${item.size}`} className="cart-page-item glass-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link to={`/product/${item.id}`} className="cart-page-item-image"><img src={item.image} alt={item.name} /></Link>
                <div className="cart-page-item-details">
                  <Link to={`/product/${item.id}`}><h3>{item.name}</h3></Link>
                  <p className="item-size">サイズ: {item.size}</p>
                  <p className="item-price">¥{(item.salePrice || item.price).toLocaleString()}</p>
                </div>
                <div className="cart-page-item-controls">
                  <div className="quantity-controls-large">
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}><FiMinus /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}><FiPlus /></button>
                  </div>
                  <p className="item-subtotal">¥{((item.salePrice || item.price) * item.quantity).toLocaleString()}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size)}><FiTrash2 size={16} /></button>
                </div>
              </motion.div>
            ))}
            <button className="btn btn-ghost clear-cart-btn" onClick={clearCart}>カートを空にする</button>
          </div>
          <motion.div className="cart-summary glass-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h3>注文サマリー</h3>
            <div className="summary-row"><span>小計</span><span>¥{totalPrice.toLocaleString()}</span></div>
            <div className="summary-row"><span>送料</span><span>{shippingFee === 0 ? '無料 🎉' : `¥${shippingFee}`}</span></div>
            {shippingFee > 0 && <p className="shipping-note">あと¥{(5000 - totalPrice).toLocaleString()}で送料無料！</p>}
            <div className="summary-divider" />
            <div className="summary-row summary-total"><span>合計</span><span>¥{grandTotal.toLocaleString()}</span></div>
            <Link to="/checkout" className="btn btn-primary btn-full btn-lg">レジに進む →</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
