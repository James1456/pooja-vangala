const atelierServices = [
  "Custom bridal and occasionwear",
  "Ceremonial tailoring",
  "Made-to-measure festive wardrobes",
  "Editorial styling consultations",
];

const processNotes = [
  {
    label: "01",
    title: "Conversation",
    text: "Every piece begins with the person, the occasion, and the feeling the garment needs to carry.",
  },
  {
    label: "02",
    title: "Drape",
    text: "Shape, surface, and proportion are refined through sketches, textile studies, and fittings.",
  },
  {
    label: "03",
    title: "Finish",
    text: "The final garment is resolved through hand detail, movement checks, and quiet precision.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-premium">
      <section className="about-premium-hero" aria-label="About Pooja Vangala">
        <img
          className="about-premium-hero-image"
          src="/newassets/IMG_8367.JPG"
          alt="Pooja Vangala editorial portrait"
        />
        <div className="about-premium-hero-shade" aria-hidden="true" />
        <div className="about-premium-hero-copy">
          <p className="section-kicker">About the studio</p>
          <h1>Pooja Vangala</h1>
          <p>
            Couture and occasionwear shaped through restraint, luminous surface work, and a modern
            sense of ceremony.
          </p>
        </div>
      </section>

      <section className="about-premium-intro">
        <p className="section-kicker">Studio language</p>
        <h2>Pieces that feel collected, not consumed.</h2>
        <div className="about-premium-intro-text">
          <p>
            The atelier works between softness and structure: sculpted drape, measured embellishment,
            and silhouettes that hold presence without becoming loud.
          </p>
          <p>
            Each look is developed for ceremonies, celebrations, and personal milestones where the
            garment has to feel memorable from a distance and intimate up close.
          </p>
        </div>
      </section>

      <section className="about-premium-image-pair" aria-label="Atelier imagery">
        <figure>
          <img src="/newassets/IMG_1941.JPG" alt="Pooja Vangala draped couture detail" />
          <figcaption>Drape and proportion</figcaption>
        </figure>
        <figure>
          <img src="/newassets/C76B4E15-1620-4511-A620-7433DF7C0BA5.jpg" alt="Pooja Vangala runway frame" />
          <figcaption>Occasion silhouettes</figcaption>
        </figure>
      </section>

      <section className="about-premium-process">
        <div className="about-premium-process-heading">
          <p className="section-kicker">Approach</p>
          <h2>Designed slowly, resolved precisely.</h2>
        </div>
        <div className="about-premium-process-list">
          {processNotes.map((item) => (
            <article key={item.title} className="about-premium-process-item">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-premium-services">
        <div>
          <p className="section-kicker">Atelier</p>
          <h2>For weddings, receptions, editorials, and heirloom wardrobes.</h2>
        </div>
        <ul>
          {atelierServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="about-premium-contact">
        <video className="about-premium-contact-video" autoPlay loop muted playsInline preload="auto">
          <source src="/appointmnts.mp4" type="video/mp4" />
        </video>
        <div className="about-premium-contact-shade" aria-hidden="true" />
        <div className="about-premium-contact-content">
          <p className="section-kicker">Appointments</p>
          <h2>Begin with the occasion. The garment follows.</h2>
          <div className="about-premium-contact-links">
            <a href="mailto:hello@poojavangala.com">hello@poojavangala.com</a>
            <a href="mailto:atelier@poojavangala.com">atelier@poojavangala.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
