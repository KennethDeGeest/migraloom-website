import Link from "next/link";
import type { ReactNode } from "react";

export function LegalShell({eyebrow,title,intro,children}:{eyebrow:string,title:string,intro:string,children:ReactNode}) {
  return <main className="legal-page"><nav className="nav-shell"><Link className="wordmark" href="/"><span className="loom-mark" aria-hidden="true"><i/><i/><i/><i/></span>MigraLoom</Link><Link className="nav-cta" href="/">Back home</Link></nav><header><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><small>Effective 11 September 2026</small></header><article>{children}</article><footer><span>© 2026 MigraLoom</span><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/contact">Contact</Link></div></footer></main>;
}
