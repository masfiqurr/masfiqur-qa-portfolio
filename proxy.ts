import { NextRequest, NextResponse } from "next/server";

function buildCsp(nonce: string, isDev: boolean): string {
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    // Optional analytics loaders (ignored by CSP3 browsers when strict-dynamic is present)
    "https://va.vercel-scripts.com",
    "https://www.googletagmanager.com",
    ...(isDev ? ["'unsafe-eval'"] : []),
  ].join(" ");

  // Framer Motion sets style attributes; style-src-attr keeps that working without
  // broadly enabling unsafe-inline for <style> tags when a nonce is present.
  const styleSrc = isDev
    ? "'self' 'unsafe-inline'"
    : `'self' 'nonce-${nonce}'`;

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `style-src ${styleSrc}`,
    "style-src-attr 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "frame-src 'none'",
    "child-src 'none'",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "media-src 'self'",
    [
      "connect-src 'self'",
      "https://vitals.vercel-insights.com",
      "https://va.vercel-scripts.com",
      "https://www.google-analytics.com",
      "https://analytics.google.com",
      "https://www.googletagmanager.com",
    ].join(" "),
    "upgrade-insecure-requests",
  ]
    .join("; ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV === "development";
  const csp = buildCsp(nonce, isDev);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", csp);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf|txt|xml|webmanifest)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
