# Dokumentation — myclub

Anforderungs- und Use-Case-Dokumentation der myclub App, erstellt per Reverse Engineering (2026-07-17)
mit den Skills des Plugins `ai-architect-core`.

## Dokumente und Pipeline

Die Dokumente bauen aufeinander auf und werden in dieser Reihenfolge gepflegt:

| Dokument | Inhalt | Gepflegt mit |
| --- | --- | --- |
| [vision.md](vision.md) | Produktvision, Zielgruppen, Module, Geschäftsmodell, Rahmenbedingungen | manuell |
| [requirements.md](requirements.md) | Funktionale Requirements (FR, User Stories), NFRs, Constraints | `/ai-architect-core:ai-requirements` |
| [entity_model.md](entity_model.md) | ER-Diagramm (Mermaid) und Attribut-Tabellen aller Entitäten | `/ai-architect-core:ai-entity-model` |
| [use_cases.md](use_cases.md) | Use-Case-Diagramm (Mermaid) mit Traceability UC → FR | `/ai-architect-core:ai-use-case-diagram` |
| [use_cases/](use_cases/) | Detail-Spezifikationen UC-001 bis UC-033 (Szenarien, Business Rules) | `/ai-architect-core:ai-use-case-spec` |

## Pflegeprozess

1. **Neues Feature:** zuerst FR in [requirements.md](requirements.md) ergänzen (Status `Open`),
   dann Use Case im Diagramm ergänzen/erweitern, dann Spezifikation in [use_cases/](use_cases/) schreiben,
   bei neuen Entitäten das [entity_model.md](entity_model.md) nachführen.
2. **Implementierung:** mit `/ai-architect-dev-tools:ai-implement-use-case UC-XXX` planen;
   nach Abschluss Status in Requirements und Use Case auf `Implemented` bzw. `Verified` setzen.
3. **IDs sind stabil:** FR-/NFR-/C-/UC-IDs werden nie wiederverwendet; obsolete Einträge erhalten
   Status `Rejected`/`Obsolete` statt gelöscht zu werden.

## Konventionen

- Arbeitssprache der Dokumente: Deutsch (Schweizer Rechtschreibung); IDs, Status- und Prioritätswerte Englisch.
- Entitäts- und Attributnamen entsprechen dem Code (Englisch bzw. Firestore-Feldnamen).
- Diagramme als Mermaid direkt im Markdown (rendert auf GitHub).

## Weitere Dokumente

- [swisstopo-maps-migration.md](swisstopo-maps-migration.md) — technische Migrationsnotiz Karten (Google Maps → SwissTopo/MapLibre)
- [ig-qr-bill-v2.3-de.pdf](ig-qr-bill-v2.3-de.pdf) — Implementation Guidelines Swiss QR-Bill (Referenz für die Beitragsverwaltung)
- [myclub.excalidraw](myclub.excalidraw) — Architektur-/Ideenskizzen
