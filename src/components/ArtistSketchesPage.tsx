import { motion } from 'motion/react';

const BASE = import.meta.env.BASE_URL;

// public/sketches/ 아래 파일명 매핑 (2.jpg ~ 18.jpg)
const PHOTO_IDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default function ArtistSketchesPage() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 overflow-y-auto px-5 py-12 z-10"
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        <div className="max-w-3xl mx-auto pb-20">
          {/* Header */}
          <header className="text-center pt-2 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1
                className="text-xl md:text-2xl font-light text-gray-700 tracking-[0.35em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                ARTIST&apos;S MOMENTS
              </h1>
              <div className="w-12 h-[1px] bg-[#7c6aad]/40 mx-auto mt-5" />
            </motion.div>
          </header>

          {/* Photo Grid — 2열 (모바일 1열) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PHOTO_IDS.map((id, i) => (
              <motion.figure
                key={id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.04 * i, ease: 'easeOut' }}
              >
                <div className="relative overflow-hidden rounded-sm shadow-md bg-white">
                  <img
                    src={`${BASE}sketches/${id}.jpg`}
                    alt={`작가 스냅 ${id}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
