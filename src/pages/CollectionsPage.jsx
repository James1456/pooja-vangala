import { useEffect, useState } from "react";
import {
  collectionCards,
  collectionEditorialCards,
  collectionFeatureVideos,
  collectionStoryCards,
} from "../data/siteData";

export default function CollectionsPage() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveVideo((currentVideo) => (currentVideo + 1) % collectionFeatureVideos.length);
    }, 6500);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="page-section page-section-light">
      <section className="editorial-feature">
        <div className="editorial-feature-media">
          <video
            key={collectionFeatureVideos[activeVideo]}
            className="editorial-feature-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/newassets/IMG_1941.JPG"
          >
            <source src={collectionFeatureVideos[activeVideo]} type="video/mp4" />
          </video>
        </div>

        <div className="editorial-feature-copy">
          <p className="section-kicker">Collection film</p>
          <h2>Summer 2026 in motion, texture, and light.</h2>
          <p className="page-subtitle page-subtitle-left">
            A softer, cinematic entry into the collection before the full runway edit below.
          </p>
        </div>
      </section>

      <div className="section-heading">
        <p className="section-kicker">Edit</p>
        <h1 className="page-title">New Collections</h1>
        <p className="page-subtitle">
          A curated runway of occasion silhouettes, draped structure, and heirloom finish.
        </p>
      </div>

      <div className="collections-grid">
        {collectionCards.map((card) => (
          <article key={card.title} className="collection-card">
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

      <section className="editorial-strip">
        {collectionEditorialCards.map((card) => (
          <article key={card.title} className="editorial-strip-card">
            <div className="editorial-strip-image-shell">
              <img
                className="editorial-strip-image"
                src={card.image}
                alt={card.title}
                style={{ objectPosition: card.position }}
              />
            </div>
            <p>{card.title}</p>
          </article>
        ))}
      </section>

      <section className="story-grid">
        {collectionStoryCards.map((card) => (
          <article key={card.title} className="story-card">
            <p className="section-kicker">Collection note</p>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="closing-editorial">
        <div className="closing-editorial-copy">
          <p className="section-kicker">Final impression</p>
          <h2>Designed to feel cinematic up close, not only on the runway.</h2>
          <p className="page-subtitle page-subtitle-left">
            The collection brings together luminous surfaces, softened tailoring, and occasion
            pieces intended to remain meaningful long after a single event.
          </p>
        </div>
        <div className="closing-editorial-image-shell">
          <img
            className="closing-editorial-image"
            src="/newassets/F687348C-2270-4C3A-A98A-055DA9838D76.jpg"
            alt="Pooja Vangala collection look"
          />
        </div>
      </section>
    </main>
  );
}
