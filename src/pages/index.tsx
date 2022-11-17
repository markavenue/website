import * as React from 'react';
import Hero from '../components/ui/hero/Hero';
import PageTitle from '../components/page-title/PageTitle';
import Section from '../components/ui/section/Section';

function IndexPage() {
  return (
    <main>
      <Section>
        <Hero
          headline="Soupculture"
          description="Soupculture je bezodpadový street food zameraný na
            polievky v chrumkavých pohároch. Firma potrebovala odštartovať
            predaj, a preto sa na nás obrátili s požiadavkou na online reklamnú
            kampaň. Okrem uplatňovania online reklamných nástrojov sme
            spolupracovali aj s mikroinfluencermi pre ešte efektívnejšie šírenie
            povedomia."
        />
        <Hero
          rtl
          headline="Frango"
          description="Frango je slovenská sieť reštaurácií rýchleho
            občerstvenia, ktorá sa špecializuje na chutné a šťavnaté jedlá z
            kuracieho mäska. Vďaka spolupráci s nami získali úplne novú,
            originálnu vizuálnu identitu, ktorou táto sieť púta pozornosť ľudí
            vo foodcourte na Nivách."
        />
        <Hero
          headline="Hate-free Zone"
          description="Islamská nadácia na Slovensku už viac ako 23 rokov buduje
            mosty porozumenia. Prepája a zbližuje cudzinecké a moslimské
            minority so slovenskou verejnosťou cez otvorený dialóg. Nadácia nás
            oslovila s požiadavkou na tvorbu novej vizuálnej identity a
            reklamnej kampane."
        />
        <Hero
          rtl
          headline="Apartmea"
          description="Apartmea je spoločnosť, ktorá zjednodušuje zákaznícku
            cestu k rezervácii apartmánov. Našou úlohou bolo vytvoriť funkčnú
            značku pre rakúsky trh. Okrem návrhu vizuálu sme sa zaoberali aj
            namingom a komunikačnou identitou."
        />
      </Section>
    </main>
  );
}

export default IndexPage;

export function Head() {
  return <PageTitle />;
}
