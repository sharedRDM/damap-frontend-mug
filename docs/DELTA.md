# Delta damap-frontend-mug <-> damap-frontend (upstream)

This repository is a fork of [damap-org/damap-frontend](https://github.com/damap-org/damap-frontend).

It modifies several files. The list is the following:

- .ts, .html, .css files -> All modifications in these files are marked with the comments `CUSTOMIZATION MUG` with a start and an end to the change that defines a block.
- translations.json file -> 74 new keys with the prefix `mug.` are added, as well as modifications to some existing keys from core (e.g. on `info.` keys )
- Added [OpenSans fonts](../apps/damap-shell/src/assets/fonts/OpenSans/)
- changes to [nginx](../docker/conf.d/default.conf)

## New changes

When a new customization is added, follow these steps:

- if a .ts, .html, .css file is changed, mark the changed block with the `CUSTOMIZATION MUG` comment
- else review this file and describe the change here.
