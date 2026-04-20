import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', address: '', note: '' });

  const shippingFee = totalPrice >= 5000 ? 0 : 500;
  const grandTotal = totalPrice + shippingFee;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
  };

  if (orderComplete) {
    return (
      <div className="checkout-complete container">
        <motion.div className="complete-card glass-card" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="complete-icon">🎉</div>
          <h2>ご注文ありがとうございます！</h2>
          <p>注文確認メールをお送りしました。</p>
          <p className="order-number">注文番号: #WF-{Math.floor(Math.random() * 90000 + 10000)}</p>
          <Link to="/shop" className="btn btn-primary btn-lg">ショッピングを続ける</Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-page-empty container">
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <h2>カートは空です</h2>
          <Link to="/shop" className="btn btn-primary btn-lg">ショッピングを始める</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="cart-page-header">
          <Link to="/cart" className="back-link"><FiArrowLeft /> カートに戻る</Link>
          <h1 className="section-title">ご注文<span className="gradient-text">手続き</span></h1>
        </div>
        <form className="checkout-layout" onSubmit={handleSubmit}>
          <div className="checkout-form">
            <div className="form-section glass-card">
              <h3>📦 配送先情報</h3>
              <div className="form-grid">
                <div className="form-group full">
                  <label htmlFor="name">お名前 *</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="山田太郎" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">メールアドレス *</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="example@mail.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">電話番号 *</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="090-1234-5678" required />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">郵便番号 *</label>
                  <input type="text" id="zip" name="zip" value={form.zip} onChange={handleChange} placeholder="123-4567" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="address">住所 *</label>
                  <input type="text" id="address" name="address" value={form.address} onChange={handleChange} placeholder="東京都渋谷区..." required />
                </div>
                <div className="form-group full">
                  <label htmlFor="note">備考</label>
                  <textarea id="note" name="note" value={form.note} onChange={handleChange} placeholder="配送に関するご要望など" rows="3" />
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-summary">
            <div className="glass-card checkout-summary-card">
              <h3>注文内容</h3>
              <div className="checkout-items">
                {items.map(item => (
                  <div key={`${item.id}-${item.size}`} className="checkout-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="checkout-item-name">{item.name}</p>
                      <p className="checkout-item-detail">{item.size} × {item.quantity}</p>
                    </div>
                    <span>¥{((item.salePrice || item.price) * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="summary-divider" />
              <div className="summary-row"><span>小計</span><span>¥{totalPrice.toLocaleString()}</span></div>
              <div className="summary-row"><span>送料</span><span>{shippingFee === 0 ? '無料 🎉' : `¥${shippingFee}`}</span></div>
              <div className="summary-divider" />
              <div className="summary-row summary-total"><span>合計</span><span>¥{grandTotal.toLocaleString()}</span></div>
              <button type="submit" className="btn btn-primary btn-full btn-lg">
                <FiCheck /> 注文を確定する
              </button>
              <p className="checkout-note">※ デモサイトのため実際の決済は行われません</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
