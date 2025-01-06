/** @type {import('next').NextConfig} */
const nextConfig = {
  // Налаштування кешування зображень
  images: {
    domains: ["quadroom.fra1.cdn.digitaloceanspaces.com"], // Додайте ваші домени
    formats: ["image/webp"], // Підтримка WebP для зменшення розміру
    deviceSizes: [320, 420, 768, 1024, 1200, 1600, 1920], // Різні розміри для адаптивності
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Для іконок та інших зображень
  },

  // Налаштування заголовків для кешування
  async headers() {
    return [
      {
        source: "/building/:path*", // Вказуємо, для яких файлів додавати заголовки
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Зберігаємо на рік
          },
        ],
      },
    ];
  },

  // Можна додавати додаткові настройки для оптимізації
  reactStrictMode: true, // Включає режим строгого аналізу для більш надійного коду

  // Визначаємо підтримку міжнародних доменів (якщо потрібно)
  i18n: {
    locales: ["en", "uk"], // Локалізації
    defaultLocale: "en", // За замовчуванням англійська
  },

  // Налаштування для кешування на CDN
  async rewrites() {
    return [
      {
        source: "/images/:path*", // Перенаправлення для зображень
        destination: "https://quadroom.fra1.cdn.digitaloceanspaces.com/:path*", // Ваш CDN
      },
    ];
  },

  // Можна налаштувати стратегію експорту статичних файлів
  staticPageGenerationTimeout: 60, // Тайм-аут для генерації статичних сторінок
};

export default nextConfig;
