import * as React from 'react';
import Hero from '../components/ui/hero/Hero';
import PageTitle from '../components/page-title/PageTitle';
import Section from '../components/ui/section/Section';

import ApartmeaIcon from '../assets/apartmea-icon.svg';
import FrangoIcon from '../assets/frango-icon.svg';
import HateFreeZoneIcon from '../assets/hate-free-zone-icon.svg';
import SoupCultureIcon from '../assets/soup-culture-icon.svg';
import {
  APARTMEA_PAGE,
  FRANGO_PAGE,
  HATE_FREE_ZONE_PAGE,
  SOUPCULTURE_PAGE,
} from '../const/routes';
import HeroBanner from '../components/home-page/hero-banner/HeroBanner';
import OurTeam from '../components/home-page/our-team/OurTeam';
import Footer from '../components/ui/footer/Footer';
import Partners from '../components/home-page/partners/Partners';

function IndexPage() {
  return (
    <main>
      <HeroBanner />
      <div id="portfolio" />
      <Section withSpacing>
        <Hero
          icon={<SoupCultureIcon />}
          headline="Soupculture"
          description="Soupculture je bezodpadový street food zameraný na
            polievky v chrumkavých pohároch. Firma potrebovala odštartovať
            predaj, a preto sa na nás obrátili s požiadavkou na online reklamnú
            kampaň. Okrem uplatňovania online reklamných nástrojov sme
            spolupracovali aj s mikroinfluencermi pre ešte efektívnejšie šírenie
            povedomia."
          linkTo={SOUPCULTURE_PAGE}
        />
      </Section>
      <Section withSpacing>
        <Hero
          rtl
          icon={<FrangoIcon />}
          headline="Frango"
          description="Frango je slovenská sieť reštaurácií rýchleho
            občerstvenia, ktorá sa špecializuje na chutné a šťavnaté jedlá z
            kuracieho mäska. Vďaka spolupráci s nami získali úplne novú,
            originálnu vizuálnu identitu, ktorou táto sieť púta pozornosť ľudí
            vo foodcourte na Nivách."
          linkTo={FRANGO_PAGE}
        />
      </Section>
      <Section withSpacing>
        <Hero
          icon={<HateFreeZoneIcon />}
          headline="Hate-free Zone"
          description="Islamská nadácia na Slovensku už viac ako 23 rokov buduje
            mosty porozumenia. Prepája a zbližuje cudzinecké a moslimské
            minority so slovenskou verejnosťou cez otvorený dialóg. Nadácia nás
            oslovila s požiadavkou na tvorbu novej vizuálnej identity a
            reklamnej kampane."
          linkTo={HATE_FREE_ZONE_PAGE}
        />
      </Section>
      <Section withSpacing>
        <Hero
          rtl
          icon={<ApartmeaIcon />}
          headline="Apartmea"
          description="Apartmea je spoločnosť, ktorá zjednodušuje zákaznícku
            cestu k rezervácii apartmánov. Našou úlohou bolo vytvoriť funkčnú
            značku pre rakúsky trh. Okrem návrhu vizuálu sme sa zaoberali aj
            namingom a komunikačnou identitou."
          linkTo={APARTMEA_PAGE}
        />
      </Section>
      <div id="aboutUs" />
      <OurTeam />
      <Partners />
      <div id="contact" />
      <Footer />
    </main>
  );
}

export default IndexPage;

export function Head() {
  return <PageTitle />;
}
