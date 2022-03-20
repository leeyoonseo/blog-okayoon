import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import kebabCase from 'lodash/kebabCase';

// import BaseLayout from '@/views/layouts/base.vue';
// import Index from '@/views/index.vue';

const exclude = ['layouts'];
let routes: Array<RouteRecordRaw> = [];

// const routes: Array<RouteRecordRaw> = [
//   {
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
// ];
// const initialValue: any = []; // TODO: type..
const views = require.context('@/views/', true, /[a-z]\w+\.vue$/);

routes = views.keys().reduce((prev, current) => {
  const filePathArr = current.replace('./', '').split('/');
  // ['layout', 'base.vue'], ['index.vue']

  // * 레이아웃 제외
  if (filePathArr && exclude.includes(filePathArr[0])) return prev;
  const fileFullName = filePathArr.pop();
  // about.vue, index.vue

  const isDepth = filePathArr.length >= 1;
  const {
    default: { layout, name, title },
  } = views(current);

  let route: RouteRecordRaw;
  // 뎁스가 있을 경우
  if (isDepth) {
    // TODO: layout이 없을경우 에러보이게하기
    if (!layout) {
      // There is no layout component
    }
    const path = filePathArr.shift();
    // test

    const subPath = filePathArr.join('/');
    // deep/aa, deep

    const fileName = fileFullName?.replace('.vue', '');
    // deepDeep aa

    const childrenPath = subPath ? `@/views/${path}/${subPath}/${fileName}.vue` : `@/views/${path}/${fileName}.vue`;

    if (prev.find((opt) => opt.path === `/${path}`)) {
      prev.forEach((opt) => {
        // console.log('fileName:', fileName, opt);
        if (opt.path === `/${path}`) {
          opt.children?.push({
            meta: {
              title: title || 'OKAYOON',
            },
            path: `/${subPath || fileName}`,
            component: () => import(childrenPath),
          });
        }
      });
    } else {
      console.log('fileName:', fileName, subPath);
      route = {
        path: `/${path}`,
        name: name || fileName,
        component: () => import(`@/views/layouts/${layout}.vue`),
        meta: {
          title: 'OKAYOON',
        },
        children: [
          {
            meta: {
              title: title || 'OKAYOON',
            },
            path: `/${subPath || fileName}`,
            component: () => import(childrenPath),
          },
        ],
      };

      return prev.concat(route);
    }

    return prev;
  } else {
    const fileName = fileFullName?.replace('.vue', '');

    route = {
      path: fileName === 'index' ? '/' : `/${fileName}`,
      name: name || fileName,
      component: () => import(`@/views/${fileName}.vue`),
      meta: {
        title: title || 'OKAYOON',
      },
    };
    return prev.concat(route);
  }
}, routes);

console.log('result', routes);

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
