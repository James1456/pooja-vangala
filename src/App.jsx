import { useEffect, useState } from "react";

const suggestions = [
  "Discover relaxed tailoring for breezy city evenings",
  "Explore tailored trousers in soft neutral hues",
  "Find loafers to complement a structured blazer",
];

const backgroundImages = ["/herobg.png", "/herobg2.png"];
const collectionVideos = ["/sum.mp4", "/sum1.mp4", "/sum2.mp4"];

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
        <BrandHeader />

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
    </main>
  );
}
