import { FaLine } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LineFloatingButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="line-floating-wrapper">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="line-popup"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <button className="line-popup-close" onClick={() => setShowPopup(false)}>
              <FiX size={16} />
            </button>
            <div className="line-popup-content">
              <FaLine size={32} className="line-popup-icon" />
              <h4>LINE友だち追加</h4>
              <p>お得なクーポンや新商品情報をお届け！</p>
              <a
                href="https://line.me/R/ti/p/@wanwanfashion"
                target="_blank"
                rel="noopener noreferrer"
                className="line-popup-btn"
              >
                <FaLine size={18} />
                友だちに追加する
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="line-floating-btn"
        onClick={() => setShowPopup(!showPopup)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="LINE友だち追加"
      >
        <FaLine size={28} />
      </motion.button>
    </div>
  );
}
