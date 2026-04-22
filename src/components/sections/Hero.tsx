import Logo from "@/components/ui/Logo";
import EmailForm from "@/components/ui/EmailForm";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle top glow — much softer than before */}
      <div className="absolute inset-0 hero-bg pointer-events-none" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <Logo />
        <a
          href="#waitlist"
          className="text-sm font-semibold text-text-secondary hover:text-primary-light transition-colors"
        >
          Join waitlist →
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
      

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight animate-fade-up">
          <span className="text-text-primary">Study Smarter,</span>
          <br />
          <span className="text-gradient">Not Harder.</span>
        </h1>

        {/* Value prop */}
        <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed animate-fade-up">
          Upload your notes, PDFs, or links and let SwipeAce’s AI instantly turn them into flashcards and quizzes. Then master the material with quick, fast & effortless studying.
        </p>

       

        {/* Email form */}
        <div id="waitlist" className="w-full max-w-lg mt-2 animate-fade-up">
          <EmailForm />
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-text-muted text-sm animate-fade-in">
          <span>✓ No credit card</span>
          <span>✓ iOS &amp; Android</span>
          <span>✓ 1 month Pro free</span>
        </div>

        {/* Mock phone — clean solid borders, no glow */}
        <div className="relative mt-10 animate-fade-up">
          <div className="w-56 md:w-64 h-[440px] md:h-[500px] rounded-[36px] border-2 border-border bg-surface mx-auto relative overflow-hidden shadow-2xl">
            {/* Status bar mock */}
            <div className="h-8 bg-surface2 flex items-center justify-center">
              <div className="w-20 h-4 rounded-full bg-background" />
            </div>

            {/* Header mock */}
            <div className="px-4 pt-3 pb-2 flex items-center justify-between">
              <div className="w-6 h-6 rounded-lg bg-surface2" />
              <div className="flex-1 mx-3 h-2 rounded-full bg-gradient-to-r from-primary to-primary/30" />
              <div className="w-6 h-6 rounded-lg bg-surface2" />
            </div>

            {/* Flashcard mock */}
            <div className="mx-4 mt-2 rounded-2xl bg-surface2 border border-border p-4 h-64 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-primary-light bg-primary/15 border border-primary/25 rounded-full px-2 py-0.5">
                  BIOLOGY
                </span>
                <p className="text-text-primary text-sm font-semibold mt-3 leading-snug">
                  What is the powerhouse of the cell?
                </p>
              </div>
              <div className="space-y-1.5">
                {["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"].map(
                  (opt, i) => (
                    <div
                      key={opt}
                      className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs ${
                        i === 0
                          ? "bg-primary/20 border border-primary/50 text-text-primary"
                          : "bg-background border border-border text-text-secondary"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border text-[10px] flex items-center justify-center flex-shrink-0 ${
                          i === 0
                            ? "border-primary bg-primary text-white"
                            : "border-border"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Bottom swipe hint */}
            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-1 text-text-muted text-xs">
              <span>⚡</span>
              <span>Swipe to next</span>
            </div>
          </div>

          {/* Floating stat badges — solid, no blur */}
          <div className="absolute -left-6 top-1/3 card rounded-xl px-3 py-2 text-xs text-text-primary hidden md:block shadow-lg">
            <div className="font-bold text-primary-light">248</div>
            <div className="text-text-muted">Cards studied</div>
          </div>
          <div className="absolute -right-6 top-1/2 card rounded-xl px-3 py-2 text-xs text-text-primary hidden md:block shadow-lg">
            <div className="font-bold text-success">84%</div>
            <div className="text-text-muted">Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
}
