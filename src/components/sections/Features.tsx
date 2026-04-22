import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: "⚡",
    title: "AI-Powered Generation",
    description:
      "Upload any content — PDFs, images, web links, or plain text — and Gemini AI creates study materials in seconds. No manual card creation ever.",
  },
  {
    icon: "📚",
    title: "Any Format, Anytime",
    description:
      "Works with lecture slides, textbook pages, YouTube links, and handwritten notes. If it has text, SwipeAce can turn it into a study deck.",
  },
  {
    icon: "🃏",
    title: "Two Study Modes",
    description:
      "Choose flashcards for quick recall or multiple-choice and fill-in-blank questions for exam prep. Switch modes whenever you want.",
  },
  {
    icon: "🔥",
    title: "Streaks & Progress",
    description:
      "Stay motivated with daily streaks, session accuracy stats, and a visual progress bar that shows exactly how close you are to mastering your deck.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">
            Why SwipeAce
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
            Everything you need to ace your exams
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Stop wasting hours making flashcards by hand. SwipeAce turns any
            study material into an interactive learning experience automatically.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="flex gap-4" hoverable>
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-2xl flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-text-primary font-bold text-lg mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
