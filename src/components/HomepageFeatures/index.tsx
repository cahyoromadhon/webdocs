import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sui Blockchain Development',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pelajari cara membangun smart contract di blockchain generasi terbaru menggunakan Move programming language. Sui menggunakan object-centric model yang revolusioner untuk parallel execution.
      </>
    ),
  },
  {
    title: 'Workshop Hands-on',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Workshop interaktif 3 hari dengan pengembangan proyek nyata. Dari setup environment sampai deployment production, belajar dengan membangun aplikasi sesungguhnya.
      </>
    ),
  },
  {
    title: 'Blockchain Development',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kuasai pengembangan Web3 dengan tutorial komprehensif dan dokumentasi lengkap. Bangun masa depan aplikasi terdesentralisasi dengan teknologi terdepan.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
