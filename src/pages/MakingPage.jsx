import { useEffect, useState } from "react";
import { makingVideos } from "../data/siteData";

const atelierChapters = [
  {
    number: "01",
    title: "Conceive",
    text: "Inspiration is studied, silhouettes are explored, and the story takes shape on paper and in drape.",
  },
  {
    number: "02",
    title: "Craft",
    text: "Embroidery, fabric experimentation, and surface development bring the design to life.",
  },
  {
    number: "03",
    title: "Refine",
    text: "Fittings, adjustments, and movement trials ensure every line feels effortless and exact.",
  },
  {
    number: "04",
    title: "Realise",
    text: "The final piece is pressed, perfected, and prepared for the moment it was created for.",
  },
];

const craftFrames = [
  {
    label: "Hand embroidery",
    image: "/Surface%20Mapping.png",
    position: "50% center",
  },
  {
    label: "Draping",
    image: "/Drape%20Study.png",
    position: "50% center",
  },
  {
    label: "Muslin trials",
    image: "/Atelier%20Manifesto%20Image.png",
    position: "50% center",
  },
  {
    label: "Final press",
    image: "/Atelier%20Detail.png",
    position: "50% center",
  },
];

const materialStudies = [
  {
    title: "Silks and Satins",
    text: "Fluid, luminous, and chosen for their natural fall.",
    image: "/Ivory%20Understructure.png",
  },
  {
    title: "Thread and Embellishments",
    text: "Hand-selected elements that add depth and dimension.",
    image: "/Surface%20Mapping.png",
  },
  {
    title: "Nets and Tulles",
    text: "Lightness with structure, made for movement and grace.",
    image: "/Final%20Movement.png",
  },
  {
    title: "Heritage Weaves",
    text: "Timeless textiles woven with tradition and artistry.",
    image: "/Runway%20Movement.png",
  },
];

export default function MakingPage() {
  const [activeMakingVideo, setActiveMakingVideo] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMakingVideo((currentVideo) => (currentVideo + 1) % makingVideos.length);
    }, 7000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="making-luxury">
      <section className="making-luxury-hero" aria-label="Explore the making">
        <video
          key={makingVideos[activeMakingVideo]}
          className="making-luxury-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/newassets/ANI_8132.JPG"
        >
          <source src={makingVideos[activeMakingVideo]} type="video/mp4" />
        </video>
        <div className="making-luxury-hero-shade" aria-hidden="true" />
        <div className="making-luxury-hero-copy">
          <span>Inside the atelier</span>
          <h1>Explore the Making</h1>
          <p>
            Couture is a language of intention, crafted in silence, felt for a lifetime.
          </p>
          <div className="making-luxury-scroll-cue">Scroll to discover</div>
        </div>
      </section>

      <section className="making-luxury-manifesto">
        <div className="making-luxury-manifesto-image">
          <img src="/Atelier%20Manifesto%20Image.png" alt="Pooja Vangala atelier handwork" />
        </div>
        <div className="making-luxury-manifesto-copy">
          <span className="making-luxury-index">Our process</span>
          <h2>Where vision becomes heirloom.</h2>
          <p>
            Every Pooja Vangala creation begins long before the first stitch. It begins with mood,
            memory, and meaning.
          </p>
          <p>
            From hand-draped silhouettes to intricate surface work, each piece is shaped through
            patience, precision, and an uncompromising eye for detail.
          </p>
          <p>This is the quiet rhythm behind every garment.</p>
        </div>
      </section>

      <section className="making-luxury-chapters" aria-label="Atelier process">
        <div className="making-luxury-section-heading">
          <span>The atelier journey</span>
        </div>
        <div className="making-luxury-chapter-list">
          {atelierChapters.map((chapter) => (
            <article key={chapter.title} className="making-luxury-chapter">
              <span>{chapter.number}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="making-luxury-gallery" aria-label="Craft gallery">
        <div className="making-luxury-gallery-copy">
          <span className="making-luxury-index">The hand behind the beauty</span>
          <h2>Crafted by hand. Perfected by time.</h2>
        </div>
        <div className="making-luxury-gallery-grid">
          {craftFrames.map((frame) => (
            <figure key={frame.label} className="making-luxury-frame">
              <img src={frame.image} alt={frame.label} style={{ objectPosition: frame.position }} />
              <figcaption>{frame.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="making-luxury-materials">
        <div className="making-luxury-materials-heading">
          <span>Material notes</span>
        </div>
        {materialStudies.map((study) => (
          <article key={study.title} className="making-luxury-material">
            <div className="making-luxury-material-image">
              <img src={study.image} alt={study.title} />
            </div>
            <div>
              <span>Study</span>
              <h3>{study.title}</h3>
              <p>{study.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="making-luxury-close">
        <video className="making-luxury-close-video" autoPlay loop muted playsInline preload="auto">
          <source src="/appointmnts.mp4" type="video/mp4" />
        </video>
        <div className="making-luxury-close-shade" aria-hidden="true" />
        <div className="making-luxury-close-copy">
          <span>Appointments</span>
          <h2>Begin with the occasion. The garment follows.</h2>
          <p>Book a private consultation to begin your couture journey with the atelier.</p>
          <a href="mailto:atelier@poojavangala.com">Book an appointment</a>
        </div>
      </section>
    </main>
  );
}
