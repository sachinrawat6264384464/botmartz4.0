"use client";

import React, { useState } from "react";

const serviceData = [
  {
    key: "rag",
    label: "01 / RETRIEVAL ENGINEERING",
    type: "Naive RAG / foundational flow",
    title: "From documents to grounded answers.",
    flow: "Documents → chunks → embeddings → retrieve → generate",
    alt: "Red-accent three-dimensional concept of documents, retrieval database, model and generated answer",
    tagline: "Find the right evidence before generating the answer.",
    details:
      "Document ingestion · Hybrid retrieval · Reranking · Permission-aware search · Evidence citations",
    overlay: (
      <svg
        className="process-overlay"
        viewBox="0 0 1254 1254"
        aria-label="Labeled animated rag process"
      >
        <path
          id="rag-live-0"
          d="M230 390C350 390 330 560 470 560"
          fill="none"
          stroke="#e45c52"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#e45c52" className="flow-spark">
          <animateMotion dur="2.4s" begin="-0.0s" repeatCount="indefinite">
            <mpath href="#rag-live-0" />
          </animateMotion>
        </circle>
        <path
          id="rag-live-1"
          d="M235 650C340 650 350 600 470 600"
          fill="none"
          stroke="#e45c52"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#e45c52" className="flow-spark">
          <animateMotion
            dur="2.6999999999999997s"
            begin="-0.6s"
            repeatCount="indefinite"
          >
            <mpath href="#rag-live-1" />
          </animateMotion>
        </circle>
        <path
          id="rag-live-2"
          d="M235 855C365 855 350 670 470 670"
          fill="none"
          stroke="#e45c52"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#e45c52" className="flow-spark">
          <animateMotion dur="3.0s" begin="-1.2s" repeatCount="indefinite">
            <mpath href="#rag-live-2" />
          </animateMotion>
        </circle>
        <path
          id="rag-live-3"
          d="M680 620C770 620 750 620 825 620"
          fill="none"
          stroke="#e45c52"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#e45c52" className="flow-spark">
          <animateMotion
            dur="3.3s"
            begin="-1.7999999999999998s"
            repeatCount="indefinite"
          >
            <mpath href="#rag-live-3" />
          </animateMotion>
        </circle>
        <path
          id="rag-live-4"
          d="M1000 620C1090 620 1040 540 1110 525"
          fill="none"
          stroke="#e45c52"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#e45c52" className="flow-spark">
          <animateMotion
            dur="3.5999999999999996s"
            begin="-2.4s"
            repeatCount="indefinite"
          >
            <mpath href="#rag-live-4" />
          </animateMotion>
        </circle>
        <g className="process-label">
          <rect
            x="120"
            y="280"
            width="151"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#e45c52"
            strokeOpacity=".35"
          />
          <text
            x="195.5"
            y="310"
            fill="#e45c52"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            DOCUMENTS
          </text>
        </g>
        <g className="process-label">
          <rect
            x="470"
            y="430"
            width="190"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#e45c52"
            strokeOpacity=".35"
          />
          <text
            x="565.0"
            y="460"
            fill="#e45c52"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            VECTOR INDEX
          </text>
        </g>
        <g className="process-label">
          <rect
            x="790"
            y="470"
            width="135"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#e45c52"
            strokeOpacity=".35"
          />
          <text
            x="857.5"
            y="500"
            fill="#e45c52"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            LLM
          </text>
        </g>
        <g className="process-label">
          <rect
            x="1010"
            y="330"
            width="135"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#e45c52"
            strokeOpacity=".35"
          />
          <text
            x="1077.5"
            y="360"
            fill="#e45c52"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            ANSWER
          </text>
        </g>
      </svg>
    ),
  },
  {
    key: "agents",
    label: "02 / AGENT ENGINEERING",
    type: "Controlled agent / execution flow",
    title: "From intent to controlled action.",
    flow: "Request → plan → tools → approval → action",
    alt: "Blue-accent three-dimensional agent orchestrator connected to tools and an approval gate",
    tagline: "Give models tools. Keep the system in control.",
    details:
      "Workflow orchestration · Typed tools · State management · Approval gates · Failure handling",
    overlay: (
      <svg
        className="process-overlay"
        viewBox="0 0 1254 1254"
        aria-label="Labeled animated agents process"
      >
        <path
          id="agents-live-0"
          d="M650 220C650 350 540 320 560 490"
          fill="none"
          stroke="#2855ff"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#2855ff" className="flow-spark">
          <animateMotion dur="2.4s" begin="-0.0s" repeatCount="indefinite">
            <mpath href="#agents-live-0" />
          </animateMotion>
        </circle>
        <path
          id="agents-live-1"
          d="M300 500C400 500 420 570 515 580"
          fill="none"
          stroke="#2855ff"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#2855ff" className="flow-spark">
          <animateMotion
            dur="2.6999999999999997s"
            begin="-0.6s"
            repeatCount="indefinite"
          >
            <mpath href="#agents-live-1" />
          </animateMotion>
        </circle>
        <path
          id="agents-live-2"
          d="M760 550C870 550 850 650 1020 640"
          fill="none"
          stroke="#2855ff"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#2855ff" className="flow-spark">
          <animateMotion dur="3.0s" begin="-1.2s" repeatCount="indefinite">
            <mpath href="#agents-live-2" />
          </animateMotion>
        </circle>
        <path
          id="agents-live-3"
          d="M650 700C600 790 590 820 650 900"
          fill="none"
          stroke="#2855ff"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#2855ff" className="flow-spark">
          <animateMotion
            dur="3.3s"
            begin="-1.7999999999999998s"
            repeatCount="indefinite"
          >
            <mpath href="#agents-live-3" />
          </animateMotion>
        </circle>
        <path
          id="agents-live-4"
          d="M690 940C820 950 850 1040 1020 1030"
          fill="none"
          stroke="#2855ff"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#2855ff" className="flow-spark">
          <animateMotion
            dur="3.5999999999999996s"
            begin="-2.4s"
            repeatCount="indefinite"
          >
            <mpath href="#agents-live-4" />
          </animateMotion>
        </circle>
        <g className="process-label">
          <rect
            x="525"
            y="70"
            width="135"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#2855ff"
            strokeOpacity=".35"
          />
          <text
            x="592.5"
            y="100"
            fill="#2855ff"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            REQUEST
          </text>
        </g>
        <g className="process-label">
          <rect
            x="60"
            y="360"
            width="135"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#2855ff"
            strokeOpacity=".35"
          />
          <text
            x="127.5"
            y="390"
            fill="#2855ff"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            TOOLS
          </text>
        </g>
        <g className="process-label">
          <rect
            x="490"
            y="380"
            width="190"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#2855ff"
            strokeOpacity=".35"
          />
          <text
            x="585.0"
            y="410"
            fill="#2855ff"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            ORCHESTRATOR
          </text>
        </g>
        <g className="process-label">
          <rect
            x="940"
            y="480"
            width="135"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#2855ff"
            strokeOpacity=".35"
          />
          <text
            x="1007.5"
            y="510"
            fill="#2855ff"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            DATA
          </text>
        </g>
        <g className="process-label">
          <rect
            x="480"
            y="810"
            width="138"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#2855ff"
            strokeOpacity=".35"
          />
          <text
            x="549.0"
            y="840"
            fill="#2855ff"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            APPROVAL
          </text>
        </g>
        <g className="process-label">
          <rect
            x="950"
            y="1100"
            width="135"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#2855ff"
            strokeOpacity=".35"
          />
          <text
            x="1017.5"
            y="1130"
            fill="#2855ff"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            ACTION
          </text>
        </g>
      </svg>
    ),
  },
  {
    key: "private",
    label: "03 / PRIVATE DEPLOYMENT",
    type: "Private deployment / access flow",
    title: "Your intelligence. Your environment.",
    flow: "Your cloud → secure index → access gate → workspace",
    alt: "Light green three-dimensional private servers in a protected enclosure connected to a secure workspace",
    tagline: "Fit the system to your environment.",
    details:
      "Customer-cloud options · Enterprise integrations · Access controls · Observability · Handover",
    overlay: (
      <svg
        className="process-overlay"
        viewBox="0 0 1254 1254"
        aria-label="Labeled animated private process"
      >
        <path
          id="private-live-0"
          d="M340 420C450 420 410 550 560 550"
          fill="none"
          stroke="#65a777"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#65a777" className="flow-spark">
          <animateMotion dur="2.4s" begin="-0.0s" repeatCount="indefinite">
            <mpath href="#private-live-0" />
          </animateMotion>
        </circle>
        <path
          id="private-live-1"
          d="M550 400C640 400 620 650 760 650"
          fill="none"
          stroke="#65a777"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#65a777" className="flow-spark">
          <animateMotion
            dur="2.6999999999999997s"
            begin="-0.6s"
            repeatCount="indefinite"
          >
            <mpath href="#private-live-1" />
          </animateMotion>
        </circle>
        <path
          id="private-live-2"
          d="M760 700C860 700 840 890 980 935"
          fill="none"
          stroke="#65a777"
          strokeOpacity=".6"
          strokeWidth="3"
          strokeDasharray="5 8"
        />
        <circle r="7" fill="#65a777" className="flow-spark">
          <animateMotion dur="3.0s" begin="-1.2s" repeatCount="indefinite">
            <mpath href="#private-live-2" />
          </animateMotion>
        </circle>
        <g className="process-label">
          <rect
            x="210"
            y="270"
            width="203"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#65a777"
            strokeOpacity=".35"
          />
          <text
            x="311.5"
            y="300"
            fill="#65a777"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            PRIVATE CLOUD
          </text>
        </g>
        <g className="process-label">
          <rect
            x="450"
            y="480"
            width="190"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#65a777"
            strokeOpacity=".35"
          />
          <text
            x="545.0"
            y="510"
            fill="#65a777"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            SECURE INDEX
          </text>
        </g>
        <g className="process-label">
          <rect
            x="650"
            y="740"
            width="177"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#65a777"
            strokeOpacity=".35"
          />
          <text
            x="738.5"
            y="770"
            fill="#65a777"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            ACCESS GATE
          </text>
        </g>
        <g className="process-label">
          <rect
            x="900"
            y="1040"
            width="151"
            height="48"
            rx="9"
            fill="#fff"
            fillOpacity=".97"
            stroke="#65a777"
            strokeOpacity=".35"
          />
          <text
            x="975.5"
            y="1070"
            fill="#65a777"
            textAnchor="middle"
            fontFamily="ui-monospace,monospace"
            fontSize="21"
            letterSpacing="1"
          >
            WORKSPACE
          </text>
        </g>
      </svg>
    ),
  },
];

export default function SolutionsSection() {
  const [selectedService, setSelectedService] = useState<number>(-1);
  const [isRevealing, setIsRevealing] = useState(false);

  const revealService = (i: number) => {
    if (i === selectedService) return;
    setSelectedService(i);
    setIsRevealing(true);
    setTimeout(() => setIsRevealing(false), 650);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const nextIndex =
        e.key === "Home"
          ? 0
          : e.key === "End"
          ? 2
          : (i + (e.key === "ArrowDown" ? 1 : -1) + 3) % 3;
      revealService(nextIndex);
    }
  };

  const activeService =
    selectedService >= 0 ? serviceData[selectedService] : null;

  return (
    <section className="content" id="solutions">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="sectionnum">02 / WHAT WE ENGINEER</div>
            <h2>
              Three disciplines.
              <br />
              One production mindset.
            </h2>
          </div>
          <p className="intro">
            We focus on the layers that determine whether an AI system is useful
            outside a demo: relevant information, controlled execution, and a
            deployment model that fits the environment.
          </p>
        </div>

        <div className="service-workbench">
          <div
            aria-label="Explore AI engineering services"
            className="solutions"
            role="tablist"
          >
            {serviceData.map((d, i) => (
              <button
                aria-controls="service-preview"
                aria-selected={selectedService === i ? "true" : "false"}
                className={`solution service-choice ${
                  selectedService === i ? "selected" : ""
                }`}
                data-service={i}
                id={`service-${d.key}`}
                key={d.key}
                role="tab"
                tabIndex={selectedService === i ? 0 : -1}
                onClick={() => revealService(i)}
                onFocus={() => revealService(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPointerEnter={(e) => {
                  if (e.pointerType !== "touch") revealService(i);
                }}
              >
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>
                    {d.key === "rag"
                      ? "Enterprise RAG Systems"
                      : d.key === "agents"
                      ? "Production AI Agents"
                      : "Private AI Deployment"}
                  </h3>
                  <div className="tagline">{d.tagline}</div>
                  <div className="details">{d.details}</div>
                </div>
                <span className="arrow">↗</span>
              </button>
            ))}
          </div>

          <div
            aria-labelledby={
              activeService ? `service-${activeService.key}` : "service-rag"
            }
            className={`service-preview ${
              activeService ? "is-active" : ""
            }`}
            data-tone={activeService ? activeService.key : "rag"}
            id="service-preview"
            role="tabpanel"
          >
            <div className="preview-top">
              <span id="preview-label">
                {activeService ? activeService.label : "01 / RETRIEVAL ENGINEERING"}
              </span>
              <span>CONCEPT / 3D</span>
            </div>

            <div
              className={`service-art ${
                isRevealing ? "revealing" : ""
              }`}
            >
              <img
                alt={
                  activeService
                    ? activeService.alt
                    : "Red-accent 3D concept of documents connected to a retrieval database and answer generation"
                }
                height="1254"
                id="service-image"
                src={
                  activeService
                    ? `/assets/${activeService.key}-process.png`
                    : "/assets/rag-process.png"
                }
                width="1254"
              />
              <div id="process-overlay-host">
                {activeService ? activeService.overlay : null}
              </div>
            </div>

            <div className="preview-caption">
              <span id="preview-type">
                {activeService
                  ? activeService.type
                  : "Naive RAG / foundational flow"}
              </span>
              <h3 id="preview-title">
                {activeService ? (
                  activeService.title
                ) : (
                  <>
                    From documents
                    <br />
                    to grounded answers.
                  </>
                )}
              </h3>
              <p id="preview-flow">
                {activeService
                  ? activeService.flow
                  : "Documents → chunks → embeddings → retrieve → generate"}
              </p>
              <a className="preview-link" href="#contact">
                Discuss this system <span>↗</span>
              </a>
            </div>

            <div className="service-empty">
              <span className="empty-orbit">
                <i></i>
              </span>
              <span className="sectionnum">01 — 03 / SYSTEM EXPLORER</span>
              <h3>
                Explore the
                <br />
                system behind the service.
              </h3>
              <p>
                Hover over a discipline to reveal its live process.
                <br />
                On touch screens, tap to explore.
              </p>
              <span className="empty-hint">← CHOOSE A DISCIPLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
