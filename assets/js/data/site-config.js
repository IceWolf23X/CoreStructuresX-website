/* Public CoreStructuresX identity, links, release source, media and theme tokens. */
window.COREX_SITE = {
  schemaVersion: 1,
  brand: {
    family: 'CoreX',
    product: 'CoreStructuresX',
    author: 'IceWolf23X',
    familyLabel: 'A CoreX plugin',
    tagline: 'Validated packs. Controlled expansion.',
    language: 'en',
    logo: 'assets/img/corestructuresx-logo.png',
    favicon: 'assets/img/corestructuresx-logo.png',
    description: 'CoreStructuresX builds manual-start modular structures on Paper from validated WorldEdit or FAWE schematic packs.'
  },

  links: {
    download: 'https://modrinth.com/plugin/corestructuresx',
    modrinth: 'https://modrinth.com/plugin/corestructuresx',
    github: 'https://github.com/IceWolf23X/CoreStructuresX-issues',
    issues: 'https://github.com/IceWolf23X/CoreStructuresX-issues/issues',
    official: 'https://wiki-corestructuresx.icewolf23x.dev/'
  },

  /* Optional public website releases. The primary download remains Modrinth. */
  releases: {
    provider: 'github',
    owner: 'IceWolf23X',
    repository: 'CoreStructuresX-website',
    cacheMinutes: 15,
    requestTimeoutMs: 10000,
    maxPages: 10,
    assetNames: {
      paper: ['CoreStructuresX-*.jar', 'corestructuresx-*.jar'],
      velocity: []
    }
  },

  assets: {
    heroPreview: {
      images: [
        { src: 'assets/img/corestructuresx-logo.png', alt: 'CoreStructuresX plugin logo' }
      ],
      autoplay: false,
      intervalMs: 5000,
      transitionMs: 240,
      pauseOnHover: true,
      objectFit: 'contain',
      src: '',
      alt: 'CoreStructuresX plugin logo'
    }
  },

  theme: {
    default: 'light',
    storageKey: 'corestructuresx.theme',
    light: {
      accent: '#d93458',
      accentHover: '#b92447',
      accentSoft: '#fff0f3',
      accentLine: '#f5becb',
      onAccent: '#ffffff',
      page: '#fcfcfb',
      surface: '#ffffff',
      surfaceAlt: '#f5f5f3',
      surfaceHover: '#eeedeb',
      ink: '#24232a',
      muted: '#65636f',
      quiet: '#726d7a',
      line: '#e7e5e9',
      lineStrong: '#d4d1da'
    },
    dark: {
      accent: '#ff6687',
      accentHover: '#ff85a0',
      accentSoft: '#38222a',
      accentLine: '#693444',
      onAccent: '#271318',
      page: '#17171a',
      surface: '#1d1d21',
      surfaceAlt: '#232327',
      surfaceHover: '#2b2a30',
      ink: '#eeedf1',
      muted: '#aaa7b3',
      quiet: '#8c8797',
      line: '#313037',
      lineStrong: '#45424e'
    }
  }
};
