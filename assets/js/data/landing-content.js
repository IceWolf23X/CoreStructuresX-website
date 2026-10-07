/* Public landing-page copy. Product prose is intentionally independent of the HTML shell. */
window.COREX_LANDING = {
  order: ['hero', 'compatibility', 'features', 'setup', 'bridges', 'docsPromo', 'faq', 'finalCta'],

  header: {
    nav: [
      { label: 'Features', href: '#/features', nav: 'features' },
      { label: 'Setup', href: '#/setup', nav: 'setup' },
      { label: 'Documentation', href: '#/docs/overview', nav: 'docs', docsLink: true },
      { label: 'FAQ', href: '#/faq', nav: 'faq' },
      { label: 'Releases', href: '#/releases', nav: 'releases' }
    ]
  },

  hero: {
    eyebrow: 'Manual-start modular structures for Paper',
    title: [
      { text: 'Build in modules.' },
      { text: 'Expand with control.', accent: true }
    ],
    description: 'Author WorldEdit or FAWE schematic packs, validate every connection, and let administrators choose exactly when and where each structure begins.',
    actions: [
      { label: 'Get CoreStructuresX', linkKey: 'download', icon: 'arrow', style: 'primary', external: true },
      { label: 'Author a pack', href: '#/docs/guides/pack-authoring', icon: 'book', docsLink: true }
    ],
    platforms: ['Paper 1.21.11+', 'Java 21+', 'WorldEdit or FAWE'],
    preview: {
      assetKey: 'heroPreview',
      ariaLabel: 'CoreStructuresX plugin logo',
      topLeft: 'CORESTRUCTURESX / PAPER',
      placeholderLabel: 'PLUGIN PREVIEW',
      placeholderTitle: 'Your modular build belongs here.',
      placeholderText: 'Use a controlled test world before moving a pack into production.',
      dimensions: 'PACK / MODULE / CONNECTOR',
      captionLeft: 'Validated before placement.',
      captionRight: 'Paper only',
      tag: 'Manual start. Persisted expansion.'
    }
  },

  compatibility: {
    labelLines: ['CURRENT', 'RUNTIME BOUNDARY'],
    items: [
      { label: 'Paper 1.21.11+', icon: 'server' },
      { label: 'Java 21+', icon: 'code' },
      { label: 'WorldEdit 7.4.3 target', icon: 'box' },
      { label: 'FAWE runtime', icon: 'box' },
      { label: 'YAML packs', icon: 'file' },
      { label: 'JSON state', icon: 'database' }
    ]
  },

  features: {
    id: 'features',
    number: '01 /',
    eyebrow: 'The structure runtime',
    title: ['Packs describe choices.', 'Instances preserve state.'],
    description: 'Definitions stay separate from live generated state, so validation, recovery and administration have clear boundaries.',
    cards: [
      {
        icon: 'box',
        title: 'Marker-driven schematics.',
        text: 'ORIGIN, CONNECTOR and COMMAND signs turn reusable schematics into an explicit module graph.',
        link: { label: 'Read the marker contract', href: '#/docs/instructions/marker-signs' }
      },
      {
        icon: 'layers',
        title: 'Weighted paths with safe exits.',
        text: 'Primary candidates, fallback groups and endpoint-only closing groups define how expansion continues and finishes.',
        link: { label: 'Plan a pack graph', href: '#/docs/guides/pack-authoring~plan-the-module-graph' }
      },
      {
        icon: 'shield',
        title: 'Placement checks before paste.',
        text: 'Projected limits, world-wide bounds, block whitelists and bounded lookahead reject unsafe candidates.',
        link: { label: 'Understand placement safety', href: '#/docs/overview/safety-model' }
      },
      {
        icon: 'server',
        title: 'Shared runtime budgets.',
        text: 'Chunked paste jobs share operation, time, active-job and chunk-load limits with TPS/MSPT hysteresis.',
        link: { label: 'Review global limits', href: '#/docs/paper/config-yml' }
      },
      {
        icon: 'database',
        title: 'Durable instance state.',
        text: 'Versioned JSON keeps modules, connectors, triggers, commands, paste phases, checksums and cursors across restarts.',
        link: { label: 'Read the persistence model', href: '#/docs/runtime/instance-persistence' }
      },
      {
        icon: 'terminal',
        title: 'Explicit admin control.',
        text: 'Validate packs, start instances, inspect progress, pause safely and clear a failed footprint only after review.',
        link: { label: 'Open the command reference', href: '#/docs/reference/command-reference' }
      }
    ],
    bottom: {
      strong: 'No terrain-generation hooks.',
      text: 'An administrator always chooses the first placement.',
      link: { label: 'See the current boundaries', href: '#/docs/overview/current-boundaries' }
    }
  },

  setup: {
    id: 'setup',
    number: '02 /',
    eyebrow: 'From JAR to validated instance',
    title: ['Install once.', 'Test every pack deliberately.'],
    tabAriaLabel: 'Choose a setup stage',
    modes: [
      {
        id: 'runtime',
        tabLabel: 'Install runtime',
        tabIcon: 'server',
        title: 'Prepare one Paper server.',
        text: 'CoreStructuresX is a Paper plugin. Install one supported schematic provider beside it, then let first start create the default configuration and bundled example pack.',
        steps: [
          'Stop Paper and install WorldEdit or FastAsyncWorldEdit.',
          'Place CoreStructuresX-2026.1.1.jar in plugins/.',
          'Start once, inspect config.yml, then validate the bundled pack.'
        ],
        link: { label: 'Follow the installation guide', href: '#/docs/instructions/quick-install-patterns' },
        topology: {
          labelLeft: 'RUNTIME / PAPER',
          labelRight: 'ONE PLUGIN INSTANCE',
          nodes: [
            { icon: 'users', label: 'Administrators' },
            { icon: 'server', label: 'Paper', small: 'CoreStructuresX 2026.1.1', primary: true },
            { icon: 'box', label: 'WorldEdit / FAWE' }
          ],
          note: 'Packs and live instance JSON stay in separate folders under plugins/CoreStructuresX/.'
        }
      },
      {
        id: 'pack',
        tabLabel: 'Author a pack',
        tabIcon: 'layers',
        title: 'Prove the smallest complete graph first.',
        text: 'Begin with an entrance, one repeatable path and one endpoint. Add branches, commands and parallel jobs only after the complete small graph passes validation and restart tests.',
        steps: [
          'Create pack.yml, structure.yml, groups.yml and schematics/.',
          'Place ORIGIN, CONNECTOR and optional COMMAND marker signs.',
          'Run /csx validate and test every fallback and closing path.'
        ],
        link: { label: 'Open the pack guide', href: '#/docs/guides/pack-authoring' },
        topology: {
          labelLeft: 'PACK / MODULE GRAPH',
          labelRight: 'VALIDATE FIRST',
          nodes: [
            { icon: 'box', label: 'Entrance' },
            { icon: 'layers', label: 'Paths', small: 'Weighted + fallback', primary: true },
            { icon: 'check', label: 'Endpoint' }
          ],
          note: 'Closing groups must contain endpoint schematics with zero CONNECTOR markers.'
        }
      }
    ]
  },

  bridges: {
    number: '03 /',
    eyebrow: 'Two expansion modes',
    title: ['Continue automatically.', 'Or wait for a nearby player.'],
    description: 'The pack selects one mode, and an administrator can override it for one new instance without editing the pack.',
    disclosure: 'Both modes use the same persisted connector state, placement checks, hard limits and global runtime budgets.',
    cards: [
      {
        icon: 'server', title: 'Automatic',
        text: 'Open connectors advance after the configured delay only while TPS and MSPT remain stable.',
        link: { label: 'Automatic generation', href: '#/docs/overview/capabilities~automatic-generation' }
      },
      {
        icon: 'users', title: 'Player proximity',
        text: 'Only the saved connector or command trigger approached by a player in the same world activates.',
        link: { label: 'Proximity generation', href: '#/docs/overview/capabilities~player-proximity' }
      }
    ]
  },

  docsPromo: {
    eyebrow: 'Everything, documented.',
    title: ['Learn the runtime.', 'Then author against the exact schema.'],
    description: 'The wiki separates product concepts, setup, all five editable YAML sources, operations and recovery.',
    cards: [
      {
        icon: 'layers', title: 'Overview', href: '#/docs/overview',
        text: 'Capabilities, safety boundaries, authoring concepts and persisted state.'
      },
      {
        icon: 'code', title: 'Configuration', href: '#/docs/instructions',
        text: 'Current defaults, four pack schemas, commands, permissions and operator procedures.'
      }
    ]
  },

  faq: {
    id: 'faq',
    number: '04 /',
    eyebrow: 'Before you paste',
    title: 'Questions that protect a world.',
    description: 'Use the exact validation and recovery boundary before production-scale tests.',
    introLink: { label: 'Start with the requirements', href: '#/docs/instructions/before-you-configure' },
    items: [
      {
        question: 'Does CoreStructuresX generate structures with terrain?',
        answer: 'No. It has no biome, chunk, seed or random terrain-generation hook. An administrator starts every instance manually.',
        link: { label: 'Read the boundaries', href: '#/docs/overview/current-boundaries' }
      },
      {
        question: 'Do I need both WorldEdit and FAWE?',
        answer: 'No. Install WorldEdit or FastAsyncWorldEdit. The plugin disables safely when the WorldEdit API and a supported provider are unavailable.',
        link: { label: 'Read installation', href: '#/docs/instructions/quick-install-patterns' }
      },
      {
        question: 'Can I reload while a paste is paused?',
        answer: 'No. Reload is rejected while any job is queued, running, paused or finalizing. Pausing preserves the cursor but does not make configuration replacement safe.',
        link: { label: 'Read reload boundaries', href: '#/docs/instructions/reload-vs-restart' }
      },
      {
        question: 'What does a quarantined footprint mean?',
        answer: 'A failed job may have modified its reserved region. The reservation remains after restart until an administrator inspects or repairs the world and explicitly clears it.',
        link: { label: 'Read recovery guidance', href: '#/docs/runtime/backup-and-recovery' }
      },
      {
        question: 'Is validation a production guarantee?',
        answer: 'No. Validation catches schema, reference, marker and bounded-placement defects. Test every rotation, branch, fallback, endpoint, NBT/entity choice and restart path on the target stack.',
        link: { label: 'Open the production checklist', href: '#/docs/reference/production-checklist' }
      }
    ]
  },

  finalCta: {
    title: ['Validate the graph.', 'Back up the world.'],
    description: 'Start with the bundled example, then prove your own pack in a controlled Paper environment.',
    actions: [
      { label: 'Get CoreStructuresX', linkKey: 'download', icon: 'arrow', style: 'primary', external: true },
      { label: 'Read the setup guide', href: '#/docs/instructions/quick-install-patterns' }
    ]
  },

  footer: {
    caption: 'Validated packs. Controlled expansion.',
    nav: [
      { label: 'Overview', href: '#/docs/overview' },
      { label: 'Configuration', href: '#/docs/instructions' },
      { label: 'Issues', linkKey: 'issues', external: true },
      { label: 'Releases', href: '#/releases' },
      { label: 'Modrinth', linkKey: 'modrinth', external: true }
    ],
    copyright: '© 2026 CoreStructuresX · A CoreX plugin by IceWolf23X.',
    scopeLink: { label: 'Documentation scope', href: '#/docs/reference/documentation-scope' }
  }
};
