"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export default function HeroSection() {
  const visualRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const [introStatus, setIntroStatus] = useState("");
  const introRunIdRef = useRef(0);
  const introTimersRef = useRef<NodeJS.Timeout[]>([]);

  const finishBotIntro = useCallback(() => {
    introTimersRef.current.forEach(clearTimeout);
    introTimersRef.current = [];
    const root = document.documentElement;
    root.classList.remove("hero-intro-ready", "hero-intro-running");
    root.classList.add("hero-intro-finished");
    root.dataset.introPhase = "settled";
    root.dataset.introSequence += " → settled";
    setIntroStatus("BotCom has unpacked the AI system.");
  }, []);

  const runBotIntro = useCallback(() => {
    introTimersRef.current.forEach(clearTimeout);
    introTimersRef.current = [];
    const run = ++introRunIdRef.current;
    const root = document.documentElement;
    root.classList.remove("hero-intro-running", "hero-intro-finished");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishBotIntro();
      return;
    }

    root.classList.add("hero-intro-ready");
    root.dataset.introPhase = "loading";
    root.dataset.introSequence = "loading";
    setIntroStatus("");

    const safety = setTimeout(() => {
      if (run === introRunIdRef.current) finishBotIntro();
    }, 12000);
    introTimersRef.current.push(safety);

    const gaitImage = new Image();
    gaitImage.src = "/assets/botcom-walk-cycle.png";
    const mascotImages = [
      ...document.querySelectorAll(".suitcase-mascot img"),
      gaitImage,
    ] as HTMLImageElement[];

    Promise.all(
      mascotImages.map((img) =>
        img.decode ? img.decode() : Promise.resolve()
      )
    )
      .then(() => {
        if (run !== introRunIdRef.current) return;
        root.classList.remove("hero-intro-running");
        void root.offsetWidth;
        root.classList.add("hero-intro-running");
        root.dataset.introPhase = "emerging";
        root.dataset.introSequence += " → emerging";

        const phases: [number, string][] = [
          [650, "walking"],
          [3100, "placing"],
          [4100, "opening"],
          [4900, "revealing"],
        ];

        phases.forEach(([t, phase]) => {
          introTimersRef.current.push(
            setTimeout(() => {
              root.dataset.introPhase = phase;
              root.dataset.introSequence += " → " + phase;
            }, t)
          );
        });

        introTimersRef.current.push(setTimeout(finishBotIntro, 7200));
      })
      .catch(() => {
        if (run === introRunIdRef.current) finishBotIntro();
      });
  }, [finishBotIntro]);

  useEffect(() => {
    const visual = visualRef.current;
    const diagram = diagramRef.current;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (visual && diagram && !reduced && window.matchMedia("(pointer:fine)").matches) {
      const handlePointerMove = (e: PointerEvent) => {
        const b = visual.getBoundingClientRect();
        diagram.style.transform = `rotateX(${
          (0.5 - (e.clientY - b.top) / b.height) * 9
        }deg) rotateY(${((e.clientX - b.left) / b.width - 0.5) * 13}deg)`;
      };

      const handlePointerLeave = () => {
        diagram.style.transform = "rotateX(0deg) rotateY(0deg)";
      };

      visual.addEventListener("pointermove", handlePointerMove);
      visual.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        visual.removeEventListener("pointermove", handlePointerMove);
        visual.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, []);

  useEffect(() => {
    runBotIntro();
    return () => {
      introTimersRef.current.forEach(clearTimeout);
    };
  }, [runBotIntro]);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <i className="dot"></i> AI ENGINEERING · BUILT FOR PRODUCTION
          </div>
          <h1>
            Intelligence,
            <br />
            <span className="marker">engineered.</span>
          </h1>
          <p className="lead">
            We build enterprise RAG systems and AI agents that turn scattered
            business knowledge into dependable, inspectable workflows.
          </p>
          <div className="actions">
            <a className="btn" href="#contact">
              Discuss an AI Project <span>↗</span>
            </a>
            <a className="btn alt" href="#engineering">
              Explore our approach <span>↓</span>
            </a>
          </div>
          <div className="proof">
            <span>
              <i className="check">✓</i> Evidence-grounded retrieval
            </span>
            <span>
              <i className="check">✓</i> Controlled agent actions
            </span>
            <span>
              <i className="check">✓</i> Deployment by design
            </span>
          </div>
        </div>

        <figure
          aria-label="BotCom brings the AI system in a briefcase"
          className="hero-mascot suitcase-mascot"
        >
          <div className="mascot-ground"></div>
          <div aria-hidden="true" className="bot-walker">
            <div aria-hidden="true" className="walk-cycle"></div>
          </div>
          <img
            alt=""
            aria-hidden="true"
            className="mascot-place"
            decoding="async"
            height="1536"
            src="/assets/botcom-intro-place.png"
            width="1024"
          />
          <img
            alt="BotCom standing in a relaxed pose, leaning on an open black briefcase with blue light inside"
            className="mascot-final"
            decoding="async"
            height="1536"
            src="/assets/botcom-intro-lean.png"
            width="1024"
          />
          <div aria-hidden="true" className="unpack-case">
            <div className="case-handle"></div>
            <div className="case-interior"></div>
            <div className="case-front"></div>
            <div className="case-flap">
              <span></span>
            </div>
          </div>
          <div aria-hidden="true" className="unpack-light"></div>
          <div aria-hidden="true" className="unpack-particles">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </figure>

        <div
          aria-label="Animated flow from business documents through retrieval and verification to a controlled AI agent"
          className="visual"
          ref={visualRef}
        >
          <div className="diagram" ref={diagramRef}>
            <svg
              aria-labelledby="map-title"
              role="img"
              viewBox="0 0 540 450"
            >
              <title id="map-title">
                Documents → hybrid retrieval → verification → AI agent → human
                review
              </title>
              <defs>
                <filter
                  height="240%"
                  id="shadow"
                  width="220%"
                  x="-50%"
                  y="-50%"
                >
                  <feDropShadow
                    dx="0"
                    dy="12"
                    floodOpacity=".08"
                    stdDeviation="9"
                  />
                </filter>
              </defs>

              <g fill="none" strokeLinecap="round">
                <path
                  className="route"
                  d="M91 104C150 104 132 189 201 189"
                  id="r1"
                />
                <path
                  className="route"
                  d="M85 225C150 225 145 189 201 189"
                  id="r2"
                />
                <path
                  className="route"
                  d="M100 340C162 340 133 267 208 267L270 230"
                  id="r3"
                />
                <path
                  className="route"
                  d="M244 189C295 189 280 231 331 231"
                  id="r4"
                />
                <path
                  className="route"
                  d="M359 230C414 230 378 129 440 129"
                  id="r5"
                />
                <path
                  className="route"
                  d="M453 159C491 193 486 268 437 291"
                  id="r6"
                />
                <path
                  className="route"
                  d="M412 330C398 380 356 379 311 379"
                  id="r7"
                />
              </g>

              <circle className="signal" r="2.5">
                <animateMotion
                  begin="-0.7s"
                  dur="2.53s"
                  repeatCount="indefinite"
                >
                  <mpath href="#r1" />
                </animateMotion>
              </circle>
              <circle className="signal" r="2.5">
                <animateMotion
                  begin="-1.4s"
                  dur="2.66s"
                  repeatCount="indefinite"
                >
                  <mpath href="#r2" />
                </animateMotion>
              </circle>
              <circle className="signal" r="2.5">
                <animateMotion
                  begin="-2.0999999999999996s"
                  dur="2.79s"
                  repeatCount="indefinite"
                >
                  <mpath href="#r3" />
                </animateMotion>
              </circle>
              <circle className="signal" r="2.5">
                <animateMotion
                  begin="-2.8s"
                  dur="2.92s"
                  repeatCount="indefinite"
                >
                  <mpath href="#r4" />
                </animateMotion>
              </circle>
              <circle className="signal" r="2.5">
                <animateMotion
                  begin="-3.5s"
                  dur="3.05s"
                  repeatCount="indefinite"
                >
                  <mpath href="#r5" />
                </animateMotion>
              </circle>
              <circle className="signal" r="2.5">
                <animateMotion
                  begin="-4.199999999999999s"
                  dur="3.1799999999999997s"
                  repeatCount="indefinite"
                >
                  <mpath href="#r6" />
                </animateMotion>
              </circle>
              <circle className="signal" r="2.5">
                <animateMotion
                  begin="-4.8999999999999995s"
                  dur="3.31s"
                  repeatCount="indefinite"
                >
                  <mpath href="#r7" />
                </animateMotion>
              </circle>

              <g className="iso-float b">
                <g filter="url(#shadow)" transform="translate(28 59)">
                  <path className="top-face" d="M0 0l12 -9h84l-12 9z" />
                  <path className="side-face" d="M84 0l12 -9v70l-12 9z" />
                  <rect className="system-tile" height="70" rx="2" width="84" />
                  <path className="tile-icon" d="M14 18h25m-25 8h39m-39 8h32" />
                  <text className="tiletext" x="12" y="57">
                    DOCUMENTS
                  </text>
                </g>
              </g>

              <g className="iso-float c">
                <g filter="url(#shadow)" transform="translate(22 181)">
                  <path className="top-face" d="M0 0l12 -9h84l-12 9z" />
                  <path className="side-face" d="M84 0l12 -9v70l-12 9z" />
                  <rect className="system-tile" height="70" rx="2" width="84" />
                  <path className="tile-icon" d="M14 18h25m-25 8h39m-39 8h32" />
                  <text className="tiletext" x="12" y="57">
                    POLICIES
                  </text>
                </g>
              </g>

              <g className="iso-float">
                <g filter="url(#shadow)" transform="translate(38 299)">
                  <path className="top-face" d="M0 0l12 -9h84l-12 9z" />
                  <path className="side-face" d="M84 0l12 -9v70l-12 9z" />
                  <rect className="system-tile" height="70" rx="2" width="84" />
                  <path className="tile-icon" d="M14 18h25m-25 8h39m-39 8h32" />
                  <text className="tiletext" x="12" y="57">
                    KNOWLEDGE
                  </text>
                </g>
              </g>

              <g className="iso-float">
                <g filter="url(#shadow)" transform="translate(175 144)">
                  <path className="top-face" d="M0 0l12 -9h110l-12 9z" />
                  <path className="side-face" d="M110 0l12 -9v86l-12 9z" />
                  <rect
                    className="system-tile"
                    height="86"
                    rx="2"
                    width="110"
                  />
                  <path className="tile-icon" d="M23 25l29 17 29-17M52 42v12" />
                  <circle cx="23" cy="25" fill="#111" r="4" />
                  <circle cx="81" cy="25" fill="#aaa" r="4" />
                  <circle
                    cx="52"
                    cy="42"
                    fill="#fff"
                    r="4"
                    stroke="#555"
                  />
                  <text className="tiletext" x="12" y="73">
                    RETRIEVAL
                  </text>
                </g>
              </g>

              <g className="iso-float b">
                <g filter="url(#shadow)" transform="translate(297 204)">
                  <path className="top-face" d="M0 0l12 -9h92l-12 9z" />
                  <path className="side-face" d="M92 0l12 -9v75l-12 9z" />
                  <rect className="system-tile" height="75" rx="2" width="92" />
                  <path className="tile-icon" d="M17 20h52m-52 9h38m-38 9h45" />
                  <circle cx="55" cy="29" fill="#111" r="4" />
                  <text className="tiletext" x="12" y="62">
                    VERIFY
                  </text>
                </g>
              </g>

              <g className="iso-float c">
                <g filter="url(#shadow)" transform="translate(399 85)">
                  <path className="top-face" d="M0 0l12 -9h91l-12 9z" />
                  <path className="side-face" d="M91 0l12 -9v74l-12 9z" />
                  <rect className="system-tile" height="74" rx="2" width="91" />
                  <path className="tile-icon" d="M18 25l12 8 24-17" />
                  <path className="tile-icon" d="M62 18h10m-10 9h10" />
                  <text className="tiletext" x="12" y="61">
                    EVIDENCE
                  </text>
                </g>
              </g>

              <g className="iso-float">
                <g filter="url(#shadow)" transform="translate(393 282)">
                  <path className="top-face" d="M0 0l12 -9h100l-12 9z" />
                  <path className="side-face" d="M100 0l12 -9v85l-12 9z" />
                  <rect className="core-front" height="85" rx="2" width="100" />
                  <circle
                    cx="50"
                    cy="27"
                    fill="none"
                    r="13"
                    stroke="#fff"
                  />
                  <circle cx="50" cy="27" fill="#fff" r="4" />
                  <path d="M28 49h44" stroke="#777" />
                  <text className="coretext" x="12" y="72">
                    AI AGENT
                  </text>
                </g>
              </g>

              <g className="iso-float b">
                <g filter="url(#shadow)" transform="translate(216 355)">
                  <path className="top-face" d="M0 0l12 -9h112l-12 9z" />
                  <path className="side-face" d="M112 0l12 -9v62l-12 9z" />
                  <rect
                    className="system-tile"
                    height="62"
                    rx="2"
                    width="112"
                  />
                  <path className="tile-icon" d="M15 18h61m-61 7h39" />
                  <text className="tiletext" x="12" y="49">
                    HUMAN REVIEW
                  </text>
                </g>
              </g>
            </svg>
          </div>

          <div className="visual-caption">
            <span>
              <i></i> LIVE SYSTEM FLOW
            </span>
            <span>DATA → EVIDENCE → ACTION</span>
          </div>

          <div className="intro-controls">
            <button
              className="intro-skip"
              type="button"
              onClick={finishBotIntro}
            >
              Skip intro ↗
            </button>
            <button
              aria-label="Replay BotCom suitcase introduction"
              className="intro-replay"
              type="button"
              onClick={runBotIntro}
            >
              Replay intro ↻
            </button>
          </div>
          <span aria-live="polite" className="sr-only" id="intro-status">
            {introStatus}
          </span>
        </div>
      </div>
    </section>
  );
}
