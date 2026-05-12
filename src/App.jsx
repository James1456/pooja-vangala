import { useEffect, useState } from "react";

const suggestions = [
  "Discover relaxed tailoring for breezy city evenings",
  "Explore tailored trousers in soft neutral hues",
  "Find loafers to complement a structured blazer",
];

const backgroundImages = ["/herobg.png", "/herobg2.png"];
const collectionVideos = ["/sum.mp4", "/sum1.mp4", "/sum2.mp4"];
const makingVideos = ["/making.mp4", "/making1.mp4"];
const collectionCards = [
  {
    title: "Solstice Embroidered Lehenga",
    price: "$4,860",
    image: "/herobg.png",
    position: "52% center",
  },
  {
    title: "Moonlit Tulle Cocktail Set",
    price: "$2,140",
    image: "/herobg2.png",
    position: "58% center",
  },
  {
    title: "Aster Tailored Evening Edit",
    price: "$1,980",
    image: "/herobg.png",
    position: "68% center",
  },
  {
    title: "Velora Corset Skirt Ensemble",
    price: "$4,220",
    image: "/herobg2.png",
    position: "48% center",
  },
];

const categoryCards = [
  {
    title: "Shirts",
    subtitle: "Refined tailoring for elevated everyday dressing",
    image: "/herobg.png",
    position: "52% center",
  },
  {
    title: "Cocktail Shirts",
    subtitle: "Evening-ready statements with subtle shine",
    image: "/herobg2.png",
    position: "56% center",
  },
  {
    title: "Blazer",
    subtitle: "Structured layers with modern occasion polish",
    image: "/herobg.png",
    position: "68% center",
  },
  {
    title: "Sherwani Sets",
    subtitle: "Heritage silhouettes cut with contemporary ease",
    image: "/herobg2.png",
    position: "48% center",
  },
  {
    title: "Kurtha Sets",
    subtitle: "Relaxed ceremony dressing in rich seasonal tones",
    image: "/herobg.png",
    position: "64% center",
  },
  {
    title: "Bundi Sets",
    subtitle: "Layered festive staples with clean sharp lines",
    image: "/herobg2.png",
    position: "50% center",
  },
];

const mensCollectionCards = [
  {
    title: "Shadow Linen Bandhgala",
    subtitle: "Tailored evening structure in charcoal tones",
    image: "/herobg.png",
    position: "66% center",
  },
  {
    title: "Slate Embroidered Kurta Set",
    subtitle: "Soft layering with tonal surface detailing",
    image: "/herobg2.png",
    position: "56% center",
  },
  {
    title: "Ivory Drape Jacket",
    subtitle: "Modern occasionwear with sculpted movement",
    image: "/herobg.png",
    position: "48% center",
  },
];

function HistoryIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 6a6 6 0 1 1-5.2 3M12 2v4M4 4l2.6 2.6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20s-7-4.4-7-10a4.3 4.3 0 0 1 7-3.3A4.3 4.3 0 0 1 19 10c0 5.6-7 10-7 10Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 8V6.8A5 5 0 0 1 12 2a5 5 0 0 1 5 4.8V8M5 8h14l-1 12H6L5 8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 5v14M5 12l7-7 7 7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function BrandHeader() {
  return (
    <header className="topbar">
      <button className="menu-link" type="button" aria-label="Open menu">
        <span className="menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="menu-text">Menu</span>
      </button>

      <div className="brand-lockup" aria-label="Pooja Vangala">
        <img className="brand-logo" src="/logo.png" alt="" aria-hidden="true" />
        <p className="brand-name">Pooja Vangala</p>
      </div>

      <nav className="utility-nav" aria-label="Quick actions">
        <button className="icon-button" type="button" aria-label="Recently viewed">
          <HistoryIcon />
        </button>
        <button className="icon-button" type="button" aria-label="Wishlist">
          <HeartIcon />
        </button>
        <button className="icon-button" type="button" aria-label="Bag">
          <BagIcon />
        </button>
      </nav>
    </header>
  );
}

function PromptBar({ label, prompt, setPrompt, id }) {
  return (
    <form className="search-bar" onSubmit={(event) => event.preventDefault()} aria-label={label}>
      <button className="circle-action muted" type="button" aria-label="Add inspiration">
        <PlusIcon />
      </button>
      <input
        id={id}
        name={id}
        type="text"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        aria-label="Describe the look you want"
      />
      <button className="circle-action" type="submit" aria-label="Submit prompt">
        <ArrowIcon />
      </button>
    </form>
  );
}

export default function App() {
  const [prompt, setPrompt] = useState("I’m looking for an outfit for an elegant dinner");
  const [collectionPrompt, setCollectionPrompt] = useState("I need an outfit for a summer evening event");
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCollectionVideo, setActiveCollectionVideo] = useState(0);
  const [activeMakingVideo, setActiveMakingVideo] = useState(0);

  useEffect(() => {
    if (backgroundImages.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % backgroundImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (collectionVideos.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveCollectionVideo((currentVideo) => (currentVideo + 1) % collectionVideos.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (makingVideos.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveMakingVideo((currentVideo) => (currentVideo + 1) % makingVideos.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="hero-shell">
      <section className="hero" aria-label="Pooja Vangala fashion designer home">
        <div className="hero-backgrounds" aria-hidden="true">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`hero-bg-layer ${index === activeSlide ? "is-active" : ""}`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>

        <BrandHeader />

        <div className="hero-content">
          <div className="copy-block">
            <h1>Let yourself be inspired</h1>
            <p className="subtitle">Select a suggestion or start prompting</p>
          </div>

          <div className="prompt-cluster" aria-label="Suggested prompts">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="prompt-pill"
                type="button"
                onClick={() => setPrompt(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <PromptBar label="Style assistant" prompt={prompt} setPrompt={setPrompt} id="stylePrompt" />
        </div>
      </section>

      <section className="feature-film" aria-label="Summer collection 2026">
        <video
          key={collectionVideos[activeCollectionVideo]}
          className="feature-film-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/herobg2.png"
        >
          <source src={collectionVideos[activeCollectionVideo]} type="video/mp4" />
        </video>

        <div className="feature-film-overlay" aria-hidden="true" />

        <div className="feature-film-content">
          <div className="feature-film-copy">
            <h2>Sculpted Sunlight</h2>
            <p>Summer Collection 2026</p>
          </div>

          <PromptBar
            label="Summer collection assistant"
            prompt={collectionPrompt}
            setPrompt={setCollectionPrompt}
            id="collectionPrompt"
          />
        </div>
      </section>

      <section className="collections-showcase" aria-label="New collections">
        <div className="collections-heading">
          <h2>New Collections</h2>
          <button className="collections-button" type="button">
            View All
          </button>
        </div>

        <div className="collections-grid">
          {collectionCards.map((card) => (
            <article key={card.title} className="collection-card">
              <button className="collection-favorite" type="button" aria-label={`Save ${card.title}`}>
                <HeartIcon />
              </button>

              <div className="collection-image-shell">
                <img
                  className="collection-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.position }}
                />
              </div>

              <div className="collection-meta">
                <h3>{card.title}</h3>
                <p>{card.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="categories-showcase" aria-label="Shop by category">
        <div className="collections-heading categories-heading">
          <h2>Categories</h2>
          <button className="collections-button" type="button">
            Explore All
          </button>
        </div>

        <div className="categories-grid">
          {categoryCards.map((card) => (
            <article key={card.title} className="category-card">
              <div className="category-image-shell">
                <img
                  className="category-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.position }}
                />
              </div>

              <div className="category-meta">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="making-film" aria-label="Explore the making">
        <video
          key={makingVideos[activeMakingVideo]}
          className="making-film-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/herobg.png"
        >
          <source src={makingVideos[activeMakingVideo]} type="video/mp4" />
        </video>

        <div className="making-film-overlay" aria-hidden="true" />

        <div className="making-film-content">
          <div className="making-film-copy">
            <p>Craft, detail, and movement</p>
            <h2>Explore the Making</h2>
          </div>
        </div>
      </section>

      <section className="mens-showcase" aria-label="PV men collection">
        <div className="mens-showcase-copy">
          <p className="mens-showcase-kicker">For him</p>
          <h2>PV Men Collection</h2>
          <p className="mens-showcase-text">
            Precision tailoring, textured layers, and occasion silhouettes shaped for a quieter kind
            of statement.
          </p>
          <button className="collections-button mens-showcase-button" type="button">
            Discover Menswear
          </button>
        </div>

        <div className="mens-showcase-grid">
          {mensCollectionCards.map((card) => (
            <article key={card.title} className="mens-card">
              <div className="mens-card-image-shell">
                <img
                  className="mens-card-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.position }}
                />
              </div>

              <div className="mens-card-meta">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="site-footer-brand">
          <img className="site-footer-logo" src="/logo.png" alt="" aria-hidden="true" />
          <p className="site-footer-name">Pooja Vangala</p>
          <p className="site-footer-tagline">Crafted for modern heirlooms</p>
        </div>

        <nav className="site-footer-primary" aria-label="Footer navigation">
          <a href="#top">Home</a>
          <span aria-hidden="true">•</span>
          <a href="#collections">Collections</a>
          <span aria-hidden="true">•</span>
          <a href="#categories">Categories</a>
          <span aria-hidden="true">•</span>
          <a href="#making">Making</a>
          <span aria-hidden="true">•</span>
          <a href="mailto:hello@poojavangala.com">Contact</a>
        </nav>

        <div className="site-footer-divider" aria-hidden="true" />

        <nav className="site-footer-secondary" aria-label="Footer secondary navigation">
          <a href="mailto:atelier@poojavangala.com">Atelier</a>
          <a href="mailto:press@poojavangala.com">Press</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </nav>

        <div className="site-footer-meta">
          <p>© 2026 Pooja Vangala. All rights reserved.</p>
          <p>Designed for an elevated couture experience.</p>
        </div>
      </footer>
    </main>
  );
}
