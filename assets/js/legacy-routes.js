/* Preserve legacy page bookmarks while the wiki owns the maintained documentation. */
(function (root) {
  'use strict';
  const routes = {
    'features.html': {
      route: '#/docs/overview/capabilities',
      anchors: {
        capabilities: '#/docs/overview/capabilities~capabilities',
        limits: '#/docs/overview/safety-model~projected-limits'
      }
    },
    'installation.html': {
      route: '#/docs/instructions/quick-install-patterns',
      anchors: {
        setup: '#/docs/instructions/quick-install-patterns~paper-server',
        layout: '#/docs/instructions/layout-overview',
        authoring: '#/docs/guides/pack-authoring'
      }
    },
    'pack-authoring.html': {
      route: '#/docs/guides/pack-authoring',
      anchors: {
        model: '#/docs/guides/pack-authoring~model',
        plan: '#/docs/guides/pack-authoring~plan',
        layout: '#/docs/guides/pack-authoring~layout',
        schematics: '#/docs/guides/pack-authoring~schematics',
        markers: '#/docs/guides/pack-authoring~markers',
        'pack-yml': '#/docs/guides/pack-authoring~pack-yml',
        'structure-yml': '#/docs/guides/pack-authoring~structure-yml',
        'groups-yml': '#/docs/guides/pack-authoring~groups-yml',
        'commands-yml': '#/docs/guides/pack-authoring~commands-yml',
        safety: '#/docs/guides/pack-authoring~safety',
        validate: '#/docs/guides/pack-authoring~validate',
        diagnose: '#/docs/guides/pack-authoring~diagnose',
        checklist: '#/docs/guides/pack-authoring~checklist'
      }
    },
    'configuration.html': {
      route: '#/docs/paper/config-yml',
      anchors: {
        global: '#/docs/paper/config-yml~current-default',
        markers: '#/docs/instructions/marker-signs',
        packs: '#/docs/paper/example-pack-yml',
        commands: '#/docs/reference/command-reference',
        permissions: '#/docs/reference/permission-reference',
        runtime: '#/docs/runtime/instance-persistence'
      }
    },
    'docs.html': { route: '#/docs/instructions', anchors: null },
    'faq.html': { route: '#/docs/guides/troubleshooting', anchors: null }
  };

  /** Resolve one legacy page and fragment to a fixed local wiki route. */
  function target(page, hash) {
    const entry = routes[page];
    if (!entry) return 'index.html#/docs/instructions';
    let anchor = '';
    try { anchor = decodeURIComponent(String(hash || '').replace(/^#/, '')); } catch (_) { /* Invalid fragments select the page root. */ }
    const route = entry.anchors ? (entry.anchors[anchor] || entry.route) : entry.route + (anchor ? '~' + encodeURIComponent(anchor) : '');
    return 'index.html' + route;
  }

  if (typeof module === 'object' && module.exports) module.exports = { target, routes };
  else if (root.document) root.location.replace(target(root.document.body.dataset.legacyPage, root.location.hash));
}(typeof window !== 'undefined' ? window : globalThis));
