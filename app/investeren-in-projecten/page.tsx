import type { Metadata } from "next";
import { PageHeader } from "@/components/headers/page-header";

export const metadata: Metadata = {
  title: {
    default:
      "Investeren in Lombok | Investeren in vastgoed in Lombo met 100% Nederlandstalige begeleiding.",
    template: "%s | investereninlombok.nl",
  },
  metadataBase: new URL("https://www.investereninlombok.nl"),
  alternates: {
    canonical: "/",
    languages: {
      nl: "/",
    },
  },
  description:
    "Smart Move Asia is hét Nederlandstalige platform voor veilig vastgoed kopen in Thailand, Maleisië of Indonesië. Met Nederlandstalige begeleiding, betrouwbare partners en een duidelijk stappenplan helpen wij investeerders en emigranten hun droom in Azië te realiseren.",
  openGraph: {
    title:
      "Smart Move Asia | Wonen of investeren in Zuidoost-Azië met 100% Nederlandstalige begeleiding.",
    description:
      "Smart Move Asia is hét Nederlandstalige platform voor veilig vastgoed kopen in Thailand, Maleisië of Indonesië. Met Nederlandstalige begeleiding, betrouwbare partners en een duidelijk stappenplan helpen wij investeerders en emigranten hun droom in Azië te realiseren.",
    url: "https://www.investereninlombok.nl/",
    images: "/socials/stackaware_social.png",
    siteName:
      "Smart Move Asia | Wonen of investeren in Zuidoost-Azië met 100% Nederlandstalige begeleiding.",
    type: "website",
    locale: "nl_NL",
  },
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon.ico",
    apple: "/icon/apple-icon.png",
  },
  keywords: ["StackAware"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function InvestProjects() {
  return (
    <div className="h-full w-full">
      <main>
        <PageHeader
          title="Investeren in projecten"
          subheader="Je zoekt een investering die rendement oplevert. Een woning in een project die niet bedoeld is om zelf in te wonen, maar die wel geschikt is voor eigen gebruik tijdens vakanties."
          subject=""
        />
        <div>
          <div className="my-6">
            <h1 className="text-lg">
              Creeer hier een invoerformulier waarin private en zakelijke
              investeerders hun aanvraag kunnen indienen om meer info te
              ontvangen. Richt je op 5 tot 10 investeerders die vraag hebben om
              samen een stuk land te kopen en hieruit rendement te halen.
            </h1>
          </div>

          <p>
            Investeren in [project] is uniek. Want je kunt al meedoen vanaf
            €50.000. Voor jouw investering krijg je een aandeel in het geheel:
            je deelt mee in de winst uit verhuur (13,3% netto verwacht per jaar)
            én je deelt mee in de winst bij verkoop van het geheel (nog eens 33%
            netto extra verwacht rendement). Daarmee komt het totaal verwacht
            rendement (ver) boven de 20% netto. Niet 1 villa voor €200.000 maar
            7 voor €50.000.
          </p>
          <article lang="nl">
            <header className="my-6">
              <h1 className="text-lg font-medium">
                Belastingtechnisch voordeel bij investeren in Indonesië (t.o.v.
                Box 3)
              </h1>
              <p>
                Een beknopte en heldere uitleg voor Nederlandse investeerders
                over de fiscale positie van buitenlands vastgoed.
              </p>
            </header>

            <section>
              <h2 className="text-lg font-medium">
                1. Buitenlands vastgoed en Box 3
              </h2>
              <p>
                Wanneer u als Nederlands belastingplichtige investeert in{" "}
                <strong>vastgoed in het buitenland</strong> — bijvoorbeeld in
                Indonesië — moet u dit vermogen wel aangeven in Box 3. Nederland
                mag echter niet altijd over hetzelfde onroerend goed heffen:
                volgens veel belastingverdragen, waaronder dat met Indonesië,
                ligt het <strong>heffingsrecht over onroerend goed</strong>{" "}
                primair bij het land waar het vastgoed zich bevindt (in dit
                geval: Indonesië).
              </p>
              <p>
                <strong>Gevolg:</strong>
              </p>
              <ul>
                <li>
                  U geeft het buitenlandse vastgoed aan in uw Box 3-aangifte.
                </li>
                <li>
                  Voor dat deel van uw vermogen krijgt u in Nederland doorgaans
                  een vrijstelling om dubbele belasting te voorkomen.
                </li>
                <li>
                  Daardoor betaalt u in Nederland geen vermogensbelasting over
                  de waarde van uw Indonesische pand(en).
                </li>
              </ul>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-medium">
                2. Mogelijk lager effectief belastingtarief
              </h2>
              <p>
                De belastingdruk in Indonesië op huurinkomsten en
                vermogenswinsten kan in de praktijk <strong>lager</strong>{" "}
                uitpakken dan het forfaitaire rendement waarover u in Box 3
                wordt belast. Afhankelijk van de gekozen investeringsstructuur
                (privé, via een BV of via een lokale rechtspersoon) kan het
                effectieve fiscale resultaat voor u gunstiger zijn.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-medium">
                3. Waardegroei en huurinkomsten
              </h2>
              <p>
                Omdat het vastgoed fysiek in Indonesië ligt, vallen de{" "}
                <strong>waardestijging</strong> en eventuele{" "}
                <strong>huurinkomsten</strong> in principe onder de regelgeving
                van dat land en niet onder Nederlandse Box 3-heffing. Dit maakt
                buitenlandse vastgoedbeleggingen aantrekkelijk voor beleggers
                die hun portefeuille willen diversifiëren en fiscale spreiding
                willen bereiken.
              </p>
            </section>

            <section className="my-6">
              <h2 className="text-lg font-medium">
                Let op — belangrijke waarschuwing
              </h2>
              <p>
                De hierboven beschreven voordelen zijn <em>algemeen</em> van
                aard. De exacte toepassing hangt af van:
              </p>
              <ul>
                <li>Het belastingverdrag tussen Nederland en Indonesië;</li>
                <li>
                  De wijze waarop u investeert (privé, via een Nederlandse BV of
                  via een lokale entiteit);
                </li>
                <li>Uw persoonlijke fiscale situatie en woonplaatsstatus.</li>
              </ul>
              <p>
                <strong>Advies:</strong> raadpleeg altijd een gespecialiseerde
                belastingadviseur met ervaring in internationale fiscaliteit
                voordat u een definitieve beslissing neemt.
              </p>
            </section>

            <footer>
              <blockquote>
                <p>
                  <strong>Kort samengevat:</strong> Investeren in vastgoed in
                  Indonesië kan fiscaal aantrekkelijk zijn voor Nederlandse
                  beleggers, omdat het onroerend goed buiten de Nederlandse Box
                  3-heffing kan vallen en lokale belastingdruk vaak lager is.
                  Laat uw situatie echter altijd professioneel toetsen.
                </p>
              </blockquote>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
}
