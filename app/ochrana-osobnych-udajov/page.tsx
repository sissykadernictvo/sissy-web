
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | SISSY kaderníctvo",
  description:
    "Informácie o spracúvaní osobných údajov v SISSY kaderníctvo v Šamoríne.",
};

export default function PrivacyPage() {
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
                <a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a>
              </div>
            </details>
          </div>
        </header>

        <section className="section">
          <div className="container privacy-wrap">
            <div className="section-head center">
              <p className="eyebrow">PRÁVNE INFORMÁCIE</p>
              <h1 className="privacy-title">Ochrana osobných údajov</h1>
              <p className="section-subtext">
                Informácie o spracúvaní osobných údajov v súvislosti s webovou stránkou
                a komunikáciou so salónom SISSY kaderníctvo.
              </p>
            </div>

            <div className="privacy-card">
              <h2>1. Prevádzkovateľ</h2>
              <p>
                Prevádzkovateľom osobných údajov je <strong>SISSY kaderníctvo</strong>,
                Hlavná 15, 931 01 Šamorín.
              </p>
              <p>
                Telefón: <a href="tel:+421908783282">+421 908 783 282</a>
                <br />
                E-mail:{" "}
                <a href="mailto:kadernictvosissy@gmail.com">
                  kadernictvosissy@gmail.com
                </a>
              </p>

              <h2>2. Aké údaje môžeme spracúvať</h2>
              <p>
                V prípade, že nás kontaktujete telefonicky, e-mailom alebo prostredníctvom
                sociálnych sietí, môžeme spracúvať najmä tieto údaje:
              </p>
              <ul className="privacy-list">
                <li>meno a priezvisko, ak nám ho poskytnete,</li>
                <li>telefónne číslo,</li>
                <li>e-mailovú adresu,</li>
                <li>obsah vašej správy alebo požiadavky,</li>
                <li>údaje súvisiace s objednaním termínu.</li>
              </ul>

              <h2>3. Účel spracúvania osobných údajov</h2>
              <p>Osobné údaje spracúvame najmä za účelom:</p>
              <ul className="privacy-list">
                <li>komunikácie so zákazníkom,</li>
                <li>vybavenia objednávky alebo rezervácie termínu,</li>
                <li>odpovede na otázky a požiadavky,</li>
                <li>vedenia bežnej evidencie klientov a kontaktov,</li>
                <li>ochrany oprávnených záujmov prevádzkovateľa.</li>
              </ul>

              <h2>4. Právny základ spracúvania</h2>
              <p>
                Osobné údaje spracúvame na základe predzmluvných vzťahov, plnenia zmluvy,
                oprávneného záujmu alebo vášho súhlasu, ak je v konkrétnom prípade potrebný.
              </p>

              <h2>5. Doba uchovávania údajov</h2>
              <p>
                Osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelu, na ktorý
                boli poskytnuté, prípadne po dobu vyžadovanú osobitnými právnymi predpismi.
              </p>

              <h2>6. Komu môžu byť údaje sprístupnené</h2>
              <p>
                Vaše údaje môžu byť v nevyhnutnom rozsahu sprístupnené poskytovateľom
                technických služieb, hostingu alebo služieb spojených s prevádzkou webu,
                ak je to potrebné na riadne fungovanie stránky a komunikácie.
              </p>

              <h2>7. Externé služby a odkazy</h2>
              <p>
                Webová stránka môže obsahovať odkazy na externé služby a platformy, napríklad
                Facebook, Instagram alebo vloženú mapu Google Maps. Po kliknutí na externý
                odkaz alebo pri použití externej služby sa spracúvanie údajov riadi podmienkami
                konkrétneho poskytovateľa.
              </p>

              <h2>8. Vaše práva</h2>
              <p>Máte právo najmä na:</p>
              <ul className="privacy-list">
                <li>prístup k svojim osobným údajom,</li>
                <li>opravu nesprávnych údajov,</li>
                <li>výmaz údajov, ak sú splnené zákonné podmienky,</li>
                <li>obmedzenie spracúvania,</li>
                <li>namietanie proti spracúvaniu,</li>
                <li>podanie sťažnosti na Úrad na ochranu osobných údajov SR.</li>
              </ul>

              <h2>9. Kontakt</h2>
              <p>
                Ak máte otázky týkajúce sa ochrany osobných údajov, kontaktujte nás na:
              </p>
              <p>
                <a href="mailto:kadernictvosissy@gmail.com">
                  kadernictvosissy@gmail.com
                </a>
                <br />
                <a href="tel:+421908783282">+421 908 783 282</a>
              </p>

              <p className="privacy-note">
                Tento text má informačný charakter a odporúča sa jeho finálna kontrola podľa
                reálneho spôsobu objednávania, komunikácie a používaných služieb.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
