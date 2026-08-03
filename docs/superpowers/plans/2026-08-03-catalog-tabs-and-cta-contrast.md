# Catalog Tabs and CTA Contrast Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace oversized catalog search/filter controls with product-line tabs and make the shared dark CTA readable.

**Architecture:** Keep filtering local to `ProductCatalog` with a single category state derived from `defaultLine`. Apply explicit foreground classes at the dark CTA component boundary so light-theme CSS variables cannot leak into it.

**Tech Stack:** Next.js 16, React, TypeScript, Tailwind CSS, Node test runner.

## Global Constraints

- Preserve English-only launch behavior and existing locale-ready data access.
- Do not alter Supabase records or inquiry behavior.
- Meet WCAG AA contrast expectations.

---

### Task 1: Product-line tabs

**Files:**
- Modify: `components/products/product-catalog.tsx`
- Test: `tests/light-motion-theme.test.mjs`

- [ ] Add a failing source regression test for removed search/filter controls and three visible product-line labels.
- [ ] Run `node --test tests/light-motion-theme.test.mjs` and confirm the new assertion fails.
- [ ] Replace multi-field filter state with one category state and three accessible buttons.
- [ ] Run the test and confirm it passes.

### Task 2: Footer CTA contrast

**Files:**
- Modify: `components/layout/site-footer.tsx`
- Test: `tests/light-motion-theme.test.mjs`

- [ ] Add a failing test requiring explicit white heading and readable light supporting text inside the CTA band.
- [ ] Run the test and confirm the new assertion fails.
- [ ] Apply explicit light foreground classes at the CTA band.
- [ ] Run all tests, `pnpm exec tsc --noEmit`, and `pnpm build`.
- [ ] Deploy to Production and verify the catalog and CTA online.
