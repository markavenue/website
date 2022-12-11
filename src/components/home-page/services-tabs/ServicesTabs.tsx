import React, { forwardRef } from 'react';
import TabsContent from '../../ui/tabs/TabsContent';
import TabsList from '../../ui/tabs/TabsList';
import TabsRoot from '../../ui/tabs/TabsRoot';
import useWindowWidth from '../../../hooks/use-window-size';

import * as styles from './ServicesTabs.module.css';
import TabsTrigger from '../../ui/tabs/TabsTrigger';

const DESKTOP_BREAKPOINT = 1025;

const TABS = [
  {
    key: 'advertising',
    label: 'Reklamná kampaň',
    content: (
      <>
        <h2>
          Zaoberáme sa online & offline reklamnou kampaňou na základe
          vypracovaných stratégií a analýz.
        </h2>
        <ul>
          <li>Určujeme komunikačnú stratégiu a prioritu posolstiev.</li>
          <li>
            Pripravujeme komunikačné východiská pre originálnu kreativitu.
          </li>
          <li>Definujeme insighty a nastavujeme ciele reklamy.</li>
          <li>Analyzujeme cieľovú skupinu.</li>
          <li>Navrhujeme kombináciu offline a online médií.</li>
          <li>
            Uplatňujeme online marketingové nástroje s vysokou návratnosťou.
          </li>
          <li>Pravidelne vyhodnocujeme výsledky.</li>
        </ul>
      </>
    ),
  },
  {
    key: 'brand-devel',
    label: 'Brand Development',
    content: (
      <>
        <h2>
          Budujeme značky a ich príbeh. Tvoríme originálne názvy a jedinečný
          dizajn, ktorý odlíši vašu spoločnosť od konkurencie.
        </h2>
        <ul>
          <li>
            Zaoberáme sa vizuálnou identitou, namingom, analýzou dostupných
            domén.
          </li>
          <li>
            Navrhujeme funkčné marketingové stratégie a komunikáciu značky.
          </li>
          <li>Vytvoríme dizajn manuál.</li>
        </ul>
      </>
    ),
  },
  {
    key: 'social-networks',
    label: 'Správa sociálnych sietí',
    content: (
      <>
        <h2>
          Postaráme sa o váš funpage! Poskytneme kreatívnu komunikáciu a tvorbu
          obsahu pre vaše sociálne siete.
        </h2>
        <ul>
          <li>Vytvárame pútavý obsah pre vaše publikum.</li>
          <li>Určujeme stratégiu pre sociálne siete.</li>
        </ul>
      </>
    ),
  },
  {
    key: 'foto-video-production',
    label: 'Foto / video produkcia',
    content: (
      <>
        <h2>Brand video, produktové a event videa.</h2>
        <ul>
          <li>Tvorba spotov, brand videí a produktových fotografií.</li>
        </ul>
      </>
    ),
  },
];

export default forwardRef<HTMLDivElement>((_, ref) => {
  const windowWidth = useWindowWidth() ?? 0;

  return (
    <TabsRoot ref={ref} defaultValue="advertising" className={styles.root}>
      {windowWidth > DESKTOP_BREAKPOINT ? (
        <>
          <TabsList className={styles.listLarge}>
            {TABS.map(({ label, key }) => (
              <TabsTrigger value={key} key={`tabs-trigger-${key}`}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {TABS.map(({ content, key }) => (
            <TabsContent
              value={key}
              key={`tabs-content-${key}`}
              className={styles.content}
            >
              {content}
            </TabsContent>
          ))}
        </>
      ) : (
        <TabsList className={styles.list}>
          {TABS.map(({ label, content, key }) => (
            <React.Fragment key={key}>
              <TabsTrigger value={key}>{label}</TabsTrigger>
              <TabsContent value={key} className={styles.content}>
                {content}
              </TabsContent>
            </React.Fragment>
          ))}
        </TabsList>
      )}
    </TabsRoot>
  );
});
