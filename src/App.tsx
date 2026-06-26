import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKV"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84),rgba(0,0,0,0.24)_58%,rgba(0,0,0,0.48))]" />

      <nav className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
        <a
          href="#"
          className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
        >
          VANGUARD
        </a>

        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-inter text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="group hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10 md:flex"
        >
          GET IN TOUCH
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <button
          className="space-y-1.5 md:hidden"
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
          <div className="ml-auto h-0.5 w-4 bg-white" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <a
            href="#"
            className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            VANGUARD
          </a>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="flex min-h-[calc(100vh-84px)] flex-col items-center justify-center px-6 pb-16">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl uppercase text-white transition-all duration-500 sm:text-5xl"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="group mt-10 flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-all duration-500 hover:border-white/60 hover:bg-white/10"
            style={{
              transitionDelay: `${navLinks.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            GET IN TOUCH
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <section className="relative z-20 flex min-h-screen items-center px-6 py-28 sm:px-10 lg:px-16">
        <div className="w-full max-w-5xl">
          <div className="animate-fade-up mb-6 flex items-center gap-3 lg:mb-8">
            <Crown className="h-4 w-4 text-white/70" />
            <p className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              World-Class Digital Collective
            </p>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium text-[clamp(2.8rem,8vw,7rem)] uppercase leading-[0.92] tracking-tight text-white">
            <span className="block">Design.</span>
            <span className="block">Disrupt.</span>
            <span className="block">Conquer.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
            We build fierce brand identities
            <br />
            that don&apos;t just turn heads --
            <br />
            <strong className="font-semibold text-white">they lead.</strong>
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
            <a
              href="#"
              className="group flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
            >
              SEE OUR WORK
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="hidden items-center gap-3 sm:flex">
              <Award className="h-8 w-8 text-white/50" />
              <div className="font-inter text-xs uppercase tracking-wider text-white/60">
                <p>Top-Rated</p>
                <p>Brand Studio</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 mt-8 flex flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
            {[
              ['250+', 'Brands Transformed'],
              ['95%', 'Client Retention'],
              ['10+', 'Years in the Game'],
            ].map(([value, label]) => (
              <div key={label} className="min-w-[8rem]">
                <p className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {value}
                </p>
                <p className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
