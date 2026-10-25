import React from "react";

export default function PrinciplesSection() {
  return (
    <section className="content white" id="principles">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="sectionnum">04 / ENGINEERING PRINCIPLES</div>
            <h2>
              Built to be inspected.
              <br />
              Designed to improve.
            </h2>
          </div>
          <p className="intro">
            A production system needs more than a compelling answer. It needs
            explicit boundaries, repeatable tests, and visibility into how it
            behaves.
          </p>
        </div>

        <div className="principles">
          <div className="principle">
            <div className="num">PRINCIPLE / 01</div>
            <div aria-hidden="true" className="principle-visual">
              <span className="visual-index">01</span>
              <div className="reliability-path">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>SOURCE → EVIDENCE → ANSWER</span>
            </div>
            <h3>Evidence before fluency</h3>
            <p>
              Ground answers in relevant sources and make supporting evidence
              inspectable.
            </p>
            <div className="principle-foot">
              Citations stay connected to the answer.
            </div>
          </div>

          <div className="principle">
            <div className="num">PRINCIPLE / 02</div>
            <div aria-hidden="true" className="principle-visual">
              <span className="visual-index">02</span>
              <div className="reliability-path">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>QUESTION SET → TEST → REVIEW</span>
            </div>
            <h3>Evaluation before launch</h3>
            <p>
              Test retrieval and response quality against realistic business
              questions.
            </p>
            <div className="principle-foot">
              Include missing and conflicting answers.
            </div>
          </div>

          <div className="principle">
            <div className="num">PRINCIPLE / 03</div>
            <div aria-hidden="true" className="principle-visual">
              <span className="visual-index">03</span>
              <div className="reliability-path">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>IDENTITY → FILTER → RETRIEVE</span>
            </div>
            <h3>Permissions at retrieval</h3>
            <p>
              Account for access boundaries as information moves through the
              system.
            </p>
            <div className="principle-foot">
              Apply permissions before generation.
            </div>
          </div>

          <div className="principle">
            <div className="num">PRINCIPLE / 04</div>
            <div aria-hidden="true" className="principle-visual">
              <span className="visual-index">04</span>
              <div className="reliability-path">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>PROPOSE → REVIEW → EXECUTE</span>
            </div>
            <h3>Approval for actions</h3>
            <p>
              Use human review where consequential operations require it.
            </p>
            <div className="principle-foot">
              Keep a human approval gate where needed.
            </div>
          </div>

          <div className="principle">
            <div className="num">PRINCIPLE / 05</div>
            <div aria-hidden="true" className="principle-visual">
              <span className="visual-index">05</span>
              <div className="reliability-path">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>TRACE → MEASURE → IMPROVE</span>
            </div>
            <h3>Observable by design</h3>
            <p>
              Make failures and behavior easier to investigate and improve.
            </p>
            <div className="principle-foot">
              Use traces to inspect system failures.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
