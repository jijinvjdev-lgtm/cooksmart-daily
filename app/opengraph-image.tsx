import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 64,
          background:
            "linear-gradient(135deg, rgba(252,248,243,1) 0%, rgba(248,228,212,1) 100%)",
          color: "#2a1710",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            borderRadius: 40,
            padding: 48,
            background: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(220,100,48,0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 84,
                height: 84,
                borderRadius: 24,
                background: "linear-gradient(135deg, #dc6430, #ef8d5b)",
                color: "#fffaf5",
                fontSize: 46,
                fontWeight: 700,
              }}
            >
              C
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>CookSmart Daily</div>
              <div style={{ fontSize: 20, color: "#6d5546" }}>Validate the idea before building it</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 860 }}>
            <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 800 }}>
              Smarter meal planning, tested with real customer demand first.
            </div>
            <div style={{ fontSize: 28, color: "#6d5546", lineHeight: 1.3 }}>
              Daily meal suggestions, grocery planning, and a launch waitlist built to validate interest before development starts.
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            {["Daily meal ideas", "Smart grocery lists", "Early-access waitlist"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: 999,
                  background: "rgba(220,100,48,0.08)",
                  color: "#8b451d",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
