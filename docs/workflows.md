---
title: Workflows
description: Choose when Tripwire checks a contribution and what it does with the result.
sidebar:
  order: 2
---

A workflow starts with a trigger, such as an opened pull request. Rules check the contribution. Gates combine the results, and actions decide what happens next.

For example, a workflow can check that the contributor's account is at least 30 days old when a pull request opens. If the account is younger, the workflow can block the pull request or send it to human review.

## Edit a workflow

Open **Workflows** in your repository and select a workflow to edit its trigger, checks, and actions. Save the workflow before turning it on.

![The workflow canvas connects a change request trigger to an account age check and a Block action on failure.](/screenshots/workflow-editor.png)

To edit the same workflow in a repository checkout, [pull it with the CLI](/cli). A CLI push normally opens a review before Tripwire saves the changes. Newly pushed workflows start disabled.

## Inspect a run

Open **Activity** to find a run for the event. The run shows the outcome and the checks that contributed to it. If a workflow pauses for a maintainer decision, open [Human review](/human-review).
