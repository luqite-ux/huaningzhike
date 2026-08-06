# Customer Product Corrections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the customer's confirmed naming, technical-data, and six-product image corrections across the live HUANING ZHIKE site.

**Architecture:** Keep `lib/products.ts` and `lib/verified-product-specs.ts` as the static source/fallback, mirror their corrected values to the tenant-scoped Supabase rows, and store optimized product assets in tenant-scoped R2 paths. Existing server data access and SEO consumers inherit the corrected database values.

**Tech Stack:** Next.js 16, TypeScript, Supabase, Cloudflare R2, built-in image editing, Node test runner.

## Global constraints

- Tenant operations are restricted to `c0542148-cfbe-4c44-b7f2-7b36465032a2`.
- Use `8 inches`, never `3 inches`.
- Use `≤ 3 × 10⁻⁸ Torr`, never `<`, `Pa`, or another exponent.
- Preserve equipment geometry and official logo spelling during image repair.
- Do not stage unrelated `.gitignore`, `.playwright-cli`, `output`, or `tmp` changes.

---

### Task 1: Add regression coverage

- [ ] Add tests for exact names, technical values, applicable model coverage, and six corrected image mappings.
- [ ] Run the focused test and confirm it fails against current data.

### Task 2: Prepare product images

- [x] Audit all 18 supplied source images; reject watermarked or visually inaccurate variants.
- [ ] Repair only images with watermarks, unclear edges, dirty backgrounds, or obvious artifacts.
- [ ] Produce stable web filenames and optimized variants.
- [ ] Verify the repaired images against their sources.

### Task 3: Correct fallback product data

- [ ] Remove `Pure` from two names and inquiry choices.
- [ ] Add customer-confirmed magnetron and electron-beam capabilities to applicable product advantages and specifications.
- [ ] Write the exact `HN-MS-EB-R-010` UHV value.
- [ ] Point six products at the corrected R2 image sets.
- [ ] Run focused tests and confirm they pass.

### Task 4: Synchronize R2 and Supabase

- [ ] Upload all 18 supplied assets (three views per corrected product) under tenant- and product-scoped keys, with background-only watermark cleanup where required.
- [ ] Update only the tenanted six product image rows and applicable product content rows.
- [ ] Preserve existing non-English translations unless the corresponding translated field must be corrected.
- [ ] Read the tenant rows back and verify exact values.

### Task 5: Verify and deploy

- [ ] Run full tests, TypeScript, and production build.
- [ ] Commit only intended customer-site files and push `main`.
- [ ] Wait for Production and inspect modified locations on desktop and mobile.
- [ ] Report each page/position and exact change to the user.
