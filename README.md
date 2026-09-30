# Lab 3 — Bootstrap versions

Open `index.html` to access all five pages adapted from https://github.com/safeeullahk/fullstacklab2.

- `Task1.html`: timetable with responsive horizontal scrolling and original merged cells.
- `facebook.html`: responsive feed, search, likes, temporary posts (press Enter), and demo notifications.
- `abyssal.html`: responsive ocean mission dashboard with the original sample telemetry and SVG chart.
- `ieee-paper-template.html`: responsive paper sections and Print / Save as PDF button.
- `Portfolio/index.html`: portfolio content, circular developer interface with scan toggle, and working project filters.

All new pages use only Bootstrap classes for CSS styling. There are no custom stylesheets, style blocks, inline styles, or JavaScript style assignments. `assets/bootstrap/` contains the unmodified Bootstrap 5.3.8 distribution CSS and JavaScript, extracted from the provided local archive, so no CDN is needed. Bootstrap's license notice is included in the distributed files.

Custom JavaScript in `assets/facebook.js` and `assets/portfolio.js` handles interactions using Bootstrap classes. Feed data stays in memory and resets on reload. Dashboard values are sample data. Original layouts are preserved as closely as stock Bootstrap permits: the dashboard keeps the sonar beside stacked telemetry/progress panels; the feed keeps its three-column layout; and the portfolio retains circular interface elements and bordered panels. Exact custom colors, gradients, dimensions, and animations are approximated with built-in Bootstrap utilities. The paper uses a responsive two-column layout with top-to-bottom reading order rather than exact IEEE print typography.

The pre-existing `lab3_activity.html` is unchanged.
