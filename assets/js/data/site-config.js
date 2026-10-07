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
      page: '#fcfbfb',
      surface: '#ffffff',
      surfaceAlt: '#f7f3f4',
      surfaceHover: '#f0e9eb',
      ink: '#292125',
      muted: '#6c6066',
      quiet: '#7d6e75',
      line: '#eadfe2',
      lineStrong: '#d8c8cd'
    },
    dark: {
      accent: '#ff6687',
      accentHover: '#ff85a0',
      accentSoft: '#38222a',
      accentLine: '#693444',
      onAccent: '#271318',
      page: '#191517',
      surface: '#211b1e',
      surfaceAlt: '#292125',
      surfaceHover: '#33282d',
      ink: '#f3ecef',
      muted: '#baaab1',
      quiet: '#97858d',
      line: '#3a2e33',
      lineStrong: '#554149'
    }
  }
};
