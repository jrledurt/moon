
import './styles/globals.css';
import Link from 'next/link';
import FloatingAstronauts from './components/FloatingAstronauts';

export const metadata = {
  title: "Moon Landing Hoax & Flat Earth Fun",
  description: "Discover the 'truth' about space conspiracies in this playful interactive experience",
  keywords: "moon landing, flat earth, conspiracy theories, interactive games, space hoax",
  authors: [{ name: "Moon Hoax Central" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0b1220",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body>
        <FloatingAstronauts />
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b" 
             style={{ 
               background: 'rgba(11, 18, 32, 0.85)',
               borderColor: 'var(--border)'
             }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link 
                href="/" 
                className="nav-button"
              >
                🌕 Moon Hoax Central
              </Link>
              
              {/* Center Button */}
              <Link 
                href="/truth" 
                className="nav-button"
              >
                They are lying to you!
              </Link>
              
              {/* Navigation Links */}
              <div className="flex items-center space-x-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/games', label: 'Games' },
                  { href: '/evidence', label: 'Evidence' },
                  { href: '/forum', label: 'Forum' }
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="nav-button px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border hover:scale-105 focus-visible:scale-105"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="pt-16 min-h-screen relative">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="relative border-t py-8" 
                style={{ 
                  background: 'var(--card)',
                  borderColor: 'var(--border)'
                }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center space-y-4">
              <div className="flex justify-center space-x-6 text-sm">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/games" className="hover:underline">Games</Link>
                <Link href="/evidence" className="hover:underline">Evidence</Link>
                <Link href="/forum" className="hover:underline">Forum</Link>
              </div>
              <hr />
              <div className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                <p>© 2025 Moon Hoax Central - For entertainment purposes only!</p>
                <p className="mt-1 text-xs opacity-75">
                  Exploring space conspiracies through interactive experiences
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}