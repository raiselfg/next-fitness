import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Включает строгий режим React для поиска потенциальных проблем в коде
  reactStrictMode: true,
  // Включает кэширование компонентов (специфичная настройка)
  cacheComponents: true,
  // Отключает заголовок X-Powered-By в целях безопасности
  poweredByHeader: false,
  images: {
    // Поддержка современных форматов с лучшим сжатием
    formats: ['image/avif', 'image/webp'],
  },
  logging: {
    fetches: {
      // Логирует полные URL запросов для облегчения отладки
      fullUrl: true,
    },
  },
};

export default nextConfig;
