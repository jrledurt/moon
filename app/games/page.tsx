export default function GamesPage() {
  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-yellow-400">
          🎮 Conspiracy Games
        </h1>
        <p className="text-center text-slate-300 mb-12 text-lg">
          Play interactive games that explore space conspiracy theories
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <a href="/games/moon-error" className="group bg-slate-700 rounded-xl p-8 border border-slate-600 hover:border-yellow-500 transition-all hover:scale-105">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🕵️</div>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Spot the Moon Landing Errors</h2>
            <p className="text-slate-300 mb-4">
              Examine the famous Apollo photos and find the "suspicious" elements that conspiracy theorists point to.
            </p>
            <div className="text-yellow-500 font-semibold">Play Now →</div>
          </a>

          <a href="/games/flat-map" className="group bg-slate-700 rounded-xl p-8 border border-slate-600 hover:border-yellow-500 transition-all hover:scale-105">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🗺️</div>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Build a Flat Earth Map</h2>
            <p className="text-slate-300 mb-4">
              Drag continents and place the ice wall to create your own flat Earth model.
            </p>
            <div className="text-yellow-500 font-semibold">Play Now →</div>
          </a>

          <a href="/games/ice-wall" className="group bg-slate-700 rounded-xl p-8 border border-slate-600 hover:border-yellow-500 transition-all hover:scale-105">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🧊</div>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Ice Wall Defender</h2>
            <p className="text-slate-300 mb-4">
              Defend the Antarctic ice wall from explorers trying to discover what lies beyond.
            </p>
            <div className="text-yellow-500 font-semibold">Play Now →</div>
          </a>

          <a href="/games/meme-gen" className="group bg-slate-700 rounded-xl p-8 border border-slate-600 hover:border-yellow-500 transition-all hover:scale-105">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🖼️</div>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Conspiracy Meme Generator</h2>
            <p className="text-slate-300 mb-4">
              Create and share your own conspiracy theory memes with custom text and images.
            </p>
            <div className="text-yellow-500 font-semibold">Play Now →</div>
          </a>
        </div>
      </div>
    </div>
  );
}
