---
title: CLI
description: Pull, validate, and push Tripwire workflows from a repository checkout.
sidebar:
  order: 5
---

Use Node.js 20.12 or later to run the CLI. For TypeScript workflows, use Node.js 24 and set `"type": "module"` in the nearest `package.json` above your workflow files. Install the SDK in that project. [TypeScript SDK guide](/typescript-sdk).

```sh
npm install -g @tripwire-sh/cli
tripwire login
npm install @tripwire-sh/sdk
```

## Edit a workflow

From your project directory, replace `my-repo` with your repository name. Pull writes one file per workflow to `.tripwire/workflows/` and saves the repository link to `.tripwire/project.json`.

```sh
tripwire workflows pull --repo my-repo
```

Edit a file and use its filename without `.ts` to select it. The commands below use `contribution-review.ts` as the example.

```sh
tripwire workflows validate contribution-review
tripwire workflows diff contribution-review
tripwire workflows push contribution-review
```

Open the review link to inspect and accept the push. A new workflow starts disabled. Open it in the dashboard when you are ready to turn it on.

## Keep local edits

Pull stops if a selected file has local edits. Run `tripwire workflows diff contribution-review` to compare it with the server. If you want to replace the local file, pull it again with `--force`. Removing a local file does not delete the server workflow.

[CLI package](https://www.npmjs.com/package/@tripwire-sh/cli)
