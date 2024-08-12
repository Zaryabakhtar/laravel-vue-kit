import './bootstrap';

import {createApp} from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from "./router/routes";

const app = createApp(App);
const pinia = createPinia();

// Register the Pinia into the application
app.use(pinia);

// Regiter the Routes into the application
app.use(router);

// Mount the Application
app.mount('#app');