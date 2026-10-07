# CoreStructuresX Website

Static product site and documentation wiki for CoreStructuresX 2026.1.1.

Public site: <https://icewolf23x.github.io/CoreStructuresX-website/>

Primary download: <https://modrinth.com/plugin/corestructuresx>

## Scope

The site documents a Paper-only modular structure runtime:

- Java 21+
- Paper 1.21.11+
- WorldEdit or FastAsyncWorldEdit
- manual structure starts
- YAML pack definitions
- data-version-5 JSON instance state

Product copy and article prose are maintained outside the page shells. Binary schematics, plugin JARs and private repository credentials are not bundled into the documentation source.

## Main files

- `assets/js/data/site-config.js` — public product identity, links, theme, logo and optional website release source.
- `assets/js/data/landing-content.js` — landing-page copy and section data.
- `assets/js/data/docs-content.js` — article catalog, navigation, config mounts and body paths.
- `assets/content/docs/` — independently editable article HTML fragments.
- `tools/config-sync-map.mjs` — five-file allowlist for plugin default synchronization.
- `assets/js/legacy-routes.js` — old page/fragment compatibility map.
- `index.html` and `reference.html` — shared application shells.

## Refresh configuration and documentation bundles

From this repository root, with the sibling plugin checkout available at `../plugin`:

```powershell
node tools/sync-plugin-configs.mjs ../plugin .
node tools/build-config-bundle.mjs .
node tools/build-docs-bundle.mjs .
```

The sync copies only these LF-normalized logical text sources:

- `src/main/resources/config.yml`
- `src/main/resources/bundled-packs/csx_test_pack/pack.yml`
- `src/main/resources/bundled-packs/csx_test_pack/structure.yml`
- `src/main/resources/bundled-packs/csx_test_pack/groups.yml`
- `src/main/resources/bundled-packs/csx_test_pack/commands.yml`

It does not copy `.schem` files or other binary resources. See [CONFIG_SYNC.md](docs/CONFIG_SYNC.md) for the credential and provenance boundary.

## Local preview

Serve the repository root with a static HTTP server, then open `index.html`. The site also supports its bundled offline documentation/config snapshots when opened from a static host without plugin repository access.

## Legacy URLs

`features.html`, `installation.html`, `pack-authoring.html`, `configuration.html`, `docs.html` and `faq.html` remain as redirect entrypoints. Their historical section fragments map to maintained wiki articles.

## Verification

Use the project-provided Node tests and bundle checks after changing source content. Generated files are outputs; edit the data catalog, article fragments or synchronized snapshots instead.
