"use client";
/* global ymaps3 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./FishingMap.module.css";
const HOME = [49.946824, 53.146105];
export default function FishingMap() {
  const [ymaps, setYmaps] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (typeof ymaps3 === "undefined") {
      setError("Script яндекс карт не загрузился");
      return;
    }
    Promise.all([ymaps3.import("@yandex/ymaps3-reactify"), ymaps3.ready])
      .then(([{ reactify }]) => {
        const reactified = reactify.bindTo(React, ReactDOM);
        setYmaps(reactified.module(ymaps3));
      })
      .catch((e) => setError(String(e)));
  }, []);
  if (error) {
    return <div className={styles.loader}>{error}</div>;
  }
  if (!ymaps) {
    return <div className={styles.loader}>Загрузка карты...</div>;
  }
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps;
  return (
    <div className={styles.mapWrapper}>
      <YMap location={{ center: HOME, zoom: 10 }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
      </YMap>
    </div>
  );
}
