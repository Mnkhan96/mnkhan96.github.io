# Muhammad Naeem Khan — academic website

Static multi-page chemistry research profile hosted with GitHub Pages. No build step is required.

## Pages
- Home: `index.html`
- Profile and education: `about.html`
- Research overview: `research.html`
- Publication index: `publications.html`
- Seven individual research stories: `publications/*.html`
- Teaching, collaborations and service: `experience.html`
- Chemical academic lineage: `genealogy.html`
- Contact: `contact.html`

## Editing
All pages are plain HTML. Shared appearance and interactions are in `styles.css` and `script.js`. Keep the shared header and footer synchronized when adding pages, and add the new URL to `sitemap.xml`. Internal relative paths on research-story pages use `../`.

Chemistry illustrations are original SVG files in `assets/`. The naphthyl-chalcone illustration is a representative structure. Other diagrams are explicitly conceptual; none should be interpreted as experimental spectra, charge-density maps or device performance.

Publication narratives draw on the supplied CV and published articles. Contribution descriptions are specific where documented. The 2022 review includes a link to its publisher correction. The chemical genealogy preserves the supplied sequence, updates Gilbert Stork's lifespan from Columbia's memorial, and identifies the current PhD as ongoing.

Portrait and conference photographs have not been added: LinkedIn blocked image retrieval. Use original photos supplied by the site owner rather than a scraped thumbnail. Add optimized images to `assets/`, with descriptive alt text and explicit dimensions.

## Local preview
Run `python -m http.server 8000` from this directory, then open `http://localhost:8000`.

## Publishing
The GitHub Pages source is the main branch. Merge a reviewed pull request to publish changes. The site uses static HTML and retains `.nojekyll`.
