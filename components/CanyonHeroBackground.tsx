export function CanyonHeroBackground() {
  return (
    <>
      <div className="canyon-hero-glow" aria-hidden="true" />
      <div className="canyon-strata-bg" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" fill="none">
          <g className="canyon-strata-layer canyon-strata-layer-a" stroke="rgba(244,239,230,.10)" strokeWidth="1.5">
            <path d="M-100 240 C 200 180, 420 320, 700 260 S 1200 160, 1700 250" />
            <path d="M-100 300 C 220 250, 440 380, 720 320 S 1220 220, 1700 310" />
            <path d="M-100 360 C 240 320, 460 440, 740 380 S 1240 290, 1700 370" />
          </g>
          <g className="canyon-strata-layer canyon-strata-layer-b" stroke="rgba(156,196,189,.16)" strokeWidth="1.5">
            <path d="M-100 470 C 260 420, 480 560, 760 490 S 1260 400, 1700 480" />
            <path d="M-100 540 C 280 500, 500 630, 780 560 S 1280 470, 1700 550" />
          </g>
          <g className="canyon-strata-layer canyon-strata-layer-c" stroke="rgba(244,239,230,.07)" strokeWidth="1.5">
            <path d="M-100 660 C 300 620, 520 740, 800 670 S 1300 590, 1700 660" />
            <path d="M-100 740 C 320 700, 540 820, 820 750 S 1320 670, 1700 740" />
            <path d="M-100 820 C 340 780, 560 900, 840 830 S 1340 750, 1700 820" />
          </g>
          <path
            className="canyon-strata-pulse-path"
            d="M-100 470 C 260 420, 480 560, 760 490 S 1260 400, 1700 480"
            pathLength="1600"
            stroke="#f7914b"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </>
  );
}
