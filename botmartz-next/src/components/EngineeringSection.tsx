"use client";

import React, { useState, useEffect, useRef } from "react";

const stepsData = [
  {
    num: "01 / SOURCE",
    glyph: "▤",
    title: "Enterprise data",
    copy: [
      "SOURCE",
      "Start with the right knowledge.",
      "Connect documents and business data with source metadata and access boundaries intact.",
    ],
    stage: "Enterprise data enters the system",
  },
  {
    num: "02 / PREPARE",
    glyph: "⌘",
    title: "Parse & normalize",
    copy: [
      "PREPARE",
      "Make messy information usable.",
      "Parse documents, preserve meaningful structure, and normalize content before indexing.",
    ],
    stage: "Parse and normalize the documents",
  },
  {
    num: "03 / INDEX",
    glyph: "⠿",
    title: "Dense + keyword indexes",
    copy: [
      "INDEX",
      "Build two paths to relevance.",
      "Combine dense representations and keyword indexes to support meaning and exact terminology.",
    ],
    stage: "Build dense and keyword indexes",
  },
  {
    num: "04 / RETRIEVE",
    glyph: "⌕",
    title: "Retrieve & rerank",
    copy: [
      "RETRIEVE",
      "Find the evidence that matters.",
      "Retrieve relevant candidates, enforce permissions, and rerank them against the question.",
    ],
    stage: "Retrieve and rerank relevant sources",
  },
  {
    num: "05 / GROUND",
    glyph: "≋",
    title: "Evidence assembly",
    copy: [
      "GROUND",
      "Give every answer a foundation.",
      "Assemble supporting passages with source references before asking the model to respond.",
    ],
    stage: "Assemble the supporting evidence",
  },
  {
    num: "06 / GENERATE",
    glyph: "✳",
    title: "Model response",
    copy: [
      "GENERATE",
      "Turn evidence into a clear response.",
      "Generate an answer from the retrieved context, with citations and explicit limits.",
    ],
    stage: "Generate a grounded response",
  },
  {
    num: "07 / INSPECT",
    glyph: "◉",
    title: "Evaluate & observe",
    copy: [
      "INSPECT",
      "Observe. Evaluate. Improve.",
      "Inspect traces, test answer support, and turn failures into the next evaluation set.",
    ],
    stage: "Evaluate quality and observe behavior",
  },
];

export default function EngineeringSection() {
  const [current, setCurrent] = useState<number>(3); // Initial index is 3 (Layer 04 Retrieve)
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pausedRef = useRef<boolean>(false);
  pausedRef.current = isPaused;

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setIsPaused(true);
    }

    const interval = setInterval(() => {
      if (!pausedRef.current && !document.hidden) {
        setCurrent((prev) => (prev + 1) % stepsData.length);
      }
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const selectLayer = (index: number) => {
    setCurrent(index);
  };

  const currentStep = stepsData[current];

  return (
    <section className="content arch" id="engineering">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="sectionnum">04 / INSIDE THE SYSTEM</div>
            <h2>
              Good AI is a system,
              <br />
              not a single model.
            </h2>
          </div>
          <p className="intro">
            The architecture should follow the data, workflow, and operating
            constraints. Each layer has a job—and a way to be tested.
          </p>
        </div>

        <div className="architecture-console">
          <div className="console-bar">
            <span>
              <i></i> THE PRODUCTION STACK
            </span>
            <span>7 LAYERS / ONE CONNECTED SYSTEM</span>
          </div>

          <div className="console-body">
            <div className="layer-list">
              <div className="flow">
                {stepsData.map((step, i) => (
                  <div
                    aria-label={`Inspect layer ${i + 1}: ${step.copy[0]}`}
                    className={`step ${i === current ? "active" : ""}`}
                    key={step.num}
                    role="button"
                    tabIndex={0}
                    onClick={() => selectLayer(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectLayer(i);
                      }
                    }}
                  >
                    <span className="num">{step.num}</span>
                    <span className="glyph">{step.glyph}</span>
                    <strong>{step.title}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="architecture-stage">
              <div className="stage-kicker">ENGINEERED AS A WHOLE</div>
              <div className="system-scene">
                <svg
                  aria-label="Sources connect through a retrieval and model core to cited answers and controlled actions"
                  role="img"
                  viewBox="0 0 640 325"
                >
                  <defs>
                    <linearGradient id="coreGradient" x2="1" y2="1">
                      <stop stopColor="#3164ff" />
                      <stop offset="1" stopColor="#1638bb" />
                    </linearGradient>
                    <filter id="coreShadow">
                      <feDropShadow
                        dx="0"
                        dy="12"
                        floodColor="#2855ff"
                        floodOpacity=".15"
                        stdDeviation="10"
                      />
                    </filter>
                  </defs>

                  <g fill="none" stroke="#bdcdf9" strokeWidth="1.6">
                    <path
                      d="M125 80C200 80 200 160 272 160"
                      id="c1"
                    />
                    <path
                      d="M125 238C200 238 200 160 272 160"
                      id="c2"
                    />
                    <path
                      d="M371 160C445 160 425 80 500 80"
                      id="c3"
                    />
                    <path
                      d="M371 160C445 160 425 238 500 238"
                      id="c4"
                    />
                  </g>

                  <circle
                    className="console-particle"
                    fill="#2855ff"
                    r="3"
                  >
                    <animateMotion
                      begin="-0.5s"
                      dur="3s"
                      repeatCount="indefinite"
                    >
                      <mpath href="#c1" />
                    </animateMotion>
                  </circle>
                  <circle
                    className="console-particle"
                    fill="#2855ff"
                    r="3"
                  >
                    <animateMotion
                      begin="-1.0s"
                      dur="3s"
                      repeatCount="indefinite"
                    >
                      <mpath href="#c2" />
                    </animateMotion>
                  </circle>
                  <circle
                    className="console-particle"
                    fill="#2855ff"
                    r="3"
                  >
                    <animateMotion
                      begin="-1.5s"
                      dur="3s"
                      repeatCount="indefinite"
                    >
                      <mpath href="#c3" />
                    </animateMotion>
                  </circle>
                  <circle
                    className="console-particle"
                    fill="#2855ff"
                    r="3"
                  >
                    <animateMotion
                      begin="-2.0s"
                      dur="3s"
                      repeatCount="indefinite"
                    >
                      <mpath href="#c4" />
                    </animateMotion>
                  </circle>

                  <g
                    fontFamily="ui-monospace,monospace"
                    fontSize="11"
                    textAnchor="middle"
                  >
                    <g fill="#fff" stroke="#dbe3f6">
                      <rect height="76" rx="10" width="106" x="28" y="43" />
                      <rect height="76" rx="10" width="106" x="28" y="200" />
                      <rect height="76" rx="10" width="112" x="500" y="43" />
                      <rect height="76" rx="10" width="112" x="500" y="200" />
                    </g>
                    <g fill="#22345f">
                      <text x="81" y="76">
                        DOCUMENTS
                      </text>
                      <text fill="#8694b0" fontSize="9" x="81" y="94">
                        SOURCE KNOWLEDGE
                      </text>
                      <text x="81" y="234">
                        WORKFLOWS
                      </text>
                      <text fill="#8694b0" fontSize="9" x="81" y="251">
                        BUSINESS CONTEXT
                      </text>
                      <text x="556" y="76">
                        CITED ANSWERS
                      </text>
                      <text fill="#8694b0" fontSize="9" x="556" y="94">
                        TRACEABLE EVIDENCE
                      </text>
                      <text x="556" y="234">
                        TOOL ACTIONS
                      </text>
                      <text fill="#8694b0" fontSize="9" x="556" y="251">
                        APPROVAL GATES
                      </text>
                    </g>
                    <g filter="url(#coreShadow)">
                      <path
                        d="M270 116l18-14h100l-18 14z"
                        fill="#799bff"
                      />
                      <path
                        d="M370 116l18-14v100l-18 14z"
                        fill="#15319a"
                      />
                      <rect
                        fill="url(#coreGradient)"
                        height="100"
                        rx="7"
                        width="100"
                        x="270"
                        y="116"
                      />
                      <circle
                        cx="320"
                        cy="148"
                        fill="none"
                        r="14"
                        stroke="#b7cbff"
                      />
                      <circle cx="320" cy="148" fill="#fff" r="5" />
                      <text fill="#fff" fontSize="10" x="320" y="183">
                        RETRIEVAL
                      </text>
                      <text fill="#cfdbff" fontSize="9" x="320" y="200">
                        + MODEL
                      </text>
                    </g>
                  </g>
                </svg>
              </div>

              <div className="layer-detail">
                <span id="layer-number">
                  LAYER {String(current + 1).padStart(2, "0")} /{" "}
                  {currentStep.copy[0]}
                </span>
                <h3 id="layer-title">{currentStep.copy[1]}</h3>
                <p id="layer-description">{currentStep.copy[2]}</p>
              </div>

              <div className="control-rail">
                <span>Access control</span>
                <span>Evaluation</span>
                <span>Observability</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flow-control">
          <span aria-live="off" className="flow-status" id="flow-status">
            {String(current + 1).padStart(2, "0")} / {currentStep.stage}
          </span>
          <button
            aria-pressed={isPaused ? "true" : "false"}
            className="play-toggle"
            id="play-toggle"
            onClick={togglePause}
          >
            {isPaused ? "Play flow ▷" : "Pause flow Ⅱ"}
          </button>
        </div>

        <div className="archfoot">
          <span>↳ ACCESS CONTROL &amp; PERMISSIONS</span>
          <span>↳ EVALUATION / LOGGING / FEEDBACK</span>
          <span>↳ AGENT ACTION GUARDRAILS</span>
        </div>
      </div>
    </section>
  );
}
