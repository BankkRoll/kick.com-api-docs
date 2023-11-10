import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An advanced kick.com API wrapper that allows via CLI or directly via API"
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
