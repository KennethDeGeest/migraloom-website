import { LegalShell } from "../legal-shell";

export const dynamic = "force-static";

export default function Contact() { return <LegalShell eyebrow="Contact" title="How can we help?" intro="MigraLoom is available now on the App Store. We welcome thoughtful questions and feedback.">
  <div className="contact-grid"><a href="mailto:support@migraloom.com?subject=MigraLoom%20support"><span>App support</span><b>Get help with MigraLoom →</b></a><a href="mailto:support@migraloom.com?subject=MigraLoom%20privacy"><span>Privacy</span><b>Ask about your information →</b></a><a href="mailto:support@migraloom.com?subject=MigraLoom%20App%20Store"><span>App Store</span><b>Ask a download question →</b></a></div><h2>Email</h2><p><a href="mailto:support@migraloom.com">support@migraloom.com</a></p><p className="legal-note">Please do not include sensitive medical information in email. MigraLoom cannot provide medical advice or emergency assistance.</p>
</LegalShell>; }
