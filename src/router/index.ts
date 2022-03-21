import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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

  // TODO: name때문에 index가 안나옴
  // name을 카멜케이스로 변경하자(뎁스가 있는경우)
  const fileName = filePathSplit[filePathSplit.length - 1].replace('.vue', '');
  const urlPath =
    filePath === 'index.vue'
      ? `/home`
      : `/${filePathSplit
          ?.filter((path) => path !== 'index.vue')
          .join('/')
          .replace('.vue', '')}`;
  console.log(urlPath);

  let route: RouteRecordRaw;

  if (layout) {
    route = {
      path: urlPath,
      name: fileName,
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
    //
    route = {
      path: urlPath,
      name: fileName,
      component: () => import(`@/views/${filePath}`),
      meta: {
        title,
      },
    };
  }
  return prevRoutes.concat(route);
}, routes);
console.log(routes);

// const routes2: Array<RouteRecordRaw> = [
//   {
//     path: '/index',
//     name: 'c',
//     component: () => import('@/views/layouts/base.vue'),
//     meta: {
//       title: 'OKAYOON | HOME',
//     },
//     children: [
//       {
//         path: '',
//         component: () => import('@/views/index.vue'),
//       },
//     ],
//   },
//   {
//     path: '/about',
//     name: 'index',
//     component: () => import('@/views/layouts/base.vue'),
//     meta: {
//       title: 'OKAYOON | HOME',
//     },
//     children: [
//       {
//         path: '',
//         component: () => import('@/views/about.vue'),
//       },
//     ],
//   },
// ];
// console.log(routes2);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// {
//     path: '/a',
//     name: 'index',
//     component: BaseLayout,
//     meta: {
//       title: 'OKAYOON | HOME',
//     },
//     children: [
//       {
//         path: 'test',
//         component: Index,
//       },
//     ],
//   },

// {
//   path: '/news',
//   name : 'news',
//   component: NewsView,
// },
