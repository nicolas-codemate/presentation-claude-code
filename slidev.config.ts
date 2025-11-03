import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Titre de la présentation
  title: 'Claude Code - Guide Complet',

  // Thème
  theme: 'default',

  // Activer le téléchargement de la présentation
  download: true,

  // Nom du fichier exporté
  exportFilename: 'claude-code-presentation',

  // Activer les numéros de lignes pour le code
  lineNumbers: false,

  // Activer le mode dessin
  drawings: {
    enabled: true,
    persist: false,
    presenterOnly: false,
    syncAll: true,
  },

  // Configuration de l'exportation
  export: {
    format: 'pdf',
    timeout: 30000,
    dark: false,
    withClicks: false,
  },

  // Monaco editor
  monaco: {
    enabled: true,
  },

  // Configuration des fonts
  fonts: {
    sans: 'Roboto',
    serif: 'Roboto Slab',
    mono: 'Fira Code',
  },

  // Configuration du serveur de développement
  server: {
    port: 3030,
    open: true,
  },
})
