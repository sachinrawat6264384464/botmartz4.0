import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footmain">
        <div>
          <a className="brand" href="#top">
            <span className="logo-window">
              <img
                alt="Botmartz AI Solutions"
                className="company-logo"
                height="100"
                src="/assets/botmartz-logo.png"
                width="296"
              />
            </span>
          </a>
          <p className="footdesc">
            AI engineering for production systems. Enterprise RAG, controlled AI
            agents, and document intelligence.
          </p>
        </div>
        <div className="footlinks">
          <div className="footcol">
            <strong>EXPLORE</strong>
            <a href="#solutions">Solutions</a>
            <a href="#industries">Industries</a>
            <a href="#engineering">Engineering</a>
          </div>
          <div className="footcol">
            <strong>KNOWLEDGE</strong>
            <a href="#insights">Insights</a>
            <a href="#solutions">About our work</a>
          </div>
          <div className="footcol">
            <strong>START A PROJECT</strong>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@botmartz.com">Email us ↗</a>
          </div>
        </div>
      </div>
      <div className="wrap footbottom">
        <span>© 2026 BOTMARTZ AI SOLUTIONS</span>
        <span>ENGINEERED WITH INTENT.</span>
      </div>
    </footer>
  );
}
