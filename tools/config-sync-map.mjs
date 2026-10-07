/* Allowlisted CoreStructuresX defaults synchronized from the private plugin repository. */
export const SOURCE_REPOSITORY = 'IceWolf23X/CoreStructuresX-plugin';
export const SOURCE_REF = 'main';

export const CONFIG_FILES = [
  { id: 'paper/config.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/config.yml', target: 'synced-configs/paper/config.yml', article: 'paper/config-yml' },
  { id: 'paper/example-pack.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/bundled-packs/csx_test_pack/pack.yml', target: 'synced-configs/paper/example-pack.yml', article: 'paper/example-pack-yml' },
  { id: 'paper/example-structure.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/bundled-packs/csx_test_pack/structure.yml', target: 'synced-configs/paper/example-structure.yml', article: 'paper/example-structure-yml' },
  { id: 'paper/example-groups.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/bundled-packs/csx_test_pack/groups.yml', target: 'synced-configs/paper/example-groups.yml', article: 'paper/example-groups-yml' },
  { id: 'paper/example-commands.yml', platform: 'Paper', format: 'yaml', source: 'src/main/resources/bundled-packs/csx_test_pack/commands.yml', target: 'synced-configs/paper/example-commands.yml', article: 'paper/example-commands-yml' }
];
