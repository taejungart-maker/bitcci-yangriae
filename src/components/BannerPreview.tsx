import { exhibition } from '../data/exhibition';

/**
 * 현수막 시안 — 1270mm × 650mm (127:65 비율)
 * URL: #banner 로 접근
 *
 * 인쇄 시안 시 캡처 또는 export
 */
export default function BannerPreview() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200 overflow-auto p-4">
      {/* 안내 메시지 */}
      <div className="absolute top-3 left-3 bg-white/90 px-4 py-2 rounded shadow-md text-xs">
        <p className="font-bold text-gray-700">현수막 시안 — 127cm × 65cm (1.95:1)</p>
        <p className="text-gray-500 mt-1">
          캡처용 화면. URL에서 <code>#banner</code> 제거 시 일반 모드.
        </p>
      </div>

      {/* 시안 박스 — 127:65 비율 유지 */}
      <div
        style={{
          aspectRatio: '127 / 65',
          width: 'min(95vw, 1700px)',
        }}
        className="relative bg-black overflow-hidden shadow-2xl"
      >
        {/* 배경 작품 이미지 — 커버와 동일 (knitting the light) */}
        <img
          src={`${import.meta.env.BASE_URL}${exhibition.poster}`}
          alt={exhibition.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 어두운 비네팅 오버레이 (좌측 텍스트 가독성) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* 가장자리 비네팅 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.35) 100%)',
          }}
        />

        {/* 텍스트 컨텐츠 — 좌측 정렬 */}
        <div
          className="absolute inset-0 flex flex-col justify-center z-10"
          style={{
            paddingLeft: '7%',
            paddingRight: '7%',
          }}
        >
          {/* 메인 타이틀 (KR) */}
          <h1
            className="text-white font-bold tracking-wide leading-tight mb-2"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '6.5vw',
              textShadow: '0 2px 12px rgba(0,0,0,0.7)',
            }}
          >
            {exhibition.title}
          </h1>

          {/* 메인 타이틀 (EN) */}
          <p
            className="text-white/85 mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1.3vw',
              letterSpacing: '0.4em',
              textShadow: '0 1px 4px rgba(0,0,0,0.6)',
            }}
          >
            {exhibition.titleEn.toUpperCase()}
          </p>

          {/* 가는 구분선 */}
          <div
            className="bg-white/55 mb-5"
            style={{
              width: '4vw',
              height: '2px',
            }}
          />

          {/* 부제목 (KR) */}
          <h2
            className="text-white tracking-wide mb-1 break-keep"
            style={{
              fontFamily: "'Noto Serif KR', 'Noto Sans KR', serif",
              fontSize: '3.2vw',
              fontWeight: 400,
              textShadow: '0 1px 8px rgba(0,0,0,0.6)',
            }}
          >
            {exhibition.subtitle}
          </h2>

          {/* 부제목 (EN) */}
          <p
            className="text-white/75 italic mb-7"
            style={{
              fontFamily: "'Noto Serif', 'Montserrat', serif",
              fontSize: '1.4vw',
              letterSpacing: '0.12em',
              textShadow: '0 1px 4px rgba(0,0,0,0.5)',
            }}
          >
            {exhibition.subtitleEn}
          </p>

          {/* 일정 */}
          <p
            className="text-white font-medium mb-3 whitespace-nowrap"
            style={{
              fontFamily: "'Noto Sans KR', sans-serif",
              fontSize: '2vw',
              letterSpacing: '0.12em',
              textShadow: '0 1px 6px rgba(0,0,0,0.6)',
            }}
          >
            {exhibition.period}
          </p>

          {/* 베뉴 — 인사아트센터 + 갤러리 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="bg-white/55"
                style={{
                  width: '1.5vw',
                  height: '1px',
                }}
              />
              <span
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontSize: '2vw',
                  letterSpacing: '0.4em',
                  paddingLeft: '0.4em',
                  textShadow: '0 1px 6px rgba(0,0,0,0.6)',
                }}
              >
                인 사 아 트 센 터
              </span>
              <div
                className="bg-white/55"
                style={{
                  width: '1.5vw',
                  height: '1px',
                }}
              />
            </div>
            <div
              className="text-white/60 mb-2"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1vw',
                letterSpacing: '0.4em',
                paddingLeft: '2.5vw',
              }}
            >
              INSA &nbsp;&nbsp;ART &nbsp;&nbsp;CENTER
            </div>
            <div
              className="text-white"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: '1.8vw',
                letterSpacing: '0.25em',
                paddingLeft: '2.5vw',
                fontWeight: 500,
                textShadow: '0 1px 6px rgba(0,0,0,0.6)',
              }}
            >
              경 남 갤 러 리
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
