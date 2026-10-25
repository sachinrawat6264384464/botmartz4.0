import React from "react";

export default function CtaSection() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <div className="ctapanel">
          <div>
            <div className="sectionnum">LET&apos;S ENGINEER SOMETHING USEFUL</div>
            <h2>Have a knowledge workflow worth engineering?</h2>
            <p>
              Tell us about your documents, data, or business process. Let&apos;s
              explore what a production-ready RAG system or AI agent could look
              like.
            </p>
          </div>
          <a
            className="btn"
            href="mailto:hello@botmartz.com?subject=AI%20Engineering%20Project"
          >
            Discuss an AI Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}
