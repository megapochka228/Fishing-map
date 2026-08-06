import FishingMap from "@/components/FishingMap";
export default function Home() {
  return (
    <main>
      <h1 className="zagolovok">Карта рыбалки</h1>
      <p className="zagolovok">Карта с точками, где я ловил рыбу</p>
      <FishingMap />
    </main>
  );
}
