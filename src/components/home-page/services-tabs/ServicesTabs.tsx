import React, { forwardRef } from 'react';
import useWindowWidth from '../../../hooks/use-window-size';
import TabsContent from '../../ui/tabs/TabsContent';
import TabsList from '../../ui/tabs/TabsList';
import TabsRoot from '../../ui/tabs/TabsRoot';
import TabsTrigger from '../../ui/tabs/TabsTrigger';

import {
  content as contentClassName,
  contentWrapper,
  icon as iconClassName,
  label as labelClassName,
  list,
  root,
  trigger,
} from './ServicesTabs.module.css';

import CameraIcon from '../../../assets/camera.svg';
import CampaignIcon from '../../../assets/campaign.svg';
import GroupIcon from '../../../assets/group.svg';
import RocketLaunchIcon from '../../../assets/rocket_launch.svg';

const DESKTOP_BREAKPOINT = 1025;

const TABS = [
  {
    icon: <CampaignIcon />,
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
    icon: <RocketLaunchIcon />,
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
    icon: <GroupIcon />,
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
    icon: <CameraIcon />,
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
    <TabsRoot
      className={root}
      defaultValue="advertising"
      orientation={windowWidth < DESKTOP_BREAKPOINT ? 'horizontal' : 'vertical'}
      ref={ref}
    >
      <>
        <TabsList className={list}>
          {TABS.map(({ label, key, icon }) => (
            <TabsTrigger
              className={trigger}
              key={`tabs-trigger-${key}`}
              value={key}
            >
              <span className={iconClassName} title={label}>
                {icon}
              </span>
              <span className={labelClassName}>{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className={contentWrapper}>
          {TABS.map(({ content, key }) => (
            <TabsContent
              value={key}
              key={`tabs-content-${key}`}
              forceMount
              className={contentClassName}
            >
              {content}
            </TabsContent>
          ))}
        </div>
      </>
    </TabsRoot>
  );
});
