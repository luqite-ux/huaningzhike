# Front-View Product Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace three angled or top-view product thumbnails with verified customer-supplied front views.

**Architecture:** Process each approved source non-destructively, upload versioned WebP assets to tenant-scoped R2 keys, then update static fallback consumers and Supabase product records. Existing oblique images remain gallery image 2.

**Tech Stack:** Next.js 16, TypeScript, Supabase, Cloudflare R2, built-in imagegen, WebP.

## Global Constraints

- Never invent or alter equipment components, geometry, interfaces, branding, or control panels.
- Use exact tenant ID `c0542148-cfbe-4c44-b7f2-7b36465032a2` for all database and R2 operations.
- Preserve existing translations and unrelated product records.

---

### Task 1: Prepare and approve front-view assets

**Files:**
- Create: `public/images/products/front-view-update-2026-08/<slug>/01.webp`

- [ ] Inspect all three selected sources at full visual fidelity.
- [ ] Use imagegen only to remove background watermarks and dirt.
- [ ] Reject candidates with equipment changes.
- [ ] Export approved assets to optimized WebP.

### Task 2: Update image consumers

**Files:**
- Modify: `lib/products.ts`
- Modify: `components/home/home-sections.tsx`
- Modify: `lib/solutions.ts`
- Test: `tests/light-motion-theme.test.mjs`

- [ ] Add a failing regression test for the three versioned front-view URLs.
- [ ] Update product primary images and retain oblique gallery image 2.
- [ ] Update homepage and solution-card references.
- [ ] Run the focused regression test and confirm it passes.

### Task 3: Publish and verify

**Files:**
- Tenant-scoped R2 objects and Supabase product rows only.

- [ ] Upload three approved WebP assets to R2.
- [ ] Update the three tenant-scoped product rows without replacing translations.
- [ ] Run all tests, TypeScript, and the production build.
- [ ] Commit, push, confirm Vercel Production is READY, and verify desktop/mobile pages.
