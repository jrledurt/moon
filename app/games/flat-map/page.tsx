'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FlatMapGame() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [flatEarthFacts, setFlatEarthFacts] = useState<string[]>([])

  const countries = [
    'Antarctica (Ice Wall)', 'North Pole (Center)', 'Australia (Down Under... literally)', 
    'Japan (Far East Edge)', 'Chile (Western Edge)', 'Greenland (Northern Ice)'
  ]

  const facts = [
    'Did you know the UN logo shows the true flat earth map?',
    'Antarctica is actually an ice wall that prevents us from falling off!',
    'All airline routes make perfect sense on a flat earth map!',
    'GPS systems are just programmed to hide the flat earth truth!',
    'Gravity is just density and buoyancy - no spinning ball needed!'
  ]

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country)
    const randomFact = facts[Math.floor(Math.random() * facts.length)]
    setFlatEarthFacts(prev => [...prev, randomFact])
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/games" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          ← Back to Games
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Interactive Flat Earth Map
          </h1>
          <p className="text-xl text-slate-300">
            Click on locations to discover the TRUTH about our flat world!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">The Real World Map</h2>
            <div className="space-y-3">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => handleCountryClick(country)}
                  className="w-full p-4 text-left bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors border border-slate-600 hover:border-yellow-400"
                >
                  <span className="font-semibold text-yellow-400">📍</span> {country}
                </button>
              ))}
            </div>
            
            {selectedCountry && (
              <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-400 font-semibold">
                  You selected: {selectedCountry}
                </p>
                <p className="text-slate-300 mt-2">
                  This location reveals important truths about our flat world!
                </p>
              </div>
            )}
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">Flat Earth Facts Discovered</h2>
            {flatEarthFacts.length === 0 ? (
              <p className="text-slate-400 italic">Click on map locations to discover facts!</p>
            ) : (
              <div className="space-y-3">
                {flatEarthFacts.map((fact, index) => (
                  <div key={index} className="p-3 bg-slate-700 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-slate-200">{fact}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">The Antarctic Ice Wall</h3>
            <p className="text-lg text-slate-300 mb-6">
              What they call "Antarctica" is actually a massive ice wall that surrounds our flat earth, 
              preventing the oceans from spilling over the edge. This is why it's so heavily guarded 
              and why civilians can't freely explore it!
            </p>
            <div className="text-6xl mb-4">🧊🌍🧊</div>
            <p className="text-slate-400 italic">
              "The truth is hidden in plain sight" - Ancient Flat Earth Wisdom
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
