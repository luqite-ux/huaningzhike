'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') setLightboxOpen(false)
  }

  return (
    <>
      {/* Main image viewer */}
      <div className="glass-card rounded-2xl overflow-hidden gold-border-glow">
        {/* Primary image */}
        <div
          className="relative h-80 md:h-[420px] bg-gradient-to-br from-white to-[#eaf3ff] cursor-zoom-in group"
          role="button"
          tabIndex={0}
          aria-label={`View ${productName} image ${activeIndex + 1} of ${images.length} in full size`}
          onClick={() => setLightboxOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setLightboxOpen(true)
          }}
        >
          {/* Radial glow behind equipment */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.18)_0%,transparent_70%)]"
            aria-hidden="true"
          />
          <Image
            src={images[activeIndex]}
            alt={`${productName} — view ${activeIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
          {/* Zoom hint */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="glass-card px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 text-xs text-[var(--steel-light)]">
              <ZoomIn size={13} />
              Zoom
            </div>
          </div>
          {/* Navigation arrows (only when multiple images) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 glass-card p-2 rounded-full text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 glass-card p-2 rounded-full text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}
          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 glass-card px-2.5 py-1 rounded-full text-xs text-[var(--steel)]">
              {activeIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3 p-4 border-t border-[rgba(200,168,75,0.1)]">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View image ${i + 1}`}
                aria-pressed={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--gold)] ${
                  i === activeIndex
                    ? 'ring-2 ring-[var(--gold)] ring-offset-2 ring-offset-[var(--card)]'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image
                  src={img}
                  alt={`${productName} thumbnail ${i + 1}`}
                  fill
                  sizes="80px"
                  className="object-contain p-1 bg-[#eaf3ff]"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image viewer`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f4f8ff]/95 backdrop-blur-md animate-fade-in"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 glass-card p-2.5 rounded-full text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)] z-10"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-4xl max-h-[85vh] mx-4">
            <Image
              src={images[activeIndex]}
              alt={`${productName} — view ${activeIndex + 1}`}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-3 rounded-full text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full text-sm text-[var(--steel)]">
            {activeIndex + 1} / {images.length}
          </div>

          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setLightboxOpen(false)}
            aria-hidden="true"
          />
        </div>
      )}
    </>
  )
}
