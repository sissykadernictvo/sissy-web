const services = [
  {
    number: "01",
    title: "Farbenie a tónovanie",
    text: "Precízna farebná práca, elegantné odtiene a profesionálny výsledok s dôrazom na krásu aj kvalitu vlasov.",
  },
  {
    number: "02",
    title: "Melír a zosvetľovanie",
    text: "Jemné aj výraznejšie prechody, blond premeny, svetelný efekt a čistý profesionálny výsledok.",
  },
  {
    number: "03",
    title: "Dámske strihy a styling",
    text: "Strihy a styling prispôsobené typu vlasov, tvári a celkovému štýlu klientky.",
  },
  {
    number: "04",
    title: "Regeneračná starostlivosť",
    text: "Profesionálne ošetrenia pre lesk, hebkosť, výživu a zdravší vzhľad vlasov.",
  },
];

const reviews = [
  "Maximálna spokojnosť, rýchlosť, cena a milé kaderníčky.",
  "Profesionalita, príjemné prostredie a výborný prístup k zákazníkom.",
  "Veľmi spokojný s celou rodinkou.",
  "Opakovane spokojný s prístupom, cenou a hlavne výsledkom.",
  "Veľmi odporúčam každému.",
  "Príjemné prostredie, milý prístup a krásny výsledok.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "SISSY Hair Salon",
  image: "https://example.com/logo-sissy.png",
  url: "https://example.com",
  telephone: "+421908783282",
  email: "kadernictvosissy@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hlavná 15",
    addressLocality: "Šamorín",
    postalCode: "931 01",
    addressCountry: "SK",
  },
  areaServed: ["Šamorín", "Somorja", "Dunajská Streda", "okolie Šamorína"],
  priceRange: "€€",
  sameAs: [
    "https://www.facebook.com/share/18MtKiPWxj/?mibextid=wwXIfr",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Farbenie a tónovanie" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Melír a zosvetľovanie" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Dámske strihy a styling" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Regeneračná starostlivosť" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="tel:+421908783282"
        className="floating-call"
        aria-label="Zavolať do salónu"
      >
        <span className="floating-call-icon">✆</span>
        <span>Zavolať</span>
      </a>

      <main className="site-shell">
        <header className="topbar">
          <div className="container topbar-grid">
            <nav className="nav nav-left" aria-label="Ľavá navigácia">
              <a href="#onas">O nás</a>
              <a href="#sluzby">Služby</a>
              <a href="#prace">Naše práce</a>
            </nav>

            <a href="#top" className="brand-center" aria-label="SISSY Hair Salon">
              <img src="/logo-sissy.png" alt="SISSY Hair Salon logo" />
            </a>

            <nav className="nav nav-right" aria-label="Pravá navigácia">
              <a href="/cennik">Cenník</a>
              <a href="#recenzie">Recenzie</a>
              <a href="#kontakt">Kontakt</a>
            </nav>
          </div>
        </header>

        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">PREMIUM KADERNÍCTVO V ŠAMORÍNE</p>

              <h1>
                Krása vlasov
                <br />
                v elegantnom
                <br />
                prevedení
              </h1>

              <p className="hero-text">
                V SISSY Hair Salon sa profesionálna starostlivosť o vlasy spája s
                estetikou, detailom a moderným ženským štýlom. Každá návšteva je
                vedená s dôrazom na kvalitu, krásny výsledok a príjemný zážitok.
              </p>

              <div className="hero-actions">
                <a href="tel:+421908783282" className="btn btn-dark">
                  Kontaktujte nás
                </a>
                <a href="/cennik" className="btn btn-light">
                  Pozrieť cenník
                </a>
              </div>
            </div>

 

  <div className="hero-visual">
    <div className="hero-main-image">
      <img
        src="/images/hero-photo.jpg"
        alt="Interiér salónu SISSY Hair Salon"
      />
    </div>

              <div className="hero-floating-image">
  <img
    src="/images/detail-photo.jpg"
    alt="Detail interiéru salónu SISSY Hair Salon"
  />
</div>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="onas">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">O SALÓNE</p>
              <h2>
                Luxusný štýl
                <br />
                a precízna práca
              </h2>

              <p>
                V našom salóne kladieme dôraz na špičkovú estetiku, kvalitu a
                individuálny prístup ku každej klientke. Každý detail má svoje miesto
                a každý výsledok má pôsobiť harmonicky, elegantne a žensky.
              </p>

              <p>
                Pracujeme s produktmi <strong>L’Oréal Professionnel</strong> a{" "}
                <strong>Mon Platin</strong>. Naše kaderníčky sa pravidelne zúčastňujú
                odborných školení, aby prinášali moderné trendy, profesionálne
                techniky a vysokú úroveň práce.
              </p>
            </div>

            <div className="about-image-card">
              <span>about-photo.jpg</span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="sluzby">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">SLUŽBY</p>
              <h2>To najlepšie zo salónu</h2>
              <p className="section-subtext">
                Farbenie, melír, dámske strihy, styling a profesionálna vlasová
                starostlivosť v Šamoríne.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article key={service.number} className="service-card">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider" id="prace">
          <div className="container">
            <div className="section-head works-head">
              <div>
                <p className="eyebrow">NAŠE PRÁCE</p>
                <h2>Premeny, farby a štýl</h2>
              </div>

              <p className="section-note">
                Sem vložíme vaše reálne fotografie premien, farbení a najkrajších
                výsledkov.
              </p>
            </div>

            <div className="works-grid">
              <div className="work-card work-large">
                <span>work-1.jpg</span>
              </div>
              <div className="work-card">
                <span>work-2.jpg</span>
              </div>
              <div className="work-card">
                <span>work-3.jpg</span>
              </div>
              <div className="work-card work-wide">
                <span>work-4.jpg</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section products-section" id="produkty">
          <div className="container products-grid">
            <div>
              <p className="eyebrow">PRODUKTY</p>
              <h2>Pracujeme s kvalitnými značkami</h2>
              <p className="section-subtext left-align">
                Profesionálne produkty sú súčasťou výsledku. Preto pracujeme so
                značkami, ktorým dôverujú salóny po celom svete.
              </p>
            </div>

            <div className="product-list">
              <article className="product-card">
                <h3>L’Oréal Professionnel</h3>
                <p>
                  Profesionálne riešenia pre farbenie, starostlivosť a styling na
                  vysokej úrovni.
                </p>
              </article>

              <article className="product-card">
                <h3>Mon Platin</h3>
                <p>
                  Kvalitná vlasová kozmetika zameraná na lesk, ochranu a každodennú
                  profesionálnu starostlivosť.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section training-section" id="vzdelavanie">
          <div className="container training-card">
            <p className="eyebrow">VZDELÁVANIE</p>
            <h2>Naše kaderníčky sa pravidelne školia</h2>
            <p>
              Sledujeme nové trendy, techniky a profesionálne postupy, aby sme
              klientkám prinášali moderné riešenia a vysokú úroveň práce pri každej
              službe.
            </p>
          </div>
        </section>

        <section className="section reviews-section" id="recenzie">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">RECENZIE</p>
              <h2>Dôvera, ktorú si vážime</h2>
            </div>

            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <article key={index} className="review-card">
                  <p>“{review}”</p>
                  <strong>Spokojný zákazník</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="kontakt">
          <div className="container contact-grid">
            <div className="contact-card">
              <p className="eyebrow">KONTAKT</p>
              <h2>SISSY Hair Salon</h2>

              <div className="contact-list">
                <p>
                  <strong>Adresa:</strong> Hlavná 15, Šamorín, Slovakia, 931 01
                </p>
                <p>
                  <strong>Telefón:</strong> +421 908 783 282
                </p>
                <p>
                  <strong>E-mail:</strong> kadernictvosissy@gmail.com
                </p>
                <p>
                  <strong>Instagram:</strong> kadernictvo_sissy
                </p>
                <p>
                  <strong>Facebook:</strong>{" "}
                  <a
                    href="https://www.facebook.com/share/18MtKiPWxj/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kadernictvo Sissy
                  </a>
                </p>
              </div>

              <div className="contact-cta">
                <a href="tel:+421908783282" className="btn btn-dark small-btn">
                  Zavolať
                </a>
              </div>
            </div>

            <div className="map-card">
              <iframe
                title="Mapa SISSY Hair Salon"
                src="https://www.google.com/maps?q=Hlavn%C3%A1%2015%2C%20%C5%A0amor%C3%ADn&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              <img src="/logo-sissy.png" alt="SISSY Hair Salon logo" />
            </div>

            <div className="footer-copy">
              <p>SISSY Hair Salon · Hlavná 15 · Šamorín</p>
              <p>Luxusné kaderníctvo pre klientky zo Šamorína, Somorje a okolia.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}