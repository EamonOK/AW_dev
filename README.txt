# Abyssal Woods – Enemy Additions (Dev)

## Layout
- map/           – exported MSB.DCX per tile (e.g., map/m61/m61_53_41_00/…)
- regulation.bin – merged params (NpcParam, etc.)
- .smithbox/     – Smithbox project metadata (ignored in Git)

## Build / Test
- Launch via ME2:
  - tools\ME2\launch_aw_dev.bat  (dev)
  - tools\ME2\launch_aw_sandbox.bat (sandbox)
- Smithbox Project Directory: C:\Users\eamon\Desktop\ER_md\mods\aw_dev
- Data Directory: your Steam ELDEN RING\Game

## Workflow
1. Make a tiny visible change (one enemy moved) → Save Map → test.
2. Then add placements or param edits → Save Map / Save Changes → test.
3. Commit in Git at the end of the session.

## Notes
- Only place enemies inside the correct tile; use Duplicate to Map for edges.
- Keep Draw/Disp groups by duplicating an existing local enemy.
