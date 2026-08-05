# Deposition Card Alignment Design

## Goal

Make the four homepage deposition-technology cards read as one intentional grid despite different copy and product-tag counts.

## Approved approach

- On desktop (`md` and above), stretch both cards in each grid row to the height of the taller card.
- Make each card a full-height vertical flex container.
- Let the feature list consume the remaining vertical space so the model tags align at the card bottom.
- On mobile, preserve natural content height and the existing single-column flow.
- Do not shorten technical copy, change card order, or change responsive breakpoints.

## Verification

- Add a source-level regression test for the grid stretch, full-height card, and bottom-aligned model-tag behavior.
- Run the full Node test suite, TypeScript check, and production build.
- Verify the deployed desktop and mobile layouts in a real browser.
