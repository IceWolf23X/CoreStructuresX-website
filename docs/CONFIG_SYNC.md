# Configuration synchronization

The website displays five allowlisted YAML defaults from `IceWolf23X/CoreStructuresX-plugin` ref `main`:

- `src/main/resources/config.yml`
- `src/main/resources/bundled-packs/csx_test_pack/pack.yml`
- `src/main/resources/bundled-packs/csx_test_pack/structure.yml`
- `src/main/resources/bundled-packs/csx_test_pack/groups.yml`
- `src/main/resources/bundled-packs/csx_test_pack/commands.yml`

No other path is part of the website synchronization contract. In particular, exclude schematics, JARs, archives, build output and plugin descriptors.

## Local refresh

```powershell
node tools/sync-plugin-configs.mjs ../plugin .
node tools/build-config-bundle.mjs .
node tools/build-docs-bundle.mjs .
```

Snapshots are compared as logical LF-normalized text. The sync state records repository, ref and source commit. The generated config bundle adds a SHA-256 for each normalized snapshot.

## Credential boundary

Private repository access belongs only in the manual automation step that prepares a trusted plugin checkout. Use the `COREX_PLUGIN_READ_TOKEN` secret with read-only Contents access. Do not expose it to browser code or generated website artifacts. If the secret is unavailable, keep the existing snapshots and report a graceful skip.

## Change review

After a refresh, review both YAML changes and the explanatory article. A new key is incomplete until its contract, allowed values, defaults, safety implications and reload/restart boundary are documented.
