# De'Von Achane — 2025 rankings infographic

A code-driven recreation of the supplied 1536 × 1024 infographic. **The original infographic isn't embedded as a background.** All headings, descriptions, rankings, labels, panels, and decorative effects are HTML/CSS/SVG.

## Open

Open `index.html` or `standalone.html` in a modern browser. `standalone.html` has all assets embedded in one file. Everything is local; no network or build step is needed. The artboard scales to fit a smaller window and retains the 3:2 design.

## Edit

- Stat abbreviations, descriptions, and ranking numbers: `const stats` near the end of `index.html`.
- Ranking text gradients: `.rank-1` (gold), `.rank-2` (silver), `.rank-3` (rose gold), and `.rank-4, .rank-5` (bronze). These are CSS `background-clip: text` gradients, not colors baked into images.
- All eight stat icons: change the `icon` values in `stats` to a name available in the `paths` object.
- Player name/title, subtitle, footer copy: editable HTML above `const stats`.
- Colors and layout: CSS near the top of `index.html`; common brand colors are declared in `:root`.
- Images: `assets/achane-cutout.png` and `assets/dolphins-logo.png`.
- Icons: professional **Material Design Icons** (Pictogrammers v7.4.47), converted to standalone inline SVG paths in the editable `paths` map. These are embedded vectors, so no network connection, icon font, or CDN is needed.

## Assets

- `achane-cutout.png` is a transparency-masked conversion of the **player photo the user uploaded**.
- `dolphins-logo.png` was isolated from the **reference infographic the user uploaded**.
- `grain.png` is generated visual texture.

`make_assets.py` recreates the PNG assets from the two original JPEG files included in `sources/`; the generated PNGs are already included. `build_standalone.py` regenerates a single-file HTML deliverable. Any logo/trademark rights remain with their owners.
