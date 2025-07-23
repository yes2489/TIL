/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true, // 전체 URL 로그 출력
      hmrRefreshes: true, // HMR 캐시된 fetch도 로그
    },
  },
};

export default nextConfig;
