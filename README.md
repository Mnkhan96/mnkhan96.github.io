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

## Molecule Studio (October 2026)
The new `molecule-studio.html` page offers on-demand 3Dmol.js visualization and opt-in MolDraw iframe. L01–L10 are from the author's published pyrazoline–thiazole study, DOI 10.1016/j.jphotochem.2026.117426. Molecular geometries were converted from author-uploaded MOL2 files and stored as an SDF bundle at `assets/molecules/3d/published-pyrazoline-thiazoles.json`. RDKit was used to validate all molecular representations, including L02 with the author's corrected bond order. The exact geometry calculation level remains unverified. These data are not experimentally derived crystal structures; no HOMO/LUMO or unpublished research files are published. External MolDraw is loaded only after visitor interaction. Do not upload confidential structures to any third-party editor without reviewing its policy.

## Published molecular families awaiting original coordinates
The Molecule Studio now showcases publication-linked 2D research references for naphthyl chalcones (14–18), 2-aminoimidazolones (10–18), quinoxaline carboxamides (LUMS2401–LUMS2409), and published organoselenium chemistry. THESE ARE NOT 3D MODELS. Their optimized Cartesian coordinates were not retrievable/verified from the public publisher resources in this session. Do not replace with unverified molecular identities or generated conformers masquerading as reported optimization outputs. The ACS Omega organoselenium SI specifically describes NMR/GC-MS spectra, not Cartesian coordinates. Publish more 3D models only after obtaining original SI/PDF/ZIP geometry tables or code-mapped, author-supplied molecular files.

## Free Smart Research Navigator (October 2026)
The site-wide floating Research Navigator is a **browser-only, non-generative** question-and-navigation assistant. No API keys, database, visitor accounts, message logging, chatbot backend, or third-party LLM is involved. It should never be described as Muhammad Naeem Khan speaking personally or as an AI model. It gives limited curated answers grounded in the public About, Research, Publications, Resources, Experience, Blog, Molecule Studio, and Contact pages; unknown questions fall back to links from the website's existing search index.

- `script.js` bootstraps the widget on *all* pages, including pages under `publications/` and `blog/`, using the root directory derived from its own script URL.
- `site-search.js` publishes the same static index as `window.MNK_SITE_INDEX` for use in both full-page search and the navigator.
- `research-navigator.js` injects the UI, ready-made guide responses and source links, guided question buttons, and search-index fallback; no user messages are sent to a server or retained in storage.
- `research-navigator.css` supplies responsive styling matching navy/teal brand colors.
- Maintain the curated answers when material facts change, and update the search index when adding public content.
- No unverified achievements, unpublished research, or implied real-time or direct personal messaging.

### Research Navigator answer-quality revision (October 18, 2026)
Fixed first-match keyword routing that incorrectly answered comparative questions such as “What is my best research and best molecule and why?” with unrelated general links. Scientific ranking/compare requests now route before generic search; the guide supplies publication-grounded, within-study findings and refuses a universal ranking across studies without comparable measurements. The original paper story pages are the evidence for pyrazoline–thiazoles, naphthyl chalcones, 2-aminoimidazolones and quinoxaline carboxamides. No paper reports a comparable fabricated solar-cell efficiency. Unknown content still falls back to website search. Cache-bust navigator asset to version `20261018b`. Regression checks cover research rankings, 3D viewer, resources, contact, publication-specific results and short follow-up metrics. This remains a deterministic browser-only guide, not an LLM.
