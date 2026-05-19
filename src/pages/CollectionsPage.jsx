import { useEffect, useState } from "react";
import { collectionCards, collectionFeatureVideos } from "../data/siteData";

const featuredProducts = collectionCards.slice(0, 4).map((product, index) => {
  const collectionImages = [
    "/Noor%20Lehenga%20Product.png",
    "/Ira%20Saree%20Product.png",
    "/Mehar%20Anarkali%20Product.png",
    "/Zara%20Sharara%20Set%20Product.png",
  ];

  return {
    ...product,
    image: collectionImages[index],
    position: "50% center",
  };
});

const collectionWorlds = [
  {
    title: "Bridal",
    subtitle: "Timeless, heirloom, you.",
    image: "/Bridal%20World%20Tile.png",
  },
  {
    title: "Cocktail",
    subtitle: "Modern silhouettes for every occasion.",
    image: "/Cocktail%20World%20Tile.png",
  },
  {
    title: "Mens Ceremonial",
    subtitle: "Tradition, tailored to perfection.",
    image: "/Mens%20Ceremonial%20World%20Tile.png",
  },
  {
    title: "Atelier Classics",
    subtitle: "Iconic pieces. Eternal appeal.",
    image: "/Atelier%20Classics%20World%20Tile.png",
  },
];

export default function CollectionsPage() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveVideo((currentVideo) => (currentVideo + 1) % collectionFeatureVideos.length);
    }, 7000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="collections-luxury">
      <section className="collections-luxury-hero" aria-label="Collections">
        <video
          key={collectionFeatureVideos[activeVideo]}
          className="collections-luxury-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/Collections%20Hero%20Poster.png"
        >
          <source src={collectionFeatureVideos[activeVideo]} type="video/mp4" />
        </video>
        <div className="collections-luxury-hero-shade" aria-hidden="true" />
        <div className="collections-luxury-hero-copy">
          <h1>Collections</h1>
          <p>Occasionwear shaped for ceremony, movement, and memory.</p>
        </div>
      </section>

      <section className="collections-luxury-intro">
        <div className="collections-luxury-intro-copy">
          <span className="collections-luxury-kicker">Our world</span>
          <h2>New collections</h2>
          <p>
            Each collection is a study in emotion and detail, where heritage techniques meet
            contemporary silhouettes to create pieces that belong to life&apos;s most meaningful
            moments.
          </p>
          <p>
            From hand-embroidered heirlooms to modern interpretations of tradition, these are
            designs made to be remembered.
          </p>
        </div>
        <div className="collections-luxury-intro-image">
          <img src="/New%20Collections%20Editorial%20Image.png" alt="Pooja Vangala couture collection detail" />
        </div>
      </section>

      <section className="collections-luxury-products" aria-label="Featured collection products">
        <div className="collections-luxury-product-grid">
          {featuredProducts.map((product) => (
            <article key={product.title} className="collections-luxury-product">
              <button className="collections-luxury-heart" type="button" aria-label={`Save ${product.title}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 20.4S4.5 16.1 3.2 9.8C2.6 6.8 4.5 4.3 7.4 4.3c1.8 0 3.2 1 4.1 2.4.9-1.4 2.3-2.4 4.1-2.4 2.9 0 4.8 2.5 4.2 5.5C18.5 16.1 12 20.4 12 20.4Z" />
                </svg>
              </button>
              <div className="collections-luxury-product-image">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ objectPosition: product.position }}
                />
              </div>
              <div className="collections-luxury-product-meta">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="collections-luxury-view-all" href="#collection-worlds">View all collections</a>
      </section>

      <section className="collections-luxury-feature">
        <div className="collections-luxury-feature-image">
          <img src="/Summer%20Collection%202026%20Feature.png" alt="Summer Collection 2026 editorial" />
        </div>
        <div className="collections-luxury-feature-copy">
          <span className="collections-luxury-kicker">Featured</span>
          <h2>Summer Collection 2026</h2>
          <p>
            A celebration of light, texture, and craftsmanship, designed for sunlit ceremonies and
            golden hour moments.
          </p>
          <a href="mailto:atelier@poojavangala.com">View edit</a>
        </div>
      </section>

      <section id="collection-worlds" className="collections-luxury-worlds" aria-label="Collection worlds">
        {collectionWorlds.map((world) => (
          <article key={world.title} className="collections-luxury-world">
            <img src={world.image} alt={world.title} />
            <div className="collections-luxury-world-shade" aria-hidden="true" />
            <div>
              <h3>{world.title}</h3>
              <p>{world.subtitle}</p>
              <a href="mailto:atelier@poojavangala.com">Explore</a>
            </div>
          </article>
        ))}
      </section>

      <section className="collections-luxury-appointment">
        <div className="collections-luxury-appointment-shade" aria-hidden="true" />
        <div className="collections-luxury-appointment-copy">
          <span className="collections-luxury-kicker">By appointment only</span>
          <h2>Begin your couture journey</h2>
          <p>
            Book a private consultation to explore our collections and create a piece that is
            uniquely yours.
          </p>
          <a href="mailto:atelier@poojavangala.com">Book an appointment</a>
        </div>
      </section>
    </main>
  );
}
