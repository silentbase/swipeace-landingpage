const steps = [
  {
    number: "01",
    title: "Upload Your Content",
    description:
      "Tap the upload button and add a PDF, photo of your notes, a webpage URL, or just paste your text. Any format works.",
    icon: "📄",
  },
  {
    number: "02",
    title: "AI Builds Your Deck",
    description:
      "Gemini AI reads your content and automatically generates flashcards, multiple-choice questions, and fill-in-blank exercises. Done in under 30 seconds.",
    icon: "✨",
  },
  {
    number: "03",
    title: "Swipe to Study",
    description:
      "Flip cards, answer questions, and swipe through your deck. Hard cards get re-queued automatically so you always master the tough stuff.",
    icon: "✅",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
            From upload to quiz in 30 seconds
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Three steps, zero friction. SwipeAce does the heavy lifting so you
            can focus on actually learning.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/60 via-primary/30 to-primary/10" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Step circle */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-surface2 border-2 border-primary/50 flex items-center justify-center text-2xl z-10 relative">
                  {step.icon}
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center">
                  {step.number.replace("0", "")}
                </span>
              </div>

              <div>
                <h3 className="text-text-primary font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
