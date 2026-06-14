import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tim Fischer - Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const avatarUrl = new URL(
    "/profile.png",
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:8081",
  ).toString();

  const avatarSize = 350

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px",
        background: "#0a0a0a",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          Tim Fischer
        </div>

        <div
          style={{
            fontSize: 28,
            marginTop: 20,
            color: "#9ca3af",
            maxWidth: 600,
            lineHeight: 1.4,
          }}
        >
          Full-Stack Developer building websites with React and TypeScript, and
          Minecraft plugins with Kotlin
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: "#5c8dff",
          }}
        >
          tim-fischer.dev
        </div>
      </div>

      <div
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: "50%",
          background: "#1a1a1a",
          border: "2px solid #222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={avatarUrl}
          width={avatarSize}
          height={avatarSize}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>,
    {
      ...size,
    },
  );
}
