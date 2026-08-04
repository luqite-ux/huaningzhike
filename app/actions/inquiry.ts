'use server'

import { createSupabaseClient, tenantId } from '@/lib/supabase'

export type InquiryType =
  | 'General Inquiry'
  | 'Request a Quote'
  | 'Discuss Your Process'
  | 'Send Your Samples'
  | 'Product-Specific Inquiry'
  | 'Technical Support'

export interface InquiryFormState {
  success: boolean
  error: string | null
  fieldErrors?: Record<string, string>
}

export interface InquiryPayload {
  name: string
  email: string
  phone: string
  company: string
  country: string
  inquiryType: InquiryType | string
  productModel?: string
  application?: string
  workpieceMaterial?: string
  desiredCoating?: string
  expectedCapacity?: string
  message: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function submitInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  // Extract and trim all fields
  const name             = (formData.get('name')             as string | null)?.trim() ?? ''
  const email            = (formData.get('email')            as string | null)?.trim() ?? ''
  const phone            = (formData.get('phone')            as string | null)?.trim() ?? ''
  const company          = (formData.get('company')          as string | null)?.trim() ?? ''
  const country          = (formData.get('country')          as string | null)?.trim() ?? ''
  const inquiryType      = (formData.get('inquiryType')      as string | null)?.trim() ?? ''
  const productModel     = (formData.get('productModel')     as string | null)?.trim() ?? ''
  const application      = (formData.get('application')      as string | null)?.trim() ?? ''
  const workpieceMaterial= (formData.get('workpieceMaterial')as string | null)?.trim() ?? ''
  const desiredCoating   = (formData.get('desiredCoating')   as string | null)?.trim() ?? ''
  const expectedCapacity = (formData.get('expectedCapacity') as string | null)?.trim() ?? ''
  const message          = (formData.get('message')          as string | null)?.trim() ?? ''

  // Field-level validation
  const fieldErrors: Record<string, string> = {}
  if (!name)          fieldErrors.name    = 'Name is required.'
  if (!email)         fieldErrors.email   = 'Business email is required.'
  if (email && !validateEmail(email)) fieldErrors.email = 'Please enter a valid email address.'
  if (!company)       fieldErrors.company = 'Company name is required.'
  if (!country)       fieldErrors.country = 'Country / Region is required.'
  if (!inquiryType)   fieldErrors.inquiryType = 'Please select an inquiry type.'
  if (!message)       fieldErrors.message = 'Message is required.'

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, error: 'Please correct the highlighted fields.', fieldErrors }
  }

  const payload: InquiryPayload = {
    name, email, phone, company, country, inquiryType,
    productModel, application, workpieceMaterial, desiredCoating,
    expectedCapacity, message,
  }

  // ─── TODO: Insert into Supabase ──────────────────────────────────────────
  // import { createClient } from '@/lib/supabase/server'
  // const supabase = await createClient()
  // const { error: dbError } = await supabase.from('inquiries').insert([{
  //   ...payload,
  //   created_at: new Date().toISOString(),
  // }])
  // if (dbError) {
  //   console.error('[inquiry] DB error:', dbError.message)
  //   return { success: false, error: 'We could not record your inquiry. Please email us directly.' }
  // }
  // ─────────────────────────────────────────────────────────────────────────

  const supabase = createSupabaseClient()
  if (!supabase) return { success: false, error: 'Online submission is not configured. Please email info@huaningpvd.com.' }
  const details = [payload.message, payload.country && `Country / Region: ${payload.country}`, payload.application && `Application: ${payload.application}`, payload.workpieceMaterial && `Workpiece material: ${payload.workpieceMaterial}`, payload.desiredCoating && `Desired coating: ${payload.desiredCoating}`, payload.expectedCapacity && `Expected capacity: ${payload.expectedCapacity}`].filter(Boolean).join('\n\n')
  const { error: dbError } = await supabase.from('inquiries').insert({ tenant_id: tenantId, name: payload.name, email: payload.email, phone: payload.phone, company: payload.company, subject: [payload.inquiryType, payload.productModel].filter(Boolean).join(' — '), message: details })
  if (dbError) {
    console.error('[inquiry] insert failed:', dbError.message)
    return { success: false, error: 'We could not record your inquiry. Please email us directly.' }
  }
  return { success: true, error: null }
}
