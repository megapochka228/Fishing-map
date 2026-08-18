export const spots = [
  {
    id: "dom-babyshki",
    title: "оз. Подстанное",
    coordinates: [49.947089, 53.145836],
    date: "2026-07-26",
    gear: "Поплавочная удочка(хлеб)",
    note: "Клюет с 18 до 21",
    photo: "/photos/ryba_karas_1.jpg",
    fish: [
      { name: "Карась", weight: 0.2, count: 1 },
      { name: "Красноперка", weight: 0.1, count: 1 },
      { name: "Плотва(сорожка)", weight: 0.1, count: 1 },
      { name: "Лещ(подлещик)", weight: 0.1, count: 1 },
      { name: "Щука", weight: 1, count: 1 },
      { name: "Окунь", weight: 0.35, count: 1 },
    ],
  },
  {
    id: "ponton",
    title: "оз. Гранное",
    coordinates: [49.93428, 53.168687],
    date: "2025-06-28",
    gear: "Спиннинг(вертушка)",
    note: "Клюет с 18 до 21",
    photo: "/photos/ryba_okun.jpg",
    fish: [
      { name: "Красноперка", weight: 0.1, count: 1 },
      { name: "Плотва(сорожка)", weight: 0.1, count: 1 },
      { name: "Лещ(подлещик)", weight: 0.1, count: 1 },
      { name: "Щука", weight: 1, count: 1 },
      { name: "Окунь", weight: 0.35, count: 1 },
      { name: "Голавль", weight: 0.5, count: 1 },
      { name: "Жерех", weight: 0.01, count: 1 },
    ],
  },
];
export function getTotalWeight(spot) {
  return spot.fish.reduce((summ, f) => summ + f.weight * f.count, 0);
}

export function getAllFishNames(spots) {
  const names = spots.flatMap((spot) => spot.fish.map((f) => f.name));
  return [...new Set(names)];
}

export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
