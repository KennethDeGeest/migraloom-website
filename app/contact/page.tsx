import { LegalShell } from "../legal-shell";

export default function Contact() { return <LegalShell eyebrow="Contact" title="How can we help?" intro="MigraLoom is still being prepared for launch. We welcome thoughtful questions and early feedback.">
  <div className="contact-grid"><a href="mailto:hello@migraloom.com?subject=MigraLoom%20support"><span>App support</span><b>Get help with MigraLoom →</b></a><a href="mailto:hello@migraloom.com?subject=MigraLoom%20privacy"><span>Privacy</span><b>Ask about your information →</b></a><a href="mailto:hello@migraloom.com?subject=MigraLoom%20early%20access"><span>Early access</span><b>Join the launch list →</b></a></div><h2>Email</h2><p><a href="mailto:hello@migraloom.com">hello@migraloom.com</a></p><p className="legal-note">Please do not include sensitive medical information in email. MigraLoom cannot provide medical advice or emergency assistance.</p>
</LegalShell>; }
