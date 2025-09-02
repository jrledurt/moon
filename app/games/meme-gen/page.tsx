'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MemeGenGame() {
  const [topText, setTopText] = useState('WHEN SOMEONE SAYS')
  const [bottomText, setBottomText] = useState('THE EARTH IS ROUND')
  const [selectedTemplate, setSelectedTemplate] = useState('suspicious')

  const memeTemplates = {
    suspicious: { emoji: '🤔', bg: 'bg-yellow-600', description: 'Suspicious Guy' },
    drake: { emoji: '👎👍', bg: 'bg-purple-600', description: 'Drake Pointing' },
    distracted: { emoji: '👀', bg: 'bg-blue-600', description: 'Distracted Boyfriend' },
    brain: { emoji: '🧠', bg: 'bg-pink-600', description: 'Expanding Brain' },
    conspiracy: { emoji: '🎭', bg: 'bg-red-600', description: 'Conspiracy Theorist' }
  }

  const quickMemes = [
    { top: "WHEN SOMEONE SAYS", bottom: "THE EARTH IS ROUND" },
    { top: "NASA PHOTOS", bottom: "TOTALLY NOT CGI" },
    { top: "HORIZON ALWAYS FLAT", bottom: "COINCIDENCE? I THINK NOT" },
    { top: "ANTARCTICA", bottom: "ICE WALL CONFIRMED" },
    { top: "SATELLITES", bottom: "BALLOONS WITH CAMERAS" }
  ]

  const generateMeme = (template: string, top: string, bottom: string) => {
    setSelectedTemplate(template)
    setTopText(top)
    setBottomText(bottom)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/games" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          ← Back to Games
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Conspiracy Meme Generator
          </h1>
          <p className="text-xl text-slate-300">
            Create and share memes that reveal the truth!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Meme Preview */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">Your Meme</h2>
            
            <div className={`relative w-full aspect-square ${memeTemplates[selectedTemplate as keyof typeof memeTemplates].bg} rounded-lg overflow-hidden flex flex-col justify-between p-4`}>
              {/* Top Text */}
              <div className="text-center">
                <div className="bg-black/70 rounded px-3 py-2 inline-block">
                  <p className="text-white font-bold text-lg uppercase break-words">
                    {topText}
                  </p>
                </div>
              </div>
              
              {/* Center Emoji */}
              <div className="text-center">
                <span className="text-8xl">
                  {memeTemplates[selectedTemplate as keyof typeof memeTemplates].emoji}
                </span>
              </div>
              
              {/* Bottom Text */}
              <div className="text-center">
                <div className="bg-black/70 rounded px-3 py-2 inline-block">
                  <p className="text-white font-bold text-lg uppercase break-words">
                    {bottomText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Template Selection */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Choose Template</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(memeTemplates).map(([key, template]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTemplate(key)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      selectedTemplate === key 
                        ? 'border-purple-400 bg-purple-400/20' 
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="text-2xl mb-1">{template.emoji}</div>
                    <div className="text-sm">{template.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Text Inputs */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Customize Text</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Top Text</label>
                  <input
                    type="text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-purple-400 focus:outline-none"
                    placeholder="Enter top text..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bottom Text</label>
                  <input
                    type="text"
                    value={bottomText}
                    onChange={(e) => setBottomText(e.target.value)}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-purple-400 focus:outline-none"
                    placeholder="Enter bottom text..."
                  />
                </div>
              </div>
            </div>

            {/* Quick Memes */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Quick Memes</h3>
              <div className="space-y-2">
                {quickMemes.map((meme, index) => (
                  <button
                    key={index}
                    onClick={() => generateMeme(selectedTemplate, meme.top, meme.bottom)}
                    className="w-full p-3 text-left bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors border border-slate-600 hover:border-purple-400"
                  >
                    <div className="text-sm text-purple-400 font-semibold">{meme.top}</div>
                    <div className="text-sm text-slate-300">{meme.bottom}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold mb-4 text-purple-400">Spread the Truth</h3>
            <p className="text-lg text-slate-300 mb-6">
              Memes are one of the most powerful ways to wake people up to the truth! 
              Share your creations and help others see through the deception.
            </p>
            <div className="text-6xl mb-4">🎭📱🌍</div>
            <p className="text-slate-400 italic">
              "A picture is worth a thousand truths" - Anonymous Truth Seeker
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
