export default function PosterPage() {
  return (
    <div
      className="w-full h-full flex-shrink-0 flex items-center justify-center"
      style={{ backgroundColor: '#f5f1ec' }}
    >
      <p
        className="text-center leading-relaxed tracking-wide font-bold"

        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: '24px',
          color: '#2a2a2a',
        }}
      >
        한 가닥의 실로 빚는, <span style={{ fontSize: '28px', color: '#7c6aad' }}>껍데기들</span>
        <br />
        <span style={{ fontSize: '18px', color: '#666', fontWeight: 400 }}>
          양리애 작가의 설치예술 세계
        </span>
      </p>
    </div>
  );
}
