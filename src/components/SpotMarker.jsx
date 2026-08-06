"use client";
import styles from "./SpotMarker.module.css";
export default function SpotMarker({ YMapMarker, spot, isActive, onSelect }) {
  return (
    <YMapMarker coordinates={spot.coordinates}>
      <button
        type="button"
        onClick={() => onSelect(spot.id)}
        title={spot.title}
        className={`${styles.marker} ${isActive ? styles.active : ""}`}
      >
        🐟
      </button>
    </YMapMarker>
  );
}
