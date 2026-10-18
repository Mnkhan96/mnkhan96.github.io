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
- Chemistry databases, software and useful resources: `resources.html`

- Personal blog landing page: `blog.html` (currently no published posts)\n- Site-wide searchable directory: `search.html`, powered by `site-search.js`\n\n## Editing
All pages are plain HTML. Shared appearance and interactions are in `styles.css` and `script.js`. Keep the shared header and footer synchronized when adding pages. Update the searchable-page entries in `site-search.js` when publishing new blog posts. The site search indexes curated page titles and descriptions; it does not crawl full page text, and add the new URL to `sitemap.xml`. Internal relative paths on research-story pages use `../`.

Chemistry illustrations are original SVG files in `assets/`. The naphthyl-chalcone illustration is a representative structure. Other diagrams are explicitly conceptual; none should be interpreted as experimental spectra, charge-density maps or device performance.

Publication narratives draw on the supplied CV and published articles. Contribution descriptions are specific where documented. The 2022 review includes a link to its publisher correction. The chemical genealogy preserves the supplied sequence, updates Gilbert Stork's lifespan from Columbia's memorial, and identifies the current PhD as ongoing.

The site uses the researcher’s supplied laboratory portrait and personal logo, four matched graphical abstracts, and original static scientific SVGs. Image and structure provenance is in `assets/visual-provenance.json`. The existing MN. navigation mark is retained. Visual audit and preview images are in `review/visual-audit.md`.

## Local preview
Run `python -m http.server 8000` from this directory, then open `http://localhost:8000`.

## Publishing
The GitHub Pages source is the main branch. Merge a reviewed pull request to publish changes. The site uses static HTML and retains `.nojekyll`.

## Research-at-a-glance homepage art
The homepage now uses `assets/research-at-a-glance-2026.svg` (an optimized WebP illustration embedded within an SVG container), and the Resources page links to publishers and research projects instead of third-party software repackaging sites. Software license and regional access terms must be respected.

## Research News & Updates
The homepage has a small, manually curated `#research-news` section linking to two verified public posts from the researcher's LinkedIn profile (pyrazoline–thiazole publication announcement, 2026; naphthyl-chalcone publication announcement, 2025). To update it, edit the two `<article class="news-card">` entries in `index.html`, keeping the year, summary and post URL aligned with a verified public LinkedIn post. This is **not** an automatic LinkedIn feed; LinkedIn posts do not sync automatically. Shared styles are in `styles.css` under `Curated research news cards`.

## Blog community forms
The Blog community panel and the "A Boy from Bannu" article comments form use [FormSubmit](https://formsubmit.co/) as a free, third-party email delivery endpoint. Visitors need no account. Messages, stories and ideas are sent privately to `22130026@lums.edu.pk`; there is **no live/public comment database**, and submissions are not published automatically. To activate this service, the website owner must send a test submission using the live form and confirm the activation email sent to the receiving mailbox. Check spam folders if needed. FormSubmit's default captcha and a honeypot are enabled; avoid removing them. The forms return to `community-thanks.html` after accepted submission. If replacing the mailbox, update the `action` attribute on all three forms and reconfirm the new address. Only publish approved submissions manually, never post submitters' email addresses, and seek explicit permission before publishing full stories. Tally or Giscus could replace the service later, but they require separate setup; Giscus commenters need GitHub accounts.

## Life in the Lab & Conferences
Added editorial `field-notes.html` with factual reflections and genuine visitor-provided conference photographs (ACS Spring Atlanta, RSC–E-MRS–ACS Qatar, RWU, AIOU, RSC CIRCLe). CIRCLe grant leads are Shahzad Ameen and Irfan Ullah; Muhammad Naeem Khan's documented role is collaborator. Avoid implying endorsements or collaborations with photographed presenters. Original photos and a non-synthetic Qatar photo montage are under `assets/highlights/`.
