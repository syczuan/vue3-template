import App from '@/App.vue';
import { createApp } from 'vue';
import router from '@/router';
import { createPinia } from 'pinia';
import '@/styles/main.scss';

import registerDirectives from '@/directives';
// 引入Svg组件
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon.vue';

const app = createApp(App);

app.use(router);

app.use(createPinia());

app.component('SvgIcon', SvgIcon);

registerDirectives(app);

app.mount('#app');
