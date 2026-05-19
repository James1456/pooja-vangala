import { useEffect, useState } from "react";

const suggestions = [
  "Discover relaxed tailoring for breezy city evenings",
  "Explore tailored trousers in soft neutral hues",
  "Find loafers to complement a structured blazer",
];

const backgroundImages = ["/herobg.png", "/herobg2.png"];
const makingVideos = ["/making.mp4", "/making1.mp4"];
const collectionCards = [
  {
    title: "Solstice Embroidered Lehenga",
    price: "₹4,05,000",
    image: "/Noor%20Lehenga%20Product.png",
    position: "50% center",
  },
  {
    title: "Moonlit Tulle Cocktail Set",
    price: "₹1,78,000",
    image: "/Ira%20Saree%20Product.png",
    position: "50% center",
  },
  {
    title: "Aster Tailored Evening Edit",
    price: "₹1,65,000",
    image: "/Mehar%20Anarkali%20Product.png",
    position: "50% center",
  },
  {
    title: "Velora Corset Skirt Ensemble",
    price: "₹3,52,000",
    image: "/Zara%20Sharara%20Set%20Product.png",
    position: "50% center",
  },
];

const categoryCards = [
  {
    title: "Shirts",
    subtitle: "Refined tailoring for elevated everyday dressing",
    image: "/newassets/Gemini_Generated_Image_wycsagwycsagwycs.png",
    position: "50% center",
  },
  {
    title: "Cocktail Shirts",
    subtitle: "Evening-ready statements with subtle shine",
    image: "/newassets/Gemini_Generated_Image_1r6jan1r6jan1r6j.png",
    position: "50% center",
  },
  {
    title: "Blazer",
    subtitle: "Structured layers with modern occasion polish",
    image: "/newassets/Gemini_Generated_Image_5gxvnh5gxvnh5gxv.png",
    position: "50% center",
  },
  {
    title: "Sherwani Sets",
    subtitle: "Heritage silhouettes cut with contemporary ease",
    image: "/newassets/Gemini_Generated_Image_9x1i119x1i119x1i.png",
    position: "50% center",
  },
  {
    title: "Kurtha Sets",
    subtitle: "Relaxed ceremony dressing in rich seasonal tones",
    image: "/newassets/Gemini_Generated_Image_gb82u5gb82u5gb82.png",
    position: "50% center",
  },
  {
    title: "Bundi Sets",
    subtitle: "Layered festive staples with clean sharp lines",
    image: "/newassets/Gemini_Generated_Image_l92kd6l92kd6l92k.png",
    position: "50% center",
  },
];

const mensCollectionCards = [
  {
    title: "Shadow Linen Bandhgala",
    subtitle: "Tailored evening structure in charcoal tones",
    image: "/Mens%20Ceremonial%20World%20Tile.png",
    position: "50% center",
  },
  {
    title: "Slate Embroidered Kurta Set",
    subtitle: "Soft layering with tonal surface detailing",
    image: "/newassets/Gemini_Generated_Image_9x1i119x1i119x1i.png",
    position: "50% center",
  },
  {
    title: "Ivory Drape Jacket",
    subtitle: "Modern occasionwear with sculpted movement",
    image: "/newassets/Gemini_Generated_Image_5gxvnh5gxvnh5gxv(1).png",
    position: "50% center",
  },
];

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

function PromptBar({ label, prompt, setPrompt, id, theme = "" }) {
  return (
    <form
      className={`legacy-search-bar ${theme}`.trim()}
      onSubmit={(event) => event.preventDefault()}
      aria-label={label}
    >
      <button className="legacy-circle-action muted" type="button" aria-label="Add inspiration">
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
      <button className="legacy-circle-action" type="submit" aria-label="Submit prompt">
        <ArrowIcon />
      </button>
    </form>
  );
}

export default function HomePage() {
  const [prompt, setPrompt] = useState("I’m looking for an outfit for an elegant dinner");
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMakingVideo, setActiveMakingVideo] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % backgroundImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMakingVideo((currentVideo) => (currentVideo + 1) % makingVideos.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="legacy-home">
      <section className="legacy-hero" aria-label="Pooja Vangala fashion designer home">
        <div className="legacy-hero-backgrounds" aria-hidden="true">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`legacy-hero-bg-layer ${index === activeSlide ? "is-active" : ""}`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>

        <div className="legacy-hero-content">
          <div className="legacy-copy-block">
            <h1>Let yourself be inspired</h1>
            <p className="legacy-subtitle">Select a suggestion or start prompting</p>
          </div>

          <div className="legacy-prompt-cluster" aria-label="Suggested prompts">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="legacy-prompt-pill"
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

      <section className="legacy-collections-showcase" aria-label="New collections">
        <div className="legacy-collections-heading">
          <h2>New Collections</h2>
          <button className="legacy-collections-button" type="button">
            View All
          </button>
        </div>

        <div className="legacy-collections-grid">
          {collectionCards.map((card) => (
            <article key={card.title} className="legacy-collection-card">
              <button className="legacy-collection-favorite" type="button" aria-label={`Save ${card.title}`}>
                <HeartIcon />
              </button>

              <div className="legacy-collection-image-shell">
                <img
                  className="legacy-collection-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.position }}
                />
              </div>

              <div className="legacy-collection-meta">
                <h3>{card.title}</h3>
                <p>{card.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy-categories-showcase" aria-label="Shop by category">
        <div className="legacy-collections-heading legacy-categories-heading">
          <h2>Categories</h2>
          <button className="legacy-collections-button" type="button">
            Explore All
          </button>
        </div>

        <div className="legacy-categories-grid">
          {categoryCards.map((card) => (
            <article key={card.title} className="legacy-category-card">
              <div className="legacy-category-image-shell">
                <img
                  className="legacy-category-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.position }}
                />
              </div>

              <div className="legacy-category-meta">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy-making-film" aria-label="Explore the making">
        <video
          key={makingVideos[activeMakingVideo]}
          className="legacy-making-film-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/herobg.png"
        >
          <source src={makingVideos[activeMakingVideo]} type="video/mp4" />
        </video>

        <div className="legacy-making-film-overlay" aria-hidden="true" />

        <div className="legacy-making-film-content">
          <div className="legacy-making-film-copy">
            <p>Craft, detail, and movement</p>
            <h2>Explore the Making</h2>
          </div>
        </div>
      </section>

      <section className="legacy-mens-showcase" aria-label="PV men collection">
        <div className="legacy-mens-showcase-copy">
          <p className="legacy-mens-showcase-kicker">For him</p>
          <h2>PV Men Collection</h2>
          <p className="legacy-mens-showcase-text">
            Precision tailoring, textured layers, and occasion silhouettes shaped for a quieter kind
            of statement.
          </p>
          <button className="legacy-collections-button legacy-mens-showcase-button" type="button">
            Discover Menswear
          </button>
        </div>

        <div className="legacy-mens-showcase-grid">
          {mensCollectionCards.map((card) => (
            <article key={card.title} className="legacy-mens-card">
              <div className="legacy-mens-card-image-shell">
                <img
                  className="legacy-mens-card-image"
                  src={card.image}
                  alt={card.title}
                  style={{ objectPosition: card.position }}
                />
              </div>

              <div className="legacy-mens-card-meta">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
