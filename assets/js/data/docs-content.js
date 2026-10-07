/* Documentation catalog: metadata and independently maintained article body paths. */
window.COREX_DOCS = {
  schemaVersion: 2,
  meta: {
    product: 'CoreStructuresX',
    articleCount: 25,
    editingModel: 'Article HTML is maintained in assets/content/docs/. tools/build-docs-bundle.mjs creates the offline bundle.',
    pluginVersion: '2026.1.1'
  },
  navigation: {
    scope: 'reference/documentation-scope',
    troubleshooting: 'guides/troubleshooting'
  },
  searchSuggestions: [
    'instructions/quick-install-patterns',
    'guides/pack-authoring',
    'paper/config-yml',
    'reference/command-reference',
    'runtime/backup-and-recovery'
  ],
  groups: [
    { id: 'overview', label: 'Feature overview', icon: 'layers' },
    { id: 'getting-started', label: 'Getting started', icon: 'compass' },
    { id: 'guides', label: 'Pack authoring', icon: 'box' },
    { id: 'paper', label: 'Paper configuration', icon: 'server' },
    { id: 'runtime', label: 'Runtime and recovery', icon: 'database' },
    { id: 'reference', label: 'Reference and operations', icon: 'book' }
  ],
  hubs: {
    instructionStarts: [
      'instructions/quick-install-patterns',
      'guides/pack-authoring'
    ],
    overviewCategories: [
      { id: 'start-here', title: 'Start here', articles: ['introduction', 'current-boundaries'] },
      { id: 'generation', title: 'Generation model', articles: ['capabilities', 'authoring-model'] },
      { id: 'safety-state', title: 'Safety and state', articles: ['safety-model', 'runtime-state'] }
    ]
  },
  articles: [
    {
      id: 'overview/introduction', group: 'overview', title: 'Introduction',
      description: 'What CoreStructuresX does and the source-verified scope of version 2026.1.1.', icon: 'box',
      bodyFile: 'assets/content/docs/overview/introduction.html'
    },
    {
      id: 'overview/capabilities', group: 'overview', title: 'Generation capabilities',
      description: 'Markers, modes, groups, commands, transforms and bounded paste jobs.', icon: 'layers',
      bodyFile: 'assets/content/docs/overview/capabilities.html'
    },
    {
      id: 'overview/safety-model', group: 'overview', title: 'Placement safety model',
      description: 'Projected limits, spatial reservations, block checks, lookahead and closing behavior.', icon: 'shield',
      bodyFile: 'assets/content/docs/overview/safety-model.html'
    },
    {
      id: 'overview/authoring-model', group: 'overview', title: 'Pack authoring model',
      description: 'How pack metadata, schematics, groups and commands form one module graph.', icon: 'code',
      bodyFile: 'assets/content/docs/overview/authoring-model.html'
    },
    {
      id: 'overview/runtime-state', group: 'overview', title: 'Runtime state',
      description: 'Instances, modules, connectors, triggers, jobs and terminal states.', icon: 'database',
      bodyFile: 'assets/content/docs/overview/runtime-state.html'
    },
    {
      id: 'overview/current-boundaries', group: 'overview', title: 'Current boundaries',
      description: 'Paper-only runtime, manual starts, provider requirements and unsupported behavior.', icon: 'info',
      bodyFile: 'assets/content/docs/overview/current-boundaries.html'
    },
    {
      id: 'instructions/before-you-configure', group: 'getting-started', title: 'Before you configure',
      description: 'Requirements, backup expectations and source-versus-runtime verification limits.', icon: 'compass',
      bodyFile: 'assets/content/docs/instructions/before-you-configure.html'
    },
    {
      id: 'instructions/layout-overview', group: 'getting-started', title: 'Folder layout',
      description: 'Plugin configuration, pack definitions, schematics and live instance data.', icon: 'file',
      bodyFile: 'assets/content/docs/instructions/layout-overview.html'
    },
    {
      id: 'instructions/quick-install-patterns', group: 'getting-started', title: 'Install and first test',
      description: 'Install the Paper runtime, validate a pack and start a controlled instance.', icon: 'server',
      bodyFile: 'assets/content/docs/instructions/quick-install-patterns.html'
    },
    {
      id: 'instructions/reload-vs-restart', group: 'getting-started', title: 'Reload vs restart',
      description: 'Exactly when reload is accepted, rejected or insufficient.', icon: 'server',
      bodyFile: 'assets/content/docs/instructions/reload-vs-restart.html'
    },
    {
      id: 'instructions/marker-signs', group: 'getting-started', title: 'Marker sign contract',
      description: 'ORIGIN, CONNECTOR and COMMAND line formats and proximity rules.', icon: 'terminal',
      bodyFile: 'assets/content/docs/instructions/marker-signs.html'
    },
    {
      id: 'guides/pack-authoring', group: 'guides', title: 'Complete pack authoring guide',
      description: 'Plan, author, configure and test a modular schematic graph.', icon: 'layers',
      bodyFile: 'assets/content/docs/guides/pack-authoring.html'
    },
    {
      id: 'guides/validation-workflow', group: 'guides', title: 'Validation workflow',
      description: 'Strict schema, marker, path, reference and connector-resolution checks.', icon: 'check',
      bodyFile: 'assets/content/docs/guides/validation-workflow.html'
    },
    {
      id: 'guides/troubleshooting', group: 'guides', title: 'Troubleshooting',
      description: 'Startup, pack loading, blocked connectors, overlap and recovery checks.', icon: 'help',
      bodyFile: 'assets/content/docs/guides/troubleshooting.html'
    },
    {
      id: 'paper/config-yml', group: 'paper', title: 'config.yml',
      description: 'Every global folder, marker, validation, checkpoint, cache and performance key.', icon: 'sliders',
      configFile: { type: 'config-file', id: 'paper/config.yml' },
      bodyFile: 'assets/content/docs/paper/config-yml.html'
    },
    {
      id: 'paper/example-pack-yml', group: 'paper', title: 'Example pack.yml',
      description: 'Pack identity and confined references to the other authoring files.', icon: 'file',
      configFile: { type: 'config-file', id: 'paper/example-pack.yml' },
      bodyFile: 'assets/content/docs/paper/example-pack-yml.html'
    },
    {
      id: 'paper/example-structure-yml', group: 'paper', title: 'Example structure.yml',
      description: 'Start, placement, modes, hard limits, checks and paste settings.', icon: 'file',
      configFile: { type: 'config-file', id: 'paper/example-structure.yml' },
      bodyFile: 'assets/content/docs/paper/example-structure-yml.html'
    },
    {
      id: 'paper/example-groups-yml', group: 'paper', title: 'Example groups.yml',
      description: 'Weighted schematic entries, fallbacks, closing groups and per-entry controls.', icon: 'layers',
      configFile: { type: 'config-file', id: 'paper/example-groups.yml' },
      bodyFile: 'assets/content/docs/paper/example-groups-yml.html'
    },
    {
      id: 'paper/example-commands-yml', group: 'paper', title: 'Example commands.yml',
      description: 'Weighted console command groups, placeholders and at-most-once dispatch.', icon: 'terminal',
      configFile: { type: 'config-file', id: 'paper/example-commands.yml' },
      bodyFile: 'assets/content/docs/paper/example-commands-yml.html'
    },
    {
      id: 'runtime/instance-persistence', group: 'runtime', title: 'Instance persistence',
      description: 'Data version 5, checkpoints, revisions, finalization and restart validation.', icon: 'database',
      bodyFile: 'assets/content/docs/runtime/instance-persistence.html'
    },
    {
      id: 'runtime/backup-and-recovery', group: 'runtime', title: 'Backup and recovery',
      description: 'Rolling backups, migration backups, invalid files and failed-footprint quarantine.', icon: 'shield',
      bodyFile: 'assets/content/docs/runtime/backup-and-recovery.html'
    },
    {
      id: 'reference/command-reference', group: 'reference', title: 'Command reference',
      description: 'Exact command grammar, sender rules and lifecycle effects.', icon: 'terminal',
      bodyFile: 'assets/content/docs/reference/command-reference.html'
    },
    {
      id: 'reference/permission-reference', group: 'reference', title: 'Permission reference',
      description: 'Umbrella and per-command permission nodes with operator defaults.', icon: 'key',
      bodyFile: 'assets/content/docs/reference/permission-reference.html'
    },
    {
      id: 'reference/production-checklist', group: 'reference', title: 'Production validation checklist',
      description: 'Backup-first checks for packs, rotations, NBT, entities, limits and restart recovery.', icon: 'check',
      bodyFile: 'assets/content/docs/reference/production-checklist.html'
    },
    {
      id: 'reference/documentation-scope', group: 'reference', title: 'Documentation scope',
      description: 'Source evidence, compatibility claims, configuration snapshots and update boundaries.', icon: 'book',
      bodyFile: 'assets/content/docs/reference/documentation-scope.html'
    }
  ]
};
