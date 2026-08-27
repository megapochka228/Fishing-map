"use client";
/* global ymaps3 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./FishingMap.module.css";
import SpotMarker from "./SpotMarker";
import { spots, getAllFishNames } from "@/data/spots";
import SpotPanel from "./SpotPanel";
import FishFilter from "./FishFilter";

const HOME = [49.946824, 53.146105];

export default function FishingMap() {
  const [ymaps, setYmaps] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [selectedId, setSelectedId] = React.useState(null);
  const [selectedFish, setSelectedFish] = React.useState(null);
  const fishNames = getAllFishNames(spots);
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

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  if (error) {
    return <div className={styles.loader}>{error}</div>;
  }
  if (!ymaps) {
    return <div className={styles.loader}>Загрузка карты...</div>;
  }

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps;
  const selectedSpot = spots.find((spot) => spot.id === selectedId);

  return (
    <div className={styles.mapWrapper}>
      <FishFilter
        fishNames={fishNames}
        selectedFish={selectedFish}
        onChange={setSelectedFish}
      />
      <YMap location={{ center: HOME, zoom: 12 }}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        {spots.map((spot) => (
          <SpotMarker
            key={spot.id}
            YMapMarker={YMapMarker}
            spot={spot}
            isActive={spot.id === selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </YMap>
      <SpotPanel spot={selectedSpot} onClose={() => setSelectedId(null)} />
    </div>
  );
}
