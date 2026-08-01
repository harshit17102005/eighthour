import { useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import BlobCursor from '../components/BlobCursor';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    '/images/product_dress.png',
    '/images/lifestyle.png',
    '/images/product_tote.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      if ((window as any).VANTA && (window as any).VANTA.FOG) {
        setVantaEffect(
          (window as any).VANTA.FOG({
            el: vantaRef.current,
          THREE: (window as any).THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xffe1a2,
          midtoneColor: 0xe0995e,
          lowlightColor: 0xffd591,
          baseColor: 0x908875,
          speed: 2.00,
            zoom: 0.90
          })
        );
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="w-full relative">
      <BlobCursor
        blobType="circle"
        fillColor="#E8DFD0"
        trailCount={3}
        sizes={[60, 125, 75]}
        innerSizes={[0, 0, 0]}
        innerColor="transparent"
        opacities={[0.6, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={5}
      />
      {/* 6. HOMEPAGE — HERO */}
      <section ref={vantaRef} className="relative w-full h-screen overflow-hidden">
        
        {/* Overlay for better readability over fog */}
        <div className="absolute inset-0 bg-ink/10" />

        <div className="absolute inset-0 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 gap-8">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl text-primary mt-24 md:mt-0 z-10 flex-1"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] font-serif text-white tracking-wide">
              The Art of <br />
              <span className="italic font-light">Subtle Elegance.</span>
            </h1>
            <p className="text-white/80 max-w-md mb-10 text-sm tracking-widest leading-relaxed">
              Elevated essentials designed with purpose, crafted for permanence, and tailored for the contemporary wardrobe.
            </p>
            <Link 
              to="/shop" 
              className="text-xs md:text-sm tracking-widest uppercase border-b border-white/50 hover:border-white pb-2 transition-colors duration-500 text-white"
            >
              Explore Collection &rarr;
            </Link>
          </motion.div>

          {/* Right Image Container */}
          <div className="hidden md:block w-full max-w-md lg:max-w-lg ml-auto z-10 lg:mr-12 h-[75vh] rounded-xl overflow-hidden shadow-2xl relative mt-16 md:mt-0">
            {heroImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img src={src} alt="Hero Campaign" className="w-full h-full object-cover" />
              </motion.div>
            ))}
            
            {/* Slider Controls Inside Rectangle */}
            <div className="absolute bottom-6 right-6 text-primary text-[10px] tracking-widest font-mono z-10 bg-ink/30 px-3 py-1 rounded-full backdrop-blur-sm">
              0{currentSlide + 1} &mdash; 0{heroImages.length}
            </div>
          </div>

        </div>
      </section>

      {/* 7. FEATURED COLLECTION */}
      <section className="py-32 md:py-48 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-md"
            >
              <h2 className="text-xs tracking-widest uppercase text-ink-muted mb-6">The Collection</h2>
              <p className="font-serif text-3xl md:text-4xl text-ink leading-[1.1]">
                Small in number.<br />
                Thoughtful in design.<br />
                Made to last beyond<br />
                the moment.
              </p>
            </motion.div>
            <Link to="/shop" className="text-xs tracking-widest uppercase hover:text-ink-muted transition-colors border-b border-ink/20 pb-2">
              View All &rarr;
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. BRAND STATEMENT SECTION */}
      <section className="py-32 md:py-48 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img src="/images/lifestyle.png" alt="Brand Lifestyle" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-start justify-center max-w-md"
            >
              <h2 className="text-xs tracking-widest uppercase text-ink-muted mb-12">Eighth Hour</h2>
              <p className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
                "Great design evolves.<br />
                <span className="italic">True craftsmanship endures.</span>"
              </p>
              <p className="text-ink-muted leading-relaxed mb-12">
                We believe in creating pieces that transcend seasonal trends. Our approach marries contemporary silhouettes with timeless techniques, ensuring every object becomes a lasting part of your life.
              </p>
              <Link to="/house" className="text-xs tracking-widest uppercase border-b border-ink/20 hover:border-ink pb-2 transition-colors duration-500">
                Discover The House &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. THE SIGNIFICANCE OF EIGHT */}
      <section className="py-32 md:py-48 bg-primary relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 -left-[10%] md:-left-[5%] text-[50vh] md:text-[80vh] font-serif leading-none text-secondary pointer-events-none select-none"
        >
          8
        </motion.div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 max-w-lg"
          >
            <h2 className="text-xs tracking-widest uppercase text-ink-muted mb-12">The Significance of Eight</h2>
            <p className="font-serif text-3xl md:text-4xl leading-[1.1] mb-8">
              Eight is the foundation of our house.
            </p>
            <p className="text-ink-muted leading-relaxed mb-8">
              It represents continuity, evolution, and the belief that every ending becomes the beginning of something new.
            </p>
            <p className="text-ink-muted leading-relaxed">
              That philosophy shapes the way we create. Every collection, every capsule, and every future category becomes another chapter in the ongoing story of EIGHTH HOUR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 10. OUR CRAFT */}
      <section className="py-32 md:py-48 bg-light">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
          >
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8 uppercase">
              Contemporary Design.<br />
              <span className="italic">Exceptional Indian Craftsmanship.</span>
            </h2>
            <p className="text-ink-muted text-lg max-w-xl mx-auto">
              Traditional techniques are reimagined through a modern perspective, creating pieces that are refined, relevant, and made to endure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="md:col-span-7 aspect-square md:aspect-[4/3] overflow-hidden"
            >
              <img src="/images/craft.png" alt="Craftsmanship detail" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="md:col-span-4 md:col-start-9 flex flex-col gap-12"
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img src="/images/product_dress.png" alt="Detail" className="w-full h-full object-cover" />
              </div>
              <Link to="/craft" className="text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors duration-500 w-fit border-b border-ink/20 pb-2">
                Explore Our Craft &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. BRAND VALUES STRIP */}
      <section className="border-y border-surface-border py-8 bg-primary">
        <div className="container mx-auto px-6 md:px-12 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-surface-border text-center w-full">
            <div className="w-full md:flex-1 py-6 md:py-0 text-xs tracking-widest uppercase text-ink-muted">Limited Productions</div>
            <div className="w-full md:flex-1 py-6 md:py-0 text-xs tracking-widest uppercase text-ink-muted">Mindfully Crafted</div>
            <div className="w-full md:flex-1 py-6 md:py-0 text-xs tracking-widest uppercase text-ink-muted">Timeless by Design</div>
            <div className="w-full md:flex-1 py-6 md:py-0 text-xs tracking-widest uppercase text-ink-muted">Crafted in India</div>
          </div>
        </div>
      </section>

      {/* 12. COLLECTION CHAPTERS */}
      <section className="py-32 md:py-48 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden group"
          >
            <img src="/images/hero.png" alt="Chapter 01" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-ink/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary text-center px-4">
              <span className="text-xs tracking-widest uppercase mb-6 font-sans">Chapter 01</span>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 italic">The Foundation</h2>
              <p className="text-sm md:text-base max-w-md mb-12 tracking-wide font-light">
                A new exploration of form, material and craftsmanship.
              </p>
              <Link to="/collections" className="text-xs tracking-widest uppercase border-b border-primary/50 hover:border-primary pb-2 transition-colors duration-500">
                Discover Chapter &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
