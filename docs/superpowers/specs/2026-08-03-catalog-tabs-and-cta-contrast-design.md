# Catalog Tabs and CTA Contrast Design

## Goal

Simplify the ten-product catalog and restore readable contrast in the shared footer CTA.

## Approved Design

- Remove the search field, Filters button, expanded process/application panel, and Clear Filters actions.
- Retain one compact three-option control: `All Systems`, `Industrial`, and `Laboratory`.
- Preserve the existing `?line=industrial` and `?line=lab` entry behavior.
- Filter cards immediately in the browser and retain the visible result count.
- On the dark footer CTA band, explicitly use white for the heading and a high-contrast light blue-gray for supporting text.
- Do not change product records, routes, inquiry behavior, or page structure outside these controls.

## Verification

- Regression tests confirm the removed controls are absent and all three category labels exist.
- Regression tests confirm the dark CTA declares light foreground colors.
- TypeScript and the production build must pass.
- Production HTML and a browser screenshot must be checked after deployment.
