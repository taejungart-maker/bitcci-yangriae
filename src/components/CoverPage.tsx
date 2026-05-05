import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';

export default function CoverPage() {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center relative overflow-hidden">
      {/* 작품 이미지 — 갤러리 라이팅 진입 (어둠 → 스포트라이트 → 전체 조명) */}
      <motion.div
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}${exhibition.poster}`}
          alt={exhibition.title}
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ filter: 'brightness(0.18) saturate(0.55)' }}
          animate={{ filter: 'brightness(1) saturate(1)' }}
          transition={{ duration: 3.4, delay: 0.4, ease: 'easeOut' }}
        />
      </motion.div>

      {/* 라이팅 1: 초기 강한 어둠 + 좁은 스포트라이트 (서서히 사라짐) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 3, delay: 0.2, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 30% 38% at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.92) 60%, rgba(0,0,0,0.98) 100%)',
        }}
      />

      {/* 라이팅 2: 최종 소프트 비네팅 (가장자리만 살짝) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 45%, rgba(255,240,210,0.05) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* 텍스트 주변 약한 어둠 (블러 제거, 텍스트 가독성용 그라데이션만) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1.4 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 62% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 55%, transparent 85%)',
        }}
      />

      {/* Title overlay - 패널 없이 자유 배치, drop-shadow로 가독성 보강 */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.7, ease: 'easeOut' }}
        className="relative z-10 text-center px-8 max-w-xl"
        style={{
          filter:
            'drop-shadow(0 2px 10px rgba(0,0,0,0.55)) drop-shadow(0 0 3px rgba(0,0,0,0.6))',
        }}
      >
        {/* 메인 타이틀 (KR) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.0 }}
          className="text-white text-4xl md:text-5xl font-bold tracking-wide mb-2"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {exhibition.title}
        </motion.h1>
        {/* 메인 타이틀 (EN) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.78, letterSpacing: '0.35em' }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-white text-[13px] mb-6"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: '0.4em',
          }}
        >
          {exhibition.titleEn.toUpperCase()}
        </motion.p>

        {/* 가는 구분선 */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '36px', opacity: 0.55 }}
          transition={{ duration: 1.2, delay: 2.7 }}
          className="h-px bg-white mx-auto mb-6"
        />

        {/* 부제목 (KR) */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 1, delay: 3.0 }}
          className="text-white text-2xl md:text-3xl tracking-wide mb-2 break-keep"
          style={{
            fontFamily: "'Noto Serif KR', 'Noto Sans KR', serif",
            fontWeight: 400,
          }}
        >
          {exhibition.subtitle}
        </motion.h2>
        {/* 부제목 (EN) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 3.3 }}
          className="text-white text-[13px] tracking-[0.15em] mb-7 italic"
          style={{ fontFamily: "'Noto Serif', 'Montserrat', serif" }}
        >
          {exhibition.subtitleEn}
        </motion.p>

        {/* 일정 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 3.6 }}
          className="text-white text-[15px] tracking-[0.15em] mb-6 font-medium whitespace-nowrap"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          {exhibition.period}
        </motion.p>

        {/* 베뉴 — 인사아트센터 + 갤러리 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 3.9 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '20px' }}
              transition={{ duration: 1, delay: 4.1 }}
              className="h-px bg-white/55"
            />
            <span
              className="text-white text-[16px] tracking-[0.4em] font-normal pl-[0.4em] whitespace-nowrap"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              인 사 아 트 센 터
            </span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '20px' }}
              transition={{ duration: 1, delay: 4.1 }}
              className="h-px bg-white/55"
            />
          </div>
          <div
            className="text-white/60 text-[10px] tracking-[0.4em] mb-3 pl-[0.4em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            INSA  ART  CENTER
          </div>
          <div
            className="text-white/90 text-[15px] tracking-[0.25em] pl-[0.25em] font-medium"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            경 남 갤 러 리
          </div>
        </motion.div>
      </motion.div>

      {/* Swipe hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.65, 0] }}
        transition={{ duration: 2, delay: 8, repeat: Infinity, repeatDelay: 1 }}
        className="absolute bottom-10 text-white/70 text-[13px] tracking-[0.4em]"
        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          textShadow: '0 1px 6px rgba(0,0,0,0.7)',
        }}
      >
        넘 겨 보 기  →
      </motion.div>
    </div>
  );
}
