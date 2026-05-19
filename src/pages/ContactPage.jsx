const contactMethods = [
  {
    title: "Atelier Appointments",
    text: "For custom pieces, fittings, and private consultations.",
    href: "mailto:atelier@poojavangala.com",
    label: "atelier@poojavangala.com",
  },
  {
    title: "Client Care",
    text: "For current orders, sizing conversations, and styling guidance.",
    href: "mailto:hello@poojavangala.com",
    label: "hello@poojavangala.com",
  },
  {
    title: "Press and Editorial",
    text: "For shoots, features, and collaboration enquiries.",
    href: "mailto:press@poojavangala.com",
    label: "press@poojavangala.com",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="section-kicker">Contact us</p>
          <h1>Begin with the occasion.</h1>
          <p>
            Share the event, the mood, and the timeline. The studio will guide the next step with
            care, clarity, and a tailored point of view.
          </p>
        </div>
        <div className="contact-hero-image-shell">
          <img
            className="contact-hero-image"
            src="/newassets/IMG_9383.JPG"
            alt="Pooja Vangala couture detail"
          />
        </div>
      </section>

      <section className="contact-methods" aria-label="Contact methods">
        {contactMethods.map((method) => (
          <article key={method.title} className="contact-method-card">
            <h2>{method.title}</h2>
            <p>{method.text}</p>
            <a href={method.href}>{method.label}</a>
          </article>
        ))}
      </section>

      <section className="contact-inquiry" aria-label="Contact inquiry form">
        <div className="contact-inquiry-copy">
          <p className="section-kicker">Inquiry form</p>
          <h2>Tell us what you are dressing for.</h2>
          <p>
            A few thoughtful details help the atelier understand your occasion, timeline, and the
            kind of piece you are imagining.
          </p>
        </div>

        <form
          className="contact-form"
          action="mailto:hello@poojavangala.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>Name</span>
            <input name="Name" type="text" autoComplete="name" required />
          </label>

          <label>
            <span>Email</span>
            <input name="Email" type="email" autoComplete="email" required />
          </label>

          <label>
            <span>Phone</span>
            <input name="Phone" type="tel" autoComplete="tel" />
          </label>

          <label>
            <span>Occasion date</span>
            <input name="Occasion date" type="text" placeholder="Month / year" />
          </label>

          <label>
            <span>Inquiry type</span>
            <select name="Inquiry type" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Custom bridal</option>
              <option>Occasionwear</option>
              <option>Styling consultation</option>
              <option>Press or editorial</option>
            </select>
          </label>

          <label>
            <span>Preferred city</span>
            <input name="Preferred city" type="text" autoComplete="address-level2" />
          </label>

          <label className="contact-form-wide">
            <span>Message</span>
            <textarea
              name="Message"
              rows="6"
              placeholder="Share the event, mood, references, and anything important about the piece."
              required
            />
          </label>

          <button className="contact-submit" type="submit">
            Send Inquiry
          </button>
        </form>
      </section>

      <section className="contact-note">
        <p className="section-kicker">Appointments</p>
        <h2>Private consultations are available for bridal, occasionwear, and editorial dressing.</h2>
        <p>
          Include your preferred date, city, garment category, and any inspiration references when
          reaching out. The atelier will respond with availability and next steps.
        </p>
      </section>
    </main>
  );
}
