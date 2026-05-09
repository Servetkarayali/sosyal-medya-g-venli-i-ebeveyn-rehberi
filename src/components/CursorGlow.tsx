"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on pointer devices
    const mq = window.matchMedia("(pointer: fine)");
    setIsEnabled(mq.matches);
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[100] transition-transform duration-75 ease-out"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${pos.x - 150}px, ${pos.y - 150}px, 0)`,
      }}
    >
      <div
        className="w-[300px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(255,45,175,0.06) 40%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />
    </div>
  );
}
