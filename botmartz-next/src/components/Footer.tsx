"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="wrap">
        {/* Main Grid: Brand + 4 Link Columns */}
        <div className="foot-main-grid">
          {/* Brand Identity & Socials */}
          <div className="foot-brand-col">
            <a className="brand footer-brand" href="#top">
              <span className="logo-window">
                <img
                  alt="Botmartz AI Solutions"
                  className="company-logo footer-logo"
                  height="100"
                  src="/assets/botmartz-logo.png"
                  width="296"
                />
              </span>
            </a>
            <p className="footdesc">
              Enterprise AI &amp; Intelligent Systems Implementation. We help
              organizations design, implement, integrate, and operate
              production-ready AI systems across knowledge, workflows, data, and
              software.
            </p>

            {/* Social Links Row */}
            <div className="foot-socials" aria-label="Social links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="X (Twitter)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* Google Review Button */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Review Us on Google</span>
            </a>
          </div>

          {/* Links Column 1: SOLUTIONS */}
          <div className="foot-links-col">
            <h4 className="foot-col-title">SOLUTIONS</h4>
            <ul className="foot-links-list">
              <li><a href="#solutions">Enterprise RAG &amp; Search</a></li>
              <li><a href="#solutions">AI Agents &amp; State Machines</a></li>
              <li><a href="#solutions">Systems Architecture</a></li>
            </ul>
          </div>

          {/* Links Column 2: RESEARCH & SYSTEMS */}
          <div className="foot-links-col">
            <h4 className="foot-col-title">RESEARCH &amp; SYSTEMS</h4>
            <ul className="foot-links-list">
              <li><a href="#insights">Attention &amp; KV Cache Research</a></li>
              <li><a href="#insights">Deterministic LangGraph State</a></li>
              <li><a href="#insights">Grounded Retrieval &amp; RAGAS</a></li>
              <li><a href="#insights">DPDPA &amp; Data Sovereignty</a></li>
            </ul>
          </div>

          {/* Links Column 3: WORK & LABS */}
          <div className="foot-links-col">
            <h4 className="foot-col-title">WORK &amp; LABS</h4>
            <ul className="foot-links-list">
              <li><a href="#engineering">Systems Labs</a></li>
              <li><a href="#gallery">Production Reference Work</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">Open Source Blueprint</a></li>
            </ul>
          </div>

          {/* Links Column 4: COMPANY */}
          <div className="foot-links-col">
            <h4 className="foot-col-title">COMPANY</h4>
            <ul className="foot-links-list">
              <li><a href="#top">About Botmartz</a></li>
              <li><a href="#insights">Engineering Insights</a></li>
              <li><a href="mailto:careers@botmartz.com">Write for Us</a></li>
              <li><a href="#top">Privacy Policy</a></li>
              <li><a href="#top">Terms of Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Stay Updated Newsletter Row */}
        <div className="foot-newsletter-card">
          <div className="newsletter-info">
            <div className="newsletter-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <h4 className="newsletter-title">Stay Updated</h4>
              <p className="newsletter-desc">
                Get the latest engineering insights, tutorials, and company updates.
              </p>
            </div>
          </div>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for updates"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              {subscribed ? "Subscribed ✓" : "Subscribe →"}
            </button>
          </form>
        </div>

        {/* Bottom Bar: Copyright & Actions */}
        <div className="foot-bottom-bar">
          <div className="foot-bottom-left">
            <span>Botmartz AI Solution Pvt Ltd All rights reserved.</span>
            <span className="security-tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Security-Conscious Architecture</span>
            </span>
          </div>

          <div className="foot-bottom-actions">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-action-btn whatsapp-action"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>WhatsApp Fast Desk</span>
            </a>

            <a href="#contact" className="foot-action-btn review-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>Book Review (20m)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
