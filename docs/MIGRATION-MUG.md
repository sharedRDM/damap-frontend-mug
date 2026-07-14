# MUG Fork — core v5 Migration Notes

This branch (`migrate-v5`) is based on **core v5.0.1** (`damap-org/damap-frontend`, tag `v5.0.1`) with a small series of MUG-specific commits on top. The old merge-based fork history (`next-mug`, `i18n-fixes`, base ~v4.6.0) is superseded by this branch.

## What is carried as code on top of core v5

| Commit                                                                                          | Change                                                                                                                        |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `ci: adapt workflows for MUG fork`                                                              | test on `next`/`next-mug`/`migrate-v5`; release images on version tags only (no `latest`)                                     |
| `tooltip: clickable icon variant and shared info styles`                                        | `app-tooltip` gets optional `iconType="warning"`; global `.clickable-info` / `.dialog-indicator` / `.info-link-custom` styles |
| `add metadata/structure/validation/legal aspects info dialog` (4 commits)                       | the MUG question-info dialog components in `libs/damap/src/lib/shared/question-dialogs/`                                      |
| `documentation step: dialog triggers`                                                           | info icons on structure / metadata / documentation fields open the dialogs                                                    |
| `legal step: info box and dialog trigger`                                                       | Med Uni legal-links info box + legal-aspects dialog trigger                                                                   |
| `storage step: guidelines dialog` + `file services info box`                                    | warning icon opens storage guidelines dialog; O-IT file-services info box                                                     |
| `dashboard: MUG help card`                                                                      | third dashboard card linking to the RDM Knowledge Base (`flip-card` gained `relinkUrl`)                                       |
| `repo step: guidance info box`, `licenses step: hint info box`, `people step: contact info box` | Med Uni guidance info boxes                                                                                                   |
| `branding: OpenSans font`                                                                       | OpenSans replaces Roboto (fonts are compile-time only, not admin-configurable)                                                |
| `docker: MUG nginx conf`                                                                        | image listens on **8000** and reverse-proxies `/api/` to `http://damap-be:8080` (matches the MUG compose setup)               |

Everything else that the old fork customized is **no longer code**:

- **Colors, logos, favicon** → v5 Admin UI (Colors / Images pages). MUG green primary: `#007934`.
- **App title ("DMP Tool"), footer texts, wording overrides** → v5 Admin UI → Translations (override existing core keys, e.g. `sidebar.header.title`).
- **English-only** → deactivate German under Admin → Translations (languages are backend-driven in v5).
- **OIDC config-field compatibility shims** → dropped; the v5 backend serves the proper `config` contract.
- **specify-data 4000-char counter** → native in v5 `textarea-wrapper` (`maxLength=4000`, `showLength=true` defaults).
- **Admin banner backport** → native in v5.

## Translation keys (IMPORTANT: backend dependency)

In v5, ALL translations are loaded from the backend (`GET /api/languages/{lang}`); the admin UI can only edit **existing** keys, not create new ones. The MUG components above use new `mug.*` keys, which must be **seeded in the MUG backend** via a Liquibase changeset in `damap-instance` (`instances/MUG`).

A ready-to-copy changeset with all **64 `mug.*` keys** is in [`docs/mug-translations-changeset.yaml`](./mug-translations-changeset.yaml). It follows the core pattern (insert into `translation` with `translation_key`, `language`, `default_value`, `active`, `version`). Without it, the MUG dialogs/info boxes render raw key names.

URLs (Confluence, MUniverse, policy PDFs, OSF, zenodo, etc.) are hardcoded in the component templates on purpose — link texts are translatable, link targets are not.

## Release / tagging

Tag releases as `v5.0.1-mug.1`, `v5.0.1-mug.2`, … so MUG tags never collide with core tags (the old fork's `v4.7.0` tag collides with core's). The release workflow publishes `ghcr.io/sharedrdm/damap-frontend-mug:<version>` on `v*` tags only.

To consume a future core release: `git rebase --onto <new-core-tag> v5.0.1 migrate-v5` — the MUG series is deliberately small and ordered to keep this cheap.

## Admin setup after deployment (once per environment)

1. Admin → Colors: primary `#007934` (fine-tune secondary/tertiary against `i18n-fixes:apps/damap-frontend/src/themes/custom-palettes.scss`).
2. Admin → Images: upload MUG `logo.svg` + favicon (from `i18n-fixes:apps/damap-frontend/src/assets/`).
3. Admin → Translations: override `sidebar.header.title` → "DMP Tool"; review dashboard/step wording; deactivate `de` if staying English-only.
4. Admin → Instance config: enable public availability (v5 instances start locked), review consent toggle, repositories, templates.
