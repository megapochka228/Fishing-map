import { spots } from "@/data/spots";
import styles from "./Header.module.css";
export default function Header() {
  const totalFish = spots.reduce(
    (sum, spot) => sum + spot.fish.reduce((s, fish) => s + fish.count, 0),
    0,
  );
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Карта рыбалки</span>
      <span className={styles.stats}>
        {spots.length} мест - {totalFish} рыб
      </span>
    </header>
  );
}
