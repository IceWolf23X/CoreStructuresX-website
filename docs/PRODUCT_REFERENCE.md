# CoreStructuresX product reference

## Identity

- Product: CoreStructuresX
- Version documented: 2026.1.1
- Platform: Paper only
- Java: 21+
- Maintained Paper requirement: 1.21.11+
- Schematic provider: WorldEdit or FastAsyncWorldEdit
- Current compile target: WorldEdit Bukkit 7.4.3
- Primary public download: <https://modrinth.com/plugin/corestructuresx>

## Core behavior

CoreStructuresX starts modular structures only when an administrator runs a command. It loads validated YAML packs and marked schematics, then expands persisted instances in automatic or player-proximity mode. It does not integrate with biome, chunk, seed or random terrain generation.

## Authoring contracts

- Marker types: ORIGIN, CONNECTOR, COMMAND.
- Pack files: pack.yml, structure.yml, groups.yml, optional commands.yml, schematics/.
- Start mode: MANUAL.
- Generation modes: AUTOMATIC and PLAYER_PROXIMITY.
- Paste mode: CHUNKED.
- Storage: local data-version-5 JSON.
- Recovery: non-destructive; no automatic module backtracking.

## Safety language

Validation reduces invalid inputs; it does not guarantee visual correctness, runtime performance or production compatibility. Operators should test complete pack graphs and every enabled rotation/entity/NBT path, keep world and plugin backups, and inspect failed quarantined regions before clearing their reservations.
