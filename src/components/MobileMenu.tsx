import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useUI } from '../context/UIContext';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const { isMenuOpen, closeMenu } = useUI();

  const menuVariants = {
    closed: { x: '-100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } },
    open: { x: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] as const }
    })
  };

  const links = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Our House', path: '/house' },
    { name: 'Craft', path: '/craft' },
    { name: 'Account', path: '/account' },
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 bg-primary flex flex-col md:hidden"
        >
          <div className="flex justify-between items-center p-6 border-b border-surface-border">
            <span className="font-serif text-xl tracking-widest uppercase">Eighth Hour</span>
            <button onClick={closeMenu} className="p-2 -mr-2">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col justify-center px-8 gap-8">
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                variants={linkVariants}
              >
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className="font-serif text-4xl tracking-wide block hover:text-ink-muted transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="p-8 border-t border-surface-border mt-auto">
            <div className="flex justify-between text-sm text-ink-muted tracking-widest uppercase">
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
              <Link to="/shipping" onClick={closeMenu}>Shipping</Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
