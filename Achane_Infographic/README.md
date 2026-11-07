# De'Von Achane — 2025 rankings infographic

## Edit

- Page structure, player name/title, subtitle, and footer copy: `index.html`.
- Colors, layout, and ranking text gradients: `styles.css`; common brand colors are declared in `:root`. `.rank-1` is gold, `.rank-2` is silver, `.rank-3` is rose gold, and `.rank-4, .rank-5` are bronze. These are CSS `background-clip: text` gradients, not colors baked into images.
- Stat abbreviations, descriptions, ranking numbers, and icon filenames: `const stats` in `script.js`.
- Artboard scaling and stat-row rendering: `script.js`, loaded with `defer` after the HTML is parsed.
- Images: `assets/achane-cutout.png` and `assets/dolphins-logo.png`.
- Icons: local SVG files in `assets/Sports_Icons_SVG/`, used in numbered order from top to bottom. No icon font or CDN is needed.

| Row | Stat | SVG file |
| --- | --- | --- |
| 1 | YPC | `01_Cleat.svg` |
| 2 | MTF/A | `02_Tackle.svg` |
| 3 | YCO/A | `03_Strength.svg` |
| 4 | EXPLSV% | `04_Speed.svg` |
| 5 | RYOE | `05_Statistics.svg` |
| 6 | TGT | `06_Accuracy.svg` |
| 7 | TS% | `07_Analytics.svg` |
| 8 | recYDS | `08_Receptions.svg` |

Open `index.html` in a browser to view the infographic. Keep `styles.css`, `script.js`, and the `assets/` directory alongside it so local references resolve.

## Assets

- `achane-cutout.png` is a transparency-masked conversion of the **player photo the user uploaded**.
- `dolphins-logo.png` was isolated from the **reference infographic the user uploaded**.
- `grain.png` is generated visual texture.

Any logo/trademark rights remain with their owners.
