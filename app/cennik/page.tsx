import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenník služieb",
  description:
    "Orientačný cenník služieb SISSY kaderníctvo v Šamoríne. Farbenie, melír, fúkaná, trvalá, spoločenské účesy, pánske a detské strihy.",
  alternates: {
    canonical: "https://www.sissy.sk/cennik",
  },
};
const categories = [
  {
    label: "Farby a blond",
    title: "Farbenie a zosvetľovanie",
    items: [
      { name: "Farbenie vlasov", price: "od 30 €" },
      { name: "Tónovanie", price: "podľa konzultácie" },
      { name: "Melír", price: "od 30 €" },
      { name: "Zosvetľovanie", price: "podľa konzultácie" },
      { name: "Balayage / moderné techniky", price: "podľa konzultácie" },
    ],
  },
  {
    label: "Strih a styling",
    title: "Dámske služby",
    items: [
      { name: "Strihanie", price: "od 15 €" },
      { name: "Fúkaná", price: "od 9 €" },
      { name: "Spoločenský účes", price: "od 30 €" },
      { name: "Skúška účesu", price: "20 €" },
    ],
  },
  {
    label: "Objem a starostlivosť",
    title: "Trvalá a ošetrenie",
    items: [
      { name: "Trvalá", price: "od 30 €" },
      { name: "Zábal", price: "od 5 €" },
    ],
  },
  {
    label: "Pre mužov a deti",
    title: "Pánske a detské služby",
    items: [
      { name: "Pánsky strih", price: "od 10 €" },
      { name: "Pánsky melír", price: "od 20 €" },
      { name: "Detský strih", price: "od 10 €" },
    ],
  },
];

export default function CennikPage() {
  return (
    <>
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
              <a href="/">Domov</a>
              <a href="/#sluzby">Služby</a>
              <a href="/#prace">Naše práce</a>
            </nav>

            <a href="/" className="brand-center" aria-label="SISSY kaderníctvo">
              <img src="/logo-sissy.png" alt="SISSY kaderníctvo logo" />
            </a>

            <nav className="desktop-nav desktop-nav-right" aria-label="Pravá navigácia">
              <a href="/cennik">Cenník</a>
              <a href="/#recenzie">Recenzie</a>
              <a href="/#kontakt">Kontakt</a>
            </nav>

            <details className="mobile-menu">
              <summary aria-label="Otvoriť menu">
                <span />
                <span />
                <span />
              </summary>

              <div className="mobile-menu-panel">
                <a href="/">Domov</a>
                <a href="/#sluzby">Služby</a>
                <a href="/#prace">Naše práce</a>
                <a href="/cennik">Cenník</a>
                <a href="/#recenzie">Recenzie</a>
                <a href="/#kontakt">Kontakt</a>
              </div>
            </details>
          </div>
        </header>

        <section className="section cennik-hero">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">CENNÍK</p>
              <h2>Cenník služieb</h2>
              <p className="section-subtext">
                Orientačné ceny služieb v SISSY kaderníctvo. Konečná cena závisí
                od dĺžky vlasov, spotreby materiálu a rozsahu vykonanej práce.
              </p>
            </div>

            <div className="cennik-note">
              <strong>Upozornenie:</strong> Uvedené ceny sú orientačné. Presná cena
              sa určuje individuálne podľa dĺžky vlasov, náročnosti služby a
              spotreby materiálu.
            </div>
          </div>
        </section>

        <section className="section section-divider cennik-section">
          <div className="container cennik-grid">
            {categories.map((category) => (
              <article key={category.title} className="price-card">
                <div className="price-card-top">
                  <span className="price-label">{category.label}</span>
                  <h3>{category.title}</h3>
                </div>

                <ul className="price-list">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <strong>{item.price}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-divider cennik-cta-section">
          <div className="container">
            <div className="cennik-cta-card">
              <p className="eyebrow">OBJEDNANIE</p>
              <h2>Radi vám pripravíme cenu aj osobne</h2>
              <p>
                Ak si nie ste istí presnou službou alebo chcete vedieť orientačnú
                cenu pre vaše vlasy, kontaktujte nás telefonicky. Radi vám poradíme
                a odporučíme vhodné riešenie.
              </p>

              <div className="contact-cta contact-cta-rich">
                <a href="tel:+421908783282" className="btn btn-dark small-btn">
                  Zavolať
                </a>
                <a href="/" className="btn btn-light small-btn">
                  Späť na hlavnú stránku
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}