/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Import YoutubeIframe plugin
import YoutubeIframe from '@techassi/vue-youtube-iframe';

const app = createApp(App)

// Use the YoutubeIframe plugin
app.use(YoutubeIframe)

// Register other plugins
registerPlugins(app)

// Mount the app
app.mount('#app')
