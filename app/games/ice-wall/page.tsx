'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function IceWallGame() {
  const [iceWallHeight, setIceWallHeight] = useState(200)
  const [expeditionProgress, setExpeditionProgress] = useState(0)
  const [isExpeditionActive, setIsExpeditionActive] = useState(false)
  const [discoveries, setDiscoveries] = useState<string[]>([])

  const wallFacts = [
    "The ice wall is over 200 feet tall in most places!",
    "Military guards patrol the ice wall 24/7!",
    "Strange electromagnetic anomalies detected near the wall!",
    "Ancient ruins found beneath the ice!",
    "The wall extends infinitely beyond what we can see!",
    "Temperature drops dramatically as you approach the edge!"
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isExpeditionActive && expeditionProgress < 100) {
      interval = setInterval(() => {
        setExpeditionProgress(prev => {
          const newProgress = prev + Math.random() * 10
          if (newProgress >= 100) {
            setIsExpeditionActive(false)
            const randomFact = wallFacts[Math.floor(Math.random() * wallFacts.length)]
            setDiscoveries(prev => [...prev, randomFact])
            return 100
          }
          return newProgress
        })
      }, 300)
    }
    return () => clearInterval(interval)
  }, [isExpeditionActive, expeditionProgress])

  const startExpedition = () => {
    setExpeditionProgress(0)
    setIsExpeditionActive(true)
  }

  const resetExpedition = () => {
    setExpeditionProgress(0)
    setIsExpeditionActive(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/games" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          ← Back to Games
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Antarctic Ice Wall Explorer
          </h1>
          <p className="text-xl text-slate-300">
            Venture to the edge of our flat world and discover what lies beyond!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Ice Wall Visualization</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Ice Wall Height: {iceWallHeight} feet</label>
              <input
                type="range"
                min="100"
                max="500"
                value={iceWallHeight}
                onChange={(e) => setIceWallHeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="relative bg-gradient-to-b from-sky-200 to-sky-500 rounded-lg overflow-hidden" style={{ height: '300px' }}>
              {/* Sky */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-300 to-blue-400"></div>
              
              {/* Ice Wall */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-100 to-white border-t-4 border-blue-200"
                style={{ height: `${(iceWallHeight / 500) * 70}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-50"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-blue-800 font-bold text-lg">
                  🧊 ICE WALL 🧊
                </div>
              </div>
              
              {/* Ground */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-white"></div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Expedition Control</h2>
            
            <div className="space-y-4">
              <button
                onClick={startExpedition}
                disabled={isExpeditionActive}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:opacity-50 rounded-lg font-semibold transition-colors"
              >
                {isExpeditionActive ? 'Expedition in Progress...' : 'Start Ice Wall Expedition'}
              </button>
              
              {expeditionProgress > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{Math.round(expeditionProgress)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${expeditionProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <button
                onClick={resetExpedition}
                className="w-full py-2 px-4 bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Reset Expedition
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Expedition Discoveries</h3>
              {discoveries.length === 0 ? (
                <p className="text-slate-400 italic">Complete expeditions to make discoveries!</p>
              ) : (
                <div className="space-y-3">
                  {discoveries.map((discovery, index) => (
                    <div key={index} className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <p className="text-slate-200">🔍 {discovery}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold mb-4 text-blue-400">The Great Ice Wall Mystery</h3>
            <p className="text-lg text-slate-300 mb-6">
              The Antarctic ice wall is not just a natural formation - it's a massive barrier that 
              keeps us contained on this flat plane. What lies beyond? The truth is being hidden 
              from us by the global elite who control all Antarctic expeditions!
            </p>
            <div className="text-6xl mb-4">🗻❄️🗻</div>
            <p className="text-slate-400 italic">
              "Beyond the ice wall lies infinite lands and unimaginable secrets"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
