---
title: object_transcript convention update
release: 2023-10-16
---

The convention for referencing files in the "object_transcript" field has been updated to follow the relative url convention used in other object fields.
A reference to a local transcript file should now always start with a `/`, (e.g. `/objects/demo_01.md`).
Template logic also now supports including transcript files from any folder in the project repository (e.g. `/transcripts/example.txt` or `/text/demo_003.md`, etc).

See [CB-CSV metadata docs]({{ '/docs/metadata/csv_metadata/#object_transcript' | relative_url }}) for details.
