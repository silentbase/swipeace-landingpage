import GlassCard from "@/components/ui/GlassCard";

const testimonials = [
  {
    quote:
      "Finally an app that actually reads my slides and makes the flashcards for me. I saved 3 hours on my last exam prep.",
    name: "Alex K.",
    role: "Pre-Med Student",
    initial: "A",
    color: "bg-primary",
  },
  {
    quote:
      "I went from cramming the night before to studying 15 minutes a day. The AI questions are surprisingly good.",
    name: "Priya S.",
    role: "University of Toronto",
    initial: "P",
    color: "bg-success",
  },
  {
    quote:
      "The swipe mechanic makes it feel like a game. I actually look forward to studying now. That's never happened before.",
    name: "Marcus T.",
    role: "High School Senior",
    initial: "M",
    color: "bg-primary-light",
  },
];

function SocialProof() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Stats bar */}
        <div className="card rounded-2xl p-8 mb-12 text-center bg-surface2">
          <p className="text-3xl md:text-4xl font-black text-text-primary">
            500+ students
          </p>
          <p className="text-text-secondary mt-2">
            already on the early access waitlist
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-border">
            {[
              { value: "248", label: "Avg. cards studied per user" },
              { value: "84%", label: "Average accuracy rate" },
              { value: "7", label: "Day average streak" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-indigo">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">
            Early Feedback
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3">
            Students are already loving it
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="flex flex-col gap-4" hoverable>
              {/* Stars */}
              <div className="text-primary text-lg">★★★★★</div>

              {/* Quote */}
              <p className="text-text-secondary text-sm leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-text-primary text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="text-text-muted text-xs">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
