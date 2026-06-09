export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-6xl font-bold tracking-tight">
          <span className="text-orange-400">festiv</span>
          <span className="text-white">.</span>
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Vind je match op het festival</p>
      </div>

      {/* Card preview */}
      <div className="relative w-80 h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold">Sophie, 24</span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 mt-1" />
          </div>
          <p className="text-gray-200 text-sm mb-3">🎵 Techno · House · Drum & Bass</p>
          <div className="flex gap-2">
            {["Awakenings", "DGTL", "Dekmantel"].map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/20 backdrop-blur px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Swipe knoppen */}
      <div className="flex gap-6 mb-10">
        <button className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl hover:bg-red-500/20 hover:border-red-500 transition-all">
          ✕
        </button>
        <button className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl hover:bg-yellow-500/20 hover:border-yellow-500 transition-all">
          ⭐
        </button>
        <button className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl hover:bg-green-500/20 hover:border-green-500 transition-all">
          ♥
        </button>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button className="w-full py-3 px-6 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-2xl transition-colors">
          Maak een account
        </button>
        <button className="w-full py-3 px-6 bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 font-semibold rounded-2xl transition-colors">
          Inloggen
        </button>
      </div>
    </main>
  );
}
