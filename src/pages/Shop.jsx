import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'すべて';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'すべて') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.includes(q))
      );
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'すべて') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="section-badge">🛍️ ショップ</div>
            <h1 className="section-title">すべての<span className="gradient-text">商品</span></h1>
            <p className="section-subtitle">わんちゃんにぴったりのアイテムを見つけよう</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="shop-controls">
          <div className="search-bar">
            <FiSearch size={18} />
            <input
              type="text"
              placeholder="商品を検索..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              id="shopSearch"
            />
          </div>

          <div className="filter-controls">
            <div className="category-filters">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? 'category-btn-active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <select
              className="sort-select"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              id="shopSort"
            >
              <option value="default">並び替え</option>
              <option value="price-low">価格: 安い順</option>
              <option value="price-high">価格: 高い順</option>
              <option value="rating">評価順</option>
              <option value="reviews">レビュー数順</option>
            </select>
          </div>
        </div>

        <div className="shop-results-info">
          <span>{filteredProducts.length}件の商品</span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <span className="shop-empty-icon">🔍</span>
            <h3>商品が見つかりません</h3>
            <p>検索条件を変更してお試しください</p>
            <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setSelectedCategory('すべて'); }}>
              フィルターをリセット
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
