const services = [
  {
    number: "01",
    title: "Farbenie, tónovanie a blond premeny",
    text: "Profesionálne farbenie, tónovanie, zosvetľovanie, melír, balayage efekt, blond techniky a moderné farebné premeny s dôrazom na čistý, elegantný a ženský výsledok.",
  },
  {
    number: "02",
    title: "Dámske strihy, fúkaná a styling",
    text: "Dámske strihy, modelovanie účesu, fúkaná, žehlenie, vlny a finálny styling prispôsobený typu vlasov, tvári a celkovému štýlu klientky.",
  },
  {
    number: "03",
    title: "Spoločenské a eventové účesy",
    text: "Účesy na svadby, oslavy, plesy, fotenia, večerné akcie a iné výnimočné príležitosti, kde záleží na detailoch, výdrži a luxusnom dojme.",
  },
  {
    number: "04",
    title: "Regeneračná starostlivosť",
    text: "Hĺbková výživa, regenerácia, lesk, hebkosť, starostlivosť o poškodené vlasy a profesionálne ošetrenia pre zdravší vzhľad vlasov.",
  },
  {
    number: "05",
    title: "Pánske a detské strihy",
    text: "Pánske strihy, úprava vlasov pre mužov a detské strihy s dôrazom na precíznosť, pohodlie a prirodzený, upravený výsledok.",
  },
  {
    number: "06",
    title: "Trvalá, objem a individuálne služby",
    text: "Objemové úpravy, trvalá a individuálne riešenia podľa typu vlasov a želaného výsledku, vždy s dôrazom na kvalitu a stav vlasov.",
  },
];

const reviews = [
  {
    text: "Maximálna spokojnosť, rýchlosť, cena a milé kaderníčky.",
    author: "Dávid Peták",
  },
  {
    text: "Profesionalita, príjemné prostredie a výborný prístup k zákazníkom.",
    author: "Štefan Döméný",
  },
  {
    text: "Veľmi spokojný s celou rodinkou.",
    author: "Mgr. Radovan Levius",
  },
  {
    text: "Opakovane spokojný s prístupom, cenou a hlavne výsledkom.",
    author: "Vojtech Krivda",
  },
  {
    text: "Veľmi odporúčam každému.",
    author: "Alex Sudar",
  },
  {
    text: "Príjemné prostredie, milý prístup a krásny výsledok.",
    author: "Soňa Borončová",
  },
];

const products = [
  {
    title: "L’Oréal Professionnel",
    text: "Profesionálne riešenia pre farbenie, starostlivosť, ochranu vlasového vlákna a styling na vysokej úrovni. Značka, ktorej klientky dôverujú.",
    image: "/images/product-loreal.jpg",
  },
  {
    title: "Mon Platin",
    text: "Kvalitná vlasová kozmetika zameraná na lesk, hebkosť, regeneráciu a každodennú profesionálnu starostlivosť v salóne aj doma.",
    image: "/images/product-monplatin.jpg",
  },
  {
    title: "Starostlivosť na mieru",
    text: "Každé vlasy potrebujú individuálny prístup. Produkty a postupy vyberáme podľa kvality vlasov, farby, poškodenia a želaného výsledku.",
    image: "/images/product-care.jpg",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "SISSY Hair Salon",
  image: "https://www.sissy.sk/logo-sissy.png",
  url: "https://www.sissy.sk",
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
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
    },
  })),
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
            <nav className="desktop-nav desktop-nav-left" aria-label="Ľavá navigácia">
              <a href="#onas">O nás</a>
              <a href="#sluzby">Služby</a>
              <a href="#prace">Naše práce</a>
            </nav>

            <a href="#top" className="brand-center" aria-label="SISSY Hair Salon">
              <img src="/logo-sissy.png" alt="SISSY Hair Salon logo" />
            </a>

            <nav className="desktop-nav desktop-nav-right" aria-label="Pravá navigácia">
              <a href="/cennik">Cenník</a>
              <a href="#recenzie">Recenzie</a>
              <a href="#kontakt">Kontakt</a>
            </nav>

            <details className="mobile-menu">
              <summary aria-label="Otvoriť menu">
                <span />
                <span />
                <span />
              </summary>

              <div className="mobile-menu-panel">
                <a href="#onas">O nás</a>
                <a href="#sluzby">Služby</a>
                <a href="#prace">Naše práce</a>
                <a href="/cennik">Cenník</a>
                <a href="#recenzie">Recenzie</a>
                <a href="#kontakt">Kontakt</a>
              </div>
            </details>
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
                SISSY Hair Salon je priestor, kde sa stretáva príjemná atmosféra,
                profesionálna práca a cit pre krásu. Pracujeme s dôrazom na moderné
                techniky, čisté prevedenie a výsledok, ktorý pôsobí upravene,
                luxusne a prirodzene zároveň.
              </p>

              <p>
                Pracujeme s produktmi <strong>L’Oréal Professionnel</strong> a{" "}
                <strong>Mon Platin</strong>. Naše kaderníčky sa pravidelne
                zúčastňujú odborných školení, aby prinášali moderné trendy,
                profesionálne techniky a vysokú úroveň práce.
              </p>
            </div>

            <div className="about-image-card">
              <img
                src="/images/about-photo.jpg"
                alt="Interiér a atmosféra salónu SISSY Hair Salon"
              />
            </div>
          </div>
        </section>

        <section className="section services-section" id="sluzby">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">SLUŽBY</p>
              <h2>Starostlivosť, štýl a výsledok</h2>
              <p className="section-subtext">
                Farbenie, melír, dámske, pánske aj detské strihy, fúkaná,
                styling, spoločenské účesy, regenerácia, trvalá a profesionálna
                starostlivosť o vlasy v Šamoríne.
              </p>
            </div>

            <div className="services-grid services-grid-rich">
              {services.map((service) => (
                <article key={service.number} className="service-card service-card-rich">
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
                Výsledky, ktoré sú viditeľné na prvý pohľad — elegantné odtiene,
                čistá práca, ženský štýl a profesionálny finish.
              </p>
            </div>

            <div className="works-grid">
              <div className="work-card work-large">
                <img src="/images/work-1.jpg" alt="Farbenie vlasov SISSY Hair Salon" />
              </div>
              <div className="work-card">
                <img src="/images/work-2.jpg" alt="Melír a blond premena" />
              </div>
              <div className="work-card">
                <img src="/images/work-3.jpg" alt="Styling a elegantný účes" />
              </div>
              <div className="work-card work-wide">
                <img src="/images/work-4.jpg" alt="Premena vlasov v SISSY Hair Salon" />
              </div>
            </div>
          </div>
        </section>

        <section className="section products-section" id="produkty">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">PRODUKTY</p>
              <h2>Pracujeme s kvalitnými značkami</h2>
              <p className="section-subtext">
                Profesionálne produkty sú súčasťou výsledku. Preto pracujeme so
                značkami, ktoré podporujú krásu vlasov, ich ochranu aj dlhodobú kvalitu.
              </p>
            </div>

            <div className="product-list product-list-rich">
              {products.map((product) => (
                <article key={product.title} className="product-card product-card-rich">
                  <div className="product-card-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-card-copy">
                    <h3>{product.title}</h3>
                    <p>{product.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section training-section" id="vzdelavanie">
          <div className="container">
            <div className="training-card training-card-rich">
              <div className="training-copy">
                <p className="eyebrow">VZDELÁVANIE</p>
                <h2>Naše kaderníčky sa pravidelne školia</h2>
                <p>
                  Sledujeme nové trendy, techniky a profesionálne postupy, aby sme
                  klientkám prinášali moderné riešenia a vysokú úroveň práce pri každej službe.
                </p>
                <p>
                  Vzdelávanie je pre nás súčasťou profesionálneho prístupu. Pravidelné
                  odborné školenia nám pomáhajú zdokonaľovať techniky farbenia,
                  zosvetľovania, strihov, stylingu aj starostlivosti o kvalitu vlasov.
                </p>
              </div>

              <div className="training-gallery">
                <div className="training-thumb">
                  <img src="/images/training-1.jpg" alt="Odborné kadernícke školenie" />
                </div>
                <div className="training-thumb">
                  <img src="/images/training-2.jpg" alt="Profesionálne vzdelávanie kaderníčok" />
                </div>
                <div className="training-thumb">
                  <img src="/images/training-3.jpg" alt="Techniky farbenia a stylingu" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews-section" id="recenzie">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">RECENZIE</p>
              <h2>Dôvera, ktorú si vážime</h2>
              <p className="section-subtext">
                Skúsenosti klientov, ktorí ocenili náš prístup, atmosféru salónu a výslednú prácu.
              </p>
            </div>

            <div className="reviews-grid">
              {reviews.map((review, index) => (
                <article key={index} className="review-card">
                  <p>“{review.text}”</p>
                  <strong>{review.author}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="kontakt">
          <div className="container contact-grid">
            <div className="contact-card contact-card-rich">
              <p className="eyebrow">KONTAKT</p>
              <h2>Rezervujte si svoj termín</h2>

              <p className="contact-intro">
                Radi vás privítame v SISSY Hair Salon v Šamoríne. Objednajte sa
                telefonicky, kontaktujte nás online alebo nás sledujte na sociálnych sieťach.
              </p>

              <div className="contact-list contact-list-rich">
                <p>
                  <strong>Adresa</strong>
                  <span>Hlavná 15, Šamorín, Slovakia, 931 01</span>
                </p>
                <p>
                  <strong>Telefón</strong>
                  <span><a href="tel:+421908783282">+421 908 783 282</a></span>
                </p>
                <p>
                  <strong>E-mail</strong>
                  <span><a href="mailto:kadernictvosissy@gmail.com">kadernictvosissy@gmail.com</a></span>
                </p>
                <p>
                  <strong>Instagram</strong>
                  <span>@kadernictvo_sissy</span>
                </p>
                <p>
                  <strong>Facebook</strong>
                  <span>
                    <a
                      href="https://www.facebook.com/share/18MtKiPWxj/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Kadernictvo Sissy
                    </a>
                  </span>
                </p>
              </div>

              <div className="contact-cta contact-cta-rich">
                <a href="tel:+421908783282" className="btn btn-dark small-btn">
                  Zavolať
                </a>
                <a
                  href="https://www.facebook.com/share/18MtKiPWxj/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light small-btn"
                >
                  Facebook
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
              <p>SISSY Hair Salon · Hlavná 15 · Šamorín · www.sissy.sk</p>
              <p>Luxusné kaderníctvo pre klientky a klientov zo Šamorína, Somorje a okolia.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}