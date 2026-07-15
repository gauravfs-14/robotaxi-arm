# Robotaxi Discourse Atlas

Deployment-ready Next.js companion for the paper *Mining Robotaxi Discussions on BlueSky*. It uses a compact, derived JSON dataset and the paper's selected association-rule network; no personal post-level data is shipped.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify and deploy

```bash
npm run lint
npm run build
npm start
```

Deploy on Vercel by selecting this folder as the project root. Other Node hosts can run `npm run build` followed by `npm start`.

## Data provenance

- `data/summary.json` is derived from the theme-coded CSV and association-rule workbooks in the parent research folder.
- `public/association-network.png` is a required copy of the paper's generated network figure.
- 2026 is partial through June; theme counts overlap; association rules do not imply causality.
