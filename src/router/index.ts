import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import camelCase from 'lodash/camelCase';

const exclude = ['layouts'];
const views = require.context('@/views/', true, /[a-z]\w+\.vue$/);
let routes: Array<RouteRecordRaw> = [];

routes = views.keys().reduce((prevRoutes, currentRoutes) => {
  const filePathSplit = currentRoutes.replace('./', '').split('/');
  const isExcludeFile = exclude.includes(filePathSplit[0]);

  if (isExcludeFile) return prevRoutes;
  const {
    default: { layout, title = 'OKAYOON' },
  } = views(currentRoutes);
  const filePath = filePathSplit.join('/');
  const name = camelCase(filePathSplit.join(' ').replace('.vue', ''));
  const urlPath =
    filePath === 'index.vue'
      ? `/`
      : `/${filePathSplit
          ?.filter((path) => path !== 'index.vue')
          .join('/')
          .replace('.vue', '')}`;
  let route: RouteRecordRaw;

  if (layout) {
    route = {
      path: urlPath,
      name,
      component: () => import(`@/views/layouts/${layout}.vue`),
      meta: {
        title,
      },
      children: [
        {
          path: '',
          component: () => import(`@/views/${filePath}`),
        },
      ],
    };
  } else {
    route = {
      path: urlPath,
      name,
      component: () => import(`@/views/${filePath}`),
      meta: {
        title,
      },
    };
  }

  return prevRoutes.concat(route);
}, routes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
