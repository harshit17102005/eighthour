import { Link } from 'react-router-dom';
import LogoGraphic from './LogoGraphic';

export default function Footer() {
  return (
    <footer className="bg-secondary text-ink pt-16 pb-8 mt-auto border-t border-surface-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Logo (Left) */}
          <div className="flex flex-col items-start justify-start">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="font-serif text-lg tracking-widest uppercase">EIGHTH</span>
              <LogoGraphic className="w-12 h-auto text-ink" />
              <span className="font-serif text-lg tracking-widest uppercase">HOUR</span>
            </Link>
            <p className="mt-6 text-xs text-ink-muted leading-relaxed max-w-[200px]">
              Timeless silhouettes designed with purpose and crafted for permanence.
            </p>
          </div>

          {/* Customer Care (Middle-Left) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] tracking-widest uppercase text-ink-muted mb-4">Customer Care</h3>
            <Link to="/contact" className="text-xs tracking-widest uppercase hover:text-ink transition-colors w-fit">Contact</Link>
            <Link to="/shipping" className="text-xs tracking-widest uppercase hover:text-ink transition-colors w-fit">Shipping & Returns</Link>
            <Link to="/care" className="text-xs tracking-widest uppercase hover:text-ink transition-colors w-fit">Care Guide</Link>
            <Link to="/faq" className="text-xs tracking-widest uppercase hover:text-ink transition-colors w-fit">FAQ</Link>
          </div>

          {/* Socials (Middle-Right) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] tracking-widest uppercase text-ink-muted mb-4">Follow</h3>
            <a href="#" className="text-xs tracking-widest uppercase hover:text-ink transition-colors w-fit">Instagram</a>
            <a href="#" className="text-xs tracking-widest uppercase hover:text-ink transition-colors w-fit">Pinterest</a>
            <a href="#" className="text-xs tracking-widest uppercase hover:text-ink transition-colors w-fit">LinkedIn</a>
          </div>

          {/* Newsletter (Right) */}
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="w-full lg:max-w-xs flex flex-col gap-4">
              <h3 className="text-[10px] tracking-widest uppercase text-ink-muted mb-4">Newsletter</h3>
              <p className="text-xs text-ink-muted font-serif italic mb-4">"Private notes from the house."</p>
              <div className="flex w-full border-b border-ink/30 pb-2 hover:border-ink transition-colors duration-500">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent w-full focus:outline-none text-xs placeholder:text-ink-muted tracking-widest"
                />
                <button className="text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity">
                  Join &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-surface-border gap-6 md:gap-0">
          <p className="text-[10px] tracking-widest text-ink-muted uppercase">&copy; EIGHTH HOUR 2026</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[10px] tracking-widest text-ink-muted uppercase hover:text-ink transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] tracking-widest text-ink-muted uppercase hover:text-ink transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
