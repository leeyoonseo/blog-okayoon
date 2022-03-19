import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import kebabCase from 'lodash/kebabCase';

import BaseLayout from '@/views/layouts/base.vue';
import Index from '@/views/index.vue';

const exclude = ['layouts'];
const routes: Array<RouteRecordRaw> = [];

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
const initialValue: any = []; // TODO: type..
const views = require.context('@/views/', true, /[a-z]\w+\.vue$/);

views.keys().reduce((prev, current) => {
  // console.log('????', prev, current);
  const filePathArr = current.replace('./', '').split('/');
  // ['layout', 'base.vue'], ['index.vue']

  // * 레이아웃 제외
  if (filePathArr && exclude.includes(filePathArr[0])) return prev;
  const fileFullName = filePathArr.pop();
  // about.vue, index.vue

  const isDepth = filePathArr.length >= 1;

  // const fileName = fileFullName && kebabCase(fileFullName.replace('.vue', ''));
  // const fileName = fileFullName && kebabCase(fileFullName.replace('.vue', ''));
  // about, index

  // const filePathStr = isFirstDepth ? `/${fileName}` : `/${filePathArr[0]}`;
  // const fileFullPathStr = !isDepth ? `${fileName}` : `${filePathArr.join('/')}`;
  // about, index, test, test/deep

  // console.log(filePathArr);
  // ['test'], ['test','deep']

  let result = {};
  // 뎁스가 있을 경우
  if (isDepth) {
    const {
      default: { layout, name, title },
    } = views(current);

    // TODO: layout이 없을경우 에러보이게하기
    // if (!layout)
    // console.log(fileFullName);
    const path = filePathArr.shift();
    const remainPath = filePathArr.join('/');
    const fileName = fileFullName?.replace('.vue', '');
    // console.log('path', path);
    const childrenPath = remainPath
      ? `@/views/${path}/${remainPath}/${fileName}.vue`
      : `@/views/${path}/${fileName}.vue`;
    // console.log(childrenPath);

    result = {
      path: `/${path}`,
      name: name || fileName,
      component: () => import(`@/views/layouts/${layout}.vue`),
      meta: {
        title: title || 'OKAYOON',
      },
      children: [
        {
          path: `/${remainPath}`,
          component: () => import(childrenPath),
        },
      ],
    };
  } else {
    // TODO: 원뎁스 페이지 작업할 것
    // result = {
    //   path: fileName === 'index' ? '/' : fileFullPathStr,
    //   name: 'index',
    //   // !layout ? BaseLayout :
    //   // 레이아웃이 있으면 레이아웃
    //   // 레이아웃이 있으면 자식 컴포넌트
    //   // 레이아웃이 없으면 본인 컴포넌트
    //   component: () => import(layout ? `@/views/layouts/${layout}.vue` : `@/views/${fileName}.vue`),
    //   meta: {
    //     title: title ? title : 'OKAYOON',
    //   },
    //   children: [
    //     {
    //       path: 'test',
    //       component: Index,
    //     },
    //   ],
    // };
  }

  // console.log('prev', prev);

  return prev.concat(result);
}, initialValue);

console.log('result', initialValue);

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
