# hcde_drg

Housing affordability and displacement in the Bay Area — exploratory data and two contrasting visualizations.

## View the visualizations in a browser (GitHub)

GitHub’s file viewer shows **source code** only. It does **not** run Cursor `.canvas.tsx` files or render HTML as a live page.

To see the charts online, turn on **GitHub Pages** for this repository:

1. On GitHub: **Settings → Pages** (under “Code and automation”).
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **`main`** and folder **`/docs`**, then **Save**.
4. After a minute or two, the site will be at:

   **`https://rmchaud.github.io/hcde_drg/`**

From there, open:

| Page | Description |
|------|-------------|
| [index.html](docs/index.html) (site root) | Links to both live visualizations |
| [mainstream-housing-charts.html](docs/mainstream-housing-charts.html) | County lines, renter vs owner, income bars (browser version of the canvas) |
| [counterstory.html](docs/counterstory.html) | Counter-visualization: schematic map, slider, callouts |

**Note:** `output/bay-area-housing-vital-signs.canvas.tsx` is only for the **Cursor** canvas preview. The duplicate under `docs/` is not required for Pages; the mainstream charts are implemented as standalone `docs/mainstream-housing-charts.html`.

## Repo layout

- `data/raw/` — CSV / Excel sources  
- `output/` — Canvas source, counterstory HTML, framing notes (Markdown)  
- `docs/` — **Static site for GitHub Pages** (what you open in the browser after enabling Pages)

## Local preview

Open any HTML file in `docs/` or `output/` with your browser (double-click or drag into a window), or use a local static server, for example:

```bash
cd docs && python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.
