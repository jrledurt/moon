"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function FancyNavButton({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Play sound effect
    const audio = document.getElementById("nav-sound") as HTMLAudioElement | null;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    setTimeout(() => router.push(href), 200); // Delay for sound
  };
  return (
    <button
      onClick={handleClick}
      className="fancy-nav-btn w-full py-6 px-2 rounded-3xl font-extrabold text-3xl md:text-4xl shadow-2xl bg-gradient-to-br from-sciFiBlue via-sciFiPink to-sciFiYellow text-sciFiBlack border-4 border-sciFiBlue hover:scale-105 hover:rotate-1 hover:shadow-[0_0_32px_8px_#ffe60099] transition-all duration-300 outline-none focus:ring-4 focus:ring-sciFiPink relative overflow-hidden"
      style={{ letterSpacing: "0.05em" }}
    >
      <span className="drop-shadow-[2px_2px_0_#fff]">{children}</span>
      <span className="absolute inset-0 pointer-events-none animate-pulse bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-40" />
    </button>
  );
}
