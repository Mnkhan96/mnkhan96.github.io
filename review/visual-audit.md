# Chemistry visual refinement — audit and review

This is an incremental update to the existing website at commit ff78d312da3178aa6226571a2e641bba50e799d5.

## Audit findings and changes

| Area | Existing presentation | Targeted refinement |
| --- | --- | --- |
| Homepage hero | One representative scaffold | Three molecular platforms in an original, static SVG composition |
| Homepage research cards | Text and numbers | Molecular structure, optical/electrochemical instruments, and calculation-workflow illustrations |
| Featured papers | Text-only cards | Matched author-supplied graphical abstracts |
| Research page | Broad conceptual graphics | Matching published research artwork, plus clearly labeled application context |
| Publication index | Searchable/filterable text list | Four matched thumbnails, preserving titles, authors, journals, DOI links, filters and search |
| Research stories | General conceptual illustrations | Full author-supplied graphical abstracts on the four matching stories, with full-size links |
| About | Biography and academic facts | Supplied laboratory portrait and personal logo; original content retained |
| Branding and navigation | MN. mark, DM Sans/DM Serif, navy/teal | Retained |
| Other pages | Experience, contact, genealogy | Content and URLs retained |

## Reference-site observations

- [MacMillan Group](https://macmillan.princeton.edu/): featured research is paired with publication artwork rather than relying only on headings.
- [Heeney Group](https://heeneygroup.com/): organic-materials identity is expressed clearly through research and article presentation.
- [Perepichka Group](https://group.perepichka.com/): molecular synthesis, optical/electronic properties and applications form a coherent research narrative.
- [OMEGA Lab](https://omegalab.kaust.edu.sa/): application categories connect materials research with energy technologies.

No reference-site branding, artwork, code or layouts were copied.

## Molecular structure provenance

The three structures are exported using SmilesDrawer, a peer-reviewed SMILES renderer, then composed as static SVG artwork. No renderer is loaded by the live website.

- Naphthyl chalcone: representative dimethylamino-substituted 1-naphthyl structure matched to the supplied graphical abstract.
- 2-Aminoimidazolone: the published general scaffold; asterisks explicitly identify variable groups. This is not asserted to be a specific derivative.
- Bithiophene–indanedione: the exact BT-02 SMILES supplied by the researcher.

See [machine-readable provenance](../assets/visual-provenance.json) for the input structures and renderer reference.

Actual spectra and orbital surfaces appear only inside the author-supplied abstracts. No experimental curves, energy values, orbital surfaces or device-performance results were generated. The added photovoltaic layer drawing is explicitly conceptual.

## Supplied image mapping

| Supplied file | Use |
| --- | --- |
| Picture3.png | Personal logo beside the About portrait; MN. navigation mark retained |
| IMG_6397.jpg | About portrait and a small homepage identity image |
| image(20261016-115049).png | Pyrazoline–thiazole paper |
| image(20261016-115108).png | 2-Aminoimidazolone paper |
| image(20261016-115243).png | Naphthyl-chalcone paper |
| image(20261016-115321).png | Quinoxaline-carboxamide paper |
| image(20261016-115327).png | Not assigned: publication identity needs confirmation |

Photographs and abstracts are proportionally resized and WebP encoded. Abstracts retain the full figure; plots, labels, surfaces and structures are not redrawn.

## Validation

- All 14 existing page URLs are retained.
- HTML structure, unique IDs, internal links, fragments and image references pass.
- SVG XML passes.
- Publication titles, author strings, journal details and DOI links are checked against the baseline.
- Existing SEO heads, navigation, typography definitions and script.js are preserved.
- Desktop (1440 px) and mobile (390 px) browser checks pass without horizontal overflow or JavaScript errors.
- Year filters, combined search, empty results, reset, mobile navigation and Escape behavior pass in a real browser.
- Homepage, research, publications and About screenshots are reviewed.

## Visual previews

- [Homepage](homepage-preview.webp)
- [Research](research-preview.webp)
- [Publications](publications-preview.webp)
- [About](about-preview.webp)
- [Mobile homepage](mobile-preview.webp)

## Optional follow-up material

Confirm which paper image(20261016-115327).png belongs to before placing it. A ChemDraw/CDXML/MOL/SDF or exact SMILES for a specific 2-aminoimidazolone (or thiophene-chalcone) derivative would let the general middle scaffold be replaced with that exact molecule.

This branch is for review and must not be merged until the site owner approves the visual update.
