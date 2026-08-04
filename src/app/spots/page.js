import {
  spots,
  getTotalWeight,
  getAllFishNames,
  formatDate,
} from "@/data/spots";
export default function SpotsPage() {
  return (
    <div>
      {spots.map((spot) => {
        return (
          <div key={spot.id}>
            {spot.title} <p>{spot.gear}</p>
            <span>{formatDate(spot.date)}</span>
            <ul>
              {spot.fish.map((fish) => {
                return (
                  <li key={fish.name}>
                    {fish.name} {fish.weight}кг за {fish.count} рыб(у/ы)
                  </li>
                );
              })}
            </ul>
            <p>{getTotalWeight(spot).toFixed(1)}</p>
          </div>
        );
      })}
    </div>
  );
}
