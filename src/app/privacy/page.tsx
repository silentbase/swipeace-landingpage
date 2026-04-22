/* Next.js App Router pages for Privacy Policy and Contact */

// app/privacy/page.tsx
export function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-6">Last updated: March 19, 2026</p>
      <section className="space-y-6 leading-7">
        <p>Welcome to the Swipe Ace app. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or join our waitlist.</p>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Email address</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Manage our waitlist</li>
            <li>Send launch updates</li>
            <li>Respond to inquiries</li>
            <li>Improve our services</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p>You may request access, correction, deletion, or restriction of your data by contacting us.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <a href="mailto:hello@swipeace.app">hello@swipeace.app</a>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPage;

// app/contact/page.tsx
 function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="space-y-4 text-lg leading-7">
        <p>We’d love to hear from you.</p>
        <p>For support, partnerships, media, or general questions:</p>
        <p><strong>Email:</strong> [hello@swipeace.app]</p>
        <p>We aim to respond within 2–5 business days.</p>
        <p>Thank you for your interest in [App Name].</p>
      </div>
    </main>
  );
}
