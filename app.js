/* ============================================================
   설레는 제주 수학여행 웹앱 – app.js
   (감성 여행 테마 & 고가독성 맞춤형 UI 로직)
   ============================================================ */

/* ---------- 1. 11개 섹션 마스터 데이터 ---------- */
const SECTIONS = [
  {
    id: 1,
    number: "01",
    title: "항공기 탑승 사전 안내",
    sub: "김해공항 집합 장소 및 수하물 반입 규정",
    icon: "✈️",
    category: "schedule",
    categoryLabel: "항공 및 집합",
    tags: ["김해공항", "1번 게이트", "수하물 규정", "학생증 필참"],
    file: "1.항공기 탑승 사전 안내.pdf",
    themePrimary: "#0284c7",
    themeBg: "#e0f2fe",
    render: renderSection1
  },
  {
    id: 2,
    number: "02",
    title: "일정표",
    sub: "3박 4일 전체 일정 한눈에 보기",
    icon: "📅",
    category: "schedule",
    categoryLabel: "전체 일정",
    tags: ["3박 4일", "A팀/B팀", "10.26~10.29", "제주도"],
    file: "2.일정표.pdf",
    themePrimary: "#0ea5e9",
    themeBg: "#e0f2fe",
    render: renderSection2
  },
  {
    id: 3,
    number: "03",
    title: "수학여행 세부 일정표",
    sub: "시간대별 세부 일정 및 항공편/방문 코스",
    icon: "⏱️",
    category: "schedule",
    categoryLabel: "세부 일정",
    tags: ["시간대별", "A/B팀 탭", "항공편 안내", "체험 코스"],
    file: "3.수학여행 세부 일정표.pdf",
    themePrimary: "#0d9488",
    themeBg: "#ccfbf1",
    render: renderSection3
  },
  {
    id: 4,
    number: "04",
    title: "식단표",
    sub: "일자별 맛있는 조식·중식·석식 메뉴 안내",
    icon: "🍱",
    category: "schedule",
    categoryLabel: "식단 안내",
    tags: ["애월스테이 글라", "담모라키친", "헤리티크 뷔페", "흑돼지"],
    file: "4.식단표.pdf",
    themePrimary: "#ea580c",
    themeBg: "#ffedd5",
    render: renderSection4
  },
  {
    id: 5,
    number: "05",
    title: "숙소 배치도 및 비상구",
    sub: "애월스테이 인 제주 층별 안내 및 대피로",
    icon: "🏨",
    category: "safety",
    categoryLabel: "숙소 안내",
    tags: ["애월스테이", "본관/별관", "비상구", "소화기 위치"],
    file: "5.숙소 배치도 및 비상구.pdf",
    themePrimary: "#7c3aed",
    themeBg: "#ede9fe",
    render: renderSection5
  },
  {
    id: 6,
    number: "06",
    title: "학생 유의 사항",
    sub: "즐겁고 안전한 여행을 위한 생활 수칙",
    icon: "📋",
    category: "safety",
    categoryLabel: "생활 수칙",
    tags: ["운동화 착용", "기본 질서", "숙소 에티켓", "안전제일"],
    file: "6.학생 유의 사항.pdf",
    themePrimary: "#e11d48",
    themeBg: "#ffe4e6",
    render: renderSection6
  },
  {
    id: 7,
    number: "07",
    title: "학생 준비물",
    sub: "내가 챙길 짐을 직접 체크하는 체크리스트",
    icon: "🎒",
    category: "safety",
    categoryLabel: "준비물 체크",
    tags: ["체크리스트", "필수 지참품", "반입 금지 물품", "멀미약"],
    file: "7.학생 준비물.pdf",
    themePrimary: "#059669",
    themeBg: "#d1fae5",
    render: renderSection7
  },
  {
    id: 8,
    number: "08",
    title: "현장체험학습 안전교육 자료",
    sub: "주제별 인덱스로 확인하는 안전 행동 요령",
    icon: "🦺",
    category: "safety",
    categoryLabel: "안전 교육",
    tags: ["목차 인덱스", "차량·항공 안전", "체험활동 안전", "응급처치"],
    file: "8.현장체험학습 안전교육 자료.pdf",
    themePrimary: "#b91c1c",
    themeBg: "#fee2e2",
    render: renderSection8
  },
  {
    id: 9,
    number: "09",
    title: "수학여행 활동지",
    sub: "나의 수학여행 기록장 & PDF 파일로 저장",
    icon: "📝",
    category: "record",
    categoryLabel: "학생 활동지",
    tags: ["체험 기록", "별점 평가", "자동 저장", "PDF 다운로드"],
    file: "9.수학여행 활동지.pdf",
    themePrimary: "#f97316",
    themeBg: "#ffedd5",
    featured: true,
    render: renderSection9
  },
  {
    id: 10,
    number: "10",
    title: "현장체험활동 장소별 안내 자료",
    sub: "12개 탐방지 상세 안내 및 공식 홈페이지 링크",
    icon: "🗺️",
    category: "place",
    categoryLabel: "장소별 링크",
    tags: ["9.81파크", "스누피가든", "만장굴", "공식 링크"],
    file: "10.현장체험활동 장소별 안내 자료.pdf",
    themePrimary: "#2563eb",
    themeBg: "#dbeafe",
    render: renderSection10
  },
  {
    id: 11,
    number: "11",
    title: "요양호자 및 특수교육대상 학생 안전사고 예방 수칙",
    sub: "맞춤형 편의 지원 및 비상사고 예방 가이드",
    icon: "🏥",
    category: "safety",
    categoryLabel: "배려 및 지원",
    tags: ["사전 동선 파악", "편의시설 확인", "상비약 지참", "안전망"],
    file: "11.요양호자 및 특수교육대상 학생 안전사고 예방 수칙.pdf",
    themePrimary: "#d97706",
    themeBg: "#fef3c7",
    render: renderSection11
  }
];

/* 현재 활성화된 섹션 객체 */
let currentSection = null;
let isPdfViewerVisible = false;

/* ---------- 2. 앱 초기화 & 카드 렌더링 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderCardGrid("all");
  setupFilterButtons();
});

function renderCardGrid(filter = "all") {
  const grid = document.getElementById("sectionGrid");
  grid.innerHTML = "";

  const filtered = filter === "all" ? SECTIONS : SECTIONS.filter(s => s.category === filter);

  filtered.forEach(sec => {
    const card = document.createElement("article");
    card.className = `trip-card ${sec.featured ? "featured-card" : ""}`;
    card.style.setProperty("--theme-primary", sec.themePrimary);
    card.style.setProperty("--theme-bg", sec.themeBg);
    card.style.setProperty("--theme-color", sec.themePrimary);

    card.innerHTML = `
      <div class="card-top-row">
        <span class="card-sec-badge">SECTION ${sec.number} • ${sec.categoryLabel}</span>
        <div class="card-arrow">➜</div>
      </div>
      <div class="card-main">
        <div class="card-icon-box">${sec.icon}</div>
        <div class="card-title-group">
          <h2 class="card-main-title">${sec.title}</h2>
          <p class="card-sub-info">${sec.sub}</p>
        </div>
      </div>
      <div class="card-footer-tags">
        ${sec.tags.map(t => `<span class="tag-item">#${t}</span>`).join("")}
      </div>
    `;

    card.addEventListener("click", () => openModal(sec));
    grid.appendChild(card);
  });
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCardGrid(btn.dataset.filter);
    });
  });
}

function quickOpen(sectionId) {
  const sec = SECTIONS.find(s => s.id === sectionId);
  if (sec) openModal(sec);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- 3. 모달 열기/닫기 및 PDF 토글 ---------- */
function openModal(sec) {
  currentSection = sec;
  isPdfViewerVisible = false;

  const overlay = document.getElementById("modalOverlay");
  const catEl = document.getElementById("modalCategory");
  const titleEl = document.getElementById("modalTitle");
  const bodyEl = document.getElementById("modalBody");
  const pdfBtn = document.getElementById("btnPdfToggle");
  const pdfLink = document.getElementById("btnPdfLink");

  catEl.textContent = `SECTION ${sec.number} • ${sec.categoryLabel}`;
  titleEl.innerHTML = `${sec.icon} ${sec.title}`;
  pdfBtn.classList.remove("active");
  pdfBtn.innerHTML = `미리보기`;

  const encodedFile = encodeURI(sec.file);

  if (pdfLink) {
    pdfLink.href = encodedFile;
    pdfLink.setAttribute("download", sec.file);
    pdfLink.setAttribute("title", `${sec.file} 새 창에서 원본 열기`);
  }

  // 상단 임베드 패널 (툴바 + 대체 링크 안내 + iframe)
  const pdfPanelHtml = `
    <div class="embedded-pdf-panel" id="embeddedPdfPanel">
      <div class="pdf-panel-toolbar">
        <span class="pdf-panel-filename">📄 ${sec.file}</span>
        <div class="pdf-panel-actions">
          <a href="${encodedFile}" target="_blank" rel="noopener noreferrer" class="pdf-panel-btn">새 탭에서 열기 ↗</a>
          <a href="${encodedFile}" download="${sec.file}" class="pdf-panel-btn">다운로드 ⬇</a>
        </div>
      </div>
      <div class="pdf-fallback-banner">
        ⚠️ 브라우저 환경에 따라 화면 내 미리보기가 보이지 않을 수 있습니다. 
        <a href="${encodedFile}" target="_blank" rel="noopener noreferrer"><strong>[새 탭에서 직접 열기 ↗]</strong></a> 또는 
        <a href="${encodedFile}" download="${sec.file}"><strong>[파일 다운로드 ⬇]</strong></a>를 이용하세요.
      </div>
      <iframe src="${encodedFile}" title="${sec.title} 원본"></iframe>
    </div>
  `;

  // 모달 본문 하단 배포 원본 파일 하이퍼링크 카드
  const sourceCardHtml = `
    <div class="modal-source-card">
      <div class="modal-source-info">
        <span class="modal-source-icon">📎</span>
        <div>
          <div class="modal-source-title">배포 원본 PDF 파일</div>
          <div class="modal-source-name">${sec.file}</div>
        </div>
      </div>
      <div class="modal-source-buttons">
        <a href="${encodedFile}" target="_blank" rel="noopener noreferrer" class="modal-source-btn primary">
          📄 새 창에서 원본 열기 ↗
        </a>
        <a href="${encodedFile}" download="${sec.file}" class="modal-source-btn secondary">
          💾 다운로드 ⬇
        </a>
      </div>
    </div>
  `;

  bodyEl.innerHTML = pdfPanelHtml + sec.render() + sourceCardHtml;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // 모달 내부 컴포넌트 초기화 콜백
  if (sec.id === 3) initSection3();
  if (sec.id === 4) initSection4();
  if (sec.id === 7) initSection7();
  if (sec.id === 8) initSection8();
  if (sec.id === 9) initSection9();
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById("modalOverlay")) {
    closeModal();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function togglePdfViewer() {
  const panel = document.getElementById("embeddedPdfPanel");
  const btn = document.getElementById("btnPdfToggle");
  if (!panel) return;

  isPdfViewerVisible = !isPdfViewerVisible;
  if (isPdfViewerVisible) {
    panel.classList.add("visible");
    btn.classList.add("active");
    btn.innerHTML = `✕ 닫기`;
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    panel.classList.remove("visible");
    btn.classList.remove("active");
    btn.innerHTML = `미리보기`;
  }
}

function showToast(msg) {
  const toast = document.getElementById("toastMessage");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ============================================================
   4. 각 섹션별 고가독성 맞춤형 렌더링 함수들
   ============================================================ */

/* ── [Section 1] 항공기 탑승 사전 안내 ─────────────────────── */
function renderSection1() {
  return `
    <div class="notice-box">
      🛫 <strong>김해공항 집합 안내</strong>: 공항 도착 후 지정된 집합 장소로 신속하게 모여 인솔 선생님의 출석 확인을 받으세요!
    </div>

    <!-- 비행기 탑승권 스타일 카드 -->
    <div class="boarding-pass">
      <div class="bp-header">
        <div class="bp-route">
          <span>김해 (PUS)</span>
          <span class="bp-arrow">✈️ ➜</span>
          <span>제주 (CJU)</span>
        </div>
        <span class="bp-flight-badge">제주항공 전세편</span>
      </div>

      <div class="bp-grid">
        <div class="bp-item">
          <div class="bp-label">출발 집합 장소</div>
          <div class="bp-value">국내선 2층 1번 게이트 앞</div>
        </div>
        <div class="bp-item">
          <div class="bp-label">A팀 집합 시간 (2~8반)</div>
          <div class="bp-value" style="color:#0284c7">13:00 (오후 1시)</div>
        </div>
        <div class="bp-item">
          <div class="bp-label">B팀 집합 시간 (1, 9, 10반)</div>
          <div class="bp-value" style="color:#0284c7">14:00 (오후 2시)</div>
        </div>
        <div class="bp-item">
          <div class="bp-label">탑승 필수 신분증</div>
          <div class="bp-value" style="color:#dc2626">학생증 / 청소년증</div>
        </div>
      </div>
      <p style="font-size:0.83rem;color:#64748b;margin-top:6px;">
        ※ 신분증은 반드시 생년월일이 명시되어 있어야 하며, 본인이 직접 소지해야 합니다.
      </p>
    </div>

    <!-- 수하물 규정 인포그래픽 카드 -->
    <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:8px;">🧳 수하물 위탁 및 기내 반입 규정</h3>
    <div class="baggage-rule-grid">
      <div class="baggage-card allowed">
        <div class="baggage-title">🎒 반드시 기내로 휴대할 물품</div>
        <ul class="baggage-list">
          <li><strong>보조배터리</strong> (위탁 수하물 절대 불가, 단락 방지 보관)</li>
          <li>학생증, 신분증, 지갑 및 귀중품</li>
          <li>비행 중 복용할 개인 상비약</li>
          <li>카메라, 태블릿, 노트북 등 고가 전자기기</li>
        </ul>
      </div>

      <div class="baggage-card forbidden">
        <div class="baggage-title">🚫 위탁/기내 반입 절대 금지 물품</div>
        <ul class="baggage-list">
          <li><strong>무선 고데기</strong> (배터리 일체형 절대 소지 금지)</li>
          <li>가스 라이터, 스프레이류 (수하물 가방 보관 불가)</li>
          <li>칼, 가위, 흉기류 등 위험 물품</li>
          <li>담배, 전자담배, 주류 등 학생 신분 위반 물품</li>
        </ul>
      </div>
    </div>

    <div style="margin-top:16px;background:#fefce8;border:1px solid #fef08a;padding:12px 16px;border-radius:10px;font-size:0.85rem;color:#854d0e;">
      💡 <strong>주의사항</strong>: 기내용 캐리어도 공항 수속 혼잡 예방을 위해 모두 위탁 수하물로 부칩니다.
    </div>
  `;
}

/* ── [Section 2] 일정표 (전체 일정 요약) ─────────────────────── */
function renderSection2() {
  return `
    <div class="notice-box">
      🗓️ <strong>3박 4일 일정 한눈에 보기</strong>: 2026.10.26(월) ~ 10.29(목) 동안 진행되는 팀별 전체 개요입니다.
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px,1fr));gap:16px;margin-bottom:20px;">
      <div style="background:#f0f9ff;border:1.5px solid #bae6fd;border-radius:16px;padding:18px;">
        <h3 style="color:#0369a1;font-size:1.1rem;font-weight:800;margin-bottom:12px;">🛫 제 1 일차 (10/26 월)</h3>
        <p style="font-size:0.88rem;color:#334155;line-height:1.7;">
          • <strong>김해공항 집결</strong> (국내선 2층 1번 게이트 앞)<br>
          • <strong>김해공항 출발 ➜ 제주공항 도착</strong><br>
          • <strong>이호테우 해수욕장</strong> 말등대 산책<br>
          • <strong>동문재래시장</strong> 탐방 및 자유 석식<br>
          • <strong>애월스테이 인 제주</strong> 체크인 및 취침
        </p>
      </div>

      <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:16px;padding:18px;">
        <h3 style="color:#15803d;font-size:1.1rem;font-weight:800;margin-bottom:12px;">🏎️ 제 2 일차 (10/27 화)</h3>
        <p style="font-size:0.88rem;color:#334155;line-height:1.7;">
          • <strong>A팀</strong>: 9.81파크(레이싱+서바이벌) ➜ 제트보트 체험 ➜ 담모라키친 뷔페 ➜ 아트서커스 관람 ➜ 아르떼뮤지엄<br>
          • <strong>B팀</strong>: 사려니숲길 ➜ 제주 동화마을 ➜ 삼신할망 흑돼지 ➜ 스누피가든 ➜ 만장굴 탐방<br>
          • 숙소 복귀 후 글라 레스토랑 석식
        </p>
      </div>

      <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:16px;padding:18px;">
        <h3 style="color:#c2410c;font-size:1.1rem;font-weight:800;margin-bottom:12px;">🎉 제 3 일차 (10/28 수)</h3>
        <p style="font-size:0.88rem;color:#334155;line-height:1.7;">
          • A팀과 B팀 상호 코스 교차 체험 진행!<br>
          • <strong>특식 석식</strong>: 헤리티크제주 프리미엄 뷔페!<br>
          • <strong>레크레이션 페스티벌</strong> (헤리티크 컨벤션홀)<br>
          • 야간 간식: BHC 치킨 & 음료 제공!
        </p>
      </div>

      <div style="background:#fdf2f8;border:1.5px solid #fbcfe8;border-radius:16px;padding:18px;">
        <h3 style="color:#be185d;font-size:1.1rem;font-weight:800;margin-bottom:12px;">🌺 제 4 일차 (10/29 목)</h3>
        <p style="font-size:0.88rem;color:#334155;line-height:1.7;">
          • <strong>카멜리아 힐 & 천제연 폭포</strong> 관람<br>
          • <strong>늘봄식당</strong> 소불고기전골정식 점심<br>
          • <strong>제주 4·3 평화공원 및 기념관</strong> 역사 탐방<br>
          • 제주공항 출발 ➜ 김해공항 도착 후 해산
        </p>
      </div>
    </div>
  `;
}

/* ── [Section 3] 수학여행 세부 일정표 (타임라인) ──────────────── */
const DETAILED_SCHEDULE = {
  teamA: {
    name: "A팀 (2, 3, 4, 5, 6, 7, 8반)",
    days: [
      {
        day: "Day 1 (10/26 월)",
        items: [
          { time: "13:00", title: "김해공항 집결", desc: "국내선 2층 1번 게이트 앞 인원 점검" },
          { time: "14:55 ~ 15:55", title: "김해공항 출발 ➜ 제주공항 도착", desc: "제주항공 507편 탑승" },
          { time: "16:40", title: "제주공항 도착 및 차량 탑승", desc: "지정 관광버스 탑승" },
          { time: "16:50 ~ 17:30", title: "이호테우 해수욕장", desc: "말등대 산책 및 포토 타임" },
          { time: "17:30 ~ 19:30", title: "동문재래시장 자유탐방", desc: "자유 석식 (개별 경비)" },
          { time: "20:30", title: "애월스테이 인 제주 도착", desc: "체크인, 객실 점호 후 취침" }
        ]
      },
      {
        day: "Day 2 (10/27 화)",
        items: [
          { time: "06:30 ~ 07:50", title: "기상 및 조식 (글라 레스토랑)", desc: "07:50 숙소 로비 출발" },
          { time: "08:30 ~ 11:30", title: "9.81 파크 제주", desc: "무동력 레이싱 2회 + 실내 레이저 서바이벌 1회" },
          { time: "12:20 ~ 13:00", title: "제트보트 해양 익스트림 체험", desc: "구명조끼 필수 착용" },
          { time: "13:30 ~ 14:20", title: "중식 (담모라키친)", desc: "등심돈까스/순살치킨 등 뷔페식" },
          { time: "14:40 ~ 16:00", title: "아트서커스 공연 관람", desc: "실내 화려한 아크로바틱 공연" },
          { time: "16:30 ~ 17:30", title: "아르떼 뮤지엄", desc: "몰입형 미디어아트 전시 관람" },
          { time: "18:00 ~", title: "숙소 도착 및 석식", desc: "글라 레스토랑 저녁 식사 및 휴식" }
        ]
      },
      {
        day: "Day 3 (10/28 수)",
        items: [
          { time: "07:00 ~ 08:30", title: "기상 및 조식", desc: "글라 레스토랑 식사 후 08:30 출발" },
          { time: "09:30 ~ 11:00", title: "사려니숲길 힐링 산책", desc: "삼나무 숲길 자연 생태 탐방" },
          { time: "11:20 ~ 12:40", title: "제주 동화마을", desc: "자연 테마공원 및 포토존" },
          { time: "13:00 ~ 13:50", title: "중식 (삼신할망밥상)", desc: "제주 흑돼지 주물럭 정식" },
          { time: "14:00 ~ 15:30", title: "스누피 가든", desc: "피너츠 테마 감성 정원 관람" },
          { time: "15:50 ~ 16:50", title: "만장굴", desc: "유네스코 세계자연유산 용암동굴 탐방" },
          { time: "18:00 ~ 19:30", title: "특급 석식 (헤리티크제주)", desc: "초밥/흑돈구이/디저트 프리미엄 뷔페" },
          { time: "19:40 ~ 20:30", title: "레크레이션 페스티벌", desc: "헤리티크 컨벤션홀 (장기자랑/게임)" },
          { time: "21:00", title: "숙소 도착 및 야간 간식", desc: "BHC 치킨 & 음료 제공, 휴식" }
        ]
      },
      {
        day: "Day 4 (10/29 목)",
        items: [
          { time: "07:00 ~ 09:00", title: "기상, 조식 및 체크아웃", desc: "짐 정리 후 09:00 버스 탑승" },
          { time: "09:40 ~ 11:00", title: "카멜리아 힐", desc: "동백꽃 수목원 관람" },
          { time: "11:20 ~ 12:40", title: "천제연 폭포", desc: "주상절리 절벽과 에메랄드 폭포" },
          { time: "13:30 ~ 14:30", title: "중식 (늘봄식당)", desc: "소불고기전골정식" },
          { time: "15:00 ~ 16:20", title: "제주 4·3 평화공원 및 기념관", desc: "역사 추모 및 기념관 관람" },
          { time: "17:00", title: "제주공항 도착 및 수속", desc: "탑승 수속 및 석식(햄버거)" },
          { time: "19:00 ~ 20:00", title: "제주공항 출발 ➜ 김해공항 도착", desc: "제주항공 512편 탑승, 안전 귀가" }
        ]
      }
    ]
  },
  teamB: {
    name: "B팀 (1, 9, 10반)",
    days: [
      {
        day: "Day 1 (10/26 월)",
        items: [
          { time: "14:00", title: "김해공항 집결", desc: "국내선 2층 1번 게이트 앞" },
          { time: "15:40 ~ 16:40", title: "김해공항 출발 ➜ 제주공항 도착", desc: "제주항공 509편 탑승" },
          { time: "17:20", title: "제주공항 도착 및 차량 탑승", desc: "지정 관광버스 탑승" },
          { time: "17:50 ~ 19:50", title: "동문재래시장 탐방 및 석식", desc: "자유 식사 (개별 경비)" },
          { time: "20:10", title: "애월스테이 인 제주 도착", desc: "체크인 및 휴식" }
        ]
      },
      {
        day: "Day 2 (10/27 화)",
        items: [
          { time: "07:00 ~ 08:30", title: "기상 및 조식 (글라)", desc: "08:30 출발" },
          { time: "09:30 ~ 11:00", title: "사려니숲길 힐링 산책", desc: "삼나무 숲길 탐방" },
          { time: "11:20 ~ 12:40", title: "제주 동화마을", desc: "테마파크 관람" },
          { time: "13:00 ~ 13:50", title: "중식 (삼신할망밥상)", desc: "제주 흑돼지 주물럭" },
          { time: "14:00 ~ 15:30", title: "스누피 가든", desc: "피너츠 테마 감성 정원" },
          { time: "15:50 ~ 16:50", title: "만장굴", desc: "세계자연유산 용암동굴" },
          { time: "18:20 ~", title: "숙소 도착 및 석식", desc: "글라 레스토랑 식사 및 휴식" }
        ]
      },
      {
        day: "Day 3 (10/28 수)",
        items: [
          { time: "06:30 ~ 07:50", title: "기상 및 조식", desc: "07:50 숙소 출발" },
          { time: "08:30 ~ 11:30", title: "9.81 파크 제주", desc: "무동력 레이싱 2회 + 서바이벌 1회" },
          { time: "12:00 ~ 12:50", title: "중식 (담모라키친)", desc: "등심돈까스 등 뷔페식" },
          { time: "13:20 ~ 14:00", title: "제트보트 체험", desc: "익스트림 보트" },
          { time: "14:40 ~ 16:00", title: "아트서커스 공연 관람", desc: "아크로바틱 공연" },
          { time: "16:30 ~ 17:30", title: "아르떼 뮤지엄", desc: "미디어아트 전시 관람" },
          { time: "18:00 ~ 19:30", title: "특급 석식 (헤리티크제주)", desc: "초밥/흑돈구이 뷔페" },
          { time: "19:40 ~ 20:30", title: "레크레이션 페스티벌", desc: "헤리티크 컨벤션홀" },
          { time: "21:00", title: "숙소 도착 및 야간 간식", desc: "BHC 치킨 & 음료 제공" }
        ]
      },
      {
        day: "Day 4 (10/29 목)",
        items: [
          { time: "07:00 ~ 09:00", title: "기상, 조식 및 체크아웃", desc: "09:00 출발" },
          { time: "09:40 ~ 11:00", title: "천제연 폭포", desc: "3단 폭포 관람" },
          { time: "11:20 ~ 12:40", title: "카멜리아 힐", desc: "동백꽃 정원 관람" },
          { time: "13:30 ~ 14:30", title: "중식 (늘봄식당)", desc: "소불고기전골정식" },
          { time: "15:00 ~ 16:20", title: "제주 4·3 평화공원 및 기념관", desc: "역사 추모 및 기념관 관람" },
          { time: "17:10 ~ 18:00", title: "이호테우 해수욕장", desc: "말등대 산책" },
          { time: "18:10", title: "공항 도착 및 석식(햄버거)", desc: "수속 진행" },
          { time: "19:50 ~ 20:55", title: "제주공항 출발 ➜ 김해공항 도착", desc: "제주항공 514편 탑승" }
        ]
      }
    ]
  }
};

function renderSection3() {
  return `
    <div class="team-tab-bar">
      <button class="team-tab-btn active" id="tabTeamA" onclick="switchTeam('teamA')">
        🅰️ A팀 (2, 3, 4, 5, 6, 7, 8반)
      </button>
      <button class="team-tab-btn" id="tabTeamB" onclick="switchTeam('teamB')">
        🅱️ B팀 (1, 9, 10반)
      </button>
    </div>

    <div id="timelineContainer">
      <!-- 동적 타임라인 렌더링 -->
    </div>
  `;
}

function initSection3() {
  switchTeam("teamA");
}

function switchTeam(teamKey) {
  const data = DETAILED_SCHEDULE[teamKey];
  document.getElementById("tabTeamA").classList.toggle("active", teamKey === "teamA");
  document.getElementById("tabTeamB").classList.toggle("active", teamKey === "teamB");

  const container = document.getElementById("timelineContainer");
  if (!container) return;

  container.innerHTML = data.days.map(d => `
    <div class="day-container">
      <div class="day-header">
        <span class="day-badge">${d.day.split(" ")[0]}</span>
        <span class="day-date">${d.day}</span>
      </div>
      <div class="timeline">
        ${d.items.map(item => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-time">⏰ ${item.time}</div>
              <div class="timeline-title">${item.title}</div>
              <div class="timeline-desc">${item.desc}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ── [Section 4] 식단표 ──────────────────────────────────────── */
const MEAL_DATA = {
  day1: {
    date: "10/26 (월) 1일차",
    meals: [
      {
        type: "석식",
        typeClass: "meal-type-dinner",
        restaurant: "동문재래시장",
        menu: "자유식 (개별 식사 / 야시장 먹거리골목 및 특산 분식, 떡볶이, 흑돼지김치말이 등 다양한 맛집 탐방)"
      }
    ]
  },
  day2: {
    date: "10/27 (화) 2일차",
    meals: [
      {
        type: "조식",
        typeClass: "meal-type-breakfast",
        restaurant: "애월스테이 인 제주 레스토랑 '글라'",
        menu: "HOT: 제육볶음, 그릴 소시지, 스파게티, 스크램블, 감자튀김, 소고기무국, 전복죽, 밥 / KOREAN: 고사리나물, 어묵무침, 오징어젓갈, 김치, 깻잎지, 메추리알 장조림 / COLD: 양상추·방울토마토 샐러드, 요거트, 시리얼, 모닝빵, 식빵, 감귤주스, 과일"
      },
      {
        type: "중식",
        typeClass: "meal-type-lunch",
        restaurant: "담모라 키친 (뷔페식)",
        menu: "등심돈까스, 생선까스, 순살치킨, 롤빵, 미소국, 양송이스프, 로제밀떡볶이, 타코야끼, 핫미트볼, 깐풍기, 돼지수육 & 쌈 4종 등"
      },
      {
        type: "석식",
        typeClass: "meal-type-dinner",
        restaurant: "애월스테이 레스토랑 '글라'",
        menu: "돼지갈비찜, 탕수육, 치킨까스, 김말이튀김, 소고기무국, 나물 2종, 단호박 샐러드, 주스 등"
      }
    ]
  },
  day3: {
    date: "10/28 (수) 3일차",
    meals: [
      {
        type: "조식",
        typeClass: "meal-type-breakfast",
        restaurant: "애월스테이 인 제주 '글라'",
        menu: "제육볶음, 스크램블, 소시지, 전복죽, 시리얼, 토스트, 과일 등 (뷔페식)"
      },
      {
        type: "중식",
        typeClass: "meal-type-lunch",
        restaurant: "삼신할망밥상",
        menu: "제주 흑돼지 주물럭 정식, 콩나물무침, 어묵볶음, 양파절임, 무채나물, 된장국, 김치, 흰쌀밥"
      },
      {
        type: "석식 (특식)",
        typeClass: "meal-type-dinner",
        restaurant: "헤리티크제주 (초특급 프리미엄 뷔페)",
        menu: "초밥(광어/연어/참치), 문어숙회, 관자세비체, 흑돈철판구이, 흑돈찹스테이크, 볼케이노 핫치킨, 칠리새우, 전복볶음밥, 크림파스타, 고기국수, 냉모밀, 타르트, 조각케이크, 크로플 등"
      },
      {
        type: "야간 간식",
        typeClass: "meal-type-dinner",
        restaurant: "숙소 배부",
        menu: "🍗 BHC 치킨 & 시원한 음료수"
      }
    ]
  },
  day4: {
    date: "10/29 (목) 4일차",
    meals: [
      {
        type: "조식",
        typeClass: "meal-type-breakfast",
        restaurant: "애월스테이 인 제주 '글라'",
        menu: "한식 및 양식 조식 뷔페"
      },
      {
        type: "중식",
        typeClass: "meal-type-lunch",
        restaurant: "늘봄식당",
        menu: "정갈한 소불고기전골정식, 쌀밥, 김치, 콩나물, 미역초무침 등"
      },
      {
        type: "석식",
        typeClass: "meal-type-dinner",
        restaurant: "제주공항",
        menu: "든든하고 맛있는 롯데리아 햄버거 세트"
      }
    ]
  }
};

function renderSection4() {
  return `
    <div class="meal-day-tabs" id="mealDayTabs">
      <button class="meal-day-btn active" onclick="switchMealDay('day1')">1일차 (10/26)</button>
      <button class="meal-day-btn" onclick="switchMealDay('day2')">2일차 (10/27)</button>
      <button class="meal-day-btn" onclick="switchMealDay('day3')">3일차 (10/28)</button>
      <button class="meal-day-btn" onclick="switchMealDay('day4')">4일차 (10/29)</button>
    </div>

    <div id="mealCardsContainer">
      <!-- 동적 식단 카드 렌더링 -->
    </div>

    <div style="margin-top:20px;background:#fff8e1;border-left:4px solid #f59e0b;padding:12px 16px;border-radius:8px;font-size:0.85rem;color:#78350f;">
      ⚠️ <strong>알레르기 안내</strong>: 특정 식자재(갑각류, 견과류, 메밀, 우유 등)에 알레르기가 있는 학생은 식사 전 반드시 선생님께 알리고 대체식을 확인하세요.
    </div>
  `;
}

function initSection4() {
  switchMealDay("day1");
}

function switchMealDay(dayKey) {
  const data = MEAL_DATA[dayKey];
  const buttons = document.querySelectorAll(".meal-day-btn");
  buttons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(dayKey));
  });

  const container = document.getElementById("mealCardsContainer");
  if (!container) return;

  container.innerHTML = `
    <div style="font-weight:800;font-size:1rem;color:#0f172a;margin-bottom:12px;">🍴 ${data.date} 식단</div>
    <div class="meal-cards-grid">
      ${data.meals.map(m => `
        <div class="meal-card">
          <div class="meal-card-header">
            <span class="meal-type-badge ${m.typeClass}">${m.type}</span>
            <span class="meal-restaurant">${m.restaurant}</span>
          </div>
          <div class="meal-items-list">${m.menu}</div>
        </div>
      `).join("")}
    </div>
  `;
}

/* ── [Section 5] 숙소 배치도 및 비상구 ─────────────────────── */
function renderSection5() {
  return `
    <div class="hotel-card">
      <div class="hotel-name">🏨 애월스테이 인 제주 (Aewol Stay in Jeju)</div>
      <div class="hotel-info-row">📍 <strong>주소</strong>: 제주 제주시 애월읍 애월해안로 708</div>
      <div class="hotel-info-row">📞 <strong>대표 전화</strong>: 064-713-5000</div>
      <a class="hotel-call-btn" href="tel:064-713-5000">📞 숙소에 전화 걸기</a>
    </div>

    <h3 style="font-size:1.05rem;font-weight:800;color:#0f172a;margin-bottom:10px;">🏢 층별 객실 배치 및 비상구 안내</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px;">
      <div style="background:#f8fafc;padding:16px;border-radius:12px;border:1px solid #e2e8f0;">
        <h4 style="font-weight:800;color:#0284c7;margin-bottom:8px;">[본관 구성]</h4>
        <ul style="font-size:0.86rem;line-height:1.7;color:#334155;padding-left:18px;">
          <li>본관 1층: 프론트 로비 및 레스토랑 '글라'</li>
          <li>본관 2층: 객실 및 중앙/동측 비상구</li>
          <li>본관 3층: 객실 및 중앙 비상계단</li>
          <li>본관 5층: 객실 및 비상 대피로</li>
        </ul>
      </div>
      <div style="background:#f8fafc;padding:16px;border-radius:12px;border:1px solid #e2e8f0;">
        <h4 style="font-weight:800;color:#0284c7;margin-bottom:8px;">[별관 구성]</h4>
        <ul style="font-size:0.86rem;line-height:1.7;color:#334155;padding-left:18px;">
          <li>별관 1층: 객실 및 로비(전자레인지), 비상계단</li>
          <li>별관 2층: 객실 및 비상계단</li>
          <li>별관 3층: 객실 및 서측 대피로</li>
        </ul>
      </div>
    </div>

    <div style="background:#fef2f2;border:1px solid #fecaca;padding:16px;border-radius:12px;">
      <h4 style="font-weight:800;color:#dc2626;margin-bottom:6px;">🚨 비상시 필수 대피 수칙</h4>
      <p style="font-size:0.88rem;color:#7f1d1d;line-height:1.6;">
        • <strong>소화기</strong>는 모든 객실 및 각 층 복도 비상구 옆에 비치되어 있습니다.<br>
        • 입실 즉시 내 방에서 가장 가까운 <strong>비상구 및 비상계단 위치</strong>를 직접 걸어서 확인하세요.<br>
        • 화재 경보 시 <strong>절대 엘리베이터를 타지 말고</strong>, 젖은 수건으로 입과 코를 막고 계단으로 대피합니다.
      </p>
    </div>
  `;
}

/* ── [Section 6] 학생 유의 사항 ────────────────────────────── */
function renderSection6() {
  return `
    <div class="notice-box">
      🤝 <strong>모두가 행복한 수학여행!</strong> 지켜야 할 기본 에티켓과 규칙을 꼭 기억합시다.
    </div>

    <div style="display:flex;flex-direction:column;gap:14px;">
      <div style="border:1.5px solid #e2e8f0;border-radius:14px;padding:16px;background:#ffffff;">
        <h4 style="font-weight:800;color:#0f172a;margin-bottom:6px;">👟 1. 복장 및 신발 규정</h4>
        <p style="font-size:0.88rem;color:#475569;line-height:1.6;">
          • 활동량이 많으므로 반드시 <strong>편안한 운동화</strong>를 착용합니다.<br>
          • 슬리퍼, 구두, 굽 있는 신발, 짧은 치마는 체험 활동 참여가 불가능합니다.
        </p>
      </div>

      <div style="border:1.5px solid #e2e8f0;border-radius:14px;padding:16px;background:#ffffff;">
        <h4 style="font-weight:800;color:#0f172a;margin-bottom:6px;">🚫 2. 기본 생활 질서 및 금지 행위</h4>
        <p style="font-size:0.88rem;color:#475569;line-height:1.6;">
          • 음주, 흡연, 도박, 학교폭력은 절대 금지되며 위반 시 교칙에 따라 즉시 징계 조치됩니다.<br>
          • 버스 및 항공기 내에서는 좌석 안전띠를 반드시 착용하고 자리 이동을 금지합니다.
        </p>
      </div>

      <div style="border:1.5px solid #e2e8f0;border-radius:14px;padding:16px;background:#ffffff;">
        <h4 style="font-weight:800;color:#0f172a;margin-bottom:6px;">🏨 3. 숙소 생활 에티켓</h4>
        <p style="font-size:0.88rem;color:#475569;line-height:1.6;">
          • 배정된 방을 임의로 변경하거나 이탈할 수 없습니다.<br>
          • 야간 무단 외출 및 타 객실 방문은 엄격히 금지됩니다.<br>
          • 친구의 노출 사진을 찍거나 장난을 치는 행위는 엄격히 금지됩니다.<br>
          • 비상 상황(환자 발생, 기물 파손 등) 발생 시 즉시 인솔 선생님께 연락합니다.
        </p>
      </div>

      <div style="border:1.5px solid #e2e8f0;border-radius:14px;padding:16px;background:#ffffff;">
        <h4 style="font-weight:800;color:#0f172a;margin-bottom:6px;">🎭 4. 공연 관람 및 레크레이션 예절</h4>
        <p style="font-size:0.88rem;color:#475569;line-height:1.6;">
          • 공연장에서는 질서를 지켜 지정 좌석에 착석하고, 무단 이탈을 하지 않습니다.<br>
          • 공연 중 휴대폰 사용, 음식물 섭취 및 큰 소리로 떠드는 행위를 자제합니다.
        </p>
      </div>
    </div>
  `;
}

/* ── [Section 7] 학생 준비물 (체크리스트) ──────────────────── */
const CHECKLIST_ITEMS = [
  { id: "c1", text: "신분증 / 학생증 (생년월일 표기 필수!)", required: true },
  { id: "c2", text: "편안한 옷 (여벌 옷, 속옷, 양말 3박 4일분)", required: true },
  { id: "c3", text: "편안한 운동화 착용 (슬리퍼/구두 불가)", required: true },
  { id: "c4", text: "개인 세면도구 (칫솔, 치약, 수건, 샴푸 등)", required: true },
  { id: "c5", text: "개인 상비약 (멀미약, 감기약, 소화제 등)", required: true },
  { id: "c6", text: "보조배터리 (반드시 기내 휴대!)", required: true },
  { id: "c7", text: "접이식 우산 또는 비옷", required: true },
  { id: "c8", text: "간단한 필기도구 및 개인 용돈", required: false },
  { id: "c9", text: "따뜻한 겉옷/외투 (아침·저녁 쌀쌀함 대비)", required: false },
  { id: "c10", text: "스마트폰 충전기 및 이어폰", required: false }
];

function renderSection7() {
  return `
    <div class="checklist-status-bar">
      <span>🎒 내 가방 속 준비물 챙기기</span>
      <span class="checklist-progress-text" id="checkProgressText">0 / 10 챙김</span>
    </div>

    <div class="checklist-group-title">✅ 필수 & 권장 준비물 목록 (터치해서 체크하세요)</div>
    <div id="checklistContainer">
      <!-- 동적 체크리스트 생성 -->
    </div>

    <div style="margin-top:20px;background:#fee2e2;border:1px solid #fecaca;padding:16px;border-radius:12px;">
      <h4 style="font-weight:800;color:#991b1b;margin-bottom:6px;">🚫 짐 쌀 때 절대 가져오면 안 되는 물품!</h4>
      <p style="font-size:0.86rem;color:#7f1d1d;line-height:1.6;">
        • <strong>무선 고데기</strong> (배터리 일체형 절대 불가)<br>
        • 가스 라이터, 칼, 가위 등 위험 도구<br>
        • 담배, 전자담배, 주류, 화투, 카드 등 학생 신분에 어긋나는 물품<br>
        • 분실 위험이 큰 과도한 현금이나 고가 귀중품
      </p>
    </div>
  `;
}

function initSection7() {
  const container = document.getElementById("checklistContainer");
  if (!container) return;

  const savedChecks = JSON.parse(localStorage.getItem("trip_checklist_state") || "{}");

  container.innerHTML = CHECKLIST_ITEMS.map(item => {
    const isChecked = !!savedChecks[item.id];
    return `
      <div class="check-item-row ${isChecked ? "checked" : ""}" id="row_${item.id}" onclick="toggleCheckItem('${item.id}')">
        <input type="checkbox" class="check-item-checkbox" id="chk_${item.id}" ${isChecked ? "checked" : ""} onclick="event.stopPropagation(); toggleCheckItem('${item.id}')">
        <span class="check-item-text">${item.required ? "<span style='color:#dc2626'>[필수]</span> " : ""}${item.text}</span>
      </div>
    `;
  }).join("");

  updateCheckProgress();
}

function toggleCheckItem(id) {
  const chk = document.getElementById(`chk_${id}`);
  const row = document.getElementById(`row_${id}`);
  if (!chk || !row) return;

  const current = chk.checked;
  chk.checked = !current;
  row.classList.toggle("checked", chk.checked);

  // 저장
  const savedChecks = JSON.parse(localStorage.getItem("trip_checklist_state") || "{}");
  savedChecks[id] = chk.checked;
  localStorage.setItem("trip_checklist_state", JSON.stringify(savedChecks));

  updateCheckProgress();
}

function updateCheckProgress() {
  const total = CHECKLIST_ITEMS.length;
  const savedChecks = JSON.parse(localStorage.getItem("trip_checklist_state") || "{}");
  const checkedCount = Object.values(savedChecks).filter(Boolean).length;
  const label = document.getElementById("checkProgressText");
  if (label) {
    label.textContent = `${checkedCount} / ${total} 챙김 (${Math.round((checkedCount / total) * 100)}%)`;
  }
}

/* ── [Section 8] 현장체험학습 안전교육 자료 (인덱스) ────────── */
const SAFETY_TOPICS_DETAILED = [
  {
    id: "safe-bus",
    icon: "🚌",
    name: "차량 이동 안전",
    title: "관광버스 & 도로 이동 안전 수칙",
    rules: [
      "버스 탑승 후 목적지 도착할 때까지 반드시 모든 좌석 안전띠 착용",
      "주행 중 좌석에서 일어나거나 통로를 걸어 다니는 행위 절대 금지",
      "차창 밖으로 손이나 머리를 내밀지 않기 및 쓰레기 투기 금지",
      "버스 내 화재 발생 시: 비상 탈출 망치로 유리창 모서리를 깨고 신속 탈출",
      "길을 걸을 때 스마트폰 사용 금지 (주변 차량 및 보행자 안전사고 예방)"
    ]
  },
  {
    id: "safe-plane",
    icon: "✈️",
    name: "항공기 탑승 안전",
    title: "항공기 탑승 및 비행 중 안전 수칙",
    rules: [
      "기내 승무원의 안내 방송 및 비상 탈출 안내 영상 집중 시청",
      "이착륙 시 좌석 벨트 착용 및 전자기기 비행기 모드 설정 준수",
      "비상구 좌석 승객은 비상시 승무원 보조 의무 숙지",
      "기내 난동 및 승무원 업무 방해 행위는 항공보안법에 따라 엄중 처벌",
      "체공 중 건조하므로 충분한 수분 섭취 및 가벼운 스트레칭 권장"
    ]
  },
  {
    id: "safe-hotel",
    icon: "🏨",
    name: "숙소 생활 안전",
    title: "숙소 내 화재 예방 및 비상 대피",
    rules: [
      "체크인 즉시 객실 비상 대피도와 완강기, 비상구 위치 확인",
      "객실 내 전열기구(고데기 등) 방치 금지 및 금연 절대 준수",
      "화재 경보 시 즉시 계단을 통해 건물 밖으로 대피 (엘리베이터 탑승 절대 금지)",
      "낯선 사람이 문을 두드릴 경우 함부로 열지 말고 인터폰으로 확인",
      "야간 취침 시 객실 문 이중 잠금장치 설정"
    ]
  },
  {
    id: "safe-activity",
    icon: "🏎️",
    name: "체험활동 안전",
    title: "9.81파크 레이싱 & 제트보트 체험 안전",
    rules: [
      "9.81파크 무동력 레이싱: 굽 없는 앞뒤 막힌 운동화 필수 (슬리퍼 착용 시 탑승 불가)",
      "레이싱 주행 중 셀카봉 및 스마트폰 촬영 절대 금지 (양손으로 핸들 조작)",
      "제트보트 탑승 시 체형에 맞는 구명조끼 반드시 착용 및 손잡이 꽉 잡기",
      "아트서커스 관람 시 통로에 발을 뻗거나 무대 구역 임의 진입 금지",
      "모든 체험 활동 전 인솔 강사 및 안전 요원의 수칙을 철저히 준수"
    ]
  },
  {
    id: "safe-health",
    icon: "🩺",
    name: "건강 & 응급처치",
    title: "건강 관리 및 비상 응급 처치 요령",
    rules: [
      "심정지 환자 발생 시: 골든타임 4분 내 119 신고 및 심폐소생술(CPR) 실시",
      "어지러움, 복통, 소화불량 발생 시 참지 말고 즉시 담임 선생님께 보고",
      "찰과상 발생 시 흐르는 깨끗한 물로 상처를 씻고 소독 후 드레싱",
      "야외 활동 중 벌이나 해충에 쏘였을 경우 신용카드 등으로 침을 밀어 제거",
      "탈수 예방을 위해 활동 틈틈이 물 마시기"
    ]
  },
  {
    id: "safe-sns",
    icon: "📱",
    name: "개인정보 & SNS",
    title: "SNS 사진 게시 및 디지털 에티켓",
    rules: [
      "타인의 사진이나 영상을 촬영할 때는 반드시 당사자의 동의를 구하기",
      "SNS에 친구들의 얼굴이나 이름이 노출된 사진을 무단 게시하지 않기",
      "실시간 위치 정보나 숙소 호실 등 민감 정보 SNS 공유 금지",
      "디지털 성범죄 및 불법 촬영 행위는 중대한 범죄로 형사 처벌 대상",
      "수학여행 중에는 스마트폰보다 눈앞의 소중한 풍경과 친구들에게 집중하기"
    ]
  },
  {
    id: "safe-lost",
    icon: "👛",
    name: "분실·도난 예방",
    title: "소지품 관리 및 미아·분실 대처",
    rules: [
      "학생증, 지갑, 스마트폰 등 필수 귀중품은 항상 몸에 지니거나 가방 앞주머니 보관",
      "관광지에서 단체 이탈 절대 금지 (길을 잃었을 경우 이동하지 말고 즉시 선생님께 전화)",
      "소지품 분실 시 당황하지 말고 마지막으로 머물렀던 장소와 시간을 인솔 교사에게 알림",
      "여분의 현금은 분산 보관하고 친구 간에 금전 거래 자제"
    ]
  }
];

function renderSection8() {
  return `
    <div class="notice-box">
      🦺 <strong>현장체험학습 안전교육 인덱스</strong>: 왼쪽 목차를 클릭하여 각 상황별 필수 안전 수칙을 확인하세요!
    </div>

    <div class="safety-index-layout">
      <!-- 왼쪽 목차 인덱스 네비게이션 -->
      <nav class="safety-nav-sidebar" id="safetyNavSidebar">
        ${SAFETY_TOPICS_DETAILED.map((item, idx) => `
          <button class="safety-nav-item ${idx === 0 ? "active" : ""}" onclick="selectSafetyTopic('${item.id}')">
            <span>${item.icon}</span>
            <span>${item.name}</span>
          </button>
        `).join("")}
      </nav>

      <!-- 오른쪽 세부 내용 패널 -->
      <div class="safety-detail-panel" id="safetyDetailPanel">
        <!-- 동적 패널 렌더링 -->
      </div>
    </div>
  `;
}

function initSection8() {
  selectSafetyTopic("safe-bus");
}

function selectSafetyTopic(topicId) {
  const topic = SAFETY_TOPICS_DETAILED.find(t => t.id === topicId);
  if (!topic) return;

  const items = document.querySelectorAll(".safety-nav-item");
  items.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(topicId));
  });

  const panel = document.getElementById("safetyDetailPanel");
  if (!panel) return;

  panel.innerHTML = `
    <h3 class="safety-panel-title">${topic.icon} ${topic.title}</h3>
    <ul class="safety-rule-list">
      ${topic.rules.map(r => `<li>${r}</li>`).join("")}
    </ul>
    <div style="margin-top:20px;padding:12px;background:#f8fafc;border-radius:10px;font-size:0.84rem;color:#64748b;">
      📌 안전사고 발생 시 가장 먼저 <strong>인솔 선생님</strong>과 <strong>119</strong>에 즉시 연락해야 합니다.
    </div>
  `;
}

/* ── [Section 9] 수학여행 활동지 (기록 & PDF 저장) ───────────── */
const ACTIVITY_STORAGE_KEY = "jeju_student_activity_record_2026";

function renderSection9() {
  const data = JSON.parse(localStorage.getItem(ACTIVITY_STORAGE_KEY) || "{}");
  const val = (k) => data[k] || "";

  return `
    <div class="activity-sheet-v2" id="activityPrintArea">
      <!-- 감성 헤더 -->
      <div class="activity-sheet-header">
        <div class="activity-sheet-title">🍊 나의 제주 수학여행 활동기록장 🍊</div>
        <div class="activity-sheet-sub">3박 4일 동안 보고, 듣고, 느낀 소중한 순간들을 담아보세요!</div>
      </div>

      <!-- 기본 정보 작성 폼 -->
      <div class="act-form-row">
        <div class="act-field-group">
          <label class="act-field-label">🏫 학교명</label>
          <input class="act-input" id="act_school" placeholder="예) OO고등학교" value="${val("act_school")}">
        </div>
        <div class="act-field-group">
          <label class="act-field-label">🏷️ 학년 / 반 / 번호</label>
          <input class="act-input" id="act_class" placeholder="예) 2학년 3반 15번" value="${val("act_class")}">
        </div>
        <div class="act-field-group">
          <label class="act-field-label">👤 학생 이름</label>
          <input class="act-input" id="act_name" placeholder="이름을 입력하세요" value="${val("act_name")}">
        </div>
      </div>

      <!-- 사전 목표 -->
      <div class="act-field-group">
        <label class="act-field-label">🎯 이번 제주 수학여행에서 꼭 하고 싶은 것 3가지 (버킷리스트)</label>
        <textarea class="act-textarea" id="act_goals" placeholder="1. &#10;2. &#10;3. ">${val("act_goals")}</textarea>
      </div>

      <!-- 1일차 활동 기록 -->
      <div class="act-day-box">
        <div class="act-day-header">
          <span class="act-day-name">☀️ 1일차 (10/26 월) • 이호테우 해수욕장 & 동문재래시장</span>
          <div class="star-rating-box" id="rating_d1">
            ${[1,2,3,4,5].map(n => `<button class="star-btn ${val("rating_d1") == n ? "selected" : ""}" onclick="setRating('rating_d1', ${n})">⭐ ${n}점</button>`).join("")}
          </div>
        </div>
        <div class="act-field-group">
          <label class="act-field-label">가장 기억에 남는 장면 또는 체험 소감</label>
          <textarea class="act-textarea" id="act_day1_text" placeholder="말등대에서 찍은 사진, 동문 야시장에서 맛본 음식 등의 느낌을 적어보세요.">${val("act_day1_text")}</textarea>
        </div>
      </div>

      <!-- 2일차 활동 기록 -->
      <div class="act-day-box">
        <div class="act-day-header">
          <span class="act-day-name">🏎️ 2일차 (10/27 화) • 9.81파크 / 사려니숲길 / 스누피가든</span>
          <div class="star-rating-box" id="rating_d2">
            ${[1,2,3,4,5].map(n => `<button class="star-btn ${val("rating_d2") == n ? "selected" : ""}" onclick="setRating('rating_d2', ${n})">⭐ ${n}점</button>`).join("")}
          </div>
        </div>
        <div class="act-field-group">
          <label class="act-field-label">신나는 액티비티와 자연 체험 기록</label>
          <textarea class="act-textarea" id="act_day2_text" placeholder="레이싱 속도감, 숲길 걷기, 아르떼뮤지엄 등에서 느낀 감상을 기록하세요.">${val("act_day2_text")}</textarea>
        </div>
      </div>

      <!-- 3일차 활동 기록 -->
      <div class="act-day-box">
        <div class="act-day-header">
          <span class="act-day-name">🎉 3일차 (10/28 수) • 특식 뷔페 & 레크레이션 페스티벌</span>
          <div class="star-rating-box" id="rating_d3">
            ${[1,2,3,4,5].map(n => `<button class="star-btn ${val("rating_d3") == n ? "selected" : ""}" onclick="setRating('rating_d3', ${n})">⭐ ${n}점</button>`).join("")}
          </div>
        </div>
        <div class="act-field-group">
          <label class="act-field-label">친구들과 함께한 특별한 밤</label>
          <textarea class="act-textarea" id="act_day3_text" placeholder="헤리티크 뷔페에서 먹은 맛있는 음식과 장기자랑, 친구들과의 추억을 적어보세요.">${val("act_day3_text")}</textarea>
        </div>
      </div>

      <!-- 4일차 활동 기록 -->
      <div class="act-day-box">
        <div class="act-day-header">
          <span class="act-day-name">🌺 4일차 (10/29 목) • 카멜리아힐 / 천제연폭포 / 4·3평화공원</span>
          <div class="star-rating-box" id="rating_d4">
            ${[1,2,3,4,5].map(n => `<button class="star-btn ${val("rating_d4") == n ? "selected" : ""}" onclick="setRating('rating_d4', ${n})">⭐ ${n}점</button>`).join("")}
          </div>
        </div>
        <div class="act-field-group">
          <label class="act-field-label">마지막 날 역사 탐방과 귀가 소감</label>
          <textarea class="act-textarea" id="act_day4_text" placeholder="제주 4·3 평화공원에서 배운 역사적 교훈과 여행을 마무리하는 마음을 적어보세요.">${val("act_day4_text")}</textarea>
        </div>
      </div>

      <!-- 종합 소감 및 추천 -->
      <div class="act-field-group">
        <label class="act-field-label">💬 전체 수학여행 종합 소감 (배운 점과 성장한 점)</label>
        <textarea class="act-textarea" id="act_total_review" style="min-height:120px;" placeholder="이번 수학여행은 나에게 어떤 의미였나요?">${val("act_total_review")}</textarea>
      </div>

      <div class="act-field-group">
        <label class="act-field-label">📍 친구에게 가장 추천하고 싶은 제주 명소 BEST 3</label>
        <textarea class="act-textarea" id="act_best_places" placeholder="1위: &#10;2위: &#10;3위: ">${val("act_best_places")}</textarea>
      </div>
    </div>

    <!-- 하단 저장 및 PDF 다운로드 버튼 바 -->
    <div class="act-action-bar">
      <button class="btn-save-draft" onclick="saveActivityData()">
        💾 작성 내용 저장
      </button>
      <button class="btn-export-pdf" onclick="exportActivityToPdf()">
        📄 PDF 파일로 저장 / 다운로드
      </button>
    </div>
  `;
}

function initSection9() {
  // 별점 인터랙션 바인딩
}

function setRating(ratingKey, val) {
  const container = document.getElementById(ratingKey);
  if (!container) return;
  const buttons = container.querySelectorAll(".star-btn");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("selected", idx + 1 === val);
  });
  container.dataset.val = val;
  saveActivityData(false);
}

function collectActivityData() {
  const ids = [
    "act_school", "act_class", "act_name", "act_goals",
    "act_day1_text", "act_day2_text", "act_day3_text", "act_day4_text",
    "act_total_review", "act_best_places"
  ];
  const data = JSON.parse(localStorage.getItem(ACTIVITY_STORAGE_KEY) || "{}");
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });

  ["rating_d1", "rating_d2", "rating_d3", "rating_d4"].forEach(key => {
    const group = document.getElementById(key);
    if (group && group.dataset.val) {
      data[key] = group.dataset.val;
    }
  });

  return data;
}

function saveActivityData(notify = true) {
  const data = collectActivityData();
  localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(data));
  if (notify) {
    showToast("💾 활동지가 안전하게 저장되었습니다!");
  }
}

/* 활동지 PDF로 저장/내보내기 함수 */
function exportActivityToPdf() {
  saveActivityData(false);

  const studentName = (document.getElementById("act_name")?.value || "학생").trim();
  const schoolClass = (document.getElementById("act_class")?.value || "").trim();
  const element = document.getElementById("activityPrintArea");

  if (!element) return;

  showToast("📄 PDF 변환 중입니다. 잠시만 기다려주세요...");

  // html2pdf.js 옵션 설정
  const opt = {
    margin: [10, 10, 10, 10],
    filename: `${studentName}_제주수학여행_활동기록장.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  if (typeof html2pdf !== "undefined") {
    html2pdf().set(opt).from(element).save().then(() => {
      showToast("🎉 PDF 파일 저장이 완료되었습니다!");
    }).catch(err => {
      console.warn("html2pdf failed, falling back to print dialog:", err);
      fallbackToPrint();
    });
  } else {
    fallbackToPrint();
  }
}

function fallbackToPrint() {
  showToast("🖨️ 인쇄 창에서 'PDF로 저장'을 선택하세요.");
  window.print();
}

/* ── [Section 10] 장소별 안내 & 링크 ────────────────────────── */
const PLACES_DATA = [
  {
    icon: "🏖️",
    name: "1. 이호테우 해수욕장",
    tag: "해변 / 말등대",
    desc: "제주 시내에서 가장 가까운 해수욕장으로, 빨간색과 하얀색 조랑말 등대가 이국적인 정취를 자랑하는 대표 포토존입니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CNTS_200000000007344"
  },
  {
    icon: "🛍️",
    name: "2. 동문재래시장",
    tag: "전통시장 / 야시장",
    desc: "제주에서 가장 오랜 역사를 지닌 대형 전통시장. 감귤, 흑돼지, 회, 오메기떡 등 먹거리 골목과 활기찬 야시장이 유명합니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CONT_000000000500745"
  },
  {
    icon: "🏎️",
    name: "3. 9.81 파크 제주",
    tag: "액티비티 / 레이싱",
    desc: "중력가속도(9.81m/s²)만을 이용한 친환경 무동력 레이싱과 실내 레이저 서바이벌, 스포츠 랩을 즐길 수 있는 테마파크입니다.",
    url: "https://www.981park.com/"
  },
  {
    icon: "🎪",
    name: "4. 아트서커스",
    tag: "공연 / 문화예술",
    desc: "오토바이 쇼, 공중 곡예 등 세계 정상급 단원들이 펼치는 박진감 넘치고 화려한 아크로바틱 서커스 공연입니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CONT_000000000500336"
  },
  {
    icon: "🎨",
    name: "5. 아르떼 뮤지엄 제주",
    tag: "미디어아트 / 전시",
    desc: "시공을 초월한 자연을 주제로 빛과 소리가 만들어내는 압도적인 몰입형 미디어아트 전시관입니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CNTS_200000000010958"
  },
  {
    icon: "🌲",
    name: "6. 사려니숲길",
    tag: "숲길 / 자연생태",
    desc: "비자림로에서 물찻오름을 거쳐 이어지는 삼나무 숲길. 제주의 맑은 공기와 피톤치드를 온몸으로 느낄 수 있는 힐링 명소입니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CONT_000000000500281"
  },
  {
    icon: "🏡",
    name: "7. 제주 동화마을",
    tag: "테마공원 / 산책",
    desc: "동화 같은 조경과 제주의 자연석, 수목이 어우러진 자연 테마공원으로 스타벅스 더제주송당파크가 위치해 있습니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CNTS_300000000012837"
  },
  {
    icon: "🐶",
    name: "8. 스누피 가든",
    tag: "감성정원 / 피너츠",
    desc: "만화 '피너츠'의 스누피와 친구들을 모티브로 실내 테마홀과 아름다운 야외 가든이 조화롭게 조성된 힐링 공간입니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CNTS_200000000010956"
  },
  {
    icon: "🕳️",
    name: "9. 만장굴",
    tag: "세계자연유산 / 용암동굴",
    desc: "유네스코 세계자연유산으로 등재된 세계적인 규모의 용암동굴. 거대한 용암석주와 신비로운 동굴 생태를 관찰할 수 있습니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CONT_000000000500182"
  },
  {
    icon: "🌺",
    name: "10. 카멜리아 힐",
    tag: "수목원 / 동백꽃",
    desc: "동양 최대 규모의 동백 수목원으로, 전 세계 500여 종 6,000여 그루의 동백나무와 다채로운 야생화가 가득한 포토 명소입니다.",
    url: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=e4f4a116-be4b-46fa-a289-11e223fa597a"
  },
  {
    icon: "🌊",
    name: "11. 천제연 폭포",
    tag: "폭포 / 주상절리",
    desc: "옥황상제를 모시던 칠선녀가 내려와 목욕을 했다는 전설이 깃든 3단 폭포. 주상절리 절벽과 에메랄드빛 연못이 장관입니다.",
    url: "https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=32ccc98e-e00b-463b-80db-0e33cd20c86e"
  },
  {
    icon: "🕊️",
    name: "12. 제주 4·3 평화공원 & 기념관",
    tag: "역사교육 / 평화기념관",
    desc: "제주 4·3 사건의 역사적 진실을 알리고 희생자의 넋을 위령하며 평화와 인권의 가치를 되새기는 뜻깊은 역사 교육의 장입니다.",
    url: "https://visitjeju.net/kr/detail/view?contentsid=CONT_000000000500535"
  }
];

function renderSection10() {
  return `
    <div class="notice-box">
      🗺️ <strong>현장체험활동 장소별 안내</strong>: 각 카드의 '🌐 공식 상세정보 링크' 버튼을 누르면 새 탭에서 공식 안내 웹페이지가 열립니다!
    </div>

    <div class="places-grid">
      ${PLACES_DATA.map(p => `
        <div class="place-card-v2">
          <div class="place-top-banner">
            <span class="place-card-icon">${p.icon}</span>
            <div class="place-card-title-wrap">
              <div class="place-card-name">${p.name}</div>
              <span class="place-card-tag">${p.tag}</span>
            </div>
          </div>
          <div class="place-card-body">
            <p class="place-card-desc">${p.desc}</p>
            <a class="place-url-btn" href="${p.url}" target="_blank" rel="noopener noreferrer">
              🌐 공식 상세정보 알아보기 ➜
            </a>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

/* ── [Section 11] 요양호자 및 특수교육대상 학생 안전수칙 ────── */
function renderSection11() {
  return `
    <div class="notice-box">
      🏥 <strong>모두가 안전하고 편안한 여행</strong>: 배려와 지원이 필요한 학생들을 위한 사전 준비 및 안전 점검 수칙입니다.
    </div>

    <div style="display:flex;flex-direction:column;gap:14px;">
      <div style="background:#ffffff;border:1.5px solid #e2e8f0;border-radius:14px;padding:18px;">
        <h4 style="color:#d97706;font-size:1.05rem;font-weight:800;margin-bottom:8px;">♿ 사전 동선 및 편의시설 확인</h4>
        <ul style="font-size:0.88rem;color:#475569;line-height:1.7;padding-left:18px;">
          <li>체험학습지, 숙소, 식당 내 <strong>경사로, 엘리베이터, 장애인 화장실</strong> 설치 여부 사전 점검</li>
          <li>요양호 학생 및 특수교육대상 학생의 특성에 맞춘 적절한 이동 동선과 지원 체계 구축</li>
          <li>필요 시 1:1 전담 교사 또는 안전 인력 배치</li>
        </ul>
      </div>

      <div style="background:#ffffff;border:1.5px solid #e2e8f0;border-radius:14px;padding:18px;">
        <h4 style="color:#d97706;font-size:1.05rem;font-weight:800;margin-bottom:8px;">💊 정기 복용 약물 및 건강 상태 점검</h4>
        <ul style="font-size:0.88rem;color:#475569;line-height:1.7;padding-left:18px;">
          <li>정기 복용 약물(천식 흡입기, 알레르기 약 등) 및 비상약 종류·복용법 사전 확인</li>
          <li>보호자 비상연락처 및 주치의 연락처 사전 확보</li>
          <li>이동 및 활동 중 수시로 피로도와 건강 상태를 확인하고 충분한 휴식 제공</li>
        </ul>
      </div>

      <div style="background:#ffffff;border:1.5px solid #e2e8f0;border-radius:14px;padding:18px;">
        <h4 style="color:#d97706;font-size:1.05rem;font-weight:800;margin-bottom:8px;">🤝 비상 연락 및 또래 도우미 친구 지정</h4>
        <ul style="font-size:0.88rem;color:#475569;line-height:1.7;padding-left:18px;">
          <li>방 배정 시 이동이 편리한 저층 또는 엘리베이터 인접 호실 배정</li>
          <li>위급 상황 발생 시 바로 알릴 수 있도록 같은 방 친구들과 긴밀한 협력 체계 유지</li>
        </ul>
      </div>
    </div>
  `;
}
