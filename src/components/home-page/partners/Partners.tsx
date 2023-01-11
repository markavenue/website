import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import * as styles from './Partners.module.css';

export default function Partners() {
  return (
    <div className={styles.partners}>
      <StaticImage
        alt="Vienna Supreme Concerts"
        src="../../../assets/vienna-supreme-concerts.png"
        objectFit="contain"
      />
      <StaticImage
        alt="Pressburg Triathlon"
        src="../../../assets/pressburg-triathlon.png"
        objectFit="contain"
      />
      <StaticImage
        alt="Strossle"
        src="../../../assets/strossle.png"
        objectFit="contain"
      />
      <StaticImage
        alt="Hodina detom"
        src="../../../assets/hodina-detom.png"
        objectFit="contain"
      />
      <StaticImage
        alt="Digitálna Univerzita"
        src="../../../assets/digitalna-univerzita.png"
        objectFit="contain"
      />
      <StaticImage
        alt="Kafé Lampy"
        src="../../../assets/kafe-lampy.png"
        objectFit="contain"
      />
    </div>
  );
}
