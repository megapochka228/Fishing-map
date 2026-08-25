import styles from "./FishFilter.module.css";
export default function FishFilter({ fishNames, onChange, selectedFish }) {
  return (
    <div className={styles.filter}>
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`${styles.chip} ${selectedFish === null ? styles.active : ""}`}
      >
        Все
      </button>
      {fishNames.map((name) => (
        <button
          key={name}
          type="button"
          onClick={() => onChange(name)}
          className={`${styles.chip} ${selectedFish === name ? styles.active : ""}`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
