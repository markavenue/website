import React from 'react';

import Heading from '../components/text/heading/Heading';
import Layout from '../components/ui/layout/Layout';
import PageTitle from '../components/page-title/PageTitle';

export default function CookiePolicyPage() {
  return (
    <Layout>
      <Heading variant="normal">Zásady používania súborov cookies</Heading>
      <p>
        Dátum platnosti: 12.06.2023 <br />
        Naposledy aktualizované: 11.06.2023
      </p>
      &nbsp;
      <h2>Čo sú súbory cookie?</h2>
      <div>
        <p>
          Tieto zásady používania súborov cookie vysvetľujú, čo sú súbory cookie
          a ako ich používame, aké typy súborov cookie používame, t. j. aké
          informácie zhromažďujeme pomocou súborov cookie a ako sa tieto
          informácie používajú, a ako spravovať nastavenia súborov cookie.
        </p>{' '}
        <p>
          {' '}
          Súbory cookie sú malé textové súbory, ktoré sa používajú na ukladanie
          malých informácií. Ukladajú sa do vášho zariadenia pri načítaní
          webovej stránky v prehliadači. Tieto súbory cookie nám pomáhajú
          zabezpečiť správne fungovanie webovej lokality, zvýšiť jej bezpečnosť,
          poskytnúť používateľom lepší zážitok a pochopiť, ako webová lokalita
          funguje, a analyzovať, čo funguje a kde je potrebné zlepšenie.
        </p>
      </div>
      &nbsp;
      <h2>Ako používame súbory cookie?</h2>
      <div>
        <p>
          Ako väčšina online služieb, aj naša webová stránka používa súbory
          cookie prvej strany a tretích strán na viaceré účely. Súbory cookie
          prvej strany sú väčšinou potrebné na to, aby webová lokalita fungovala
          správnym spôsobom, a nezhromažďujú žiadne vaše osobné údaje.
        </p>{' '}
        <p>
          Súbory cookie tretích strán používané na našej webovej lokalite slúžia
          najmä na pochopenie toho, ako webová lokalita funguje, ako s ňou
          komunikujete, na udržiavanie bezpečnosti našich služieb, na
          poskytovanie reklám, ktoré sú pre vás relevantné, a celkovo vám
          poskytujú lepší a lepší používateľský zážitok a pomáhajú urýchliť vaše
          budúce interakcie s našou webovou lokalitou.
        </p>
      </div>
      &nbsp;
      <h2>Typy súborov cookie, ktoré používame</h2>
      <div className="cky-audit-table-element" />
      &nbsp;
      <h2>Správa predvolieb súborov cookie</h2>
      <button className="cky-banner-element" type="button">
        Cookie Settings
      </button>{' '}
      <br />
      <div>
        <p>
          Svoje nastavenia súborov cookie môžete kedykoľvek zmeniť kliknutím na
          vyššie uvedené tlačidlo. To vám umožní opätovne navštíviť banner so
          súhlasom so súbormi cookie a zmeniť svoje preferencie alebo svoj
          súhlas hneď odvolať.
        </p>
        <p>
          Okrem toho rôzne prehliadače poskytujú rôzne metódy blokovania a
          odstraňovania súborov cookie používaných webovými stránkami. Môžete
          zmeniť nastavenia svojho prehliadača a zablokovať/vymazať súbory
          cookie. Nižšie sú uvedené odkazy na podporné dokumenty o tom, ako
          spravovať a odstraňovať súbory cookie z hlavných webových
          prehliadačov.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.google.com/accounts/answer/32050"
          >
            Chrome
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
          >
            Safari
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&amp;redirectlocale=en-US"
          >
            Firefox
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
          >
            Internet Explorer
          </a>
        </p>
        <p>
          Ak používate iný webový prehliadač, navštívte oficiálne dokumenty
          podpory vášho prehliadača.
        </p>
      </div>
      &nbsp;
      <p>
        Zásady používania súborov cookies vytvorené pomocou{' '}
        <a
          target="_blank"
          href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW"
          rel="noreferrer"
        >
          CookieYes - Cookie Policy Generator
        </a>
        .
      </p>
    </Layout>
  );
}

export function Head() {
  return <PageTitle>Zásady používania súborov cookies</PageTitle>;
}
