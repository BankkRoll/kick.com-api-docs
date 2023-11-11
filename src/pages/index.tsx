import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <h1 className="hero__title">npm i {siteConfig.title}</h1>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Explore Features ➤
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="https://www.npmjs.com/package/kick.com-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm Package
          </a>
          <a
            className="button button--secondary button--lg"
            href="https://github.com/BankkRoll/kick.com-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className={styles.buttons}>
          <a
            href="https://www.npmjs.com/package/kick.com-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/npm/v/kick.com-api.svg"
              alt="npm version"
            />
          </a>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
