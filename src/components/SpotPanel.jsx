"use client";
import styles from "./SpotPanel.module.css";
import { getTotalWeight, formatDate } from "@/data/spots";
export default function SpotPanel({ spot, onClose }) {
  if (!spot) {
    return null;
  }
  return (
    <aside className={styles.panel}>
      <button
        className={styles.close}
        type="button"
        onClick={onClose}
        aria-label="Закрыть"
      >
        x
      </button>
      <h2 className={styles.title}>{spot.title}</h2>
      <p className={styles.meta}>
        {formatDate(spot.date)}-{spot.gear}
      </p>
      {spot.photo && (
        <img src={spot.photo} alt={spot.title} className={styles.photo} />
      )}
      <h3 className={styles.subtitle}>Улов:</h3>
      <ul className={styles.fishList}>
        {spot.fish.map((fish) => (
          <li className={fishItem} key={fish.name}>
            <span className={styles.fishName}>{fish.name}</span>
            <span className={styles.fishNumbers}>
              {fish.count} шт. - {(fish.weight * fish.count).toFixed(1)} кг
            </span>
          </li>
        ))}
      </ul>
      <p className={styles.total}>
        Всего: {getTotalWeight(spot).toFixed(1)} кг
      </p>
      {spot.note && <p className={styles.note}>{spot.note}</p>}
    </aside>
  );
}
