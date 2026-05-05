import { motion } from 'motion/react';

export default function ArtistQuotePage() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-8 py-12 relative overflow-hidden">
      {/* 작가 이미지 배경 - 전체 화면 + 비네팅 */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}artworks/8.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.45,
          }}
        />
        {/* 비네팅 오버레이 - 텍스트 가독성 확보 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 20%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.85) 90%, rgba(255,255,255,1) 100%)',
          }}
        />
      </div>

      {/* 배경 장식 - 미세한 색동목 톤 그라데이션 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(124,106,173,0.04) 0%, transparent 70%)',
        }}
      />

      {/* 좌상단 - 큰 여는 따옴표 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-[18%] left-[10%] md:left-[15%]"
        style={{
          fontFamily: "'Noto Serif', serif",
          fontSize: 'clamp(80px, 14vw, 140px)',
          color: '#7c6aad',
          opacity: 0.18,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        “
      </motion.div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center px-4">
        {/* 인용구 1 — 전시 부제 (앞 부분) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-[19px] md:text-[24px] text-gray-700 leading-[2.2] tracking-wide break-keep mb-3"
          style={{
            fontFamily: "'Noto Serif KR', 'Noto Serif', 'Noto Sans KR', serif",
            fontWeight: 300,
          }}
        >
          상상하는 무언가를 가지고 와서는
        </motion.p>

        {/* 인용구 2 — 전시 부제 (강조 부분) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: 'easeOut' }}
          className="text-[24px] md:text-[30px] leading-[2] tracking-[0.15em] break-keep"
          style={{
            fontFamily: "'Noto Serif KR', 'Noto Serif', 'Noto Sans KR', serif",
            fontWeight: 500,
            color: '#5b4d80',
          }}
        >
          : 껍데기들
        </motion.p>

        {/* 가는 라인 */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '64px' }}
          transition={{ duration: 1.4, delay: 2.1, ease: 'easeOut' }}
          className="h-[1px] bg-[#7c6aad]/40 my-12"
        />

        {/* 작가 서명 — 양리애 */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-[#7c6aad]/45 text-[18px] font-light">—</span>
            <span
              className="text-[20px] md:text-[24px] text-gray-700 tracking-[0.3em] pl-[0.3em]"
              style={{
                fontFamily: "'Noto Serif KR', 'Noto Serif', serif",
                fontWeight: 500,
              }}
            >
              양 리 애
            </span>
            <span className="text-[#7c6aad]/45 text-[18px] font-light">—</span>
          </div>
          <p
            className="text-[11px] text-gray-400 tracking-[0.4em] mt-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Y A N G   L E E   A I
          </p>
        </motion.div>

        {/* 보라색 도장 점 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.2, ease: 'backOut' }}
          className="mt-6 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#7c6aad' }}
        />
      </div>

      {/* 우하단 - 큰 닫는 따옴표 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
        className="absolute bottom-[12%] right-[10%] md:right-[15%]"
        style={{
          fontFamily: "'Noto Serif', serif",
          fontSize: 'clamp(80px, 14vw, 140px)',
          color: '#7c6aad',
          opacity: 0.18,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        ”
      </motion.div>

      {/* 하단 부제 (한글) */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 3.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-gray-400 tracking-[0.5em] whitespace-nowrap"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        작 가 의 말
      </motion.p>
    </div>
  );
}
