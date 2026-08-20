import { ImageResponse } from "next/og";
import { SITE } from "@/utils/seo";

// Generated at build time, so the social card can never drift out of sync with
// the site — and so /og-image.png (which was referenced but never existed) stops
// serving a 404 to every link preview.
//
// The edge runtime is required, not a preference: next/og picks @vercel/og's
// Node build unless NEXT_RUNTIME is "edge", and that build resolves its font and
// wasm files with path.join(import.meta.url, ...) — which turns a Windows
// file:///S:/... URL into an invalid one and throws "Invalid URL" during
// prerender. The edge build reads the same assets via new URL(..., import.meta.url)
// and works on every platform.
export const runtime = "edge";

export const alt = `${SITE.name} — ${SITE.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b1020",
          backgroundImage:
            "linear-gradient(135deg, #0b1020 0%, #14162e 55%, #1b1233 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: 28,
            }}
          >
            Portfolio · {SITE.country}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 18,
            }}
          >
            {SITE.name}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              color: "#60a5fa",
              marginBottom: 26,
            }}
          >
            {SITE.jobTitle}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 27,
              color: "#94a3b8",
              lineHeight: 1.45,
            }}
          >
            Next.js · React · TypeScript · Node.js · MongoDB
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 260,
              height: 8,
              borderRadius: 999,
              backgroundImage:
                "linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)",
              marginBottom: 30,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              color: "#cbd5e1",
            }}
          >
            <div style={{ display: "flex" }}>
              {SITE.url.replace("https://", "")}
            </div>
            <div style={{ display: "flex", color: "#94a3b8" }}>
              {SITE.email}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
