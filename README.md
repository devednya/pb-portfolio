# Art and Cheers

Art workshops and community for adults—create, connect, and rejuvenate.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Images

- **Logo:** `public/logo.svg`
- **Event images:** `/public/images/events/{event-folder}/` (e.g. `mental-health-workshop`, `sip-and-paint`, `tote-bag-painting`)
- **Hero:** `/public/images/hero/`
- **Gallery:** `/public/images/gallery/`

Placeholder images from Unsplash are used until real assets from [@artandcheers_](https://www.instagram.com/artandcheers_/) are added.

To use your own images:

1. Add images to the folders above
2. Update `src/utils/images.js` to use local paths instead of placeholders

## Tech

- React 18
- React Router 6
- Vite 5
