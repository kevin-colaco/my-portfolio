import { ImageResponse } from "next/og";
import { siteMeta } from "../data/siteMeta";

export const alt = siteMeta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0B111F",
          color: "#F9F9F9"
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 2, color: "#D7D5FD", textTransform: "uppercase" }}>
          {siteMeta.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, maxWidth: 950 }}>
            {siteMeta.headline}
          </div>
          <div style={{ fontSize: 34, marginTop: 28, color: "#D7D5FD" }}>{siteMeta.name}</div>
        </div>
      </div>
    ),
    size
  );
}
