# Customer Product Corrections Design

## Scope

Implement the customer's August correction package across product copy, technical specifications, images, Supabase, R2, SEO consumers, and responsive presentation.

## Confirmed copy corrections

- `HN-MA-001`: remove `Pure` from the English product name.
- `HN-MS-002`: remove `Pure` from the English product name.
- All products containing magnetron sputtering (`HN-MS-002`, `HN-MA-MS-003`, `HN-MS-EB-005`, `HN-MS-R-007`, `HN-MA-MS-R-008`, `HN-MS-EB-R-010`) must state:
  - substrate-temperature range from ambient to `1200 °C`;
  - in-situ annealing;
  - integrated in-situ ion cleaning;
  - compatibility with wafers up to 8 inches and small research samples or coupons.
- All products containing electron-beam evaporation (`HN-EB-004`, `HN-MS-EB-005`, `HN-EB-R-009`, `HN-MS-EB-R-010`) must state ion-beam-assisted deposition capability.
- `HN-MS-EB-R-010` vacuum specification must read exactly: `Ultra-high-vacuum system with independent zoned pumping; ultimate pressure ≤ 3 × 10⁻⁸ Torr.`

## Image corrections

- Audit all 18 supplied source images and publish all three corresponding views for each of the six products. Use the clearest front or representative view first, with the remaining views in the product-detail gallery; clean background-only watermarks without altering equipment geometry.
- Main images prioritize complete, clear, near-front views without watermarks.
- Images with watermarks, unclear edges, dirty backgrounds, or obvious generation artifacts are repaired before publication; equipment geometry and official branding must remain unchanged.
- Upload customer-specific assets to R2 and update both Supabase and fallback mappings.

## Verification

- Regression tests guard exact product names, `8 inches`, `1200 °C`, `≤ 3 × 10⁻⁸ Torr`, `Torr`, in-situ cleaning/annealing, and ion-beam assistance.
- R2 assets, database values, desktop/mobile rendering, metadata, and prohibited warranty terms are verified before deployment is reported complete.
