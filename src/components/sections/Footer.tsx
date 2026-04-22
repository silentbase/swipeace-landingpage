import Logo from "@/components/ui/Logo";
import EmailForm from "@/components/ui/EmailForm";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      {/* CTA strip */}
      <div className="py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none opacity-60" />
        <div className="relative z-10 max-w-xl mx-auto">
          <p className="text-xs font-semibold text-primary-light uppercase tracking-widest mb-3">
            Still on the fence?
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
            Join 500+ students waiting for launch
          </h3>
          <p className="text-text-secondary text-sm mb-8">
            Early access is free. Be first in line when SwipeAce goes live.
          </p>
          <EmailForm compact />
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <Logo size="sm" />

          <nav className="flex items-center gap-6 text-sm text-text-muted">
            <a
              href="/privacy"
              className="hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:hello@swipeace.app"
              className="hover:text-text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} SwipeAce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
