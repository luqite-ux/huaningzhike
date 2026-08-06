# Front-View Product Images Design

## Scope

Replace the list, homepage, and detail-page primary images for HN-MA-MS-003, HN-MA-R-006, and HN-MS-R-007 with customer-supplied front views.

## Source Selection

- HN-MA-MS-003: `工业量产3.0多弧+磁控复合/3.png`.
- HN-MA-R-006: `实验室1.0多弧离子镀膜机/白底2.png`.
- HN-MS-R-007: `实验室-磁控溅射/2.png`.

## Image Treatment

- Preserve equipment geometry, components, control panels, cables, materials, shadows, and HUANING ZHIKE branding.
- Remove only watermarks, isolated dirt, and uneven white-background artifacts.
- Reject any AI result that changes the equipment or invents details.
- Export approved images as optimized WebP files and store them in product-scoped R2 paths.

## Integration

- Use the new front view as image 1 for the three product records.
- Retain an accurate oblique view as image 2 on detail pages.
- Update static fallback data, homepage product-line cards, solution cards, and tenant-scoped Supabase rows.

## Verification

- Confirm R2 images return HTTP 200.
- Confirm product list, homepage, and three detail pages render the front views without broken images.
- Verify desktop and mobile layouts and check browser console errors.
