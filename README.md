# Tripwire docs

The public guides live in `docs/` within this project. They draw on the [Tripwire repository](https://github.com/Boring-Software-Inc/v2), the [CLI README](https://github.com/Boring-Software-Inc/v2/blob/staging/apps/cli/README.md), and the [workflow authoring notes](https://github.com/Boring-Software-Inc/v2/blob/staging/docs/research/workflow-authoring-sdk-cli.md).

Use Node.js 22.19 or later. Run these commands from the repository root.

```sh
bun install --frozen-lockfile
npm run dev
```

Open http://localhost:4321. Run `npm run validate` to check the docs. Stop the dev server before running `npm run build` to generate the static site in `dist/`, or run `npm run build -- --isolated` to check the build while the server is running.
