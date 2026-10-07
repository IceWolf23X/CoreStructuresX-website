# CoreStructuresX website setup

## Requirements

- An installed Node.js runtime capable of running the repository's `.mjs` tools.
- This website checkout.
- For a local config refresh, a trusted CoreStructuresX plugin checkout at `../plugin` or another explicit path.

No package installation is required for the current toolchain.

## Prepare local content

Run from the website root:

```powershell
node tools/sync-plugin-configs.mjs ../plugin .
node tools/build-config-bundle.mjs .
node tools/build-docs-bundle.mjs .
```

The first command accepts the plugin checkout path followed by the website path. The two build commands compile the exact local snapshots and article fragments into browser bundles.

## Preview

Serve this directory over HTTP and open `index.html`. Verify at minimum:

- the hero uses `assets/img/corestructuresx-logo.png` without cropping;
- every wiki article opens from the sidebar and search;
- all five Paper configuration pages display a snapshot;
- only CoreStructuresX Paper categories and product copy appear;
- each legacy page preserves its old section bookmark through the redirect map;
- the Modrinth download link resolves to `https://modrinth.com/plugin/corestructuresx`.

## Hero image and future gallery

The supplied `assets/img/corestructuresx-logo.png` is the only current hero image. `site-config.js` keeps `objectFit: 'contain'` so the complete logo remains visible without cropping. To add real screenshots later, append public image descriptors to `assets.heroPreview.images`; two or more valid images activate the existing gallery controls. Keep descriptive `alt` text and use project-owned optimized images under `assets/img/`.

## Private repository synchronization

The source repository is `IceWolf23X/CoreStructuresX-plugin` at ref `main`. Browser code never receives a repository token. The manual workflow may use the `COREX_PLUGIN_READ_TOKEN` secret with read-only Contents access; without it, synchronization must skip gracefully and keep the checked-in snapshots.

Never place credentials in:

- `site-config.js`;
- workflow arguments or URLs;
- generated browser bundles;
- synchronized YAML;
- logs, screenshots or documentation examples.

## Content edits

Edit landing copy in `assets/js/data/landing-content.js`. Add or reorder articles in `assets/js/data/docs-content.js`; each article body must live at `assets/content/docs/<article-id>.html`. Article ids allow lowercase letters, digits, hyphens and path separators. Configuration ids may preserve YAML filenames and underscores.

After an article edit, rebuild the documentation bundle. After an allowlisted plugin default changes, rerun all three preparation commands.
