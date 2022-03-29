interface GnbItem {
  name: string;
  path: string;
  totalNum: number;
}
export interface Gnb extends GnbItem {
  menu?: GnbItem[];
}

export const gnb: Gnb[] = [
  {
    name: '전체 보기',
    path: '', // 클릭 시 이동 주소
    totalNum: 10, // 총갯수
  },
  {
    name: '읽고 요약',
    path: '',
    totalNum: 10,
    menu: [
      {
        name: '도서',
        path: '',
        totalNum: 2,
      },
      {
        name: '아티클',
        path: '',
        totalNum: 1,
      },
    ],
  },
  {
    name: '개발',
    path: '',
    totalNum: 10,
    menu: [
      {
        name: 'HTML&CSS',
        path: '',
        totalNum: 10,
      },
      {
        name: 'Javascript',
        path: '',
        totalNum: 10,
      },
      {
        name: 'Typescript',
        path: '',
        totalNum: 10,
      },
      {
        name: 'React',
        path: '',
        totalNum: 10,
      },
      {
        name: 'Vue',
        path: '',
        totalNum: 10,
      },
      {
        name: '정의',
        path: '',
        totalNum: 10,
      },
      {
        name: '라이브러리',
        path: '',
        totalNum: 10,
      },
    ],
  },
  {
    name: '리뷰',
    path: '',
    totalNum: 10,
    menu: [
      {
        name: '맛집',
        path: '',
        totalNum: 10,
      },
      {
        name: '제품',
        path: '',
        totalNum: 10,
      },
    ],
  },
];
