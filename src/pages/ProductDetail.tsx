import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useUI } from '../context/UIContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { openCart } = useUI();
  const product = products.find(p => p.id === id) || products[0];
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert("Please select a size");
      return;
    }
    addToCart(product, selectedSize || product.sizes[0]);
    openCart();
  };

  return (
    <div className="w-full bg-primary pb-32">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left: 65% Image Gallery */}
        <div className="w-full lg:w-[65%] flex flex-col gap-[2px]">
          <div className="w-full aspect-[2/3] bg-secondary relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.secondaryImage && (
            <div className="w-full aspect-[2/3] bg-secondary relative">
              <img src={product.secondaryImage} alt={`${product.name} details`} className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {/* Right: 35% Sticky Info */}
        <div className="w-full lg:w-[35%] relative bg-primary">
          <div className="sticky top-24 p-6 md:p-12 xl:p-20 flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl mb-6">{product.name}</h1>
            <p className="text-xl mb-12 text-ink/80">{formatPrice(product.price)}</p>
            
            <p className="text-ink-muted text-sm leading-relaxed mb-12">
              {product.description}
            </p>

            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs tracking-widest uppercase text-ink-muted">Color</span>
                <span className="text-xs tracking-widest uppercase">{product.color}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs tracking-widest uppercase text-ink-muted">Size</span>
                <button className="text-[10px] uppercase tracking-widest text-ink underline underline-offset-4">Size Guide</button>
              </div>
              
              {/* Size Selector */}
              <div className="grid grid-cols-4 md:grid-cols-5 gap-2 mb-10">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs tracking-widest transition-colors ${
                      selectedSize === size 
                        ? 'bg-ink text-primary border border-ink' 
                        : 'border border-surface-border text-ink hover:border-ink'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="w-full bg-ink text-primary uppercase tracking-widest text-xs py-4 hover:bg-accent transition-colors duration-500"
              >
                Add To Bag
              </button>
            </div>

            {/* Accordions */}
            <div className="divide-y divide-surface-border border-y border-surface-border">
              {['Details', 'Material & Craft', 'Care', 'Shipping & Returns'].map((title, index) => (
                <details key={title} className="group" open={index === 0}>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 text-xs tracking-widest uppercase text-ink">
                    <span>{title}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="12" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="12"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-ink-muted text-sm leading-relaxed pb-6 group-open:animate-fadeIn">
                    {title === 'Material & Craft' ? (
                      <p>Crafted in India from premium natural fibers. We partner with multi-generational artisans to bring exceptional quality to contemporary design.</p>
                    ) : title === 'Details' ? (
                      <ul className="list-disc list-inside space-y-1">
                        <li>Relaxed fit</li>
                        <li>Concealed closure</li>
                        <li>Dry clean only</li>
                        <li>Model is 175cm and wears a size S</li>
                      </ul>
                    ) : (
                      <p>Detailed information about {title.toLowerCase()} goes here. EIGHTH HOUR ensures uncompromising quality at every step.</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* YOU MAY ALSO LIKE */}
      <div className="container mx-auto px-6 md:px-12 mt-48">
        <h2 className="text-xs tracking-widest uppercase text-ink-muted mb-16 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
