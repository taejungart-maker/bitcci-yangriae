import { motion } from 'motion/react';

interface NoteSection {
  heading: string;
  paragraphs: string[];
}

const koreanSections: NoteSection[] = [
  {
    heading: '마주치다.',
    paragraphs: [
      '숲을 거닐다보면 가끔 작고 예쁜 것들과 마주치곤 한다. 아침 이슬을 영롱하게 머금은 거미줄, 이름 모를 곤충이 벗어 놓고 간 하얀 껍데기 같은.',
      '상상 해본다. 사람이 저들처럼 지 몸에서 실을 뽑을 수 있어 자기 집이나 껍데기를 만들 수 있다면 하고.',
    ],
  },
  {
    heading: '실',
    paragraphs: [
      '사람은 가늘고 긴 것들을 엮어 실이라는 걸 만들어 손으로 짜든 바늘이나 베틀을 고안해서 짜든 자기 껍데기를 만들기 시작한건 거슬러 고대적보다 더 오래일까?',
      '사람은 자기 껍데기를 아주 멋지게 아주 다양한 방법으로, 형태로 만들어왔고 아마 그 멋진 작업은 계속될 것 같다.',
    ],
  },
  {
    heading: '상상하는 무언가를 가지고 와서는',
    paragraphs: [
      '실 하나로 자기 껍데기를 만드는 곤충들은 아름다운 성충이 되면 안식처인 자기 껍데기를 미련 없이 버리고 떠난다.',
      '그리고 남은 흔적은 자연 속에서 누구도 모르게 작고 예쁜 것으로 남아 있다가, 나 같은 공상가에게 발견된다.',
      '상상한다. 내 껍질도 남기고 가면 작고 아름다운 무엇으로 발견 될까?',
      '그 무언가를 상상하며 한 가닥의 실과 하나의 바늘로 내 껍질을 만들어간다.',
    ],
  },
  {
    heading: '열한 번째',
    paragraphs: [
      '아름다운 구리실 한 가닥과 하나의 바늘로 끝없이 뜨개질로 껍데기를 만들어 열한 번째 설치작업이 끝나면 나도 미련 없이 날아갈 수 있을까?',
      '또 다시 상상하는 무언가를 가지고 이야기를 만들어가겠지! 늘 그랬듯이 미련을 못 버린다.',
    ],
  },
];

const englishSections: NoteSection[] = [
  {
    heading: 'run into each other.',
    paragraphs: [
      'When I walk through the woods, I sometimes encounter small and pretty things. A spider web, with bright morning dew, like a white shell left behind by an unknown insect.',
      'Imagine if people could pull threads from their bodies like they did, if they could build their own houses or shells.',
    ],
  },
  {
    heading: 'thread',
    paragraphs: [
      'Is it longer than ancient times that man started making thread by weaving thin and long things together, inventing needles or looms woven by hand and making their own shells?',
      'Man has made his shell in a very nice, very diverse way into the form of a, and that wonderful work is probably going to continue.',
    ],
  },
  {
    heading: 'bring something that one imagines',
    paragraphs: [
      'Insects that make their shells with a single thread leave their resting place, their shells, without regret, when they become beautiful adults.',
      'And the remaining traces remain small and pretty in nature without anyone knowing, and are found by daydreamers like me.',
      'I imagine. If I leave my shell as well, what will it find as small and beautiful?',
      'Imagining something, I make my shell out of a single thread and a single needle.',
    ],
  },
  {
    heading: 'The eleventh',
    paragraphs: [
      'Can I make an endlessly knitted shell out of a beautiful strand of copper thread and a single needle and fly away without regret after the eleventh installation?',
      "You'll make a story with something you're imagining again! As always, you can't let go of your lingering feelings.",
    ],
  },
];

function NoteSectionBlock({ section, delayBase, isEnglish }: { section: NoteSection; delayBase: number; isEnglish?: boolean }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: delayBase, ease: 'easeOut' }}
      className="flex flex-col gap-3"
    >
      {/* 섹션 제목 - 보라 점 + 텍스트 */}
      <div className="flex items-baseline gap-2">
        <span
          className="w-1 h-1 rounded-full shrink-0 translate-y-[-3px]"
          style={{ backgroundColor: '#7c6aad' }}
          aria-hidden
        />
        <h3
          className={`${isEnglish ? 'text-[14px] md:text-[15px] tracking-wide italic' : 'text-[15.5px] md:text-[17px] tracking-wider'} text-gray-800`}
          style={{
            fontFamily: isEnglish
              ? "'Noto Serif', serif"
              : "'Noto Serif KR', 'Noto Serif', 'Noto Sans KR', serif",
            fontWeight: 500,
          }}
        >
          {section.heading}
        </h3>
      </div>

      {/* 본문 단락 */}
      <div className="flex flex-col gap-2 pl-3">
        {section.paragraphs.map((para, i) => (
          <p
            key={i}
            className={`${isEnglish ? 'text-[13.5px] md:text-[14.5px]' : 'text-[14.5px] md:text-[15.5px]'} text-gray-700 leading-[1.95] tracking-wide break-keep`}
            style={{
              fontFamily: isEnglish
                ? "'Noto Serif', serif"
                : "'Noto Serif KR', 'Noto Serif', 'Noto Sans KR', serif",
              fontWeight: 300,
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

export default function ArtistNotePage() {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden">
      {/* 배경 — knitting the light (2023), 화면에 고정 (스크롤 안 됨) */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}artworks/14.jpg)`,
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
        {/* 미세한 보라 톤 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(124,106,173,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* 스크롤 영역 — 텍스트만 스크롤됨 */}
      <div
        className="absolute inset-0 overflow-y-auto px-6 py-12 z-10"
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >

      <div className="max-w-2xl mx-auto flex flex-col items-center pb-16 relative z-10">
        {/* 상단 라벨 - 작가 노트 */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[18px] md:text-[20px] text-gray-700 tracking-[0.4em] mt-2 mb-2"
          style={{ fontFamily: "'Noto Sans KR', sans-serif", fontWeight: 500 }}
        >
          작 가 노 트
        </motion.h1>

        {/* 가는 라인 */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '40px' }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-[1px] bg-[#7c6aad]/40 mb-10"
        />

        {/* 한글 본문 - 섹션별 */}
        <div className="w-full flex flex-col gap-7">
          {koreanSections.map((section, i) => (
            <NoteSectionBlock
              key={`ko-${i}`}
              section={section}
              delayBase={1.0 + i * 0.15}
            />
          ))}
        </div>

        {/* 한글/영문 구분선 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex items-center gap-3 my-12"
        >
          <div className="flex-1 h-[1px] bg-[#7c6aad]/20" />
          <span
            className="text-[11px] text-gray-400 tracking-[0.4em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ARTIST  STATEMENT
          </span>
          <div className="flex-1 h-[1px] bg-[#7c6aad]/20" />
        </motion.div>

        {/* 영문 본문 - 섹션별 */}
        <div className="w-full flex flex-col gap-7">
          {englishSections.map((section, i) => (
            <NoteSectionBlock
              key={`en-${i}`}
              section={section}
              delayBase={0.1 + i * 0.1}
              isEnglish
            />
          ))}
        </div>

        {/* 가는 라인 */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '40px' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-[1px] bg-[#7c6aad]/40 mt-14 mb-6"
        />

        {/* 서명 */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#7c6aad]/40 text-[14px] font-light">—</span>
            <span
              className="text-[18px] md:text-[20px] text-gray-800 tracking-[0.2em]"
              style={{
                fontFamily: "'Noto Serif KR', 'Noto Serif', serif",
                fontWeight: 500,
              }}
            >
              양 리 애
            </span>
            <span className="text-[#7c6aad]/40 text-[14px] font-light">—</span>
          </div>
        </motion.div>

        {/* 보라색 도장 점 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'backOut' }}
          className="mt-5 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#7c6aad' }}
        />
      </div>
      </div>
    </div>
  );
}
