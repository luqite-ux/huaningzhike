import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { withPageSocial } from '@/lib/site'

export const metadata: Metadata = withPageSocial({
  title: 'Privacy Policy',
  alternates: { canonical: '/privacy' },
  description:
    'Privacy policy for the HUANING ZHIKE website — how we collect, use, and protect information submitted through our inquiry forms.',
  robots: { index: true, follow: true },
}, '/privacy')

const LAST_UPDATED = '2025-01-01'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Page header ── */}
      <div className="relative overflow-hidden pt-28 pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030B16] via-[#070F1F] to-[#050E1A]" aria-hidden="true" />
        <div className="absolute inset-0 tech-grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[rgba(200,168,75,0.2)] to-transparent" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[var(--foreground)] mt-4 mb-4 text-balance">
            Privacy <span className="gold-gradient-text">Policy</span>
          </h1>
          <p className="text-[var(--steel-light)] text-base leading-relaxed">
            Last updated: <time dateTime={LAST_UPDATED}>{new Date(LAST_UPDATED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 pb-24">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12 xl:gap-16 items-start">

          {/* ── Sticky TOC ── */}
          <aside className="hidden lg:block sticky top-28">
            <nav aria-label="Privacy policy sections">
              <p className="text-[var(--steel)] text-xs uppercase tracking-widest mb-3">On This Page</p>
              <ul className="space-y-1 text-sm">
                {[
                  ['#data-controller', 'Data Controller'],
                  ['#information-collected', 'Information Collected'],
                  ['#how-we-use', 'How We Use Information'],
                  ['#data-sharing', 'Data Sharing'],
                  ['#data-retention', 'Data Retention'],
                  ['#your-rights', 'Your Rights'],
                  ['#cookies', 'Cookies'],
                  ['#security', 'Security'],
                  ['#changes', 'Changes to This Policy'],
                  ['#contact-us', 'Contact'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors py-1 leading-snug focus-visible:outline-2 focus-visible:outline-[var(--gold)] rounded"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* ── Policy body ── */}
          <article className="prose-policy space-y-10 max-w-3xl">

            <section>
              <p className="text-[var(--steel-light)] text-sm leading-relaxed">
                This privacy policy describes how Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd. (&ldquo;HUANING ZHIKE&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and protects information submitted through the HUANING ZHIKE website (<a href="https://www.huaningzhike.com" className="text-[var(--gold)] hover:underline">www.huaningzhike.com</a>). This website is a lead-generation and information resource for prospective business customers. We do not sell products or accept payment online.
              </p>
            </section>

            <PolicySection id="data-controller" title="1. Data Controller">
              <p>
                The data controller for personal information collected through this website is:
              </p>
              <address className="not-italic glass-card rounded-lg p-5 border border-[rgba(200,168,75,0.12)] mt-4 space-y-1.5">
                <p className="text-[var(--foreground)] font-medium">Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd.</p>
                <p>No. 16 Xiken Road, Building 1, Room 102, Xingqiao Subdistrict, Linping District, Hangzhou, China</p>
                <a href="mailto:huaning@huaningzhike.cn" className="text-[var(--gold)] hover:underline block">huaning@huaningzhike.cn</a>
                <a href="tel:+8613157107579" className="text-[var(--steel-light)] hover:text-[var(--gold)] transition-colors block">+86 131 5710 7579</a>
              </address>
            </PolicySection>

            <PolicySection id="information-collected" title="2. Information Collected">
              <p>We collect information that you voluntarily provide when you submit an inquiry form on this website. This may include:</p>
              <PolicyList items={[
                'Full name',
                'Business email address',
                'Phone number or WhatsApp contact',
                'Company or organization name',
                'Country or region',
                'Inquiry type and content',
                'Product or model of interest',
                'Application area',
                'Workpiece material',
                'Desired coating',
                'Expected production capacity',
                'Any additional information you include in the message field',
              ]} />
              <p>
                We do not collect payment card data, government identification numbers, or any sensitive categories of personal data. We do not require account registration to use this website.
              </p>
            </PolicySection>

            <PolicySection id="how-we-use" title="3. How We Use Information">
              <p>Information submitted through inquiry forms is used exclusively for the following purposes:</p>
              <PolicyList items={[
                'Responding to your inquiry and providing requested product or technical information',
                'Preparing system configuration proposals or quotations',
                'Coordinating sample coating trials when requested',
                'Following up on outstanding inquiries related to your specific request',
                'Improving the responsiveness and content of our website based on aggregate inquiry patterns',
              ]} />
              <p>
                We do not use your contact information for unsolicited marketing communications unrelated to your inquiry.
              </p>
            </PolicySection>

            <PolicySection id="data-sharing" title="4. Data Sharing">
              <p>
                We do not sell, rent, or trade personal information. We do not share personal information with third parties except in the following limited circumstances:
              </p>
              <PolicyList items={[
                'Service providers who operate systems necessary to receive and manage inquiry submissions (such as database or cloud hosting providers), who are required to process information only as directed by us',
                'When required by applicable law, court order, or regulatory authority',
                'In connection with a merger, acquisition, or transfer of business assets, provided the successor party is bound by equivalent privacy obligations',
              ]} />
            </PolicySection>

            <PolicySection id="data-retention" title="5. Data Retention">
              <p>
                We retain inquiry data for the period necessary to respond to your inquiry and to maintain business records of customer interactions. If a business relationship develops from an inquiry, associated records are retained as required for that relationship and applicable legal obligations. Inquiry records that do not result in an ongoing business relationship are reviewed periodically and deleted when no longer needed. You may request deletion of your data at any time by contacting us at the address in Section 1.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" title="6. Your Rights">
              <p>
                Depending on your country or region, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data, and to receive a copy of information we hold about you. To exercise any of these rights, contact us at <a href="mailto:huaning@huaningzhike.cn" className="text-[var(--gold)] hover:underline">huaning@huaningzhike.cn</a>. We will respond to verifiable requests within a reasonable timeframe.
              </p>
            </PolicySection>

            <PolicySection id="cookies" title="7. Cookies and Analytics">
              <p>
                This website may use basic analytics to understand aggregate traffic patterns (such as page views, geographic region, and referral source). We do not deploy advertising networks, third-party tracking pixels, or cross-site tracking technologies. If analytics are enabled, no personally identifiable data is sent to analytics platforms. We do not use persistent tracking cookies for advertising purposes.
              </p>
            </PolicySection>

            <PolicySection id="security" title="8. Security">
              <p>
                We take reasonable technical and organizational measures to protect submitted information against unauthorized access, disclosure, or loss. These include encrypted data transmission (HTTPS), access controls on internal systems, and limiting data access to personnel who need it to handle your inquiry. No method of electronic transmission or storage is completely secure; we cannot provide an absolute assurance of security, but we take this responsibility seriously.
              </p>
            </PolicySection>

            <PolicySection id="changes" title="9. Changes to This Policy">
              <p>
                We may update this privacy policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page will reflect the date of the most recent revision. Continued use of this website after a policy update constitutes acceptance of the revised policy. If we make material changes, we will update this page accordingly.
              </p>
            </PolicySection>

            <PolicySection id="contact-us" title="10. Contact">
              <p>
                Questions or requests regarding this privacy policy or the handling of your personal information should be directed to:
              </p>
              <address className="not-italic glass-card rounded-lg p-5 border border-[rgba(200,168,75,0.12)] mt-4 space-y-2">
                <p className="text-[var(--foreground)] font-medium">HUANING ZHIKE — Privacy Enquiry</p>
                <a href="mailto:huaning@huaningzhike.cn" className="text-[var(--gold)] hover:underline block text-sm">huaning@huaningzhike.cn</a>
                <p className="text-[var(--steel-light)] text-sm">
                  No. 16 Xiken Road, Building 1, Room 102, Xingqiao Subdistrict, Linping District, Hangzhou, China
                </p>
              </address>
              <p className="mt-6">
                You may also use the <Link href="/contact" className="text-[var(--gold)] hover:underline">Contact page</Link> to submit any privacy-related request.
              </p>
            </PolicySection>

          </article>
        </div>
      </div>
    </div>
  )
}

/* ── Prose helpers ────────────────────────────────────────────────────────── */
function PolicySection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <h2
        id={`${id}-heading`}
        className="font-heading text-xl font-semibold text-[var(--foreground)] mb-4 pb-2 border-b border-[rgba(200,168,75,0.12)]"
      >
        {title}
      </h2>
      <div className="space-y-4 text-[var(--steel-light)] text-sm leading-relaxed">
        {children}
      </div>
    </section>
  )
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-4">
      {items.map((item) => (
        <li key={item} className="relative pl-4">
          <span
            className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-70"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>
  )
}
