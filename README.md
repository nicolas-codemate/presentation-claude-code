# Présentation Claude Code

Présentation complète sur les fonctionnalités avancées de Claude Code, créée avec Slidev.

## Contenu de la présentation

1. **Claude.md** - Configuration globale et par projet
2. **Modes d'édition** - Plan Mode & Accept Edit
3. **Mode Thinking** - Transparence du raisonnement
4. **Commandes Slash** - /compact, /resume, /clear, /rewind
5. **Référencement de fichiers** - Utilisation de @
6. **MCP** - Model Context Protocol
7. **Custom Commands** - Exemple avec /review-pr
8. **Sub-Agents** - Agents spécialisés
9. **Skills** - Fonctionnalités avancées

## Prérequis

- Node.js 18.0 ou supérieur
- pnpm (recommandé)

## Installation

```bash
# Installer les dépendances
pnpm install
```

## Utilisation

### Mode développement

Lance la présentation en mode développement avec rechargement automatique :

```bash
pnpm dev
```

La présentation sera accessible sur http://localhost:3030

### Build de la présentation

Construit la présentation pour la production :

```bash
pnpm build
```

Les fichiers générés seront dans le dossier `dist/`.

### Export en PDF

Exporte la présentation en PDF :

```bash
pnpm export
```

Le PDF sera généré sous le nom `claude-code-presentation.pdf`.

## Structure du projet

```
claude_code/
├── slides.md                 # Fichier principal de la présentation
├── slidev.config.ts          # Configuration Slidev
├── package.json              # Dépendances et scripts
├── public/                   # Assets statiques
│   └── videos/               # Vidéos de démonstration
│       └── README.md         # Instructions pour les vidéos
├── .gitignore               # Fichiers à ignorer par Git
└── README.md                # Ce fichier
```

## Ajouter des vidéos

Pour enrichir votre présentation avec des vidéos de démonstration :

1. Placez vos fichiers vidéo dans `public/videos/`
2. Consultez `public/videos/README.md` pour la liste des vidéos recommandées
3. Mettez à jour les slides concernées en remplaçant les commentaires par :

```html
<video controls width="100%" class="rounded shadow-lg">
  <source src="/videos/nom-video.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>
```

### Vidéos recommandées

- `plan-mode.mp4` - Démonstration du Plan Mode
- `thinking-mode.mp4` - Démonstration du Thinking Mode
- `resume.mp4` - Démonstration de /resume
- `review-pr.mp4` - Démonstration de /review-pr

## Personnalisation

### Thème

Le thème est configuré dans `slides.md` (frontmatter) et `slidev.config.ts`.

Thèmes disponibles :
- `default` (actuel)
- `seriph`
- `apple-basic`
- `bricks`

Pour changer de thème, modifiez la ligne dans `slides.md` :

```yaml
---
theme: seriph
---
```

### Configuration

Toutes les options de configuration sont dans `slidev.config.ts` :

- Port du serveur de développement
- Options d'export
- Fonts
- Monaco editor
- Etc.

## Mode présentateur

Slidev offre un mode présentateur avec notes et timer :

1. Lance la présentation en mode dev : `pnpm dev`
2. Appuie sur la touche `P` pour ouvrir le mode présentateur
3. Une nouvelle fenêtre s'ouvre avec :
   - Vue présentateur (slide actuelle)
   - Notes du présentateur
   - Aperçu de la prochaine slide
   - Timer et chronomètre

## Raccourcis clavier

- `Espace` ou `→` : Slide suivante
- `←` : Slide précédente
- `O` : Vue d'ensemble
- `D` : Mode sombre
- `F` : Plein écran
- `P` : Mode présentateur
- `G` : Aller à une slide spécifique

## Ressources

- [Documentation Slidev](https://sli.dev)
- [Documentation Claude Code](https://docs.claude.com/claude-code)
- [GitHub Claude Code](https://github.com/anthropics/claude-code)

## Notes

Cette présentation est conçue pour être minimaliste et professionnelle. Les vidéos permettent de rendre la présentation plus fluide et interactive.

Pour toute question ou amélioration, n'hésitez pas à consulter la documentation Slidev ou à modifier directement `slides.md`.
