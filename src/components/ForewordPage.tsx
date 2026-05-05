import { motion } from 'motion/react';
import { exhibition } from '../data/exhibition';

export default function ForewordPage() {
  const paragraphs = exhibition.foreword.split('\n\n');

  return (
    <div className="w-full h-full bg-white overflow-y-auto px-6 py-12" style={{ touchAction: 'pan-y pinch-zoom' }}>
      <div className="max-w-2xl mx-auto flex flex-col gap-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Header */}
          <header className="text-center mb-4">
            <h1
              className="text-2xl md:text-3xl font-normal text-gray-800 mb-2 tracking-wide"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {exhibition.title}
            </h1>
            <div className="w-12 h-[1px] bg-gray-300 mx-auto mt-4"></div>
          </header>

          {/* Body */}
          <main
            className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[15px] md:text-[16px] text-justify break-keep"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </main>

          {/* 서문 저자 */}
          <p
            className="text-sm text-gray-500 text-right mt-2"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            {exhibition.forewordAuthor}
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-200 my-4"></div>

          {/* Exhibition Info */}
          <div
            className="space-y-3 text-sm text-gray-600"
            style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
          >
            <p><span className="text-gray-400 mr-2">전시 기간</span>{exhibition.period}</p>
            <p><span className="text-gray-400 mr-2">전시 장소</span>{exhibition.venue}</p>
            <p><span className="text-gray-400 mr-2">관람 시간</span>{exhibition.opening}</p>
            <p><span className="text-gray-400 mr-2">전시 기획</span>{exhibition.organizer} ({exhibition.organizerContact})</p>
          </div>

          {/* Artists */}
          <div>
            <p
              className="text-sm text-gray-400 mb-3"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              출품 작가
            </p>
            <p
              className="text-sm leading-relaxed text-gray-600"
              style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
            >
              {exhibition.artists.join(', ')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
