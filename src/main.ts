import { createApp, App as Application } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import registComponents from '@/utils/regist-components';

const app: Application = createApp(App);

registComponents(app);

app.use(router);
app.use(store);
app.mount('#app');
