import { motion } from 'motion/react';

export default function ArtistBioPage() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* 배경 — 꿈을 품은 씨앗 (2020), 화면에 고정 (스크롤 안 됨) */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}artworks/9.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
          }}
        />
        {/* 흰색 부드러운 오버레이 — 가독성 보강 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.7) 100%)',
          }}
        />
      </div>

      {/* 스크롤 영역 — 텍스트만 스크롤됨 */}
      <div
        className="absolute inset-0 overflow-y-auto px-6 py-12 z-10"
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-7 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-7"
        >
          {/* Header */}
          <header className="text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 tracking-wider"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              양리애
            </h1>
            <p
              className="text-sm tracking-[0.3em] text-gray-500"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              YANG LEE AI
            </p>
            <p
              className="text-xs tracking-[0.3em] text-gray-400 mt-2"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              설치예술가 · Installation Artist
            </p>
            <div className="w-12 h-[1px] bg-[#7c6aad]/40 mx-auto mt-6"></div>
          </header>

          {/* 학력 · 직책 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              학력 · 직책
            </h2>
            <ul
              className="text-[15px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>창원대학교 예술대학 미술학과</li>
              <li>창원대학교 대학원 미술학과 (조각 전공)</li>
              <li>예술기획단체 아트컬팩토리 기획팀장</li>
              <li>예술기획사 art soop 대표</li>
              <li>현재 — 설치예술가 · Visual Artist</li>
            </ul>
          </section>

          {/* 개인전 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              개인전
            </h2>
            <ul
              className="text-[14.5px] text-gray-700 leading-[1.9] flex flex-col gap-1.5"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2026</span>
                제 11회 「상상하는 무언가를 가지고 와서는 : 껍데기들」 (인사아트센터 경남갤러리/서울)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2023</span>
                제 10회 「knitting the light」 (서울시청 시민청)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2021</span>
                제 9회 「만남-Light」 (문신앤셀라갤러리/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2021</span>
                제 8회 「the knitting the light」 (바인딩갤러리/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2020</span>
                제 6회 「꿈을 품은 씨앗」 (맛산갤러리/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2019</span>
                제 5회 「상상」 (창원시도시재생지원센터-24갤러리/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2018</span>
                제 4회 「얼굴」 (창원문화원갤러리/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2016</span>
                제 3회 초대 「실험실」 (갤러리 몽/진해)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2016</span>
                제 2회 「LIGHT」 — 빛 속에서 보다 (space1326/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2015</span>
                제 1회 「집 + 노래 = 이야기」 (성산아트홀/창원)
              </li>
            </ul>
          </section>

          {/* 단체 · 기획전 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              단체 · 기획전
            </h2>
            <ul
              className="text-[14.5px] text-gray-700 leading-[1.9] flex flex-col gap-1.5"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2025</span>
                기획초대전 〈cocktail party〉 (바인딩갤러리/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2024</span>
                로프트그라운드 준비땅 기획전 〈같이 놀자!〉 (로프트그라운드/서울)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2023</span>
                마을미술프로젝트 〈마을의 시간〉 (로컬앤시티/진해)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2022</span>
                〈시로 만든 집:시집〉 (3.15아트센터)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2022</span>
                〈虎(호) — 잘 will live well〉 (바인딩갤러리/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2021</span>
                빈 상가 프로젝트 〈knitting the light 2〉 (대원복합상가대안공간/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2020</span>
                창원조각비엔날레 〈비조각 — 가볍거나 유연하거나〉 (성산아트홀)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2020</span>
                〈창동정담〉 / 〈봄을 열다〉 (창동아트센터)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2019</span>
                국제창원조각프레비엔날레 〈비 조각부분 프롤로그〉 (성산아트홀)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2019</span>
                제 2회 〈별에게 말을 걸다〉 (성산아트홀/창원)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2019</span>
                〈이팔청춘〉 — 기획초대 (세자트라숲)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2018</span>
                〈나의 초상〉 마산문신미술관 기획초대전
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2005~</span>
                경남 현대조각가 협회전 (성산아트홀)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">2000~</span>
                SOO 조각회전 (성산아트홀)
              </li>
              <li className="flex gap-3 items-baseline break-keep">
                <span className="text-gray-500 shrink-0 w-[60px]">1994~04</span>
                그룹 나좀 〈자유정신 전〉 (창원·마산·통영)
              </li>
            </ul>
          </section>

          {/* 연락 */}
          <section className="flex flex-col gap-2">
            <h2
              className="text-sm tracking-[0.25em] text-[#7c6aad] font-bold"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              연락
            </h2>
            <ul
              className="text-[14.5px] text-gray-700 leading-[1.9] flex flex-col gap-1"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              <li>
                <span className="text-gray-500 mr-2">E-mail</span>
                yangleeai@naver.com
              </li>
              <li>
                <span className="text-gray-500 mr-2">YouTube</span>
                @yangleeai8578
              </li>
              <li>
                <span className="text-gray-500 mr-2">Facebook</span>
                Yang Lee Ai
              </li>
              <li>
                <span className="text-gray-500 mr-2">Instagram</span>
                @yang_lee_ai
              </li>
            </ul>
          </section>

        </motion.div>
        </div>
      </div>
    </div>
  );
}
