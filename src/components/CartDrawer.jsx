import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.div
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="cart-header">
              <h3><FiShoppingBag /> カート ({totalItems})</h3>
              <button onClick={closeCart} className="cart-close-btn">
                <FiX size={24} />
              </button>
            </div>

            <div className="cart-body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <span className="cart-empty-icon">🛒</span>
                  <p>カートは空です</p>
                  <Link to="/shop" className="btn btn-primary" onClick={closeCart}>
                    ショッピングを始める
                  </Link>
                </div>
              ) : (
                <div className="cart-items">
                  <AnimatePresence>
                    {items.map(item => (
                      <motion.div
                        key={`${item.id}-${item.size}`}
                        className="cart-item"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        layout
                      >
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-info">
                          <h4>{item.name}</h4>
                          <p className="cart-item-size">サイズ: {item.size}</p>
                          <p className="cart-item-price">
                            ¥{(item.salePrice || item.price).toLocaleString()}
                          </p>
                        </div>
                        <div className="cart-item-actions">
                          <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>
                              <FiMinus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>
                              <FiPlus size={14} />
                            </button>
                          </div>
                          <button
                            className="cart-item-remove"
                            onClick={() => removeFromCart(item.id, item.size)}
                          >
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <span>合計</span>
                  <span className="cart-total-price">¥{totalPrice.toLocaleString()}</span>
                </div>
                <Link to="/checkout" className="btn btn-primary btn-full btn-lg" onClick={closeCart}>
                  レジに進む →
                </Link>
                <Link to="/cart" className="btn btn-outline btn-full" onClick={closeCart}>
                  カートを見る
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
