const faqs = [
  {
    question: "What is SwipeAce?",
    answer:
      "SwipeAce is an AI-powered study app that automatically converts your notes, PDFs, images, and web links into flashcards and practice questions. It uses Google Gemini to extract key concepts and builds a personalized study deck you swipe through — like Tinder, but for learning.",
  },
  {
    question: "How does the AI flashcard generator work?",
    answer:
      "You upload any content — a lecture slide PDF, a photo of handwritten notes, a textbook chapter URL, or plain pasted text. SwipeAce sends it to Google Gemini, which identifies key terms, concepts, and relationships, then automatically generates flashcard fronts/backs and multiple-choice questions. The whole process takes under 30 seconds.",
  },
  {
    question: "Is SwipeAce free to use?",
    answer:
      "Yes — SwipeAce will launch with a generous free tier. Early access users who join the waitlist will receive extended free access as a thank-you for their support.",
  },
  {
    question: "What types of content can I upload?",
    answer:
      "SwipeAce supports PDF files, images (photos of notes, whiteboard shots, scanned pages), web page URLs, and directly pasted text. If it contains readable text, SwipeAce can turn it into a study deck.",
  },
  {
    question: "When will SwipeAce launch on iOS and Android?",
    answer:
      "We're putting the finishing touches on the app now. Join the waitlist to be notified the moment it's available on the App Store and Google Play. Waitlist members get priority access and extended free usage.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
            Frequently asked questions
          </h2>
          <p className="text-text-secondary mt-4">
            Everything you need to know before launch.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-b border-border py-5 cursor-pointer"
            >
              <summary className="list-none flex items-center justify-between gap-4 text-text-primary font-semibold hover:text-primary-light transition-colors select-none">
                <span>{faq.question}</span>
                <span className="faq-icon text-primary text-xl font-light flex-shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-4 text-text-secondary leading-relaxed text-sm pr-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
