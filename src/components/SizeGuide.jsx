import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { sizeChart } from '../data/products';

export default function SizeGuide({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="modal-content size-guide-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="modal-header">
              <h3>📏 サイズガイド</h3>
              <button onClick={onClose} className="modal-close">
                <FiX size={24} />
              </button>
            </div>

            <div className="modal-body">
              <p className="size-guide-intro">
                わんちゃんに最適なサイズを見つけましょう。胸囲と背丈を測って、下の表と照らし合わせてください。
              </p>

              <div className="size-guide-how">
                <h4>📐 測り方</h4>
                <div className="measure-steps">
                  <div className="measure-step">
                    <span className="step-number">1</span>
                    <p><strong>胸囲</strong>：前足の後ろの一番太い部分を測ります</p>
                  </div>
                  <div className="measure-step">
                    <span className="step-number">2</span>
                    <p><strong>首回り</strong>：首の付け根を測ります</p>
                  </div>
                  <div className="measure-step">
                    <span className="step-number">3</span>
                    <p><strong>背丈</strong>：首の付け根からしっぽの付け根まで</p>
                  </div>
                </div>
              </div>

              <div className="size-table-wrapper">
                <table className="size-table">
                  <thead>
                    <tr>
                      <th>サイズ</th>
                      <th>胸囲</th>
                      <th>首回り</th>
                      <th>背丈</th>
                      <th>体重</th>
                      <th>犬種の目安</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.map(row => (
                      <tr key={row.size}>
                        <td><span className="size-badge">{row.size}</span></td>
                        <td>{row.chest}</td>
                        <td>{row.neck}</td>
                        <td>{row.back}</td>
                        <td>{row.weight}</td>
                        <td className="breed-cell">{row.breeds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="size-guide-note">
                ⚠️ 迷った場合は大きめのサイズをお選びください。素材によってフィット感が異なる場合があります。
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
