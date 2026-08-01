export default function OurHouse() {
  return (
    <div className="w-full bg-primary pt-12 pb-32">
      
      {/* Hero */}
      <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 mb-32 md:mb-48 flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="flex-1">
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-12">
            THE HOUSE OF<br />
            <span className="italic">EIGHTH HOUR</span>
          </h1>
        </div>
        <div className="flex-1 flex flex-col justify-end max-w-xl">
          <p className="text-lg text-ink-muted leading-relaxed mb-8">
            EIGHTH HOUR is a contemporary luxury lifestyle house founded on the belief that great design evolves while true craftsmanship endures.
          </p>
          <p className="text-lg text-ink-muted leading-relaxed mb-8">
            Inspired by the symbolism of eight, a number associated with continuity, balance, and infinite possibility, every collection represents a new chapter in the house. Each chapter is distinct in expression while remaining consistent in purpose.
          </p>
          <p className="text-lg text-ink-muted leading-relaxed">
            From clothing to the lifestyle categories that will follow, every creation reflects our commitment to contemporary design, exceptional Indian craftsmanship, and uncompromising quality.
          </p>
        </div>
      </section>

      {/* Image Strip */}
      <section className="w-full mb-32 md:mb-48">
        <div className="w-full aspect-[21/9] bg-secondary">
          <img src="/images/lifestyle.png" alt="House of Eighth Hour" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Our Vision */}
      <section className="container mx-auto px-6 md:px-12 mb-32 md:mb-48">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-xs tracking-widest uppercase text-ink-muted mb-16">Our Vision</h2>
          <p className="font-serif text-4xl md:text-6xl leading-[1.1] text-ink">
            "To establish a globally recognised luxury lifestyle house from India, creating contemporary design that stands among the world's finest while celebrating exceptional Indian craftsmanship."
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="container mx-auto px-6 md:px-12 mb-32 md:mb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 flex flex-col items-start justify-center">
            <h2 className="text-xs tracking-widest uppercase text-ink-muted mb-12">Our Philosophy</h2>
            <p className="font-serif text-3xl md:text-4xl leading-[1.1] mb-8">
              We create contemporary luxury for those who value design, craftsmanship, and longevity.
            </p>
            <p className="text-ink-muted text-lg leading-relaxed">
              Every collection explores a new creative direction while remaining unmistakably EIGHTH HOUR through refined silhouettes, meticulous construction, premium materials, and enduring quality.
            </p>
          </div>
          <div className="order-1 md:order-2 aspect-[3/4] bg-secondary overflow-hidden">
            <img src="/images/hero.png" alt="Philosophy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="container mx-auto px-6 md:px-12 text-center py-32 md:py-48 border-t border-surface-border">
        <h2 className="text-xs tracking-widest uppercase text-ink-muted mb-16">Our Promise</h2>
        <p className="font-serif text-5xl md:text-7xl leading-[1.1] max-w-4xl mx-auto italic">
          "To create beautifully designed objects that become part of everyday life, crafted with intention, defined by quality, and made to be kept."
        </p>
      </section>

    </div>
  );
}
