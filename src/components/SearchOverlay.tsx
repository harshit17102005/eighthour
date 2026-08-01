import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { useUI } from '../context/UIContext';
import { useState, useRef, useEffect } from 'react';

export default function SearchOverlay() {
  const { isSearchOpen, closeSearch } = useUI();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const overlayVariants = {
    closed: { opacity: 0, y: '-100%', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const } }
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="fixed inset-0 bg-primary z-50 flex flex-col"
        >
          <div className="container mx-auto px-6 md:px-12 py-6 flex justify-end">
            <button onClick={closeSearch} className="p-2 hover:opacity-70 transition-opacity">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center pt-20 px-6 md:px-12">
            <div className="w-full max-w-3xl relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="SEARCH EIGHTH HOUR"
                className="w-full bg-transparent border-b border-ink/20 pb-4 text-2xl md:text-4xl font-serif tracking-wide focus:outline-none focus:border-ink transition-colors placeholder:text-ink/30 uppercase"
              />
              <Search className="absolute right-2 top-2 md:top-4 text-ink/50" size={24} strokeWidth={1} />
            </div>

            <div className="w-full max-w-3xl mt-16 flex flex-col items-center">
              <p className="text-xs tracking-widest uppercase text-ink-muted mb-8">Suggested</p>
              <div className="flex gap-6 text-sm tracking-widest text-ink">
                <button className="hover:text-ink-muted transition-colors uppercase border-b border-transparent hover:border-ink pb-1">Dresses</button>
                <button className="hover:text-ink-muted transition-colors uppercase border-b border-transparent hover:border-ink pb-1">Linen</button>
                <button className="hover:text-ink-muted transition-colors uppercase border-b border-transparent hover:border-ink pb-1">Accessories</button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
