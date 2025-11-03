# Vidéos de la présentation

Ce dossier contient les vidéos utilisées dans la présentation Claude Code.

## Vidéos à ajouter

Pour une présentation optimale, ajoutez les vidéos suivantes dans ce dossier :

1. **edit-modes.mp4** - Démonstration du Plan Mode et Accept Edit Mode avec [SHIFT] + [TAB]
   - Slide : "Modes d'édition"
   - Durée recommandée : 45-90 secondes
   - Montrer le switch entre les modes

2. **thinking-mode.mp4** - Démonstration du Thinking Mode
   - Slide : "Thinking Mode"
   - Durée recommandée : 30-60 secondes

3. **resume.mp4** - Démonstration de la commande /resume
   - Slide : "/resume"
   - Durée recommandée : 20-40 secondes

4. **review-pr.mp4** - Démonstration de la commande /review-pr
   - Slide : "Custom Commands - Exemple /review-pr"
   - Durée recommandée : 60-90 secondes

## Format recommandé

- **Format vidéo** : MP4 (H.264)
- **Résolution** : 1920x1080 (Full HD) ou 1280x720 (HD)
- **Codec** : H.264
- **Framerate** : 30 fps
- **Taille fichier** : < 20 MB par vidéo (pour des performances optimales)

## Intégration dans les slides

Les vidéos sont référencées dans les commentaires des slides concernées. Pour les intégrer, remplacez les commentaires par :

```html
<video controls width="100%" class="rounded shadow-lg">
  <source src="/videos/nom-video.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>
```

## Alternative : GIF animés

Si vous préférez des GIF pour une meilleure compatibilité :

```markdown
![Description](/videos/nom-animation.gif)
```

**Outils de conversion :**
- FFmpeg : `ffmpeg -i input.mp4 -vf "fps=10,scale=1280:-1" output.gif`
- GIPHY Capture
- LICEcap
