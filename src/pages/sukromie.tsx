import React from 'react';

import { Link } from 'gatsby';
import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import PageHead from '../components/page-head/PageHead';
import EmailLink from '../components/ui/link/EmailLink';
import { CONTACT_EMAIL_ADDRESS, CONTACT_PHONE_NUMBER } from '../const/contact';
import PhoneLink from '../components/ui/link/PhoneLink';
import { COOKIE_POLICY_PAGE } from '../const/routes';

const TITLE = 'Zásady ochrany osobných údajov';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <Heading variant="normal">{TITLE}</Heading>
      <p>
        Dátum platnosti: 12.06.2023 <br />
        Naposledy aktualizované: 11.06.2023
      </p>
      <p>
        Tieto zásady ochrany osobných údajov popisujú zásady Mark Avenue, Šuty
        10008/34, 831 07 Bratislava-Vajnory, Slovensko, email:{' '}
        <EmailLink address={CONTACT_EMAIL_ADDRESS} />, telefón:{' '}
        <PhoneLink number={CONTACT_PHONE_NUMBER} /> pri zbere, používaní a
        zverejňovaní vašich informácií, ktoré zhromažďujeme pri používaní našej
        webovej stránky ( https://www.markavenue.sk/ ) (ďalej len
        &quot;služba&quot;). Prístupom k tejto službe alebo jej používaním
        súhlasíte so zhromažďovaním, používaním a zverejnením vašich údajov v
        súlade s týmito zásadami ochrany osobných údajov. Ak s nimi nesúhlasíte,
        nepristupujte k tejto službe a ani ju nepoužívajte.
      </p>
      <p>
        Tieto zásady ochrany osobných údajov môžeme kedykoľvek upraviť bez
        akékoľvek predchádzajúce upozornenia a zverejníme revidované zásady
        ochrany osobných údajov v tejto službe. Revidovaná politika nadobudne
        platnosť o 180 dní od jej zverejnenia v tejto službe a vaše pokračovanie
        v prístupe k tejto službe alebo jej používanie aj po tomto čase bude
        predstavovať váš súhlas s upravenými zásadami ochrany osobných údajov.
        Preto vám odporúčame pravidelne kontrolovať túto stránku.
      </p>
      <h2>Ako používame vaše informácie</h2>
      <p>
        Použijeme informácie, ktoré o vás zhromažďujeme na nasledujúce účely:
      </p>
      <ol>
        <li>Marketing/propagácia</li>
        <li>Podpora</li>
        <li>Informácie o správe</li>
        <li>Cielená reklama</li>
        <li>Ochrana stránok</li>
        <li>Riešenie sporov</li>
      </ol>
      <p>
        Ak chceme vaše údaje použiť na iné účely, požiadame vás o súhlas a
        budeme používať vaše informácie iba po prijatí vášho súhlasu a len na
        účely, na ktoré bol súhlas udelený, pokiaľ sa od nás nevyžaduje inak
        podľa zákona.
      </p>
      <h2>Ako zdieľame vaše informácie</h2>
      <p>
        Vaše osobné údaje nebudeme prenášať akejkoľvek tretej strane bez
        vyžiadania si vášho súhlasu, okrem obmedzených prípadov popísaných
        nižšie:
      </p>
      <ol>
        <li>Reklamná služba</li>
        <li>Analytika</li>
        <li>Zhromažďovanie a spracovanie údajov</li>
      </ol>
      <p>
        Požadujeme, aby takéto tretie strany používali im prenášame osobné údaje
        iba na účely, na ktoré boli presené a neuchovávali ich dlhšie, ako je
        potrebné pre splnenie uvedeného účelu.
      </p>
      <p>
        Tiež môžeme zverejniť vaše osobné údaje pre nasledovné: (1) vyhovenie
        príslušnému zákonu, nariadeniu, súdnemu príkazu alebo inému právnemu
        procesu; (2) na presadzovanie vašich dohôd s nami, vrátane týchto zásad
        ochrany osobných údajov; alebo (3) odpovedať na tvrdenia, že vaše
        používanie tejto služby porušuje akékoľvek práva tretích strán. Ak sa
        táto služba alebo naša spoločnosť zlúči alebo bude nadobudnutá inou
        spoločnosťou, vaše informácie budú jedným z majetkov, ktorý prejde na
        nového vlastníka.
      </p>
      <h2>Vaše práva</h2>
      <p>
        V závislosti od platného zákona môžete mať právo na prístup a opravu
        alebo vymazanie osobných údajov alebo získanie kópie svojich osobných
        údajov, obmedziť alebo namietať voči aktívnemu spracovaniu vašich
        údajov, požiadať nás o zdieľanie (portovanie) vašich osobných údajov
        inému subjektu, odvolať akýkoľvek súhlas, ktorý ste nám poskytli na
        spracovanie vašich údajov, právo podať sťažnosť so zákonnou právomocou a
        ďalšie podobné práva relevantné podľa platných zákonov. Na uplatnenie si
        týchto práva nám môžete napísať na{' '}
        <EmailLink address={CONTACT_EMAIL_ADDRESS} />. Na vaše požiadavky budeme
        reagovať v súlade s platnou legislatívou.
      </p>
      <p>
        Upozorňujeme, že ak nám nedovolíte zbierať alebo spracúvať požadované
        osobné údaje alebo odvolať súhlas na ich spracovanie pre požadované
        účely, možete prísť o prístup alebo možnosť používať služby, pre ktoré
        sa vaše informácie vyžadujú.
      </p>
      <h2>Súbory cookie atď.</h2>
      <p>
        Ak sa chcete dozvedieť viac o tom, ako ich používame a vaše voľby v
        súvislosti s týmto sledovacími technológiami, pozrite si naše{' '}
        <Link to={COOKIE_POLICY_PAGE}>zásady používania súborov cookies</Link>.
      </p>
      <h2>Zabezpečenie</h2>
      <p>
        Bezpečnosť vašich informácií je pre nás dôležitá a použijeme primerané
        bezpečnostné opatrenia aby sa zabránilo strate, zneužitiu alebo
        neoprávnenej zmene vašich údajov pod našov kontrolou. Avšak, vzhľadom na
        inherentné riziká nedokážeme zaručiť absolútnu bezpečnosť a v dôsledku
        toho nemôžeme zabezpečiť a ani zaručiť bezpečnosť akýchkoľvek
        informácií, ktoré nám prenesiete a robíte tak na vlastné riziko.
      </p>
      <h2>Odkazy na tretie strany a použitie vašich informácií</h2>
      <p>
        Naša služba môže obsahovať odkazy na iné webové stránky, ktoré nie sú
        prevádzkované nami. Tieto zásady ochrany osobných údajov neriešia zásady
        ochrany osobných údajov a iné praktiky akýchkoľvek tretích strán vrátane
        akýchkoľvek tretích strán prevádzkujúcich akúkoľvek webovú stránku alebo
        službu, ktoré môžu byť dostupné prostredníctvom odkazov v tejto službe.
        Dôrazne vám odporúčame skontrolovať si zásady ochrany osobných údajov
        každej stránky, ktorú navštívite. Nemáme hocakú kontrolu a nenesieme
        hocakú zodpovednosť za obsah, zásady ochrany osobných údajov alebo
        praktiky akýchkoľvek stránok alebo služieb tretích strán.
      </p>
      <h2>Sťažnosť / úradník pre ochranu údajov</h2>
      <p>
        Ak máte akékoľvek otázky alebo obavy týkajúce sa spracovanie vašich
        informácií, ktoré sú nám k dispozícii, môžete poslať e-mail nášmu
        úradníkovi pre sťažnosti na adresu Mark Avenue, Šuty 10008/34, 831 07
        Bratislava-Vajnory, e-mailom:{' '}
        <EmailLink address={CONTACT_EMAIL_ADDRESS} />. Vaše obavy budeme riešiť
        v súlade s platnými právnymi predpismi.
      </p>
      <p>
        Zásady ochrany osobných údajov vytvorené pomocou{' '}
        <a
          target="_blank"
          href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW"
          rel="noreferrer"
        >
          CookieYes
        </a>
        .
      </p>
    </Layout>
  );
}

const DESCRIPTION = `\
Tieto zásady ochrany osobných údajov popisujú zásady Mark Avenue pri zbere, \
používaní a zverejňovaní vašich informácií, ktoré zhromažďujeme pri používaní \
našej webovej stránky.\
`;

export function Head() {
  return <PageHead description={DESCRIPTION} title={TITLE} />;
}
