import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Collections() {
  const chapters = [
    {
      id: '01',
      title: 'The Foundation',
      description: 'A new exploration of form, material and craftsmanship.',
      image: '/images/hero.png'
    },
    {
      id: '02',
      title: 'Structural Fluidity',
      description: 'Finding balance between architectural lines and natural drape.',
      image: '/images/lifestyle.png'
    }
  ];

  return (
    <div className="w-full bg-primary pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 mb-24 md:mb-32">
        <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] text-center md:text-left">
          Collections
        </h1>
        <p className="text-ink-muted mt-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
          EIGHTH HOUR treats every collection as another chapter. Each distinct in expression while remaining consistent in purpose.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-32">
        {chapters.map((chapter) => (
          <section key={chapter.id} className="relative aspect-[4/5] md:aspect-[21/9] overflow-hidden group">
            <motion.img 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={chapter.image} 
              alt={`Chapter ${chapter.id}`} 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-ink/30" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-primary text-center px-6">
              <span className="text-xs tracking-widest uppercase mb-6 font-sans">Chapter {chapter.id}</span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 italic">{chapter.title}</h2>
              <p className="text-sm md:text-base max-w-md mb-12 tracking-wide font-light">
                {chapter.description}
              </p>
              <Link to="/shop" className="text-xs tracking-widest uppercase border-b border-primary/50 hover:border-primary pb-2 transition-colors duration-500">
                Discover Chapter &rarr;
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
