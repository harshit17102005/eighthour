import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUI } from '../context/UIContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, closeCart } = useUI();
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  const drawerVariants = {
    closed: { x: '100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } },
    open: { x: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-50"
            onClick={closeCart}
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-primary z-50 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-surface-border">
              <h2 className="text-sm tracking-widest uppercase text-ink">Bag</h2>
              <button onClick={closeCart} className="p-2 -mr-2 hover:opacity-70 transition-opacity">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <p className="text-ink-muted tracking-wide">Your bag is empty.</p>
                  <Link 
                    to="/shop" 
                    onClick={closeCart}
                    className="text-xs tracking-widest uppercase border-b border-ink pb-1 hover:text-ink-muted hover:border-ink-muted transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.cartItemId} className="flex gap-4">
                      <div className="w-24 h-32 bg-secondary shrink-0 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-sm tracking-widest uppercase">{item.name}</h3>
                            <p className="text-xs text-ink-muted mt-1 uppercase tracking-wider">Size: {item.selectedSize}</p>
                          </div>
                          <p className="text-sm">{formatPrice(item.price)}</p>
                        </div>
                        
                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center gap-4 border border-surface-border px-3 py-1">
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="text-ink-muted hover:text-ink transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="text-ink-muted hover:text-ink transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-xs uppercase tracking-widest text-ink-muted hover:text-ink underline underline-offset-4"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-surface-border bg-primary">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm uppercase tracking-widest text-ink-muted">Subtotal</span>
                  <span className="text-lg">{formatPrice(cartTotal)}</span>
                </div>
                <button className="w-full py-4 bg-ink text-primary uppercase tracking-widest text-xs hover:bg-accent transition-colors duration-300">
                  Checkout
                </button>
                <div className="mt-4 text-center">
                  <Link 
                    to="/cart" 
                    onClick={closeCart}
                    className="text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors border-b border-transparent hover:border-ink pb-1"
                  >
                    View Bag
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
