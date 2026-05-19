const philosophyNotes = [
  {
    number: "01",
    title: "Form",
    text: "Purity in silhouette. Every line is considered, every proportion intentional.",
  },
  {
    number: "02",
    title: "Surface",
    text: "Handcrafted expression. Embroidery, texture, and detail that speak softly yet last forever.",
  },
  {
    number: "03",
    title: "Ceremony",
    text: "Designed for life's moments. Pieces that carry emotion and become part of your story.",
  },
];

const craftNotes = [
  {
    title: "Handwork",
    text: "Rooted in tradition. Executed with patience. Every motif is placed by hand, never rushed.",
    image: "/Handwork%20Craft%20Image.png",
  },
  {
    title: "Drape",
    text: "Fabric comes alive in motion. We sculpt and drape to achieve effortless movement and flattering form.",
    image: "/Drape%20Craft%20Image.png",
  },
  {
    title: "Fittings",
    text: "Precision is personal. Multiple fittings ensure the piece feels like it was made only for you.",
    image: "/fittingscraft.png",
  },
];

const studioPrinciples = [
  {
    number: "01",
    title: "Intention",
    text: "Every creation begins with listening.",
  },
  {
    number: "02",
    title: "Research",
    text: "We explore heritage, materials, and form.",
  },
  {
    number: "03",
    title: "Design",
    text: "Silhouettes are sketched, refined, and reimagined.",
  },
  {
    number: "04",
    title: "Craft",
    text: "Master artisans bring each piece to life.",
  },
  {
    number: "05",
    title: "Memory",
    text: "Your story continues in every detail.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-editorial">
      <section className="about-editorial-hero" aria-label="About Pooja Vangala">
        <div className="about-editorial-hero-image">
          <img src="/Founder%20Hero%20Portrait%20.png" alt="Pooja Vangala founder portrait" />
        </div>
        <div className="about-editorial-hero-copy">
          <h1>Pooja Vangala</h1>
          <p>A couture language shaped by restraint, surface, and ceremony.</p>
        </div>
      </section>

      <section className="about-editorial-story">
        <div className="about-editorial-story-image">
          <img src="/Founder%20Story%20Portrait.png" alt="Founder in the Pooja Vangala atelier" />
        </div>
        <div className="about-editorial-story-copy">
          <span className="about-editorial-kicker">The story</span>
          <h2>The atelier begins with feeling.</h2>
          <p>
            Pooja Vangala founded her atelier with a belief that true luxury lives in emotion,
            intention, and impeccable craft.
          </p>
          <p>
            Every piece is a dialogue between heritage techniques and contemporary silhouettes:
            created for women and men who value subtlety, soul, and significance.
          </p>
          <p>
            From intimate gatherings to life's most meaningful celebrations, our creations are made
            to be lived in, remembered, and treasured.
          </p>
        </div>
      </section>

      <section className="about-editorial-philosophy" aria-label="Atelier philosophy">
        {philosophyNotes.map((note) => (
          <article key={note.title} className="about-editorial-philosophy-card">
            <div>
              <span>{note.number}</span>
              <i aria-hidden="true" />
            </div>
            <h3>{note.title}</h3>
            <p>{note.text}</p>
          </article>
        ))}
      </section>

      <section className="about-editorial-quote" aria-label="Atelier quote">
        <div className="about-editorial-quote-shade" aria-hidden="true" />
        <blockquote>
          <span>“</span>
          We don&apos;t follow trends. We follow meaning.
        </blockquote>
      </section>

      <section className="about-editorial-craft">
        <div className="about-editorial-craft-intro">
          <span className="about-editorial-kicker">Our craft</span>
          <h2>Made by hands. Guided by intuition.</h2>
          <p>
            Our process is intimate and immersive. We work closely with clients to understand their
            world, their occasion, and their essence, then translate it into couture.
          </p>
        </div>

        <div className="about-editorial-craft-list">
          {craftNotes.map((note) => (
            <article key={note.title} className="about-editorial-craft-item">
              <div className="about-editorial-craft-image">
                <img src={note.image} alt={note.title} />
              </div>
              <div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-editorial-principles" aria-label="Studio principles">
        <div className="about-editorial-principles-head">
          <span className="about-editorial-kicker">Our studio principles</span>
          <div className="about-editorial-principles-image">
            <img src="/Studio%20Principles%20Detail.png" alt="Pooja Vangala studio principles detail" />
          </div>
        </div>
        <div className="about-editorial-principle-list">
          {studioPrinciples.map((principle) => (
            <article key={principle.title} className="about-editorial-principle">
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-editorial-contact">
        <div className="about-editorial-contact-shade" aria-hidden="true" />
        <div className="about-editorial-contact-copy">
          <span className="about-editorial-kicker">Our appointment only</span>
          <h2>Begin with a conversation.</h2>
          <p>
            Book a private consultation at our atelier to explore our collections and create
            something uniquely yours.
          </p>
          <a href="mailto:atelier@poojavangala.com">Book an appointment</a>
        </div>
        <address className="about-editorial-contact-details">
          <span>Atelier, Hyderabad, India</span>
          <a href="mailto:atelier@poojavangala.com">atelier@poojavangala.com</a>
          <a href="tel:+910000000000">+91 XXXXX XXXXX</a>
        </address>
      </section>
    </main>
  );
}
