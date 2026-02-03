"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function AsciiCube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time) => {
    if (!cubeRef.current) return;

    const rotateX = time / 40;
    const rotateY = time / 25;

    cubeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  const size = 200;
  const half = size / 2;

  const faces = [
    {
      name: "front",
      transform: `translateZ(${half}px)`,
      color: "rgba(59, 130, 246, 0.3)", // Blue
      borderColor: "rgba(59, 130, 246, 0.8)",
    },
    {
      name: "back",
      transform: `translateZ(-${half}px) rotateY(180deg)`,
      color: "rgba(139, 92, 246, 0.3)", // Purple
      borderColor: "rgba(139, 92, 246, 0.8)",
    },
    {
      name: "left",
      transform: `translateX(-${half}px) rotateY(-90deg)`,
      color: "rgba(236, 72, 153, 0.3)", // Pink
      borderColor: "rgba(236, 72, 153, 0.8)",
    },
    {
      name: "right",
      transform: `translateX(${half}px) rotateY(90deg)`,
      color: "rgba(20, 184, 166, 0.3)", // Teal
      borderColor: "rgba(20, 184, 166, 0.8)",
    },
    {
      name: "top",
      transform: `translateY(-${half}px) rotateX(90deg)`,
      color: "rgba(245, 158, 11, 0.3)", // Amber
      borderColor: "rgba(245, 158, 11, 0.8)",
    },
    {
      name: "bottom",
      transform: `translateY(${half}px) rotateX(-90deg)`,
      color: "rgba(34, 197, 94, 0.3)", // Green
      borderColor: "rgba(34, 197, 94, 0.8)",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          perspective: 800,
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          ref={cubeRef}
          style={{
            width: size,
            height: size,
            position: "relative",
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
        >
          {faces.map((face) => (
            <div
              key={face.name}
              style={{
                position: "absolute",
                width: size,
                height: size,
                background: face.color,
                border: `2px solid ${face.borderColor}`,
                boxShadow: `inset 0 0 30px ${face.color}, 0 0 10px ${face.borderColor}`,
                transform: face.transform,
                backfaceVisibility: "visible",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: face.borderColor,
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  opacity: 0.8,
                }}
              >
                {face.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
