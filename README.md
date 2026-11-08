# Tripwire docs

The public guides live in `docs/`. Their source is the [Tripwire repository](https://github.com/Boring-Software-Inc/v2).

Use Node.js 22.19 or later. Run these commands from the repository root.

```sh
bun install --frozen-lockfile
npm run dev
```

Open http://localhost:4321. Run `npm run validate` to check the docs. Stop the dev server before running `npm run build` to generate the static site in `dist/`, or run `npm run build -- --isolated` to check the build while the server is running.

Screenshots in `public/screenshots/` come from the Tripwire app with demo data.
