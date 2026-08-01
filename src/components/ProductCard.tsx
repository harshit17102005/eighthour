import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link to={`/shop/${product.id}`} className="group flex flex-col gap-4">
      <div className="relative aspect-[2/3] overflow-hidden bg-secondary w-full">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[0.25,0.46,0.45,0.94] group-hover:scale-[1.03]"
        />
        {product.secondaryImage && (
          <img 
            src={product.secondaryImage} 
            alt={`${product.name} alternate view`} 
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start pt-2">
          <h3 className="text-xs md:text-sm tracking-widest uppercase text-ink">{product.name}</h3>
          <span className="text-xs md:text-sm text-ink-muted">{formatPrice(product.price)}</span>
        </div>
        {product.color && (
          <p className="text-[10px] md:text-xs tracking-widest uppercase text-ink-muted">{product.color}</p>
        )}
      </div>
    </Link>
  );
}
