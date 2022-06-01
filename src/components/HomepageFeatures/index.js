import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Solución del Proyecto",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Describimos el proyecto, sus necesidades y objetivos.</>,
  },
  {
    title: "Estándares de Código",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Definimos estándares de código para el uso del proyecto.</>,
  },
  {
    title: "Uso del Repositorio",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Definimos flujos de trabajo con el repositorio para estabilidad de
        versiones.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
