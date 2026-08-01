import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Shop() {
  const [filter, setFilter] = useState('ALL');
  
  const categories = ['ALL', 'NEW ARRIVALS', 'CLOTHING', 'DRESSES', 'TOPS', 'BOTTOMS', 'ACCESSORIES'];

  const filteredProducts = products.filter(product => {
    if (filter === 'ALL') return true;
    if (filter === 'NEW ARRIVALS') return product.isNewArrival;
    if (filter === 'CLOTHING') return ['DRESSES', 'TOPS', 'BOTTOMS'].includes(product.category);
    return product.category === filter;
  });

  return (
    <div className="w-full bg-primary min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <header className="mb-24">
          <h1 className="font-serif text-5xl md:text-7xl mb-16 text-center md:text-left">Shop</h1>
          
          {/* Subcategories (Desktop) */}
          <div className="hidden md:flex flex-wrap gap-10 text-xs tracking-widest uppercase">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`pb-1 border-b transition-colors ${
                  filter === category 
                    ? 'border-ink text-ink' 
                    : 'border-transparent text-ink-muted hover:text-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filters Mobile & Utility */}
          <div className="flex justify-between items-center mt-16 md:mt-24 text-xs tracking-widest uppercase text-ink-muted">
            <button className="md:hidden tracking-widest uppercase hover:text-ink transition-colors">Filter</button>
            <span className="hidden md:block">{filteredProducts.length} Results</span>
            <button className="hover:text-ink transition-colors flex items-center gap-3">
              Sort By 
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </header>

        {/* Product Grid: 4 cols desktop, 2 tablet, 2 mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-16 md:gap-x-12 md:gap-y-24">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
