export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  secondaryImage?: string;
  sizes: string[];
  color: string;
  description: string;
  isNewArrival?: boolean;
}

export const products: Product[] = [
  {
    id: "p_1",
    name: "IVORY BLOOM DRESS",
    price: 18500,
    category: "DRESSES",
    image: "/images/product_dress.png",
    secondaryImage: "/images/product_dress.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "IVORY",
    description: "A sculptural masterpiece cut from lightweight ivory linen blend. The asymmetric drape captures the essence of contemporary elegance, while maintaining an effortless silhouette.",
    isNewArrival: true
  },
  {
    id: "p_2",
    name: "LINEN TOTE",
    price: 6800,
    category: "ACCESSORIES",
    image: "/images/product_tote.png",
    secondaryImage: "/images/product_tote.png",
    sizes: ["ONE SIZE"],
    color: "SAND",
    description: "The everyday essential elevated. Crafted from heavy-weight raw linen with subtle leather reinforcements and our signature minimal stitching.",
  },
  {
    id: "p_3",
    name: "LILY SHIRT",
    price: 11200,
    category: "TOPS",
    image: "/images/product_dress.png", // reused
    secondaryImage: "/images/product_dress.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "CREAM",
    description: "A relaxed, fluid shirt that falls elegantly against the body. Features an exaggerated collar and concealed button placket for a seamless look.",
    isNewArrival: true
  },
  {
    id: "p_4",
    name: "STRUCTURED TOP",
    price: 8900,
    category: "TOPS",
    image: "/images/product_tote.png",
    secondaryImage: "/images/product_tote.png",
    sizes: ["XS", "S", "M", "L"],
    color: "BLACK",
    description: "Architectural precision meets comfortable wear. This top features structured shoulders and a cinched waist to create a strong, modern silhouette.",
  },
  {
    id: "p_5",
    name: "DRAPED SKIRT",
    price: 11500,
    category: "BOTTOMS",
    image: "/images/product_dress.png",
    secondaryImage: "/images/product_dress.png",
    sizes: ["XS", "S", "M", "L"],
    color: "IVORY",
    description: "A midi-length skirt with a graceful asymmetric hem. The carefully engineered drape creates beautiful movement with every step.",
  },
  {
    id: "p_6",
    name: "TAILORED TROUSER",
    price: 14500,
    category: "BOTTOMS",
    image: "/images/product_dress.png",
    secondaryImage: "/images/product_dress.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "TAUPE",
    description: "Wide-leg trousers crafted from a fluid crepe fabric. High-waisted with a double pleat detail, offering both comfort and sartorial sharpness.",
    isNewArrival: true
  },
  {
    id: "p_7",
    name: "PLEATED MIDI DRESS",
    price: 21000,
    category: "DRESSES",
    image: "/images/product_dress.png",
    secondaryImage: "/images/product_dress.png",
    sizes: ["XS", "S", "M", "L"],
    color: "BLACK",
    description: "Exquisite hand-pleating defines this evening-ready piece. The neckline is subtle yet striking, embodying the quiet luxury of Eighth Hour.",
  },
  {
    id: "p_8",
    name: "SCULPTURAL EARRINGS",
    price: 4200,
    category: "ACCESSORIES",
    image: "/images/product_tote.png",
    secondaryImage: "/images/product_tote.png",
    sizes: ["ONE SIZE"],
    color: "GOLD",
    description: "Handcrafted brass earrings with a 24k gold wash. Their organic, molten shape adds an artistic touch to any ensemble.",
  }
];
