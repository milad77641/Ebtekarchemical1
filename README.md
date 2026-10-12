# Ebtekar Shimi website

A responsive Persian/English static company website for Ebtekar Shimi, an importer and distributor of edible oils and acids. Built with plain HTML, CSS, and JavaScript for easy publishing on GitHub Pages.

## Preview locally

Open `index.html` in a modern browser. The Persian/English switch, mobile navigation, and inquiry-form preview work without a build step.

## Publish with GitHub Pages

1. Sign in to GitHub and create a **public** repository named `ebtekarshimi-website`.
2. Upload `index.html`, `styles.css`, `script.js`, and this README to the repository root. Keep filenames unchanged.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the deployment to finish. GitHub will show the published URL in the Pages section.

## Before launch

- Replace sample/placeholder product-category copy with the official product catalog, grades, packaging, and specifications.
- Confirm the company's official phone, email, address, and business hours before adding them.
- In `script.js`, set `COMPANY_EMAIL` to the official inquiry inbox to enable the email draft link. This uses the visitor's email application; it is not a server-backed form.
- Add the approved logo, legal company name, privacy notice, and any verified certificates or quality claims.
- If you need form submissions stored online, connect a form provider or backend. GitHub Pages alone serves static files and does not process form submissions.

## Notes

The site uses Google Fonts when available and falls back to system fonts. The product cards describe broad categories, not a verified item-by-item inventory. No unconfirmed certification or quality claim is presented as a fact.
