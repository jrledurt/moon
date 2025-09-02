import MyUploader from "./components/MyUploader";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            🌕 Welcome to Moon Hoax Central 🌍
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Dive into the world of space conspiracies! Explore "evidence", play interactive games, 
            and discover why some believe the moon landing was staged and the Earth is flat.
          </p>
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Own Moon Photos</h2>
            <MyUploader />
            <p className="text-slate-400 text-sm mt-2 text-center">Upload images you find online to use in your own moon hoax investigations!</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/games" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold transition-colors">
              🎮 Play Games
            </Link>
            <Link href="/evidence" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              📋 Submit Evidence
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Explore the "Truth"</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-yellow-500 transition-colors">
              <div className="text-4xl mb-4">🕵️</div>
              <h3 className="text-xl font-bold mb-2">Spot Moon Errors</h3>
              <p className="text-slate-400">Find the "mistakes" in famous moon landing photos</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-yellow-500 transition-colors">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold mb-2">Flat Earth Map</h3>
              <p className="text-slate-400">Build your own flat Earth model</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-yellow-500 transition-colors">
              <div className="text-4xl mb-4">🧊</div>
              <h3 className="text-xl font-bold mb-2">Ice Wall Defense</h3>
              <p className="text-slate-400">Defend the edge from explorers</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-yellow-500 transition-colors">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-bold mb-2">Meme Generator</h3>
              <p className="text-slate-400">Create conspiracy memes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
