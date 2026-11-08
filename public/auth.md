# Set up Tripwire for this repository

Use this guide when a developer shares its URL with an agent in a repository checkout.

## Identify the repository

Use the Git remote to identify the GitHub owner and repository. Confirm the intended repository with the developer if the checkout has multiple plausible remotes. Match the exact owner and repository against Tripwire before changing anything. Pass the confirmed Tripwire org to each repo command if the account can access multiple orgs.

## Connect to Tripwire

Use the agent’s existing Tripwire MCP connection if available. Call `whoami` to check the signed-in account and available organizations. If the client needs authorization, give the developer its browser link and wait for approval. After approval, call `whoami` again before moving to repository setup. If the request expires, start a new authorization and discard the old link.

If the client does not have Tripwire configured, the installer is `npx @tripwire-sh/cli install`. Use the sign-in instructions it prints for the client. If the agent can run shell commands but cannot use MCP, use the CLI for the rest of setup. Run `npx @tripwire-sh/cli login --no-browser`, give the developer the printed link, and wait for sign-in. Use `npx @tripwire-sh/cli whoami` to verify the CLI session. The MCP client and the CLI each manage their own credentials.

## Connect the repository

Use `setup_status` and `list_repos` through MCP, or `tripwire status` and `tripwire repos` through the CLI. Use `npx @tripwire-sh/cli` in place of `tripwire` if the CLI is not installed globally. If Tripwire returns a GitHub App installation link, hand it to the developer. Wait for them to approve access and confirm the installation on Tripwire. Check setup status every 10 to 15 seconds until the repository appears or the attempt times out. If an existing installation omits the repository, ask the developer to add it in GitHub and verify the exact repository again. If access is denied, pending, or tied to the wrong account, report that state before continuing.

## Propose rules and turn on the gate

Inspect the installed rules and the rule catalog with `get_repo_rules` and `list_rule_catalog`, or `tripwire rules list <repo>` and `tripwire rules list --catalog`. Propose a short starting set for the verified repository and explain what each rule would do. Ask the developer before saving rules or turning on the repository gate. After approval, use `set_rule` or `tripwire rules set` for the agreed rules, and `turn_on_gate` or `tripwire gate on <repo>` for activation. Preserve existing rules unless the developer approves changing them. If setup resumes after an interruption, check the saved state before retrying a change.

Report the repository, the rules saved, and whether the gate is on. Share its Tripwire URL when available. As contributions arrive, their runs appear in Activity.

## Preview verification

For staging verification, use the `tripwire-staging` MCP connection or `npx @tripwire-sh/cli@staging` in place of the production client. Verify that the browser approval opens on `staging.tripwire.sh`. Use only the test repository named by the developer.
