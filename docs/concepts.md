---
title: Concepts
description: The terms Tripwire uses to describe what it checks and what happens next.
---

When a pull request opens, Tripwire can run a set of checks, take an action, and record the result. The same terms apply in the dashboard, the CLI, and the agent tools.

| Term | Meaning |
| --- | --- |
| Forge | The service that hosts the repository, such as GitHub. |
| Rule | A condition Tripwire evaluates, such as whether a pull request changes at most 100 files. |
| Gate | Logic that combines check results. An **All of** gate passes when every connected check passes. |
| Repository gate | The repository setting that turns Tripwire checks on or off. |
| Trigger | The event or schedule that starts a workflow. |
| Workflow | A composition of rules that starts on a trigger and uses gates and actions to decide what happens next. |
| Action | What Tripwire does after a step, such as adding a label or blocking a pull request. |
| Run | The record of what Tripwire evaluated and did for one event. Find it in **Activity**. |
| Verdict | The outcome recorded for the run. |
| Human review | The queue for pull requests waiting on a maintainer’s decision. |

## Signals

A **signal** is a value a rule can check. Tripwire gets signals from the forge’s event data and API, and calculates some from that data. For example, GitHub provides the changed-file count for a pull request. Tripwire calculates account age from the account’s creation date.

A rule compares a signal with a condition. In “files changed is at most 100,” the signal is the file count, the comparison is “at most,” and the limit is 100.

## Check results

| Result | Meaning |
| --- | --- |
| Pass | The condition was met. |
| Fail | Tripwire evaluated the condition and found that it did not pass. |
| Skipped | The check produced neither a pass nor a fail, for example because the forge did not provide the evidence. |

A rule produces a check result. The workflow uses that result to choose what happens next. [See how workflow branches work](/workflows#gate-logic).
