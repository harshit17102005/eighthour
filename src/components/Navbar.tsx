import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUI } from '../context/UIContext';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import LogoGraphic from './LogoGraphic';

export default function Navbar() {
  const { cartCount } = useCart();
  const { openCart, openMenu, openSearch } = useUI();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const shouldBeTransparent = isHome && !scrolled;

  const navLinkClass = twMerge(
    clsx(
      "text-xs tracking-widest uppercase transition-all duration-[800ms] hover:tracking-widest",
      shouldBeTransparent ? "text-light/90 hover:text-light" : "text-ink-muted hover:text-ink"
    )
  );

  const logoTextClass = twMerge(
    clsx(
      "font-cinzel text-2xl md:text-3xl tracking-widest uppercase transition-colors duration-300 effect-3d",
      shouldBeTransparent ? "text-[#F5EFE6]" : "text-ink"
    )
  );

  const logoGraphicClass = twMerge(
    clsx(
      "w-20 md:w-32 h-auto transition-colors duration-300 effect-3d",
      shouldBeTransparent ? "text-[#F5EFE6]" : "text-ink"
    )
  );

  const iconClass = shouldBeTransparent ? "text-light" : "text-ink";

  return (
    <header
      className={twMerge(
        clsx(
           "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b",
           shouldBeTransparent ? "bg-transparent border-transparent py-2" : "bg-primary/95 backdrop-blur-md border-surface-border py-2"
        )
      )}
    >
      <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">

        {/* Mobile Left */}
        <div className="md:hidden flex-1">
          <button onClick={openMenu} className={twMerge(clsx("p-2 -ml-2 hover:opacity-70 transition-opacity", iconClass))}>
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Desktop Left */}
        <nav className="hidden md:flex flex-1 gap-8 items-center">
          <Link to="/shop" className={navLinkClass}>Shop</Link>
          <Link to="/collections" className={navLinkClass}>Collections</Link>
          <Link to="/house" className={navLinkClass}>Our House</Link>
        </nav>

        {/* Center Logo */}
        <div className="flex-1 md:flex-none flex justify-center items-center">
          <Link
            to="/"
            className="flex items-center gap-3 md:gap-4 group hover:opacity-80 transition-opacity"
          >
            <span className={logoTextClass}>EIGHTH</span>
            <LogoGraphic className={logoGraphicClass} />
            <span className={logoTextClass}>HOUR</span>
          </Link>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
          <button onClick={openSearch} className="hidden md:flex items-center gap-2 p-2 group">
            <span className={navLinkClass}>Search</span>
          </button>
          <button onClick={openSearch} className={twMerge(clsx("md:hidden p-2", iconClass))}>
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button className="hidden md:flex items-center gap-2 p-2 group">
            <span className={navLinkClass}>Account</span>
          </button>

          <button onClick={openCart} className="flex items-center gap-2 p-2 -mr-2 md:mr-0 group relative">
            <span className={twMerge(clsx("hidden md:block", navLinkClass))}>
              Bag ({cartCount})
            </span>
            <div className={twMerge(clsx("md:hidden relative", iconClass))}>
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className={twMerge(
                  clsx(
                    "absolute -top-1 -right-1 text-[10px] w-4 h-4 flex items-center justify-center rounded-full transition-colors",
                    shouldBeTransparent ? "bg-light text-ink" : "bg-ink text-primary"
                  )
                )}>
                  {cartCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
