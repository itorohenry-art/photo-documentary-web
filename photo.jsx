import React from "react";

const gallery = [
  {
    title: "Coastal Light",
    type: "Travel",
    client: "Nomad Journal",
    year: "2026",
    image:
      "/images/photo2.jpg",
  },
  {
    title: "Golden Hour",
    type: "Portrait",
    client: "The Atelier",
    year: "2025",
    image:
      "/images/photo3.jpg",
  },
  {
    title: "Quiet Streets",
    type: "Editorial",
    client: "Northbound",
    year: "2025",
    image:
      "/images/photo4.jpg",
  },
  {
    title: "Mountain Silence",
    type: "Landscape",
    client: "Wildform",
    year: "2024",
    image:
      "/images/photo5.jpg",
  },
  {
    title: "City Rhythm",
    type: "Urban",
    client: "Studio Eight",
    year: "2026",
    image:
      "/images/photo6.jpg",
  },
  {
    title: "Luminous Detail",
    type: "Wedding",
    client: "Mila & Rowan",
    year: "2024",
    image:
      "/images/photo7.jpg",
  },
];

const services = [
  {
    title: "Editorial Photography",
    description:
      "Cinematic portraits and visual storytelling crafted for brands, magazines, and campaigns.",
    price: "From $2,400",
  },
  {
    title: "Wedding Coverage",
    description:
      "Documentary, intimate, and art-forward wedding imagery designed to feel timeless and personal.",
    price: "From $3,800",
  },
  {
    title: "Travel Sessions",
    description:
      "Authentic, destination-driven imagery that captures place, mood, and movement in equal measure.",
    price: "From $1,800",
  },
  {
    title: "Commercial Films",
    description:
      "Short-form cinematic films for launches, campaigns, and founder-led brand stories.",
    price: "From $4,600",
  },
];

const stats = [
  { value: "12+", label: "Years behind the lens" },
  { value: "320", label: "Stories captured" },
  { value: "48", label: "Cities explored" },
  { value: "96%", label: "Client return rate" },
];

const testimonials = [
  {
    quote:
      "Every frame felt intentional, warm, and unmistakably ours. The gallery was beautiful from the first preview onward.",
    name: "the Smiths",
    role: "Wedding clients",
  },
  {
    quote:
      "The work feels elevated without ever losing its humanity. It elevated our brand and our story in equal measure.",
    name: "yakubu",
    role: "Creative director",
  },
  {
    quote:
      "Our campaign film looked like a luxury editorial spread—and it was captured with so much ease and intention.",
    name: "chukwuebuka",
    role: "Brand founder",
  },
  {
    quote:
      "From planning to final delivery, the entire process was calm, polished, and surprisingly joyful.",
    name: "emem archibong",
    role: "Portrait client",
  },
];

const socials = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Behance", url: "https://behance.net" },
  { name: "Vimeo", url: "https://vimeo.com" },
  { name: "Pinterest", url: "https://pinterest.com" },
];

export default function PhotoPortfolio() {
  return (
    <>
      <style>{`
        :root {
          --bg: #f6f0ea;
          --bg-deep: #efe2d5;
          --panel: rgba(255, 255, 255, 0.34);
          --ink: #171412;
          --muted: #615a56;
          --line: rgba(23, 20, 18, 0.12);
          --accent: #d5a36d;
          --accent-strong: #9f5d34;
          --dark: #1a1716;
          --shadow: 0 24px 60px rgba(22, 18, 15, 0.12);
          --soft-shadow: 0 18px 35px rgba(26, 21, 18, 0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: "Segoe UI", Tahoma, sans-serif;
          background: linear-gradient(180deg, #f8f2ec 0%, #f4efe9 100%);
          color: var(--ink);
        }
        a { color: inherit; text-decoration: none; }
        img { display: block; max-width: 100%; }
        h1, h2, h3, p { margin-top: 0; }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(213, 163, 109, 0.14), transparent 18%),
            radial-gradient(circle at bottom right, rgba(159, 93, 52, 0.1), transparent 22%);
        }

        .container {
          width: min(1200px, calc(100% - 32px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(246, 240, 234, 0.7);
          border-bottom: 1px solid var(--line);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 18px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .brand-mark {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          font-size: 0.88rem;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
          box-shadow: 0 12px 28px rgba(159, 93, 52, 0.26);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 0.94rem;
          color: var(--muted);
        }

        .nav-links a:hover { color: var(--ink); }

        .button,
        .button-ghost,
        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.92rem 1.55rem;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 0.92rem;
          font-weight: 600;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .button,
        .nav-cta {
          color: #fff;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%);
          box-shadow: 0 18px 30px rgba(159, 93, 52, 0.2);
        }

        .button-ghost {
          color: var(--ink);
          background: transparent;
          border-color: rgba(23, 20, 18, 0.18);
        }

        .button:hover,
        .button-ghost:hover,
        .nav-cta:hover {
          transform: translateY(-2px);
        }

        .hero {
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
          align-items: center;
          gap: 48px;
          padding: 72px 0 48px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-strong);
          margin-bottom: 18px;
        }

        .eyebrow::before {
          content: "";
          width: 36px;
          height: 1px;
          background: rgba(159, 93, 52, 0.7);
          display: inline-block;
        }

        h1 {
          font-size: clamp(3.4rem, 6vw, 6.2rem);
          line-height: 0.9;
          letter-spacing: -0.07em;
          margin-bottom: 20px;
        }

        .lead {
          max-width: 620px;
          color: var(--muted);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 28px;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 30px;
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          color: var(--muted);
          font-size: 0.96rem;
        }

        .hero-meta strong {
          display: block;
          color: var(--ink);
          font-size: 1.2rem;
          margin-bottom: 4px;
        }

        .hero-visual {
          position: relative;
          min-height: 630px;
        }

        .main-photo {
          position: absolute;
          inset: 0 12% 0 10%;
          border-radius: 30px;
          background-image: linear-gradient(180deg, rgba(17, 15, 15, 0.18), rgba(17, 15, 15, 0.38)), url("/images/photo1.jpg");
          background-size: cover;
          background-position: center;
          box-shadow: var(--shadow);
        }

        .floating-card {
          position: absolute;
          left: 0;
          bottom: 28px;
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.68);
          border: 1px solid rgba(23, 20, 18, 0.06);
          box-shadow: var(--soft-shadow);
          backdrop-filter: blur(8px);
        }

        .floating-card strong {
          display: block;
          font-size: 1.25rem;
          margin-bottom: 4px;
        }

        .section {
          padding: 80px 0;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin-bottom: 34px;
        }

        .section-kicker {
          color: var(--accent-strong);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        h2 {
          font-size: clamp(2.4rem, 4vw, 4rem);
          line-height: 1.02;
          letter-spacing: -0.06em;
          margin-bottom: 0;
        }

        .section-copy {
          max-width: 520px;
          color: var(--muted);
          line-height: 1.8;
          font-size: 1rem;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .stat {
          background: rgba(255, 255, 255, 0.32);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 28px 20px;
          text-align: center;
        }

        .stat strong {
          display: block;
          font-size: clamp(2rem, 3vw, 3.1rem);
          margin-bottom: 10px;
          letter-spacing: -0.06em;
        }

        .stat span {
          color: var(--muted);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .portfolio-card {
          position: relative;
          min-height: 430px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--shadow);
          background-size: cover;
          background-position: center;
        }

        .portfolio-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.62));
        }

        .portfolio-card:nth-child(2),
        .portfolio-card:nth-child(5) {
          transform: translateY(26px);
        }

        .portfolio-meta {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 18px;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 12px;
          color: white;
        }

        .portfolio-meta strong {
          display: block;
          font-size: 1.45rem;
          letter-spacing: -0.04em;
          margin-bottom: 6px;
        }

        .portfolio-meta small {
          opacity: 0.9;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.16);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(6px);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .about-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: center;
        }

        .about-photo {
          min-height: 580px;
          border-radius: 30px;
          background-image: linear-gradient(180deg, rgba(18, 15, 14, 0.12), rgba(18, 15, 14, 0.28)), url("/images/photo3.jpg");
          background-size: cover;
          background-position: center;
          box-shadow: var(--shadow);
        }

        .about-copy {
          background: rgba(255,255,255,0.28);
          border: 1px solid var(--line);
          border-radius: 30px;
          padding: 30px;
        }

        .about-copy p {
          color: var(--muted);
          line-height: 1.9;
          font-size: 1.02rem;
          margin-bottom: 18px;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .mini-card {
          background: rgba(255,255,255,0.3);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 18px 16px;
        }

        .mini-card strong {
          display: block;
          margin-bottom: 8px;
          font-size: 1.05rem;
        }

        .mini-card span {
          color: var(--muted);
          font-size: 0.9rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .service-card {
          background: rgba(255,255,255,0.32);
          border: 1px solid var(--line);
          border-radius: 26px;
          padding: 26px 20px;
        }

        .service-number {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(213,163,109,0.18), rgba(159,93,52,0.22));
          color: var(--accent-strong);
          font-weight: 700;
          margin-bottom: 18px;
        }

        .service-card h3 {
          margin-bottom: 12px;
          font-size: 1.55rem;
          letter-spacing: -0.04em;
        }

        .service-card p {
          color: var(--muted);
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .service-price {
          display: inline-block;
          color: var(--ink);
          font-weight: 700;
        }

        .film-strip {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          margin-top: 18px;
        }

        .film-feature,
        .film-stack {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: var(--shadow);
          background-size: cover;
          background-position: center;
          position: relative;
          min-height: 340px;
        }

        .film-feature::before,
        .film-stack::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.52));
        }

        .film-copy {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 22px;
          z-index: 1;
          color: white;
        }

        .film-copy strong {
          display: block;
          font-size: clamp(1.8rem, 2vw, 2.7rem);
          letter-spacing: -0.05em;
          margin-bottom: 6px;
        }

        .film-copy span {
          display: inline-flex;
          padding: 9px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .testimonial {
          background: rgba(255,255,255,0.32);
          border: 1px solid var(--line);
          border-radius: 26px;
          padding: 28px 24px;
        }

        .quote-mark {
          margin-bottom: 14px;
          font-size: 3.3rem;
          line-height: 1;
          color: var(--accent);
        }

        .testimonial p {
          color: var(--muted);
          line-height: 1.9;
          margin-bottom: 18px;
        }

        .testimonial strong {
          display: block;
          margin-bottom: 4px;
          font-size: 1.08rem;
        }

        .testimonial span {
          color: var(--muted);
          font-size: 0.88rem;
        }

        .cta-panel {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          background: linear-gradient(135deg, rgba(23,20,18,0.97), rgba(52,42,39,0.96));
          border-radius: 30px;
          padding: 30px 28px;
          color: #f6f0ea;
          box-shadow: 0 24px 60px rgba(14, 10, 9, 0.2);
        }

        .cta-panel h3 {
          font-size: clamp(2rem, 3vw, 3rem);
          letter-spacing: -0.06em;
          margin-bottom: 8px;
        }

        .cta-panel p {
          margin: 0;
          color: rgba(246,240,234,0.72);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 26px;
          align-items: start;
        }

        .contact-card,
        .form-card {
          background: rgba(255,255,255,0.3);
          border: 1px solid var(--line);
          border-radius: 28px;
          padding: 28px;
        }

        .contact-list {
          display: grid;
          gap: 18px;
          margin-top: 28px;
        }

        .contact-item {
          padding: 16px 18px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.18);
        }

        .contact-item strong {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent-strong);
          margin-bottom: 8px;
        }

        .contact-item a,
        .contact-item span {
          color: var(--ink);
          font-size: 1rem;
        }

        .socials {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .social-link {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.18);
          color: var(--ink);
          font-size: 0.9rem;
        }

        .form {
          display: grid;
          gap: 16px;
        }

        .field-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .form label {
          display: grid;
          gap: 8px;
          color: var(--muted);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .form input,
        .form textarea {
          width: 100%;
          border: 1px solid rgba(23,20,18,0.12);
          background: rgba(255,255,255,0.28);
          color: var(--ink);
          border-radius: 16px;
          padding: 0.9rem 1rem;
          font: inherit;
          resize: vertical;
          min-height: 52px;
        }

        .form input:focus,
        .form textarea:focus {
          outline: 2px solid rgba(159, 93, 52, 0.2);
          border-color: rgba(159, 93, 52, 0.28);
        }

        .footer {
          padding: 30px 0 60px;
          color: var(--muted);
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          border-top: 1px solid var(--line);
          padding-top: 24px;
        }

        @media (max-width: 980px) {
          .hero,
          .portfolio-grid,
          .about-wrap,
          .services-grid,
          .testimonial-grid,
          .contact-grid,
          .film-strip {
            grid-template-columns: 1fr 1fr;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .hero-visual { min-height: 520px; }
        }

        @media (max-width: 720px) {
          .nav-links { display: none; }
          .stats,
          .portfolio-grid,
          .services-grid,
          .testimonial-grid,
          .field-row,
          .about-wrap,
          .contact-grid,
          .film-strip {
            grid-template-columns: 1fr;
          }

          .portfolio-card:nth-child(2),
          .portfolio-card:nth-child(5) { transform: none; }

          .section-head,
          .cta-panel,
          .footer-inner { flex-direction: column; align-items: flex-start; }

          .hero-visual { min-height: 440px; }
          .floating-card { left: 18px; right: 18px; }
        }
      `}</style>

      <div className="page">
        <header className="topbar">
          <div className="container nav">
            <a href="#top" className="brand" aria-label="ASH WORLD home">
              <span className="brand-mark">A</span>
              <span>ASH WORLD</span>
            </a>

            <nav className="nav-links" aria-label="Main navigation">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </nav>

            <a href="#contact" className="nav-cta">Book a story</a>
          </div>
        </header>

        <main id="top" className="container">
          <section className="hero">
            <div>
              <div className="eyebrow">Documentary • Photography • Culture</div>
              <h1>Stories from Nigeria and Africa, told with honesty and light.</h1>
              <p className="lead">
                ASH WORLD is a documentary photography and visual storytelling studio creating grounded,
                cinematic work for communities, brands, and people whose stories deserve to be seen in full.
              </p>

              <div className="cta-row">
                <a href="#work" className="button">View portfolio</a>
                <a href="#about" className="button-ghost">Meet the studio</a>
              </div>

              <div className="hero-meta">
                <div>
                  <strong>8k+</strong>
                  frames archived
                </div>
                <div>
                  <strong>Africa</strong>
                  rooted storytelling
                </div>
                <div>
                  <strong>12 years</strong>
                  across Nigerian life and culture
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Featured photography showcase">
              <div className="main-photo" />
              <div className="floating-card">
                <strong>Based in Nigeria</strong>
                <span>Documentary portraits, culture and life-led commissions</span>
              </div>
            </div>
          </section>

          <section className="section" id="work">
            <div className="section-head">
              <div>
                <div className="section-kicker">Selected work</div>
                <h2>Imagery with atmosphere.</h2>
              </div>
              <p className="section-copy">
                Contemporary photography and cinematic direction built around emotion, rhythm,
                and the lived details that make each story unforgettable.
              </p>
            </div>

            <div className="stats">
              {stats.map((item) => (
                <div className="stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="portfolio-grid">
              {gallery.map((item) => (
                <article
                  className="portfolio-card"
                  key={item.title}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="portfolio-meta">
                    <div>
                      <strong>{item.title}</strong>
                      <small>
                        {item.client} • {item.year}
                      </small>
                    </div>
                    <span className="pill">{item.type}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="about">
            <div className="about-wrap">
              <div className="about-photo" aria-label="Photographer portrait" />

              <div className="about-copy">
                <div className="section-kicker">About ASH WORLD</div>
                <h2>Rooted in Africa, shaped by real life.</h2>
                <p>
                  ASH WORLD is a documentary photography studio devoted to telling authentic African stories
                  with texture, dignity, and cinematic depth. We work across portraiture, cultural storytelling,
                  and contemporary visual narratives that reflect the soul of everyday life.
                </p>
                <p>
                  From Lagos streets to community gatherings and intimate family portraits, we craft imagery that feels lived-in,
                  immersive, and undeniably human. Every frame is designed to hold atmosphere, place, and emotional truth.
                </p>

                <div className="mini-grid">
                  <div className="mini-card">
                    <strong>Documentary</strong>
                    <span>Human-centered stories rooted in place, culture, and memory.</span>
                  </div>
                  <div className="mini-card">
                    <strong>Portraiture</strong>
                    <span>Personal, intimate, and identity-driven visual narratives.</span>
                  </div>
                  <div className="mini-card">
                    <strong>Culture</strong>
                    <span>Stories shaped by Nigerian and African communities.</span>
                  </div>
                  <div className="mini-card">
                    <strong>Brand & Editorial</strong>
                    <span>Visual storytelling for modern brands with a human lens.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="services">
            <div className="section-head">
              <div>
                <div className="section-kicker">Services & packages</div>
                <h2>Tailored coverage for meaningful stories.</h2>
              </div>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-number">0{index + 1}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-price">{service.price}</span>
                </article>
              ))}
            </div>

            <div className="film-strip">
              <div
                className="film-feature"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80)",
                }}
              >
                <div className="film-copy">
                  <strong>Brand Film Direction</strong>
                  <span>Cinematic commercial work</span>
                </div>
              </div>

              <div
                className="film-stack"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80)",
                }}
              >
                <div className="film-copy">
                  <strong>Creative Motion</strong>
                  <span>Short-form visuals</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="reviews">
            <div className="section-head">
              <div>
                <div className="section-kicker">Testimonials</div>
                <h2>Clients return for the feeling.</h2>
              </div>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial" key={item.name}>
                  <div className="quote-mark">“</div>
                  <p>{item.quote}</p>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>

            <div className="cta-panel" id="contact">
              <div>
                <h3>Ready to tell your story?</h3>
                <p>Let’s plan a session that feels effortless, elevated, and entirely yours.</p>
              </div>
              <a href="mailto:hello@ashworld.ng" className="button">hello@ashworld.ng</a>
            </div>
          </section>

          <section className="section">
            <div className="contact-grid">
              <div className="contact-card">
                <div className="section-kicker">Contact</div>
                <h2>Let’s tell your story.</h2>

                <div className="contact-list">
                  <div className="contact-item">
                    <strong>Email</strong>
                    <a href="mailto:hello@ashworld.ng">hello@ashworld.ng</a>
                  </div>
                  <div className="contact-item">
                    <strong>Phone</strong>
                    <a href="tel:+2348000000000">+234 800 000 0000</a>
                  </div>
                  <div className="contact-item">
                    <strong>Studio</strong>
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>

                <div className="socials" aria-label="Social media links">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      className="social-link"
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="form-card">
                <div className="section-kicker">Inquiry form</div>
                <form className="form">
                  <div className="field-row">
                    <label>
                      First name
                      <input type="text" placeholder="Your name" />
                    </label>
                    <label>
                      Email
                      <input type="email" placeholder="you@example.com" />
                    </label>
                  </div>

                  <div className="field-row">
                    <label>
                      Project type
                      <input type="text" placeholder="Wedding / Editorial / Film" />
                    </label>
                    <label>
                      Budget range
                      <input type="text" placeholder="$1,500 - $5,000" />
                    </label>
                  </div>

                  <label>
                    Project details
                    <textarea rows="6" placeholder="Tell me about your story, date, location, and dream vision..." />
                  </label>

                  <button type="submit" className="button">Send inquiry</button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-inner">
            <div>© 2026 ASH WORLD</div>
            <div>Documentary Photography • Cultural Storytelling • Visual Narrative</div>
          </div>
        </footer>
      </div>
    </>
  );
}
