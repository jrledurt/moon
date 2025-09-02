
'use client'

import { useState, useRef } from 'react'
// Sound effect hooks
function useSound(url: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (!audioRef.current && typeof window !== 'undefined') {
    audioRef.current = new window.Audio(url);
  }
  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };
  return play;
}
import Link from 'next/link'

// Hotspots and analysis for Apollo 11 photo AS11-40-5874
const ERRORS = [
  { x: 260, y: 60, r: 16, label: "No stars visible in the sky!" }, // sky
  { x: 170, y: 170, r: 18, label: "Flag appears to wave (no wind)!" }, // flag
  { x: 110, y: 200, r: 16, label: "Strange shadow direction!" }, // shadow
  { x: 60, y: 120, r: 14, label: "No blast crater under lander!" }, // lander base
  { x: 210, y: 120, r: 14, label: "Astronaut's reflection in visor!" } // visor
]


export default function MoonErrorGame() {
  const [found, setFound] = useState<number[]>([])
  const [message, setMessage] = useState("")
  const [showHints, setShowHints] = useState(false)
  const correctSound = useSound('/correct.mp3');
  const wrongSound = useSound('/wrong.mp3');

  function handleSpot(idx: number) {
    if (!found.includes(idx)) {
      setFound([...found, idx]);
      setMessage(ERRORS[idx].label);
      correctSound();
      setTimeout(() => setMessage(""), 2000);
    }
  }

  function handleMiss(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    // Only trigger if not clicking a button (hotspot)
    if ((e.target as HTMLElement).tagName !== 'BUTTON') {
      wrongSound();
    }
  }

  const resetGame = () => {
    setFound([])
    setMessage("")
    setShowHints(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/games" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          ← Back to Games
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-400 to-yellow-400 bg-clip-text text-transparent">
            🕵️ Spot the Moon Landing Errors
          </h1>
          <p className="text-xl text-slate-300">
            Find the inconsistencies in NASA's "moon landing" photos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Game Area */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-400">Analyze the Evidence</h2>
            
            <div className="relative mx-auto w-[350px] h-[280px] mb-6">
              <div
                className="w-full h-full rounded-xl border-4 border-gray-600 relative overflow-hidden"
                onClick={handleMiss}
                style={{ cursor: 'crosshair' }}
              >
                {/* Real Apollo 11 moon landing photo */}
                <img
                  src="/moon-landing-new.jpg"
                  alt="Apollo 11 Moon Landing - Astronaut, Flag, and Lander"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ zIndex: 1 }}
                  draggable={false}
                />
                {/* Error hotspots (coordinates are approximate, adjust as needed) */}
                {ERRORS.map((err, idx) => (
                  (found.includes(idx) || showHints) && (
                    <button
                      key={idx}
                      className="absolute flex items-center justify-center transition-all duration-200"
                      style={{
                        left: `calc(${err.x}px - 14px)`,
                        top: `calc(${err.y}px - 14px)` ,
                        width: 28,
                        height: 28,
                        zIndex: 2,
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                      onClick={() => handleSpot(idx)}
                      aria-label={err.label}
                    >
                      <span
                        className={`text-2xl select-none pointer-events-none ${
                          found.includes(idx)
                            ? 'text-red-600 scale-125 drop-shadow-[0_0_8px_#ff0000] font-extrabold'
                            : showHints
                            ? 'text-yellow-400 animate-pulse opacity-80'
                            : ''
                        }`}
                        style={{
                          filter: found.includes(idx) ? 'drop-shadow(0 0 8px #ff0000)' : undefined,
                          transition: 'transform 0.2s',
                        }}
                      >
                        ✗
                      </span>
                    </button>
                  )
                ))}
              </div>
            </div>

            {message && (
              <div className="text-center p-4 bg-red-500/20 border border-red-500/50 rounded-lg mb-4">
                <p className="text-red-400 font-semibold">🔍 {message}</p>
              </div>
            )}

            <div className="text-center">
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-400">
                  {found.length} / {ERRORS.length} errors found
                </span>
              </div>
              
              {found.length === ERRORS.length ? (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg mb-4">
                  <p className="text-green-400 font-bold text-xl">🎉 All errors found! The truth is revealed!</p>
                </div>
              ) : null}

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors"
                >
                  {showHints ? 'Hide Hints' : 'Show Hints'}
                </button>
                <button
                  onClick={resetGame}
                  className="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Reset Game
                </button>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-gray-400">Photo Analysis Notes</h3>
              <div className="space-y-3">
                {ERRORS.map((error, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-lg border transition-colors ${
                      found.includes(idx) 
                        ? 'bg-red-500/20 border-red-500/50' 
                        : 'bg-slate-700 border-slate-600'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg">
                        {found.includes(idx) ? '✅' : '❓'}
                      </span>
                      <div>
                        <p className={found.includes(idx) ? 'text-red-400' : 'text-slate-400'}>
                          {found.includes(idx) ? error.label : 'Hidden until found...'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-gray-400">Did You Know?</h3>
              <div className="space-y-3 text-slate-300">
                <p>• The Van Allen radiation belts should have killed the astronauts</p>
                <p>• No blast crater under the lunar module</p>
                <p>• Identical lighting from multiple angles</p>
                <p>• Perfect photo quality despite bulky gloves</p>
                <p>• Temperature extremes would destroy film</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold mb-4 text-gray-400">The Greatest Hoax in History</h3>
            <p className="text-lg text-slate-300 mb-6">
              The moon landing was staged in a Hollywood studio to win the space race against Russia. 
              The evidence is right there in the photos - you just have to know what to look for!
            </p>
            <div className="text-6xl mb-4">🎬🌙📷</div>
            <p className="text-slate-400 italic">
              "One small step for man, one giant lie for mankind"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
