// 배우님(태정) 시그니처 - 인물 사진 비네팅 컴포넌트
// 다음 작가 ebook에서도 그대로 재사용. <ProfileVignette src=... alt=... /> 한 줄.
// 핵심: 인물 위에 흰색 radial-gradient 1장 = 사각형 경계 사방 소거.

interface ProfileVignetteProps {
  src: string;
  alt: string;
  /** 모바일 비율 (CSS aspect-ratio). 기본 "4 / 5" (세로 카드) */
  mobileAspect?: string;
  /** 모바일 인물 위치 (object-position). 얼굴 위치 미세조정. 기본 "center 25%" */
  mobileObjectPosition?: string;
  /** 데스크탑 우측 인물 영역 폭. 기본 "60%" */
  desktopWidth?: string;
  /** 데스크탑 인물 opacity. 텍스트 가독성 vs 인물 명도. 기본 0.32 */
  desktopOpacity?: number;
  /** 데스크탑 background-position. 기본 "right center" */
  desktopBgPosition?: string;
}

export default function ProfileVignette({
  src,
  alt,
  mobileAspect = '4 / 5',
  mobileObjectPosition = 'center 25%',
  desktopWidth = '60%',
  desktopOpacity = 0.32,
  desktopBgPosition = 'right center',
}: ProfileVignetteProps) {
  return (
    <>
      {/* 데스크탑 - 우측 인물 레이어 + 비네팅 오버레이 (사방 흰색 페이드) */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full hidden md:block"
        style={{ width: desktopWidth, zIndex: 0 }}
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: desktopBgPosition,
            backgroundRepeat: 'no-repeat',
            opacity: desktopOpacity,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 70% at 85% 50%, transparent 15%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0.9) 85%, rgba(255,255,255,1) 100%)',
          }}
        />
      </div>

      {/* 모바일 - 페이지 상단 카드 (사방 페이지 가장자리까지 풀폭) + 비네팅 */}
      <div
        className="md:hidden -mx-6 -mt-12 mb-1 relative overflow-hidden bg-white"
        style={{ aspectRatio: mobileAspect }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: mobileObjectPosition }}
        />
        {/* 사방 비네팅 — 인물 중심 또렷, 가장자리 흰색 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 70% at 50% 42%, transparent 35%, rgba(255,255,255,0.25) 60%, rgba(255,255,255,0.85) 88%, rgba(255,255,255,1) 100%)',
          }}
        />
        {/* 하단 추가 페이드 — 본문 텍스트로 자연스러운 연결 */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 35%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>
    </>
  );
}
