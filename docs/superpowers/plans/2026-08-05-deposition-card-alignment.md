# Deposition Card Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the four deposition-technology cards into consistent desktop rows while preserving natural mobile height.

**Architecture:** Keep the existing data and component structure. Use CSS grid stretching plus a full-height flex card; assign remaining vertical space to the feature list so model tags share a bottom baseline.

**Tech Stack:** Next.js 16, React, Tailwind CSS, Node test runner.

## Global Constraints

- Do not change technical copy, card order, or breakpoints.
- Desktop cards in each row must be equal height.
- Mobile cards must retain natural content height.
- Model tags must align at the card bottom.

---

### Task 1: Align deposition cards

**Files:**
- Modify: `tests/light-motion-theme.test.mjs`
- Modify: `components/home/home-sections.tsx`

**Interfaces:**
- Consumes: existing `DepositionTechnologyMatrix` JSX and `RevealSection` wrapper.
- Produces: equal-height desktop rows and bottom-aligned product-model tags.

- [ ] **Step 1: Write the failing regression test**

Add a test that asserts the technology grid stretches its children, each card uses `md:h-full` with a vertical flex layout, and the properties list uses `md:flex-1` before the model tags.

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node --test tests/light-motion-theme.test.mjs`

Expected: FAIL because the current card and list do not carry the alignment classes.

- [ ] **Step 3: Implement the minimal layout change**

Update the grid and card classes without modifying the content:

```tsx
<div className="grid md:grid-cols-2 md:items-stretch gap-5">
  <RevealSection key={tech.abbrev} className="md:h-full">
    <div className="... md:h-full md:flex md:flex-col">
      ...
      <ul className="space-y-1.5 mb-5 md:flex-1">
```

- [ ] **Step 4: Run focused and full verification**

Run:

```powershell
node --test tests/light-motion-theme.test.mjs
node --test tests/*.test.mjs
pnpm exec tsc --noEmit
pnpm build
```

Expected: all commands exit successfully.

- [ ] **Step 5: Deploy and visually verify**

Push only the intended files to `main`, wait for Production, then inspect the homepage at desktop and mobile widths. Confirm row equality, tag alignment, and no mobile overflow.
