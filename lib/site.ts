import type { Metadata } from 'next'

export const SITE_NAME = 'HUANING ZHIKE'
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://huaningpvd.com').replace(/\/$/, '')
export const COMPANY_NAME =
  'Huaning Intelligent Technology (Hangzhou) Intelligent Equipment Manufacturing Co., Ltd.'
export const DEFAULT_OG_IMAGE = '/images/logo-transparent.png'

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = absoluteUrl(path)
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} PVD vacuum coating equipment` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export function withPageSocial(metadata: Metadata, path: string): Metadata {
  const title = typeof metadata.title === 'string' ? metadata.title : SITE_NAME
  const description = metadata.description ?? ''
  const url = absoluteUrl(path)
  return {
    ...metadata,
    alternates: { canonical: url },
    openGraph: {
      type: 'website', url, siteName: SITE_NAME, title: `${title} | ${SITE_NAME}`,
      description, images: [{ url: DEFAULT_OG_IMAGE, alt: `${SITE_NAME} PVD vacuum coating equipment` }],
    },
    twitter: {
      card: 'summary_large_image', title: `${title} | ${SITE_NAME}`,
      description, images: [DEFAULT_OG_IMAGE],
    },
  }
}
