"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const NUM_ASTRONAUTS = 2 + Math.floor(Math.random() * 2); // 2 or 3 astronauts

function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getAstronauts() {
  return Array.from({ length: NUM_ASTRONAUTS }).map(() => ({
    top: getRandomFloat(5, 70), // vh
    left: getRandomFloat(5, 90), // vw
    duration: getRandomFloat(18, 32), // seconds
    size: getRandomFloat(80, 130), // px
    delay: getRandomFloat(0, 10),
    direction: Math.random() > 0.5 ? 1 : -1,
  }));
}

export default function FloatingAstronauts() {
  const [astronauts, setAstronauts] = useState(getAstronauts());

  // Re-randomize on mount for SSR/CSR consistency
  useEffect(() => {
    setAstronauts(getAstronauts());
  }, []);

  return (
    <>
      {astronauts.map((a, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            top: `${a.top}vh`,
            left: `${a.left}vw`,
            width: a.size,
            height: a.size,
            pointerEvents: "none",
            zIndex: 50,
            animation: `floatY${i} ${a.duration}s ease-in-out ${a.delay}s infinite alternate`,
            transform: a.direction === 1 ? "scaleX(1)" : "scaleX(-1)",
          }}
        >
          <Image
            src="/astronaut-fake.png"
            alt="Floating fake astronaut"
            width={a.size}
            height={a.size}
            style={{ filter: "drop-shadow(0 0 12px #0008)" }}
            draggable={false}
            priority={false}
          />
          <style jsx global>{`
            @keyframes floatY${i} {
              0% { transform: translateY(0) scaleX(${a.direction}); }
              100% { transform: translateY(-40px) scaleX(${a.direction}); }
            }
          `}</style>
        </div>
      ))}
    </>
  );
}
