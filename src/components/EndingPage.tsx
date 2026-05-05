import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';

export default function EndingPage() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* 배경 이미지 - 작업실 (흐림 + 어둠) */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={`${import.meta.env.BASE_URL}artworks/13.jpg`}
          alt="knitting the light - 양리애"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.85) saturate(0.85)',
            transform: 'scale(1.05)',
          }}
        />
        {/* 어두운 그라데이션 오버레이 (텍스트 가독성 + 깊이감) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/85" />
        {/* 미세한 비네팅 (가장자리 어둡게) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)',
          }}
        />
      </motion.div>

      {/* 컨텐츠 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full h-full flex items-center justify-center px-8"
      >
        <div className="text-center max-w-lg">
          {/* 감사 인사 라벨 */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.7em' }}
            animate={{ opacity: 0.7, letterSpacing: '0.5em' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-white text-[15px] mb-7"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            감 사 합 니 다
          </motion.p>

          {/* 메인 타이틀 */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white font-bold mb-2 tracking-wide"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <span className="text-3xl md:text-4xl block opacity-90 mb-3">양리애 작가의</span>
            <span className="text-4xl md:text-5xl">설치예술 세계로</span>
          </motion.h2>


          {/* 가는 라인 */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '48px' }}
            transition={{ duration: 1.2, delay: 1.8 }}
            className="h-[1px] bg-white/30 mx-auto my-8"
          />

          {/* 작가 연락 정보 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-white/85 leading-relaxed tracking-wider mb-6 space-y-4"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {/* 작가 활동 */}
            <div>
              <p className="text-[19px] mb-1.5">양리애 · YANG LEE AI</p>
              <p className="text-white/65 text-[13px] leading-[1.7]">
                설치예술가 · Installation Artist
              </p>
              <p className="text-white/65 text-[13px] leading-[1.7]">
                예술기획사 art soop 대표 · 아트컬팩토리 기획팀장
              </p>
            </div>

            {/* 온라인 채널 */}
            <div>
              <p className="text-white/70 text-[13px] tracking-[0.15em] leading-[1.9]">
                E-mail. yangleeai@naver.com
              </p>
              <p className="text-white/70 text-[13px] tracking-[0.15em] leading-[1.9]">
                Instagram. @yang_lee_ai
              </p>
              <p className="text-white/70 text-[13px] tracking-[0.15em] leading-[1.9]">
                YouTube. @yangleeai8578
              </p>
            </div>
          </motion.div>

          {/* 전시 정보 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="text-white/75 text-[15px] leading-relaxed space-y-1 mb-8"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <p>{exhibition.period}</p>
            <p>{exhibition.venue}</p>
          </motion.div>

          {/* 시그니처 인용 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.6 }}
          >
            <div className="w-6 h-[1px] bg-white/20 mx-auto mb-5" />
            <p
              className="text-white/85 text-[21px] leading-relaxed tracking-wider"
              style={{
                fontFamily: "'Noto Serif', 'Noto Sans KR', serif",
                fontStyle: 'italic',
              }}
            >
              "한 가닥의 실로 빚는 껍데기"
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 하단 우측 작은 출처 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-4 right-5 text-white text-[10px] tracking-[0.3em]"
        style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
      >
        knitting the light · 2023
      </motion.p>
    </div>
  );
}
