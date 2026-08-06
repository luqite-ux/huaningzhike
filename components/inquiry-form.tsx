'use client'

import { useActionState, useEffect } from 'react'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { submitInquiry, type InquiryFormState, type InquiryType } from '@/app/actions/inquiry'

const INQUIRY_TYPES: InquiryType[] = [
  'General Inquiry',
  'Request a Quote',
  'Discuss Your Process',
  'Send Your Samples',
  'Product-Specific Inquiry',
  'Technical Support',
]

const APPLICATIONS = [
  'Hard Decorative Coatings',
  'Wear-resistant & DLC Coatings',
  'Optical Thin Films',
  'Semiconductor Thin Films',
  'Tool & Die Coatings',
  'Research & Development',
  'Other / Not listed',
]

const PRODUCT_MODELS = [
  'HN-MA-001 — Multi-arc Ion Plating Equipment',
  'HN-MS-002 — Magnetron Sputtering Equipment',
  'HN-MA-MS-003 — Multi-arc & Magnetron Sputtering Composite',
  'HN-EB-004 — Electron Beam Evaporation Equipment',
  'HN-MS-EB-005 — Magnetron & Electron Beam Composite',
  'HN-MA-R-006 — Small Multi-arc Ion Plating R&D Equipment',
  'HN-MS-R-007 — Small Magnetron Sputtering R&D Equipment',
  'HN-MA-MS-R-008 — Lab Multi-arc & Magnetron Sputtering Platform',
  'HN-EB-R-009 — Small Electron Beam Evaporation R&D Equipment',
  'HN-MS-EB-R-010 — Magnetron & Electron Beam Research Platform',
  'Not sure / Need advice',
]

const initialState: InquiryFormState = { success: false, error: null }

interface InquiryFormProps {
  defaultInquiryType?: InquiryType | string
  defaultProductModel?: string
  className?: string
  compact?: boolean
}

export function InquiryForm({
  defaultInquiryType = 'General Inquiry',
  defaultProductModel = '',
  className = '',
  compact = false,
}: InquiryFormProps) {
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState)

  // Scroll success message into view
  useEffect(() => {
    if (state.success) {
      document.getElementById('inquiry-success')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [state.success])

  const err = (field: string) => state.fieldErrors?.[field]

  if (state.success) {
    return (
      <div
        id="inquiry-success"
        role="alert"
        className={`glass-card rounded-xl p-8 md:p-12 text-center ${className}`}
      >
        <CheckCircle size={48} className="text-[var(--success)] mx-auto mb-4" />
        <h3 className="font-heading text-2xl text-[var(--foreground)] mb-3">Inquiry Received</h3>
        <p className="text-[var(--steel-light)] leading-relaxed max-w-md mx-auto">
          Thank you for contacting HUANING ZHIKE. A member of our engineering team will review your inquiry and follow up using the contact details provided.
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      aria-label="Inquiry form"
      className={`space-y-5 ${className}`}
    >
      {/* Top-level error banner */}
      {state.error && !state.success && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-lg bg-[rgba(220,38,38,0.1)] border border-[rgba(220,38,38,0.3)] text-sm text-[var(--foreground)]"
        >
          <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
          {state.error}
        </div>
      )}

      {/* Row 1: Name + Email */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Full Name <span className="text-[var(--gold)]" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={isPending}
            aria-required="true"
            aria-invalid={!!err('name')}
            aria-describedby={err('name') ? 'name-error' : undefined}
            placeholder="Your full name"
            className={`form-input ${err('name') ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {err('name') && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-red-400">{err('name')}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Business Email <span className="text-[var(--gold)]" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={isPending}
            aria-required="true"
            aria-invalid={!!err('email')}
            aria-describedby={err('email') ? 'email-error' : undefined}
            placeholder="you@company.com"
            className={`form-input ${err('email') ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {err('email') && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-red-400">{err('email')}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone + Company */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={isPending}
            placeholder="+1 555 000 0000"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Company <span className="text-[var(--gold)]" aria-hidden="true">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            disabled={isPending}
            aria-required="true"
            aria-invalid={!!err('company')}
            aria-describedby={err('company') ? 'company-error' : undefined}
            placeholder="Your organization"
            className={`form-input ${err('company') ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {err('company') && (
            <p id="company-error" role="alert" className="mt-1 text-xs text-red-400">{err('company')}</p>
          )}
        </div>
      </div>

      {/* Row 3: Country + Inquiry Type */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="country" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Country / Region <span className="text-[var(--gold)]" aria-hidden="true">*</span>
          </label>
          <input
            id="country"
            name="country"
            type="text"
            required
            autoComplete="country-name"
            disabled={isPending}
            aria-required="true"
            aria-invalid={!!err('country')}
            aria-describedby={err('country') ? 'country-error' : undefined}
            placeholder="e.g. Germany, South Korea"
            className={`form-input ${err('country') ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {err('country') && (
            <p id="country-error" role="alert" className="mt-1 text-xs text-red-400">{err('country')}</p>
          )}
        </div>
        <div>
          <label htmlFor="inquiryType" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Inquiry Type <span className="text-[var(--gold)]" aria-hidden="true">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            disabled={isPending}
            defaultValue={defaultInquiryType}
            aria-required="true"
            aria-invalid={!!err('inquiryType')}
            className={`form-input appearance-none ${err('inquiryType') ? 'border-red-500' : ''}`}
          >
            <option value="">Select inquiry type</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {err('inquiryType') && (
            <p id="inquiryType-error" role="alert" className="mt-1 text-xs text-red-400">{err('inquiryType')}</p>
          )}
        </div>
      </div>

      {/* Product model */}
      <div>
        <label htmlFor="productModel" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
          Product / Model of Interest
        </label>
        <select
          id="productModel"
          name="productModel"
          disabled={isPending}
          defaultValue={defaultProductModel}
          className="form-input appearance-none"
        >
          <option value="">Select a product (optional)</option>
          {PRODUCT_MODELS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Application + Workpiece Material */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="application" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Application
          </label>
          <select
            id="application"
            name="application"
            disabled={isPending}
            className="form-input appearance-none"
          >
            <option value="">Select application (optional)</option>
            {APPLICATIONS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="workpieceMaterial" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Workpiece Material
          </label>
          <input
            id="workpieceMaterial"
            name="workpieceMaterial"
            type="text"
            disabled={isPending}
            placeholder="e.g. HSS, cemented carbide, glass"
            className="form-input"
          />
        </div>
      </div>

      {/* Desired Coating + Expected Capacity */}
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="desiredCoating" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Desired Coating
          </label>
          <input
            id="desiredCoating"
            name="desiredCoating"
            type="text"
            disabled={isPending}
            placeholder="e.g. TiAlN, DLC, SiO₂/TiO₂ AR stack"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="expectedCapacity" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
            Expected Production Capacity
          </label>
          <input
            id="expectedCapacity"
            name="expectedCapacity"
            type="text"
            disabled={isPending}
            placeholder="e.g. 500 pieces / day, research scale"
            className="form-input"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[var(--steel-light)] uppercase tracking-wide mb-1.5">
          Message <span className="text-[var(--gold)]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 4 : 5}
          disabled={isPending}
          aria-required="true"
          aria-invalid={!!err('message')}
          aria-describedby={err('message') ? 'message-error' : undefined}
          placeholder="Describe your process requirements, substrate geometry, production volumes, or any questions for our engineering team..."
          className={`form-input resize-none ${err('message') ? 'border-red-500 focus:border-red-500' : ''}`}
        />
        {err('message') && (
          <p id="message-error" role="alert" className="mt-1 text-xs text-red-400">{err('message')}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        aria-disabled={isPending}
        className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 rounded text-sm disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[var(--gold-light)]"
      >
        {isPending ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            <span>Submitting inquiry…</span>
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>

      <p className="text-center text-xs text-[var(--steel)]">
        Fields marked <span className="text-[var(--gold)]">*</span> are required. We do not share your information with third parties.
      </p>
    </form>
  )
}
