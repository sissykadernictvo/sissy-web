export const dynamic = "force-static";

const services = [
  {
    label: "Farby a blond",
    title: "Farbenie, tónovanie a blond premeny",
    text: "Precízna farebná práca pre klientky, ktoré chcú elegantný, čistý a profesionálny výsledok.",
    items: ["farbenie", "tónovanie", "melír", "zosvetľovanie", "blond techniky"],
  },
  {
    label: "Strih a styling",
    title: "Dámske strihy, fúkaná a styling",
    text: "Úprava vlasov s dôrazom na ženskosť, tvar, pohyb a celkový dojem účesu.",
    items: ["dámske strihy", "fúkaná", "žehlenie", "vlny", "finálny styling"],
  },
  {
    label: "Špeciálne príležitosti",
    title: "Spoločenské a eventové účesy",
    text: "Účesy pre výnimočné momenty, kde záleží na detailoch, výdrži aj luxusnom dojme.",
    items: ["svadby", "oslavy", "plesy", "večerné akcie", "fotenia"],
  },
  {
    label: "Výživa vlasov",
    title: "Regeneračná starostlivosť",
    text: "Profesionálna starostlivosť pre lesk, hebkosť, regeneráciu a zdravší vzhľad vlasov.",
    items: ["hĺbková výživa", "regenerácia", "lesk", "hebkosť", "starostlivosť o poškodené vlasy"],
  },
  {
    label: "Pre mužov aj deti",
    title: "Pánske a detské strihy",
    text: "Presné a upravené strihy s dôrazom na pohodlie, prirodzenosť a čisté prevedenie.",
    items: ["pánske strihy", "detské strihy", "úprava vlasov", "čisté línie", "praktický styling"],
  },
  {
    label: "Individuálny prístup",
    title: "Trvalá, objem a služby na mieru",
    text: "Riešenia prispôsobené typu vlasov, želanému efektu a celkovému vzhľadu klientky.",
    items: ["trvalá", "objemové úpravy", "individuálne riešenia", "konzultácia", "starostlivosť na mieru"],
  },
];

const works = [
  { image: "/images/work-1.jpg", alt: "Farbenie vlasov v SISSY kaderníctvo v Šamoríne" },
  { image: "/images/work-2.jpg", alt: "Melír a blond premena v SISSY kaderníctvo" },
  { image: "/images/work-3.jpg", alt: "Elegantný styling vlasov v SISSY kaderníctvo" },
  { image: "/images/work-4.jpg", alt: "Premena vlasov v SISSY kaderníctvo" },
  { image: "/images/work-5.jpg", alt: "Dámsky účes po profesionálnej úprave" },
  { image: "/images/work-6.jpg", alt: "Lesklé a upravené vlasy po farbení" },
  { image: "/images/work-7.jpg", alt: "Moderný ženský účes" },
  { image: "/images/work-8.jpg", alt: "Výsledok práce v SISSY kaderníctvo" },
  { image: "/images/work-9.jpg", alt: "Vlnitý styling a ženský vzhľad vlasov" },
  { image: "/images/work-10.jpg", alt: "Elegantná blond premena" },
  { image: "/images/work-11.jpg", alt: "Spoločenský účes v SISSY kaderníctvo" },
  { image: "/images/work-12.jpg", alt: "Luxusný výsledok farbenia vlasov" },
  { image: "/images/work-13.jpg", alt: "Prirodzený lesk a hebkosť vlasov po úprave" },
  { image: "/images/work-14.jpg", alt: "Moderný účes a profesionálny styling" },
  { image: "/images/work-15.jpg", alt: "Ženský účes s elegantným objemom" },
  { image: "/images/work-16.jpg", alt: "Profesionálna premena vlasov v SISSY kaderníctvo" },
];

const reviews = [
  {
    text: "Príjemné prostredie, milý prístup a krásny výsledok.",
    author: "Soňa Borončová",
    highlight: "Milý prístup a krásny výsledok",
  },
  {
    text: "Profesionalita, príjemné prostredie a výborný prístup k zákazníkom.",
    author: "Štefan Döméný",
    highlight: "Profesionalita a atmosféra",
  },
  {
    text: "Opakovane spokojná s prístupom aj výsledkom. Vždy odchádzam spokojná.",
    author: "Overená klientka",
    highlight: "Spokojnosť pri každej návšteve",
  },
  {
    text: "Maximálna spokojnosť, rýchlosť, cena a milé kaderníčky.",
    author: "Dávid Peták",
    highlight: "Rýchlosť a prívetivosť",
  },
  {
    text: "Veľmi spokojný s celou rodinkou.",
    author: "Mgr. Radovan Levius",
    highlight: "Spokojnosť celej rodiny",
  },
  {
    text: "Veľmi odporúčam každému.",
    author: "Alex Sudar",
    highlight: "Odporúčanie klienta",
  },
  {
    text: "Krásna práca, príjemný personál a veľmi dobrý pocit z celého salónu.",
    author: "Spokojná klientka",
    highlight: "Práca aj atmosféra",
  },
  {
    text: "Do salónu sa rada vraciam, vždy sa tu cítim príjemne a výsledok stojí za to.",
    author: "Verná klientka",
    highlight: "Dôvera a návratnosť",
  },
];

const products = [
  {
    title: "L’Oréal Professionnel",
    text: "Profesionálne riešenia pre farbenie, starostlivosť, ochranu vlasového vlákna a styling na vysokej úrovni. Značka, ktorej klientky dôverujú.",
    image: "/images/product-loreal.jpg",
    featured: true,
  },
  {
    title: "Mon Platin",
    text: "Kvalitná vlasová kozmetika zameraná na lesk, hebkosť, regeneráciu a každodennú profesionálnu starostlivosť v salóne aj doma.",
    image: "/images/product-monplatin.jpg",
    featured: false,
  },
  {
    title: "Starostlivosť na mieru",
    text: "Každé vlasy potrebujú individuálny prístup. Produkty a postupy vyberáme podľa kvality vlasov, farby, poškodenia a želaného výsledku.",
    image: "/images/product-care.jpg",
    featured: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": "https://www.sissy.sk/#salon",
  name: "SISSY kaderníctvo",
  alternateName: "Sissy kaderníctvo",
  url: "https://www.sissy.sk",
  image: "https://www.sissy.sk/og-image.jpg",
  logo: "https://www.sissy.sk/icon.png",
  telephone: "+421908783282",
  email: "kadernictvosissy@gmail.com",
  description:
    "SISSY kaderníctvo v Šamoríne. Farbenie, melír, blond premeny, dámske, pánske a detské strihy, styling, spoločenské účesy a profesionálna starostlivosť o vlasy.",
  slogan: "Krása vlasov v elegantnom prevedení",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hlavná 15",
    addressLocality: "Šamorín",
    postalCode: "931 01",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.0307,
    longitude: 17.3097,
  },
  founder: {
    "@type": "Person",
    name: "Silvia Gavlider",
  },
  areaServed: [
    { "@type": "City", name: "Šamorín" },
    { "@type": "City", name: "Somorja" },
    { "@type": "City", name: "Dunajská Streda" },
  ],
  priceRange: "€€",
  paymentAccepted: "Cash, Card",
  currenciesAccepted: "EUR",
  sameAs: [
    "https://www.facebook.com/share/18MtKiPWxj/?mibextid=wwXIfr",
  ],
  hasMap: "https://www.google.com/maps?q=Hlavn%C3%A1%2015%2C%20%C5%A0amor%C3%ADn&z=15&output=embed",
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      areaServed: "Šamorín",
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

            <a href="#top" className="brand-center" aria-label="SISSY kaderníctvo">
              <img src="/logo-sissy.png" alt="SISSY kaderníctvo logo" />
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
               Profesionálna
                <br />
               krása vlasov
                <br />
               pre každý deň
              </h1>

              <p className="hero-text">
                Už 23 rokov je SISSY kaderníctvo miestom, kde sa spája skúsenosť,
                cit pre detail a ženská elegancia. Každá návšteva je vedená s dôrazom
                na krásny výsledok, profesionálny prístup a pocit, že ste v rukách
                kaderníčok, ktoré svojej práci skutočne rozumejú.
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
                  alt="Interiér SISSY kaderníctvo v Šamoríne"
                />
              </div>

              <div className="hero-floating-image">
                <img
                  src="/images/detail-photo.jpg"
                  alt="Detail interiéru SISSY kaderníctvo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-divider" id="onas">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">O NÁS</p>

              <h2>Luxusný štýl, precízna práca a dôvera</h2>

              <p>
                V SISSY kaderníctvo veríme, že krásne vlasy sú výsledkom skúseností,
                precíznej práce a citlivého prístupu ku každej klientke. Každému detailu
                venujeme pozornosť tak, aby výsledok pôsobil elegantne, harmonicky
                a prirodzene žensky.
              </p>

              <p>
                SISSY kaderníctvo je už 23 rokov miestom v Šamoríne, kde sa profesionálna
                starostlivosť o vlasy spája s príjemnou atmosférou, modernou estetikou
                a dôrazom na kvalitu. Naším cieľom nie je len upraviť vlasy, ale dopriať
                každej klientke pocit krásy, istoty a sebavedomia.
              </p>

              <p>
                Zakladateľkou a tvárou SISSY kaderníctvo je Silvia Gavlider, ktorá salón
                pred 23 rokmi vytvorila s jasnou víziou budovať miesto, kde budú ženy,
                muži aj rodiny dostávať nielen profesionálnu službu, ale aj ľudský prístup,
                dôveru a starostlivosť na vysokej úrovni. Už viac ako dve desaťročia vedie
                salón v Šamoríne v službe ľuďom, s dôrazom na poctivú prácu, krásny výsledok
                a spokojnosť klientov.
              </p>

              <p>
                V SISSY kaderníctvo pracujeme s profesionálnymi značkami
                <strong> L’Oréal Professionnel</strong> a <strong>Mon Platin</strong>.
                Naše kaderníčky sa pravidelne vzdelávajú, sledujú nové trendy a zdokonaľujú
                techniky farbenia, strihov aj stylingu, aby sme prinášali služby na vysokej
                úrovni a výsledky, ktorým môžu klientky dôverovať.
              </p>
            </div>

            <div className="about-image-card">
              <img
                src="/images/about-photo.jpg"
                alt="Silvia Gavlider a atmosféra SISSY kaderníctvo"
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
                Farbenie, melír, dámske, pánske aj detské strihy, fúkaná, styling,
                spoločenské účesy, regenerácia, trvalá a profesionálna starostlivosť
                o vlasy v Šamoríne.
              </p>
            </div>

            <div className="services-grid services-grid-rich">
              {services.map((service, index) => (
                <article key={index} className="service-card service-card-rich">
                  <div className="service-card-top">
                    <span className="service-label">{service.label}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  <ul className="service-list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider works-section" id="prace">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">NAŠE PRÁCE</p>
              <h2>Premeny, farby a štýl</h2>
              <p className="section-subtext">
                Reálne výsledky našej práce — farbenie, blond premeny, styling,
                elegantné účesy a ženské detaily, ktoré tvoria celkový dojem.
              </p>
            </div>

            <div className="works-grid-rich">
              {works.map((work, index) => (
                <div key={index} className="work-card work-card-rich">
                  <img src={work.image} alt={work.alt} />
                </div>
              ))}
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
                  <div
                    className={`product-card-image ${
                      product.featured ? "product-card-image-featured" : ""
                    }`}
                  >
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
                To, čo si klienti všímajú najviac — profesionálny prístup, príjemnú
                atmosféru, milé kaderníčky a výsledok, s ktorým odchádzajú spokojní.
              </p>
            </div>

            <div className="reviews-grid reviews-grid-compact">
              {reviews.map((review, index) => (
                <article key={index} className="review-card review-card-compact">
                  <div className="review-top">
                    <span className="review-stars">★★★★★</span>
                    <span className="review-badge">Overené hodnotenie</span>
                  </div>

                  <span className="review-highlight">{review.highlight}</span>
                  <p>“{review.text}”</p>

                  <div className="review-footer">
                    <strong>{review.author}</strong>
                    <span>Google recenzia</span>
                  </div>
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
                Radi vás privítame v SISSY kaderníctvo v Šamoríne. Objednajte sa
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
                title="Mapa SISSY kaderníctvo"
                src="https://www.google.com/maps?q=Hlavn%C3%A1%2015%2C%20%C5%A0amor%C3%ADn&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

<footer className="footer">
  <div className="container footer-inner footer-inner-rich">
    <div className="footer-brand-block">
      <div className="footer-brand">
        <img src="/logo-sissy.png" alt="SISSY kaderníctvo logo" />
      </div>

      <div className="footer-brand-copy">
        <p className="footer-brand-title">SISSY kaderníctvo</p>
        <p className="footer-brand-text">
          Luxusné kaderníctvo v Šamoríne s dôrazom na krásny výsledok,
          profesionálny prístup a príjemnú atmosféru.
        </p>
      </div>
    </div>

    <div className="footer-links">
      <div className="footer-col">
        <p className="footer-heading">Navigácia</p>
        <a href="/">Domov</a>
        <a href="/#sluzby">Služby</a>
        <a href="/#prace">Naše práce</a>
        <a href="/cennik">Cenník</a>
      </div>

      <div className="footer-col">
        <p className="footer-heading">Kontakt</p>
        <a href="tel:+421908783282">+421 908 783 282</a>
        <a href="mailto:kadernictvosissy@gmail.com">kadernictvosissy@gmail.com</a>
        <a
          href="https://www.facebook.com/share/18MtKiPWxj/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </div>

      <div className="footer-col">
        <p className="footer-heading">Informácie</p>
        <a href="/#kontakt">Kontaktujte nás</a>
        <a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a>
      </div>
    </div>
  </div>

  <div className="container footer-bottom">
    <p>© {new Date().getFullYear()} SISSY kaderníctvo. Všetky práva vyhradené.</p>
    <p>Hlavná 15, Šamorín · www.sissy.sk</p>
  </div>
</footer>
      </main>
    </>
  );
}