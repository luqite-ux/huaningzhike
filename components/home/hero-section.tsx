'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

// We use the large industrial machine as hero
const FLAGSHIP_IMAGE =
  'https://pub-c7a22068052144a5805830c30d280128.r2.dev/tenants/c0542148-cfbe-4c44-b7f2-7b36465032a2/products/hn-ms-002/01.png'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle system
    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80
    type Particle = {
      x: number; y: number; vx: number; vy: number
      r: number; alpha: number; gold: boolean
    }
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.3,
      vy:    (Math.random() - 0.5) * 0.3,
      r:     Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      gold:  Math.random() < 0.3,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0)             p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0)             p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold
          ? `rgba(200, 168, 75, ${p.alpha})`
          : `rgba(58, 122, 245, ${p.alpha})`
        ctx.fill()
      }

      // Subtle connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const alpha = (1 - dist / 90) * 0.08
            ctx.strokeStyle = `rgba(200, 168, 75, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      aria-label="HUANING ZHIKE PVD Vacuum Coating Equipment"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf7] via-[#f4f8ff] to-[#e8f2ff] animate-gradient-pan" aria-hidden="true" />
      <div className="absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-[rgba(58,122,245,0.16)] blur-3xl animate-drift-orb" aria-hidden="true" />
      <div className="absolute -bottom-32 left-0 h-[28rem] w-[28rem] rounded-full bg-[rgba(230,204,122,0.24)] blur-3xl animate-drift-orb [animation-delay:-3s]" aria-hidden="true" />
      <div className="absolute top-1/4 left-1/3 h-28 w-28 rounded-full bg-white/80 blur-2xl animate-pulse-gold" aria-hidden="true" />

      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid-bg opacity-60" aria-hidden="true" />

      {/* Animated canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Orbital rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full border border-[rgba(200,168,75,0.22)] animate-orbit-slow" />
        <div className="absolute inset-[60px] rounded-full border border-[rgba(27,85,196,0.17)] animate-orbit-mid" />
        <div className="absolute inset-[140px] rounded-full border border-[rgba(200,168,75,0.04)]" />
      </div>

      {/* Light sweep */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.03)] to-transparent skew-x-[-20deg] animate-light-sweep" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in-up">
            {/* Tag line */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(200,168,75,0.25)] bg-[rgba(200,168,75,0.05)] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse-gold" />
              <span className="text-[var(--gold)] text-xs font-medium tracking-widest uppercase">
                PVD Vacuum Coating Equipment
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-balance text-[var(--foreground)] mb-5">
              Precision{' '}
              <span className="gold-gradient-text">PVD Coating</span>
              {' '}Systems for Industrial &amp; Research Applications
            </h1>

            <p className="text-[var(--steel-light)] text-lg leading-relaxed mb-8 max-w-xl">
              Customized multi-arc ion plating, magnetron sputtering, electron beam evaporation, and composite PVD platforms — engineered by HUANING ZHIKE for demanding production and laboratory environments worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
              >
                Explore Equipment
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact?type=process"
                className="btn-outline-gold inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
              >
                Discuss Your Process
              </Link>
            </div>

            {/* Stats strip */}
            <div className="mt-12 flex flex-wrap gap-6 pt-8 border-t border-[rgba(200,168,75,0.1)]">
              {[
                { value: '5,000 m²', label: 'Manufacturing Facility' },
                { value: '6',        label: 'Production Lines' },
                { value: '10',       label: 'System Configurations' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-2xl font-bold gold-gradient-text">{stat.value}</div>
                  <div className="text-[var(--steel)] text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Flagship equipment image */}
          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: '0.2s' }}>
            {/* Glow halo behind image */}
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(27,85,196,0.25)_0%,transparent_70%)] blur-2xl" aria-hidden="true" />

            {/* Glass frame */}
            <div className="relative glass-card rounded-2xl p-4 gold-border-glow">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-white to-[#eaf3ff]">
                <Image
                  src={FLAGSHIP_IMAGE}
                  alt="HUANING ZHIKE industrial PVD coating system"
                  fill
                  sizes="(max-width: 1280px) 50vw, 560px"
                  className="object-contain p-4 animate-float"
                  priority
                />
              </div>

              {/* Model badge */}
              <div className="absolute bottom-8 left-8 glass-card px-3 py-2 rounded-lg">
                <div className="text-[var(--gold)] text-xs font-medium font-heading tracking-widest uppercase">Featured System</div>
                <div className="text-[var(--foreground)] text-sm font-semibold font-heading">HN-MS-002</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#product-lines"
        aria-label="Scroll to product lines"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--steel)] hover:text-[var(--gold)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
      >
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  )
}
