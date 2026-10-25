"use client";

import React, { useState } from "react";

const deliveryData = [
  {
    phase: "DISCOVER",
    title: "Understand the workflow",
    heading: "Define the right problem before building the solution.",
    description:
      "Clarify the people, data, constraints, and questions that define the use case.",
    output: "Use-case definition",
    items: [
      "Users, workflow, and data inventory",
      "Constraints, risks, and access boundaries",
      "Success criteria and evaluation questions",
    ],
  },
  {
    phase: "ARCHITECT",
    title: "Design the system",
    heading: "Design the system architecture.",
    description:
      "Turn the use case into a connected architecture with explicit operating boundaries.",
    output: "System architecture",
    items: [
      "Retrieval and orchestration design",
      "Security and permission model",
      "Integration and deployment approach",
    ],
  },
  {
    phase: "BUILD",
    title: "Implement & evaluate",
    heading: "Build and test with real questions.",
    description:
      "Build the workflow and inspect its behavior against real questions and failure cases.",
    output: "Evaluated implementation",
    items: [
      "Working retrieval or agent workflow",
      "Evaluation results and failure review",
      "Source traces and action controls",
    ],
  },
  {
    phase: "DEPLOY",
    title: "Operate & improve",
    heading: "Deploy into production.",
    description:
      "Prepare the system for its environment and make ownership, monitoring, and improvement clear.",
    output: "Deployment & handover",
    items: [
      "Environment and release preparation",
      "Logging, monitoring, and handover",
      "Feedback and improvement plan",
    ],
  },
];

export default function DeliveryProcessSection() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [isChanging, setIsChanging] = useState<boolean>(false);

  const selectDelivery = (i: number) => {
    setSelectedPhase(i);
    setIsChanging(true);
    setTimeout(() => setIsChanging(false), 300);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const nextIdx =
        e.key === "Home"
          ? 0
          : e.key === "End"
          ? 3
          : (i + (e.key === "ArrowRight" ? 1 : -1) + 4) % 4;
      selectDelivery(nextIdx);
    }
  };

  const d = deliveryData[selectedPhase];

  return (
    <section className="content process" id="delivery-process">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="sectionnum">08 / HOW WE WORK</div>
            <h2>
              From use case
              <br />
              to production.
            </h2>
          </div>
          <p className="intro">
            A practical delivery process connects the business problem to
            architecture, evaluation strategy, and the operating environment.
          </p>
        </div>

        <div className="delivery-workbench">
          <div
            aria-label="Explore delivery stages"
            className="delivery-tabs"
            role="tablist"
          >
            {deliveryData.map((item, idx) => (
              <button
                aria-controls="delivery-panel"
                aria-selected={selectedPhase === idx ? "true" : "false"}
                className={`delivery-tab ${
                  selectedPhase === idx ? "active" : ""
                }`}
                data-delivery={idx}
                id={`delivery-tab-${idx}`}
                key={item.phase}
                role="tab"
                tabIndex={selectedPhase === idx ? 0 : -1}
                onClick={() => selectDelivery(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <span className="delivery-tab-top">
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                  <span>↗</span>
                </span>
                <span className="delivery-tab-label">{item.phase}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>

          <div
            aria-labelledby={`delivery-tab-${selectedPhase}`}
            className={`delivery-detail ${isChanging ? "changing" : ""}`}
            id="delivery-panel"
            role="tabpanel"
          >
            <div className="delivery-narrative">
              <span className="sectionnum" id="delivery-phase">
                PHASE {String(selectedPhase + 1).padStart(2, "0")} / {d.phase}
              </span>
              <h3 id="delivery-heading">{d.heading}</h3>
              <p id="delivery-description">{d.description}</p>
              <div aria-hidden="true" className="delivery-route">
                <span>UNDERSTAND</span>
                <i></i>
                <span>DESIGN</span>
                <i></i>
                <span>BUILD</span>
                <i></i>
                <span>OPERATE</span>
              </div>
            </div>

            <div className="delivery-output">
              <div className="output-label">WHAT THIS STAGE PRODUCES</div>
              <h4 id="delivery-output-title">{d.output}</h4>
              <ul id="delivery-output-list">
                {d.items.map((item, i) => (
                  <li key={i}>
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="output-foot">
                <span id="delivery-count">
                  {String(selectedPhase + 1).padStart(2, "0")} / 04
                </span>
                <span>CLARITY BEFORE COMPLEXITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
