export interface Artwork {
  id: number;
  artist: string;
  title: string;
  material: string;
  size: string;
  year: string;
  image: string;
  description: string;
  clipPath?: string;
  maxWidth?: string;
  maxHeight?: string;
  darkBg?: boolean;
  bgTheme?: 'green' | 'purple';
  /** 이미지 CSS filter (예: 'brightness(1.2)') */
  imageFilter?: string;
}

export interface ExhibitionData {
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  period: string;
  venue: string;
  opening: string;
  organizer: string;
  organizerContact: string;
  poster: string;
  foreword: string;
  forewordAuthor: string;
  artists: string[];
  artworks: Artwork[];
}

export const exhibition: ExhibitionData = {
  title: "제11회 양리애 개인전",
  titleEn: "The 11th Yang Lee Ai Solo Exhibition",
  subtitle: "상상하는 무언가를 가지고 와서는 : 껍데기들",
  subtitleEn: "Bringing Something That One Imagines : Shells",
  period: "2026년 5월 20일 (수) — 5월 25일 (월)",
  venue: "인사아트센터 5층 경남갤러리",
  opening: "오전 10:00 ~ 오후 7:00",
  organizer: "(주최/기획 — 추후 업데이트)",
  organizerContact: "yangleeai@naver.com",
  poster: "cover.jpg",

  foreword: `숲을 거닐다보면 가끔 작고 예쁜 것들과 마주치곤 한다.
아침 이슬을 영롱하게 머금은 거미줄, 이름 모를 곤충이 벗어 놓고 간 하얀 껍데기 같은.

상상해본다. 사람이 저들처럼 제 몸에서 실을 뽑을 수 있어 자기 집이나 껍데기를 만들 수 있다면 하고.

실 하나로 자기 껍데기를 만드는 곤충들은 아름다운 성충이 되면 안식처인 자기 껍데기를 미련 없이 버리고 떠난다. 그리고 남은 흔적은 자연 속에서 누구도 모르게 작고 예쁜 것으로 남아 있다가, 나 같은 공상가에게 발견된다.

상상한다. 내 껍질도 남기고 가면 작고 아름다운 무엇으로 발견될까?
그 무언가를 상상하며 한 가닥의 실과 하나의 바늘로 내 껍질을 만들어간다.

아름다운 구리실 한 가닥과 하나의 바늘로 끝없이 뜨개질로 껍데기를 만들어 열한 번째 설치작업이 끝나면, 나도 미련 없이 날아갈 수 있을까?

또 다시 상상하는 무언가를 가지고 이야기를 만들어가겠지. 늘 그랬듯이 미련을 못 버린다.`,

  forewordAuthor: "작가노트 | 양리애",

  artists: [
    "양리애"
  ],

  artworks: [
    {
      id: 1,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: "artworks2026/1.jpg",
      description: ""
    },
    {
      id: 2,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: "artworks2026/2.jpg",
      description: ""
    },
    {
      id: 3,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: "artworks2026/3.jpg",
      description: ""
    },
    {
      id: 4,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: "artworks2026/4.jpg",
      description: ""
    },
    {
      id: 5,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: "artworks2026/5.jpg",
      description: ""
    },
    {
      id: 6,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: "artworks2026/6.jpg",
      description: ""
    },
    {
      id: 7,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: "artworks2026/7.jpg",
      description: ""
    },
    // ─── 회고작 (2005~2025) ───
    {
      id: 8,
      artist: "양리애",
      title: "외출",
      material: "—",
      size: "—",
      year: "2005",
      image: "artworks/1.jpg",
      description: ""
    },
    {
      id: 9,
      artist: "양리애",
      title: "외출",
      material: "—",
      size: "—",
      year: "2005",
      image: "artworks/2.jpg",
      description: ""
    },
    {
      id: 10,
      artist: "양리애",
      title: "집 + 노래 = 이야기",
      material: "—",
      size: "—",
      year: "2015",
      image: "artworks/3.jpg",
      description: ""
    },
    {
      id: 11,
      artist: "양리애",
      title: "마주치는 나",
      material: "—",
      size: "—",
      year: "2018",
      image: "artworks/4.jpg",
      description: ""
    },
    {
      id: 12,
      artist: "양리애",
      title: "상상",
      material: "—",
      size: "—",
      year: "2019",
      image: "artworks/5.jpg",
      description: ""
    },
    {
      id: 13,
      artist: "양리애",
      title: "상상",
      material: "—",
      size: "—",
      year: "2019",
      image: "artworks/6.jpg",
      description: ""
    },
    {
      id: 14,
      artist: "양리애",
      title: "작은 씨앗을 뿌리겠어요",
      material: "—",
      size: "—",
      year: "2019",
      image: "artworks/7.jpg",
      description: ""
    },
    {
      id: 15,
      artist: "양리애",
      title: "작은 씨앗을 뿌리겠어요",
      material: "—",
      size: "—",
      year: "2019",
      image: "artworks/8.jpg",
      description: ""
    },
    {
      id: 16,
      artist: "양리애",
      title: "꿈을 품은 씨앗",
      material: "—",
      size: "—",
      year: "2020",
      image: "artworks/9.jpg",
      description: ""
    },
    {
      id: 17,
      artist: "양리애",
      title: "빙글빙글",
      material: "창원조각비엔날레 출품작",
      size: "—",
      year: "2020",
      image: "artworks/10.jpg",
      description: ""
    },
    {
      id: 18,
      artist: "양리애",
      title: "빙글빙글",
      material: "창원조각비엔날레 출품작",
      size: "—",
      year: "2020",
      image: "artworks/11.jpg",
      description: ""
    },
    {
      id: 19,
      artist: "양리애",
      title: "빙글빙글",
      material: "창원조각비엔날레 출품작",
      size: "—",
      year: "2020",
      image: "artworks/12.jpg",
      description: ""
    },
    {
      id: 20,
      artist: "양리애",
      title: "knitting the light",
      material: "구리실, 뜨개질 설치",
      size: "—",
      year: "2023",
      image: "artworks/13.jpg",
      description: ""
    },
    {
      id: 21,
      artist: "양리애",
      title: "knitting the light",
      material: "구리실, 뜨개질 설치",
      size: "—",
      year: "2023",
      image: "artworks/14.jpg",
      description: ""
    },
    {
      id: 22,
      artist: "양리애",
      title: "sleep",
      material: "—",
      size: "—",
      year: "2025",
      image: "artworks/15.jpg",
      description: ""
    },
    // ─── 2026 추가 작품 (페이지 28~47) ───
    ...Array.from({ length: 20 }, (_, i) => ({
      id: 23 + i,
      artist: "양리애",
      title: "상상하는 무언가를 가지고 와서는 : 껍데기들",
      material: "—",
      size: "—",
      year: "2026",
      image: `artworks2026/${8 + i}.jpg`,
      description: ""
    }))
  ]
};
