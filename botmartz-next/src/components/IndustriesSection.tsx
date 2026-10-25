"use client";

import React, { useState } from "react";

type IndustryKey =
  | "insurance"
  | "healthcare"
  | "legal"
  | "aviation"
  | "operations";

const industryData: Record<
  IndustryKey,
  { label: string; title: string; desc: string; tags: string[] }
> = {
  insurance: {
    label: "Insurance",
    title: "Insurance knowledge systems",
    desc: "Help teams find the right policy wording, supporting documents, and internal guidance with traceable evidence and appropriate access controls.",
    tags: [
      "Policy wording search",
      "Claims review support",
      "Underwriting knowledge",
    ],
  },
  healthcare: {
    label: "Healthcare",
    title: "Healthcare knowledge retrieval",
    desc: "Connect teams to internal protocols, administrative guidance, and organizational documents while respecting privacy and access boundaries.",
    tags: [
      "Internal knowledge search",
      "Document workflows",
      "Access controls",
    ],
  },
  legal: {
    label: "Legal",
    title: "Legal document intelligence",
    desc: "Make large collections of contracts, matter documents, and internal legal knowledge easier to search and inspect.",
    tags: ["Contract search", "Matter knowledge", "Evidence tracing"],
  },
  aviation: {
    label: "Aviation MRO",
    title: "Aviation MRO intelligence",
    desc: "Help technical teams locate relevant maintenance-manual passages and supporting technical evidence across document collections.",
    tags: ["Manual retrieval", "Technical evidence", "Revision awareness"],
  },
  operations: {
    label: "Document-heavy operations",
    title: "Document-heavy operations",
    desc: "Turn distributed operational documents into a more searchable, traceable knowledge layer connected to real workflows.",
    tags: ["Document search", "Knowledge assistant", "Workflow support"],
  },
};

const industryKeys: IndustryKey[] = [
  "insurance",
  "healthcare",
  "legal",
  "aviation",
  "operations",
];

export default function IndustriesSection() {
  const [selected, setSelected] = useState<IndustryKey>("insurance");

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const nextIdx =
        e.key === "Home"
          ? 0
          : e.key === "End"
          ? industryKeys.length - 1
          : (idx + (e.key === "ArrowDown" ? 1 : -1) + industryKeys.length) %
            industryKeys.length;
      setSelected(industryKeys[nextIdx]);
    }
  };

  const current = industryData[selected];

  return (
    <section className="content industries" id="industries">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="sectionnum">05 / WHERE IT APPLIES</div>
            <h2>
              Knowledge is different
              <br />
              in every industry.
            </h2>
          </div>
          <p className="intro">
            The engineering approach adapts to the language, documents,
            permissions, and workflows of the business. Examples below are
            illustrative, not claims of existing deployments.
          </p>
        </div>

        <div className="industry-layout">
          <div aria-label="Industry examples" className="ilist" role="tablist">
            {industryKeys.map((key, idx) => (
              <button
                aria-controls="detail"
                aria-selected={selected === key ? "true" : "false"}
                className={`ibtn ${selected === key ? "active" : ""}`}
                data-i={key}
                id={`industry-${key}`}
                key={key}
                role="tab"
                tabIndex={selected === key ? 0 : -1}
                onClick={() => setSelected(key)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <span>{industryData[key].label}</span>
                <span>↗</span>
              </button>
            ))}
          </div>

          <div
            aria-labelledby={`industry-${selected}`}
            className="idetail"
            id="detail"
            role="tabpanel"
          >
            <div className="eyebrow">
              <i className="dot"></i> ILLUSTRATIVE USE CASES
            </div>
            <h3>{current.title}</h3>
            <p>{current.desc}</p>
            <div className="tags">
              {current.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
