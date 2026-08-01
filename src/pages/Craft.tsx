import { Link } from 'react-router-dom';

export default function Craft() {
  return (
    <div className="w-full bg-primary pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 mb-32 md:mb-48">
        <div className="max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12 uppercase">
            Contemporary Design.<br />
            <span className="italic">Exceptional Indian Craftsmanship.</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-muted leading-relaxed max-w-2xl">
            Traditional techniques are reimagined through a modern perspective, creating pieces that are refined, relevant, and made to endure.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-32 items-end">
          <div className="aspect-square bg-secondary overflow-hidden">
            <img src="/images/craft.png" alt="Detail shot" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] bg-secondary overflow-hidden">
            <img src="/images/product_dress.png" alt="Detail shot" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 items-center">
          <div className="md:col-span-5 md:col-start-2 flex flex-col gap-10">
            <h2 className="text-xs tracking-widest uppercase text-ink-muted">The Atelier</h2>
            <p className="font-serif text-4xl leading-[1.1]">
              Every garment is a dialogue between the designer's vision and the artisan's hands.
            </p>
            <p className="text-ink-muted leading-relaxed">
              We operate our own atelier where multi-generational artisans apply their unparalleled skills to contemporary silhouettes. This direct relationship allows us to maintain uncompromising quality and ethical production standards.
            </p>
            <Link to="/shop" className="text-xs tracking-widest uppercase text-ink hover:text-ink-muted transition-colors duration-500 w-fit border-b border-ink/20 pb-2 mt-4">
              Explore The Collection &rarr;
            </Link>
          </div>
          <div className="md:col-span-6 aspect-[3/4] bg-secondary overflow-hidden">
            <img src="/images/lifestyle.png" alt="Studio" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
