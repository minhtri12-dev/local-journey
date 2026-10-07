'use client'

interface NavbarProps {
  lang: 'vi' | 'en'
  setLang: (lang: 'vi' | 'en') => void
  onHome: () => void
}

export default function Navbar({ lang, setLang, onHome }: NavbarProps) {
  return (
    <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between border-b border-zinc-200/60 mb-8">
      {/* Logo thương hiệu */}
      <button 
        onClick={onHome}
        className="text-2xl font-serif-editorial font-bold tracking-tight text-zinc-950 hover:opacity-80 transition-opacity"
      >
        LocalJourney
      </button>

      {/* Menu điều hướng tối giản */}
      <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
        <button onClick={onHome} className="hover:text-zinc-950 transition-colors">
          {lang === 'vi' ? 'Bộ sưu tập' : 'Collections'}
        </button>
        <button onClick={onHome} className="hover:text-zinc-950 transition-colors">
          {lang === 'vi' ? 'Điểm đến' : 'Destinations'}
        </button>
        <button onClick={onHome} className="hover:text-zinc-950 transition-colors">
          {lang === 'vi' ? 'Tạp chí' : 'Editorial'}
        </button>
      </nav>

      {/* Nút chuyển đổi ngôn ngữ DUY NHẤT */}
      <div className="flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full shadow-xs">
        <button 
          onClick={() => setLang('vi')}
          className={`text-xs font-bold tracking-widest transition-all duration-300 ${lang === 'vi' ? 'text-zinc-950 underline underline-offset-4 scale-105' : 'text-zinc-400 hover:text-zinc-700'}`}
        >
          VN
        </button>
        <span className="text-zinc-300 font-light">|</span>
        <button 
          onClick={() => setLang('en')}
          className={`text-xs font-bold tracking-widest transition-all duration-300 ${lang === 'en' ? 'text-zinc-950 underline underline-offset-4 scale-105' : 'text-zinc-400 hover:text-zinc-700'}`}
        >
          EN
        </button>
      </div>
    </header>
  )
}