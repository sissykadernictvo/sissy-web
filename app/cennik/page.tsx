const categories = [
  {
    title: "Farbenie a zosvetľovanie",
    items: [
      "Farbenie vlasov",
      "Tónovanie",
      "Melír",
      "Zosvetľovanie",
      "Balayage / moderné techniky",
    ],
  },
  {
    title: "Strihy a styling",
    items: [
      "Dámsky strih",
      "Fúkaná",
      "Styling",
      "Spoločenský účes",
    ],
  },
  {
    title: "Starostlivosť o vlasy",
    items: [
      "Regeneračné ošetrenie",
      "Hĺbková starostlivosť",
      "Profesionálna vlasová kozmetika",
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
            <nav className="nav nav-left">
              <a href="/">Domov</a>
              <a href="/#sluzby">Služby</a>
              <a href="/#prace">Naše práce</a>
            </nav>

            <a href="/" className="brand-center" aria-label="SISSY Hair Salon">
              <img src="/logo-sissy.png" alt="SISSY Hair Salon logo" />
            </a>

            <nav className="nav nav-right">
              <a href="/cennik">Cenník</a>
              <a href="/#recenzie">Recenzie</a>
              <a href="/#kontakt">Kontakt</a>
            </nav>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="section-head center">
              <p className="eyebrow">CENNÍK</p>
              <h2>Cenník služieb</h2>
              <p className="section-subtext">
                Sem doplníme presné ceny jednotlivých služieb bez potreby prerábky dizajnu.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-divider">
          <div className="container cennik-grid">
            {categories.map((category) => (
              <article key={category.title} className="price-card">
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                      <strong>doplniť cenu</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}