---
title: TypeScript SDK
description: Define a Tripwire workflow in TypeScript.
sidebar:
  order: 6
---

Use Node.js 24 and set `"type": "module"` in `package.json`. Install `@tripwire-sh/sdk` in that project.

```sh
npm install @tripwire-sh/sdk
```

## Check account age

Create `.tripwire/workflows/contribution-review.ts`. This workflow blocks a pull request opened by a contributor whose account is less than 30 days old.

```ts
import {
  accountAge,
  block,
  changeRequest,
  workflow,
} from "@tripwire-sh/sdk/workflows";

export default workflow({
  when: changeRequest.opened,
  require: accountAge({ minDays: 30 }),
  else: block(),
});
```

The filename supplies the workflow slug. Use that slug to validate the file locally.

```sh
tripwire workflows validate contribution-review
```

The SDK compiles workflow definitions locally. Use the [CLI](/cli) to compare the compiled workflow with your repository and send changes for review.

[SDK package](https://www.npmjs.com/package/@tripwire-sh/sdk)
