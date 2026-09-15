import Link from "next/link";

const features = [
  ["01", "Capture the moment", "Start an episode in seconds. Record the essentials now and fill in the rest when you have the energy."],
  ["02", "See the thread", "A calm timeline brings symptoms, possible triggers, relief attempts, and daily context together."],
  ["03", "Bring clarity", "Turn your recent history into a visit-ready PDF, so the conversation starts with what actually happened."],
];

const screens = [
  ["migraloom-home.png", "Know what matters today", "Your current episode and recent history, without a crowded dashboard."],
  ["migraloom-patterns.png", "Notice what repeats", "Explore patterns across episodes and daily check-ins without chasing a score."],
  ["migraloom-visit.png", "Prepare for the appointment", "Choose a period and create a clear summary you can keep or share."],
];

const appStoreUrl =
  "https://apps.apple.com/us/app/migraloom-migraine-tracker/id6811065580";

function Wordmark() {
  return <Link className="wordmark" href="/"><span className="loom-mark" aria-hidden="true"><i/><i/><i/><i/></span>MigraLoom</Link>;
}

export default function Home() {
  return <main>
    <nav className="nav-shell" aria-label="Main navigation"><Wordmark/><div className="nav-links"><a href="#how">How it works</a><a href="#inside">Inside the app</a><Link href="/privacy">Privacy</Link></div><a className="nav-cta" href={appStoreUrl}>Download</a></nav>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span/>Private migraine journal for iPhone</p><h1>Your migraine story, <em>ready when your appointment is.</em></h1><p className="hero-text">Capture the essentials in seconds. MigraLoom turns scattered episodes into a calm timeline and a visit-ready summary—without sending your journal to the cloud.</p><div className="hero-actions"><a className="primary-button" href={appStoreUrl}>Download on the App Store <b>→</b></a><a className="text-link" href="#inside">See the real app</a></div><div className="proof-row"><span><b>Seconds</b> to start</span><span><b>No account</b> required</span><span><b>On-device</b> journal</span></div></div>
      <div className="hero-visual" aria-label="Real MigraLoom app screens on iPhone"><div className="glow"/><div className="phone phone-back"><img src="/screenshots/migraloom-patterns.png" alt="MigraLoom patterns screen with populated migraine data"/></div><div className="phone phone-front"><img src="/screenshots/migraloom-home.png" alt="MigraLoom home screen with populated migraine records"/></div></div>
    </section>

    <section className="friction"><p>You remember the pain.</p><div><h2>The useful details are harder to hold onto.</h2><p>When did it start? What changed? What helped? By the time an appointment arrives, weeks of small details can blur together. MigraLoom holds the thread while it is still fresh.</p></div></section>

    <section className="how" id="how"><div className="section-heading"><p className="eyebrow">Less effort now. More clarity later.</p><h2>A useful record without turning your life into data entry.</h2></div><div className="feature-grid">{features.map(([n,title,copy])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="screens" id="inside"><div className="section-heading"><p className="eyebrow">The real app</p><h2>Quiet enough for a difficult day.<br/>Clear enough for the next conversation.</h2><p>These are genuine MigraLoom screens filled with realistic sample data—not generic mockups.</p></div><div className="screen-grid">{screens.map(([src,title,copy],i)=><article className={`screen-card card-${i+1}`} key={src}><div className="phone"><img src={`/screenshots/${src}`} alt={`${title} in the MigraLoom iPhone app`}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="offer" id="offer"><div className="offer-copy"><p className="eyebrow light">Now on the App Store</p><h2>One calm place for the story your memory should not have to carry.</h2><p>Start with the basics. Add detail only when it helps. Bring the result to the moments where clarity matters.</p><ul><li><b>Fast episode capture</b><span>Begin with just time and intensity</span></li><li><b>Timeline and pattern views</b><span>See what happened without decoding a spreadsheet</span></li><li><b>Visit-ready PDF</b><span>Prepare a useful summary before an appointment</span></li><li><b>Private, on-device journal</b><span>Your health notes are not an advertising profile</span></li></ul></div><div className="price-card"><p>Annual plan</p><div className="price"><span>$</span>29.99<small>/ year</small></div><p className="trial">7 days free · Cancel anytime in Apple settings</p><a className="primary-button coral" href={appStoreUrl}>Download on the App Store <b>→</b></a><small>Monthly plan $4.99. App Store pricing may vary by region.</small></div></section>

    <section className="trust"><div><p className="eyebrow">Private by design</p><h2>Your experience isn’t the product.</h2></div><div className="trust-points"><p><b>Journal stays on your iPhone.</b> Migraine entries, symptoms, medications, triggers, notes, and health context remain on your device.</p><p><b>No health-data advertising profile.</b> We do not sell your health information or use your journal content for targeted advertising.</p><Link href="/privacy">Read the full privacy policy →</Link></div></section>

    <section className="faq"><div className="section-heading"><p className="eyebrow">Good to know</p><h2>Clear answers before you begin.</h2></div><div className="faq-list"><details open><summary>Is MigraLoom medical advice?</summary><p>No. MigraLoom is a personal journaling and appointment-preparation tool. It does not diagnose, treat, or replace care from a qualified clinician.</p></details><details><summary>Do I need to log everything?</summary><p>No. Start with the minimum and add only what feels useful. The app is designed around low-effort capture on difficult days.</p></details><details><summary>Is my journal uploaded?</summary><p>No account or cloud journal is required for MigraLoom. Entries stay on your device. Limited anonymous app diagnostics and subscription status are handled separately.</p></details><details><summary>Is MigraLoom in the App Store?</summary><p>Yes. MigraLoom is available now on the App Store for iPhone.</p></details></div></section>

    <footer><div><Wordmark/><p>A clearer thread through difficult days.</p></div><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div><span>© 2026 MigraLoom</span></footer>
  </main>;
}
