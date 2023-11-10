import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Seamless API Integration",
    Gif: require("../../static/img/api.gif").default,
    description: (
      <>
        The kick.com-api module simplifies integrating streaming channel data into your React applications, 
        offering a seamless connection to Kick's API for both v1 and v2 endpoints.
      </>
    ),
  },
  {
    title: "Full CLI Usability",
    Gif: require("../../static/img/cli.gif").default,
    description: (
      <>
        Beyond its integration into applications, kick.com-api is fully operable via CLI, 
        offering command-line access to channel data. This feature caters to developers who prefer 
        working directly in the terminal or scripting automated data retrieval.
      </>
    ),
  },
  {
    title: "Real-time Data Access",
    Gif: require("../../static/img/realtime.gif").default,
    description: (
      <>
        Access real-time streaming data with ease. Whether it's channel statistics or live status, 
        kick.com-api provides up-to-date information at your fingertips.
      </>
    ),
  },
];

function Feature({ Gif, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Gif} className={styles.featureGif} alt={title} style={{ borderRadius: '8px' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
