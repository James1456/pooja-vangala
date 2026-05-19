import { categoryCards, categorySpotlightCards, categoryStyleNotes } from "../data/siteData";

export default function CategoriesPage() {
  return (
    <main className="page-section page-section-light">
      <section className="spotlight-row">
        {categorySpotlightCards.map((card) => (
          <article key={card.title} className="spotlight-card">
            <div className="spotlight-card-image-shell">
              <img
                className="spotlight-card-image"
                src={card.image}
                alt={card.title}
                style={{ objectPosition: card.position }}
              />
            </div>
            <div className="spotlight-card-copy">
              <p className="section-kicker">Spotlight</p>
              <h2>{card.title}</h2>
              <p>{card.subtitle}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="section-heading">
        <p className="section-kicker">Shop by category</p>
        <h1 className="page-title">Categories</h1>
        <p className="page-subtitle">
          A sharp edit of shirts, tailoring, and festive forms across the Pooja Vangala line.
        </p>
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

      <section className="story-grid story-grid-tight">
        {categoryStyleNotes.map((card) => (
          <article key={card.title} className="story-card">
            <p className="section-kicker">Style note</p>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="closing-editorial closing-editorial-reverse">
        <div className="closing-editorial-image-shell">
          <img
            className="closing-editorial-image"
            src="/newassets/Gemini_Generated_Image_l92kd6l92kd6l92k.png"
            alt="Pooja Vangala category portrait"
          />
        </div>
        <div className="closing-editorial-copy">
          <p className="section-kicker">Wardrobe direction</p>
          <h2>Built so every category can stand alone or layer into a full occasion look.</h2>
          <p className="page-subtitle page-subtitle-left">
            The category edit gives the site more depth while helping visitors move from tailored
            essentials into more ceremonial pieces with clarity.
          </p>
        </div>
      </section>
    </main>
  );
}
