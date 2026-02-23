import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      { key: "X-DNS-Prefetch-Control", value: "on" }
    ];

    const staticAssetCacheHeaders = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];

    return [
      {
        source: "/:path*",
        headers: securityHeaders
      },
      {
        source: "/images/:path*",
        headers: staticAssetCacheHeaders
      },
      {
        source: "/fonts/:path*",
        headers: staticAssetCacheHeaders
      },
      {
        source: "/vendor/:path*",
        headers: staticAssetCacheHeaders
      },
      {
        source: "/js/:path*",
        headers: staticAssetCacheHeaders
      },
      {
        source: "/css/:path*",
        headers: staticAssetCacheHeaders
      }
    ];
  }
};

export default nextConfig;
