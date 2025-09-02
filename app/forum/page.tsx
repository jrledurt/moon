'use client'

import { useState } from 'react'
import Link from 'next/link'

type Post = {
  id: number
  username: string
  content: string
  timestamp: string
  likes: number
  category: string
}

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      username: "TruthSeeker99",
      content: "Just discovered that all major space agencies use the same 'blue marble' Earth image from 1972. Why haven't they taken a new one? 🤔",
      timestamp: "2 hours ago",
      likes: 23,
      category: "space"
    },
    {
      id: 2,
      username: "FlatEarthExplorer",
      content: "The Bedford Level experiment proves water always finds its level. How do they explain this on a spinning ball? 🌊",
      timestamp: "5 hours ago", 
      likes: 18,
      category: "physics"
    }
  ])
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('general')
  const [filter, setFilter] = useState('all')

  const categories = [
    { value: 'general', label: '💬 General Discussion', color: 'bg-slate-600' },
    { value: 'space', label: '🚀 Space & Moon', color: 'bg-blue-600' },
    { value: 'physics', label: '⚗️ Physics & Science', color: 'bg-purple-600' },
    { value: 'evidence', label: '🔍 Evidence Review', color: 'bg-green-600' },
    { value: 'antarctica', label: '🧊 Antarctica & Ice Wall', color: 'bg-cyan-600' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newPost: Post = {
      id: Date.now(),
      username: username || 'Anonymous',
      content,
      timestamp: 'Just now',
      likes: 0,
      category
    }
    setPosts([newPost, ...posts])
    setContent('')
  }

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const filteredPosts = filter === 'all' ? posts : posts.filter(post => post.category === filter)

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
          ← Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Truth Seekers Forum
          </h1>
          <p className="text-xl text-slate-300">
            Connect with fellow truth seekers and share your discoveries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Forum */}
          <div className="lg:col-span-2 space-y-6">
            {/* New Post Form */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Start a New Discussion</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="p-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:outline-none"
                    placeholder="Username (optional)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <textarea
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-400 focus:outline-none resize-none"
                  placeholder="Share your thoughts, theories, or questions..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                  required
                />
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold transition-colors"
                >
                  🚀 Post to Forum
                </button>
              </form>
            </div>

            {/* Filter */}
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    filter === 'all' ? 'bg-orange-600' : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                >
                  All Posts
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setFilter(cat.value)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      filter === cat.value ? cat.color : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="text-6xl mb-4">💬</div>
                  <p className="text-slate-400 italic">
                    {filter === 'all' ? 'No posts yet. Be the first to start a discussion!' : 'No posts in this category yet.'}
                  </p>
                </div>
              ) : (
                filteredPosts.map((post) => {
                  const categoryInfo = categories.find(c => c.value === post.category)
                  return (
                    <div key={post.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold">
                            {post.username[0].toUpperCase()}
                          </div>
                          <div>
                            <h3 className="font-semibold text-orange-400">{post.username}</h3>
                            <p className="text-sm text-slate-400">{post.timestamp}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs text-white ${categoryInfo?.color}`}>
                          {categoryInfo?.label}
                        </span>
                      </div>
                      
                      <p className="text-slate-200 mb-4 leading-relaxed">{post.content}</p>
                      
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors"
                        >
                          <span className="text-lg">👍</span>
                          <span>{post.likes}</span>
                        </button>
                        <button className="text-slate-400 hover:text-orange-400 transition-colors">
                          💬 Reply
                        </button>
                        <button className="text-slate-400 hover:text-orange-400 transition-colors">
                          📤 Share
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Forum Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Posts</span>
                  <span className="font-semibold">{posts.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Users</span>
                  <span className="font-semibold">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Truth Seekers</span>
                  <span className="font-semibold">1,337</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Forum Rules</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <p>• Keep discussions respectful</p>
                <p>• Share credible evidence</p>
                <p>• Question everything</p>
                <p>• Think for yourself</p>
                <p>• Help others seek truth</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Hot Topics</h3>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-slate-700 rounded">🌍 Flat Earth Proofs</div>
                <div className="p-2 bg-slate-700 rounded">🚀 Moon Landing Analysis</div>
                <div className="p-2 bg-slate-700 rounded">🧊 Antarctica Expedition</div>
                <div className="p-2 bg-slate-700 rounded">📡 Satellite Truth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
