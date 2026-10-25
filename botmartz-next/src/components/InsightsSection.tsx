"use client";

import React, { useState, useEffect } from "react";

const articlesData = [
  {
    tag: "01 / RETRIEVAL DESIGN",
    cat: "RETRIEVAL ENGINEERING · FIELD NOTE",
    title: "Hybrid Search vs. Vector Search: How to Choose",
    desc: "Compare exact-term matching and semantic retrieval, then combine results when the evidence supports it.",
    footer: "Search architecture",
    paragraphs: [
      "Vector search finds related meaning, while keyword search is useful for exact terms, identifiers, and specialist vocabulary. A hybrid system can combine both candidate lists before reranking.",
      "Start with representative questions. Compare keyword, dense, and hybrid baselines using relevance judgments. Reciprocal rank fusion is one way to merge ranked results without assuming their raw scores are comparable.",
      "Choose the simplest approach that meets the evaluation target. Track retrieval quality, response latency, operating cost, and the behavior of filters on your own data.",
    ],
    svg: (
      <svg aria-hidden="true" viewBox="0 0 340 180">
        <path
          d="M123 61C160 61 155 94 200 94M123 128C160 128 155 94 200 94"
          fill="none"
          stroke="#7f9cf5"
          strokeWidth="1.6"
        />
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="35"
          y="45"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="87.5"
          y="66"
        >
          KEYWORD
        </text>
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="35"
          y="112"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="87.5"
          y="133"
        >
          VECTOR
        </text>
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="200"
          y="78"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="252.5"
          y="99"
        >
          RERANK
        </text>
      </svg>
    ),
  },
  {
    tag: "02 / QUALITY CHECKS",
    cat: "EVALUATION · FIELD NOTE",
    title: "How to Evaluate a RAG System Before Production",
    desc: "Separate retrieval quality from answer support, and test realistic questions before launch.",
    footer: "RAG reliability",
    paragraphs: [
      "Separate retrieval evaluation from answer evaluation. A plausible response can hide weak retrieval; a good retrieval result can still lead to an unsupported response.",
      "Create a realistic question set with expected supporting passages. Include ambiguous questions, missing answers, conflicting documents, and restricted sources. Inspect relevance, citation support, and appropriate abstention.",
      "Repeat the same evaluation when documents, chunking, models, or prompts change. Keep failure examples visible and use them to guide the next iteration.",
    ],
    svg: (
      <svg aria-hidden="true" viewBox="0 0 340 180">
        <path
          d="M138 61H200M244 78V112"
          fill="none"
          stroke="#7f9cf5"
          strokeWidth="1.6"
        />
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="35"
          y="45"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="87.5"
          y="66"
        >
          QUESTIONS
        </text>
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="200"
          y="45"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="252.5"
          y="66"
        >
          EVALUATE
        </text>
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="200"
          y="112"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="252.5"
          y="133"
        >
          REVIEW
        </text>
      </svg>
    ),
  },
  {
    tag: "03 / ACCESS BOUNDARIES",
    cat: "SECURITY · FIELD NOTE",
    title: "Permission-Aware Retrieval for Enterprise Knowledge",
    desc: "Carry identity and source permissions through retrieval, citations, caching, and tool actions.",
    footer: "Access control",
    paragraphs: [
      "Access boundaries belong in the retrieval path. A system should only retrieve information the current user is authorized to inspect.",
      "Attach source-level permissions to indexed records, carry identity into search filters, and check authorization again when opening a source or executing a tool. Keep cached results scoped to the relevant access context.",
      "Test cross-user isolation, permission changes, deleted content, and denied tool actions. Treat generation instructions as one layer rather than the only security boundary.",
    ],
    svg: (
      <svg aria-hidden="true" viewBox="0 0 340 180">
        <path
          d="M126 61H200M244 78V112"
          fill="none"
          stroke="#7f9cf5"
          strokeWidth="1.6"
        />
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="35"
          y="45"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="87.5"
          y="66"
        >
          IDENTITY
        </text>
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="200"
          y="45"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="252.5"
          y="66"
        >
          POLICY
        </text>
        <rect
          fill="#fff"
          height="34"
          rx="6"
          stroke="#d7e1fc"
          width="105"
          x="200"
          y="112"
        />
        <text
          fill="#2855ff"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          textAnchor="middle"
          x="252.5"
          y="133"
        >
          SOURCES
        </text>
      </svg>
    ),
  },
];

export default function InsightsSection() {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  const openArticle = (idx: number) => {
    setActiveArticle(idx);
  };

  const closeArticle = () => {
    setActiveArticle(null);
  };

  useEffect(() => {
    if (activeArticle === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeArticle();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArticle]);

  const current = activeArticle !== null ? articlesData[activeArticle] : null;

  return (
    <>
      <section className="content white" id="insights">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="sectionnum">07 / TECHNICAL INSIGHTS</div>
              <h2>
                Engineering knowledge
                <br />
                for production AI.
              </h2>
            </div>
            <a className="btn alt" href="#contact">
              Discuss your architecture ↗
            </a>
          </div>

          <div className="articles">
            {articlesData.map((art, idx) => (
              <article
                aria-label={`Read ${art.title}`}
                className="article"
                key={art.title}
                role="button"
                tabIndex={0}
                onClick={() => openArticle(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openArticle(idx);
                  }
                }}
              >
                <div
                  className={`art ${
                    idx === 0 ? "a" : idx === 1 ? "b" : "c"
                  }`}
                >
                  <span className="insight-art-label">{art.tag}</span>
                  {art.svg}
                </div>
                <div className="cat">{art.cat}</div>
                <h3>{art.title}</h3>
                <p className="insight-description">{art.desc}</p>
                <div className="articlefoot">
                  <span>{art.footer}</span>
                  <b>Read note ↗</b>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeArticle !== null && current && (
        <dialog
          id="insight-dialog"
          open
          onClick={(e) => {
            if (e.target === e.currentTarget) closeArticle();
          }}
        >
          <button
            aria-label="Close article"
            className="close-dialog"
            onClick={closeArticle}
          >
            Close ×
          </button>
          <div className="sectionnum">BOTMARTZ / ENGINEERING FIELD NOTES</div>
          <h2 id="insight-title">{current.title}</h2>
          <div id="insight-body">
            {current.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </dialog>
      )}
    </>
  );
}
