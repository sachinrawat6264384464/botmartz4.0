"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carrierRef = useRef<HTMLDivElement>(null);
  const [entranceState, setEntranceState] = useState<
    "pending" | "dropping" | "landed"
  >("pending");
  const problemTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasTriggeredRef = useRef(false);

  const landProblem = useCallback(() => {
    if (problemTimerRef.current) clearTimeout(problemTimerRef.current);
    setEntranceState("landed");
  }, []);

  const dropProblem = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      landProblem();
      return;
    }
    if (problemTimerRef.current) clearTimeout(problemTimerRef.current);
    setEntranceState("dropping");
    problemTimerRef.current = setTimeout(landProblem, 5800);
  }, [landProblem]);

  const handleReplay = useCallback(() => {
    if (problemTimerRef.current) clearTimeout(problemTimerRef.current);
    setEntranceState("pending");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dropProblem();
      });
    });
  }, [dropProblem]);

  useEffect(() => {
    const carrier = carrierRef.current;
    if (!carrier) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      landProblem();
      return;
    }

    setEntranceState("pending");
    hasTriggeredRef.current = false;

    const checkScrollPosition = () => {
      if (hasTriggeredRef.current) return;
      const rect = carrier.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger smoothly when user reaches the section in the viewport
      if (rect.top <= windowHeight * 0.70 && rect.bottom >= windowHeight * 0.15) {
        hasTriggeredRef.current = true;
        window.removeEventListener("scroll", checkScrollPosition);
        setTimeout(() => {
          dropProblem();
        }, 400);
      }
    };

    window.addEventListener("scroll", checkScrollPosition, { passive: true });
    const initialCheck = setTimeout(checkScrollPosition, 600);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      clearTimeout(initialCheck);
      if (problemTimerRef.current) clearTimeout(problemTimerRef.current);
    };
  }, [dropProblem, landProblem]);

  const stateClass =
    entranceState === "pending"
      ? "problem-pending"
      : entranceState === "dropping"
      ? "problem-drop-playing"
      : "problem-landed";

  return (
    <section
      className={`content white ${stateClass}`}
      data-entrance={
        entranceState === "pending"
          ? "waiting"
          : entranceState === "dropping"
          ? "dropping"
          : "landed"
      }
      id="production-reality"
      ref={sectionRef}
    >
      <div className="wrap">
        <div className="problem-payload">
          <div className="head">
            <div>
              <div className="sectionnum">01 / THE PROBLEM</div>
              <h2>
                A convincing demo
                <br />
                is not a production system.
              </h2>
            </div>
            <p className="intro">
              Real business environments are messy. Documents disagree,
              permissions matter, questions are ambiguous, and systems need to
              be evaluated beyond a handful of impressive answers.
            </p>
          </div>

          <div className="problem-carrier" ref={carrierRef}>
            <div className="cloth-fold-wrapper">
              <div className="cloth-top-hem" aria-hidden="true">
                <span className="hem-rivet left"></span>
                <span className="hem-rivet right"></span>
              </div>

              <div className="compare">
                <div className="col">
                  <div className="coltitle">DEMO CONDITIONS</div>
                  <div className="row">
                    <span className="ico">×</span>
                    <div>
                      <strong>Clean sample documents</strong>
                      <p>
                        Small, curated datasets that make the happy path look easy.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <span className="ico">×</span>
                    <div>
                      <strong>Happy-path questions</strong>
                      <p>
                        Prompts selected because the system already knows how to
                        answer them.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <span className="ico">×</span>
                    <div>
                      <strong>Impressive output</strong>
                      <p>
                        A fluent response without a clear way to inspect its
                        evidence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="coltitle">PRODUCTION REALITY</div>
                  <div className="row">
                    <span className="ico">✓</span>
                    <div>
                      <strong>Complex business knowledge</strong>
                      <p>
                        Mixed formats, duplicate files, versioning, and
                        domain-specific language.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <span className="ico">✓</span>
                    <div>
                      <strong>Access-aware retrieval</strong>
                      <p>
                        Relevant information must also be information the user is
                        allowed to see.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <span className="ico">✓</span>
                    <div>
                      <strong>Inspectable evidence</strong>
                      <p>
                        Retrieval, answers, and consequential actions need
                        evaluation and controls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic cloth fold creases & fabric shimmer */}
              <div className="cloth-creases" aria-hidden="true">
                <div className="cloth-crease c1"></div>
                <div className="cloth-crease c2"></div>
                <div className="cloth-crease c3"></div>
                <div className="cloth-crease c4"></div>
              </div>
              <div className="cloth-sheen-sweep" aria-hidden="true"></div>
            </div>

            <figure
              aria-hidden="true"
              className="problem-bot"
              data-pose="hanging-below"
            >
              <img
                alt=""
                height="1536"
                src="/assets/botcom-hanging-below.png"
                width="1024"
              />
              <span className="grip-edge"></span>
            </figure>
            <span aria-hidden="true" className="landing-shadow"></span>
          </div>
        </div>

        <div className="problem-replay-row">
          <button
            className="problem-replay"
            type="button"
            onClick={handleReplay}
          >
            Replay entrance ↻
          </button>
        </div>
      </div>
    </section>
  );
}
