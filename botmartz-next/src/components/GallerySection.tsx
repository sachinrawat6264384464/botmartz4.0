"use client";

import React, { useState, useEffect } from "react";

const galleryData = [
  {
    src: "/assets/gallery-company.png",
    caption:
      "Company & collaboration — Great systems start with a shared understanding.",
    alt: "A generated illustrative scene of software professionals discussing architecture in a sunlit office",
    tag: "01 / COMPANY & COLLABORATION",
    title: "Great systems start with a shared understanding.",
  },
  {
    src: "/assets/gallery-research.png",
    caption: "Research & discovery — Space to ask better questions.",
    alt: "A generated illustrative research desk with papers and a laptop by a bright window",
    tag: "02 / RESEARCH & DISCOVERY",
    title: "Space to ask better questions.",
  },
  {
    src: "/assets/gallery-engineering.png",
    caption: "Engineering & craft — From an idea to a working system.",
    alt: "A generated illustrative scene of engineers reviewing code and system diagrams",
    tag: "03 / ENGINEERING & CRAFT",
    title: "From an idea to a working system.",
  },
  {
    src: "/assets/gallery-delivery.png",
    caption:
      "Planning & delivery — Clear decisions. Thoughtful execution.",
    alt: "A generated illustrative project planning session with cards and sketches on a desk",
    tag: "04 / PLANNING & DELIVERY",
    title: "Clear decisions. Thoughtful execution.",
  },
];

export default function GallerySection() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openGallery = (i: number) => {
    setModalIndex(i);
  };

  const closeGallery = () => {
    setModalIndex(null);
  };

  const nextImage = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % galleryData.length);
    }
  };

  const prevImage = () => {
    if (modalIndex !== null) {
      setModalIndex(
        (modalIndex - 1 + galleryData.length) % galleryData.length
      );
    }
  };

  useEffect(() => {
    if (modalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex]);

  const currentItem = modalIndex !== null ? galleryData[modalIndex] : null;

  return (
    <>
      <section className="content studio-gallery" id="gallery">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="sectionnum">06 / THE GALLERY</div>
              <h2>
                A human perspective
                <br />
                on engineering.
              </h2>
            </div>
            <div>
              <p className="intro">
                Collaboration, focused research, careful implementation, and a
                clear path to delivery.
              </p>
              <p className="gallery-disclosure">
                AI-generated illustrative scenes.
              </p>
            </div>
          </div>

          <div className="editorial-gallery">
            <figure className="gallery-item gallery-item-1">
              <button
                aria-label="Enlarge Company & collaboration"
                className="gallery-open"
                data-gallery="0"
                onClick={() => openGallery(0)}
              >
                <img
                  alt={galleryData[0].alt}
                  height="941"
                  loading="lazy"
                  src={galleryData[0].src}
                  width="1672"
                />
                <span className="gallery-enlarge">View image ↗</span>
              </button>
              <figcaption>
                <div>
                  <span>{galleryData[0].tag}</span>
                  <h3>{galleryData[0].title}</h3>
                </div>
                <span className="gallery-index">↗</span>
              </figcaption>
            </figure>

            <figure className="gallery-item gallery-item-2">
              <button
                aria-label="Enlarge Research & discovery"
                className="gallery-open"
                data-gallery="1"
                onClick={() => openGallery(1)}
              >
                <img
                  alt={galleryData[1].alt}
                  height="941"
                  loading="lazy"
                  src={galleryData[1].src}
                  width="1672"
                />
                <span className="gallery-enlarge">View image ↗</span>
              </button>
              <figcaption>
                <div>
                  <span>{galleryData[1].tag}</span>
                  <h3>{galleryData[1].title}</h3>
                </div>
                <span className="gallery-index">↗</span>
              </figcaption>
            </figure>

            <figure className="gallery-item gallery-item-3">
              <button
                aria-label="Enlarge Engineering & craft"
                className="gallery-open"
                data-gallery="2"
                onClick={() => openGallery(2)}
              >
                <img
                  alt={galleryData[2].alt}
                  height="941"
                  loading="lazy"
                  src={galleryData[2].src}
                  width="1672"
                />
                <span className="gallery-enlarge">View image ↗</span>
              </button>
              <figcaption>
                <div>
                  <span>{galleryData[2].tag}</span>
                  <h3>{galleryData[2].title}</h3>
                </div>
                <span className="gallery-index">↗</span>
              </figcaption>
            </figure>

            <figure className="gallery-item gallery-item-4">
              <button
                aria-label="Enlarge Planning & delivery"
                className="gallery-open"
                data-gallery="3"
                onClick={() => openGallery(3)}
              >
                <img
                  alt={galleryData[3].alt}
                  height="941"
                  loading="lazy"
                  src={galleryData[3].src}
                  width="1672"
                />
                <span className="gallery-enlarge">View image ↗</span>
              </button>
              <figcaption>
                <div>
                  <span>{galleryData[3].tag}</span>
                  <h3>{galleryData[3].title}</h3>
                </div>
                <span className="gallery-index">↗</span>
              </figcaption>
            </figure>
          </div>

          <div className="gallery-bottom">
            <span>FOUR PERSPECTIVES / ONE ENGINEERING MINDSET</span>
            <a href="#delivery-process">See how we work ↗</a>
          </div>
        </div>
      </section>

      {modalIndex !== null && currentItem && (
        <dialog
          aria-labelledby="gallery-modal-caption"
          id="gallery-dialog"
          open
          onClick={(e) => {
            if (e.target === e.currentTarget) closeGallery();
          }}
        >
          <div className="gallery-modal-toolbar">
            <span id="gallery-modal-count">
              {String(modalIndex + 1).padStart(2, "0")} / 04
            </span>
            <button
              aria-label="Close gallery"
              id="gallery-close"
              onClick={closeGallery}
            >
              Close ×
            </button>
          </div>
          <img
            alt={currentItem.alt}
            id="gallery-modal-image"
            src={currentItem.src}
          />
          <div className="gallery-modal-footer">
            <p id="gallery-modal-caption">{currentItem.caption}</p>
            <div>
              <button
                aria-label="Previous gallery image"
                id="gallery-prev"
                onClick={prevImage}
              >
                ←
              </button>
              <button
                aria-label="Next gallery image"
                id="gallery-next"
                onClick={nextImage}
              >
                →
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
