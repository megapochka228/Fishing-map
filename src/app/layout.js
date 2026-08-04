import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Карта рыбалки",
  description: "Места, где я ловил рыбу",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Script
          src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YMAPS_API_KEY}&lang=ru_RU`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
