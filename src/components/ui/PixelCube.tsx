"use client";

import { useMemo, useRef } from "react";
import { useAnimationFrame } from "framer-motion";

const GRID_SIZE = 7;
const SPACING = 15;

type Vec3 = { x: number; y: number; z: number };

function getCubePositions(size: number, spacing: number): Vec3[] {
  const positions: Vec3[] = [];
  const half = (size - 1) / 2;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        positions.push({
          x: (x - half) * spacing,
          y: (y - half) * spacing,
          z: (z - half) * spacing,
        });
      }
    }
  }
  return positions;
}

export default function PixelCube() {
  const ref = useRef<HTMLDivElement>(null);
  const DOTS = useMemo(() => getCubePositions(GRID_SIZE, SPACING), []);

  useAnimationFrame((t) => {
    const el = ref.current;
    if (!el) return;

    // slow drift + gentle bob
    const rotate = Math.sin(t / 10000) * 120; // deg
    const y = (1 + Math.sin(t / 1000)) * -20; // px

    el.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg) scale(2)`;
  });

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      style={{ perspective: 600 }}
    >
      <div
        ref={ref}
        style={{
          width: 260,
          height: 260,
          position: "relative",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {DOTS.map((pos, i) => {
          // Depth-based polish
          const depth =
            (pos.z + (GRID_SIZE * SPACING) / 2) / (GRID_SIZE * SPACING);
          const size = 6 - depth * 2; // ~6px -> ~4px
          const ml = -size / 2;
          const mt = -size / 2;
          const opacity = 0.55 + (1 - depth) * 0.35; // 0.55–0.9

          // shared style for each tiny quad/disc
          const disc: React.CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: size,
            height: size,
            marginLeft: ml,
            marginTop: mt,
            borderRadius: "50%",
            // radial fill looks like a dot from any angle
            background:
              "radial-gradient(circle, #14b8a6 0 60%, rgba(20,184,166,0) 61%)",
            boxShadow: "0 0 6px 1px #14b8a650",
            opacity,
            backfaceVisibility: "hidden",
            willChange: "transform",
          };

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transformStyle: "preserve-3d",
                transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
                pointerEvents: "none",
              }}
            >
              {/* XY plane */}
              <span style={{ ...disc }} />
              {/* XZ plane */}
              <span style={{ ...disc, transform: "rotateX(90deg)" }} />
              {/* YZ plane */}
              <span style={{ ...disc, transform: "rotateY(90deg)" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
