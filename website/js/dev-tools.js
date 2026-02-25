/**
 * Boojy Dev Tools — floating panel for live UI testing
 * Only activates on localhost or with ?dev=1 query param
 */
(function () {
  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const hasParam = new URLSearchParams(location.search).get("dev") === "1";
  if (!isLocal && !hasParam) return;

  // Defaults (must match shared.css :root)
  const DEFAULTS = {
    accent: "#F5A623",
    bg: "#13151C",
    bgCard: "#2C2C32",
    cloudCard: "#2C2C32",
    cloudCta: "#D9D9D9",
    glowOpacity: 75,
    glowSize: 1200,
    glowColor: [203, 204, 255],
  };

  const PRESETS = {
    gold: "#F5A623",
    purple: "#8B5CF6",
  };

  // --- Helpers ---
  function hexToRgb(hex) {
    const n = parseInt(hex.replace("#", ""), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  }

  function setVar(name, value) {
    document.documentElement.style.setProperty(name, value);
  }

  function showToast(msg) {
    let t = document.querySelector(".dt-toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "dt-toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("dt-toast-show");
    clearTimeout(t._tid);
    t._tid = setTimeout(() => t.classList.remove("dt-toast-show"), 1500);
  }

  // --- Inject CSS ---
  const style = document.createElement("style");
  style.textContent = `
    .dt-gear {
      position: fixed; bottom: 16px; right: 16px; z-index: 10001;
      width: 32px; height: 32px; border-radius: 50%;
      background: rgba(28, 28, 38, 0.85); backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.1); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s, background 0.2s;
    }
    .dt-gear:hover { transform: scale(1.1); background: rgba(28,28,38,1); }
    .dt-gear.dt-active { background: rgba(139,92,246,0.3); }
    .dt-gear svg { width: 16px; height: 16px; fill: #9CA3AF; }
    .dt-gear.dt-active svg { fill: #c4b5fd; }

    .dt-panel {
      position: fixed; bottom: 56px; right: 16px; z-index: 10000;
      width: 280px; max-height: 70vh; overflow-y: auto;
      background: rgba(18, 18, 28, 0.95); backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
      padding: 16px; font-family: -apple-system, sans-serif;
      display: none; animation: dt-slide 0.15s ease;
    }
    .dt-panel.dt-open { display: block; }
    @keyframes dt-slide { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

    .dt-panel::-webkit-scrollbar { width: 4px; }
    .dt-panel::-webkit-scrollbar-track { background: transparent; }
    .dt-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }

    .dt-title { font-size: 11px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
    .dt-group { margin-bottom: 14px; }
    .dt-label { font-size: 11px; color: #9CA3AF; margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between; }
    .dt-swatch { width: 14px; height: 14px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.15); display: inline-block; }
    .dt-hex { font-family: monospace; font-size: 10px; color: #6B7280; }

    .dt-slider { width: 100%; height: 4px; -webkit-appearance: none; appearance: none; background: rgba(255,255,255,0.1); border-radius: 2px; outline: none; margin: 4px 0; }
    .dt-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 12px; height: 12px; border-radius: 50%; cursor: pointer; }
    .dt-slider.dt-r::-webkit-slider-thumb { background: #EF4444; }
    .dt-slider.dt-g::-webkit-slider-thumb { background: #22C55E; }
    .dt-slider.dt-b::-webkit-slider-thumb { background: #3B82F6; }

    .dt-section { font-size: 10px; font-weight: 700; color: #6B7280; text-transform: uppercase; letter-spacing: 0.08em; margin: 16px 0 10px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); }
    .dt-slider.dt-generic::-webkit-slider-thumb { background: #9CA3AF; }
    .dt-val { font-family: monospace; font-size: 10px; color: #6B7280; }

    .dt-presets { display: flex; gap: 6px; margin-bottom: 14px; }
    .dt-btn { flex: 1; padding: 6px 0; border: 1px solid rgba(255,255,255,0.12); border-radius: 6px;
      background: rgba(255,255,255,0.04); color: #D1D5DB; font-size: 11px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .dt-btn:hover { background: rgba(255,255,255,0.1); }
    .dt-btn-reset { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.2); color: #FCA5A5; }
    .dt-btn-reset:hover { background: rgba(239,68,68,0.2); }

    .dt-toast {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      padding: 8px 16px; border-radius: 8px; font-size: 12px; font-weight: 600;
      background: rgba(28,28,38,0.95); color: #D1D5DB; border: 1px solid rgba(255,255,255,0.1);
      backdrop-filter: blur(8px); z-index: 10002;
      opacity: 0; transition: opacity 0.2s; pointer-events: none;
    }
    .dt-toast.dt-toast-show { opacity: 1; }
  `;
  document.head.appendChild(style);

  // --- Build DOM ---
  // Gear button
  const gear = document.createElement("button");
  gear.className = "dt-gear";
  gear.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 00-.48-.41h-3.84a.48.48 0 00-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87a.48.48 0 00.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.26.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 00-.12-.61l-2.03-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z"/></svg>`;
  document.body.appendChild(gear);

  // Panel
  const panel = document.createElement("div");
  panel.className = "dt-panel";
  document.body.appendChild(panel);

  // Toggle
  gear.addEventListener("click", () => {
    const open = panel.classList.toggle("dt-open");
    gear.classList.toggle("dt-active", open);
  });

  // --- Slider group builder ---
  function buildRgbGroup(label, cssVar, defaultHex) {
    const group = document.createElement("div");
    group.className = "dt-group";

    let [r, g, b] = hexToRgb(defaultHex);
    const swatch = document.createElement("span");
    swatch.className = "dt-swatch";
    swatch.style.background = defaultHex;
    const hexLabel = document.createElement("span");
    hexLabel.className = "dt-hex";
    hexLabel.textContent = defaultHex;

    const lbl = document.createElement("div");
    lbl.className = "dt-label";
    lbl.innerHTML = `<span>${label}</span>`;
    lbl.appendChild(hexLabel);
    lbl.insertBefore(swatch, hexLabel);
    group.appendChild(lbl);

    function update() {
      const hex = rgbToHex(r, g, b);
      swatch.style.background = hex;
      hexLabel.textContent = hex;
      setVar(cssVar, hex);
      // Also update hover variant if it's the accent
      if (cssVar === "--color-accent") {
        const hr = Math.min(255, r + 20);
        const hg = Math.min(255, g + 20);
        const hb = Math.min(255, b + 20);
        setVar("--color-accent-hover", rgbToHex(hr, hg, hb));
      }
      // Also update hover variant for cloud CTA
      if (cssVar === "--color-cloud-cta") {
        const hr = Math.min(255, r + 20);
        const hg = Math.min(255, g + 20);
        const hb = Math.min(255, b + 20);
        setVar("--color-cloud-cta-hover", rgbToHex(hr, hg, hb));
      }
    }

    function makeSlider(channel, value, cls) {
      const s = document.createElement("input");
      s.type = "range"; s.min = 0; s.max = 255; s.value = value;
      s.className = `dt-slider ${cls}`;
      s.addEventListener("input", () => {
        if (channel === "r") r = +s.value;
        if (channel === "g") g = +s.value;
        if (channel === "b") b = +s.value;
        update();
      });
      group.appendChild(s);
      return s;
    }

    const sr = makeSlider("r", r, "dt-r");
    const sg = makeSlider("g", g, "dt-g");
    const sb = makeSlider("b", b, "dt-b");

    group._setHex = (hex) => {
      [r, g, b] = hexToRgb(hex);
      sr.value = r; sg.value = g; sb.value = b;
      update();
    };

    return group;
  }

  // --- Populate panel ---
  const title = document.createElement("div");
  title.className = "dt-title";
  title.textContent = "Dev Tools";
  panel.appendChild(title);

  // Presets
  const presets = document.createElement("div");
  presets.className = "dt-presets";
  const btnGold = document.createElement("button");
  btnGold.className = "dt-btn";
  btnGold.textContent = "Gold";
  const btnPurple = document.createElement("button");
  btnPurple.className = "dt-btn";
  btnPurple.textContent = "Purple";
  presets.appendChild(btnGold);
  presets.appendChild(btnPurple);
  panel.appendChild(presets);

  // Color groups
  const accentGroup = buildRgbGroup("Accent Color", "--color-accent", DEFAULTS.accent);
  const bgGroup = buildRgbGroup("Background", "--color-bg", DEFAULTS.bg);
  const cardGroup = buildRgbGroup("Card Background", "--color-bg-card", DEFAULTS.bgCard);

  panel.appendChild(accentGroup);
  panel.appendChild(bgGroup);
  panel.appendChild(cardGroup);

  // --- Cloud Card section ---
  const cloudSection = document.createElement("div");
  cloudSection.className = "dt-section";
  cloudSection.textContent = "Cloud Card";
  panel.appendChild(cloudSection);

  const cloudCardGroup = buildRgbGroup("Card Background", "--color-cloud-card", DEFAULTS.cloudCard);
  const cloudCtaGroup = buildRgbGroup("Button", "--color-cloud-cta", DEFAULTS.cloudCta);
  panel.appendChild(cloudCardGroup);
  panel.appendChild(cloudCtaGroup);

  // --- Hero Glow section ---
  const glowEl = document.querySelector(".hub-hero-glow");

  if (glowEl) {
    function setGlowVar(name, value) {
      glowEl.style.setProperty(name, value);
    }

    const glowSection = document.createElement("div");
    glowSection.className = "dt-section";
    glowSection.textContent = "Hero Glow";
    panel.appendChild(glowSection);

    // Opacity slider
    const opacityGroup = document.createElement("div");
    opacityGroup.className = "dt-group";
    const opacityVal = document.createElement("span");
    opacityVal.className = "dt-val";
    opacityVal.textContent = DEFAULTS.glowOpacity + "%";
    const opacityLbl = document.createElement("div");
    opacityLbl.className = "dt-label";
    opacityLbl.innerHTML = "<span>Opacity</span>";
    opacityLbl.appendChild(opacityVal);
    opacityGroup.appendChild(opacityLbl);
    const opacitySlider = document.createElement("input");
    opacitySlider.type = "range"; opacitySlider.min = 0; opacitySlider.max = 100; opacitySlider.value = DEFAULTS.glowOpacity;
    opacitySlider.className = "dt-slider dt-generic";
    opacitySlider.addEventListener("input", () => {
      const v = +opacitySlider.value;
      opacityVal.textContent = v + "%";
      setGlowVar("--glow-opacity", v / 100);
    });
    opacityGroup.appendChild(opacitySlider);
    panel.appendChild(opacityGroup);

    // Size slider
    const sizeGroup = document.createElement("div");
    sizeGroup.className = "dt-group";
    const sizeVal = document.createElement("span");
    sizeVal.className = "dt-val";
    sizeVal.textContent = DEFAULTS.glowSize + "px";
    const sizeLbl = document.createElement("div");
    sizeLbl.className = "dt-label";
    sizeLbl.innerHTML = "<span>Size</span>";
    sizeLbl.appendChild(sizeVal);
    sizeGroup.appendChild(sizeLbl);
    const sizeSlider = document.createElement("input");
    sizeSlider.type = "range"; sizeSlider.min = 200; sizeSlider.max = 1200; sizeSlider.value = DEFAULTS.glowSize;
    sizeSlider.className = "dt-slider dt-generic";
    sizeSlider.addEventListener("input", () => {
      const w = +sizeSlider.value;
      const h = Math.round(w * 0.71);
      sizeVal.textContent = w + "px";
      setGlowVar("--glow-width", w + "px");
      setGlowVar("--glow-height", h + "px");
    });
    sizeGroup.appendChild(sizeSlider);
    panel.appendChild(sizeGroup);

    // Glow RGB group builder (sets comma-separated RGB string)
    function buildGlowRgbGroup(label, cssVar, defaultRgb) {
      const group = document.createElement("div");
      group.className = "dt-group";

      let [r, g, b] = defaultRgb;
      const swatch = document.createElement("span");
      swatch.className = "dt-swatch";
      swatch.style.background = rgbToHex(r, g, b);
      const hexLabel = document.createElement("span");
      hexLabel.className = "dt-hex";
      hexLabel.textContent = rgbToHex(r, g, b);

      const lbl = document.createElement("div");
      lbl.className = "dt-label";
      lbl.innerHTML = `<span>${label}</span>`;
      lbl.appendChild(hexLabel);
      lbl.insertBefore(swatch, hexLabel);
      group.appendChild(lbl);

      function update() {
        const hex = rgbToHex(r, g, b);
        swatch.style.background = hex;
        hexLabel.textContent = hex;
        setGlowVar(cssVar, `${r}, ${g}, ${b}`);
      }

      function makeSlider(channel, value, cls) {
        const s = document.createElement("input");
        s.type = "range"; s.min = 0; s.max = 255; s.value = value;
        s.className = `dt-slider ${cls}`;
        s.addEventListener("input", () => {
          if (channel === "r") r = +s.value;
          if (channel === "g") g = +s.value;
          if (channel === "b") b = +s.value;
          update();
        });
        group.appendChild(s);
        return s;
      }

      const sr = makeSlider("r", r, "dt-r");
      const sg = makeSlider("g", g, "dt-g");
      const sb = makeSlider("b", b, "dt-b");

      group._reset = (rgb) => {
        [r, g, b] = rgb;
        sr.value = r; sg.value = g; sb.value = b;
        update();
      };

      return group;
    }

    const glowColorGroup = buildGlowRgbGroup("Color", "--glow-color", DEFAULTS.glowColor);
    panel.appendChild(glowColorGroup);

    // Expose reset for glow controls
    var resetGlow = function () {
      opacitySlider.value = DEFAULTS.glowOpacity;
      opacityVal.textContent = DEFAULTS.glowOpacity + "%";
      setGlowVar("--glow-opacity", DEFAULTS.glowOpacity / 100);

      sizeSlider.value = DEFAULTS.glowSize;
      sizeVal.textContent = DEFAULTS.glowSize + "px";
      setGlowVar("--glow-width", DEFAULTS.glowSize + "px");
      setGlowVar("--glow-height", Math.round(DEFAULTS.glowSize * 0.71) + "px");

      glowColorGroup._reset(DEFAULTS.glowColor);
    };
  }

  // Reset button
  const resetWrap = document.createElement("div");
  resetWrap.className = "dt-presets";
  const btnReset = document.createElement("button");
  btnReset.className = "dt-btn dt-btn-reset";
  btnReset.textContent = "Reset All";
  resetWrap.appendChild(btnReset);
  panel.appendChild(resetWrap);

  // --- Event handlers ---
  btnGold.addEventListener("click", () => {
    accentGroup._setHex(PRESETS.gold);
    showToast("Accent → Gold");
  });

  btnPurple.addEventListener("click", () => {
    accentGroup._setHex(PRESETS.purple);
    showToast("Accent → Purple");
  });

  btnReset.addEventListener("click", () => {
    accentGroup._setHex(DEFAULTS.accent);
    bgGroup._setHex(DEFAULTS.bg);
    cardGroup._setHex(DEFAULTS.bgCard);
    cloudCardGroup._setHex(DEFAULTS.cloudCard);
    cloudCtaGroup._setHex(DEFAULTS.cloudCta);
    if (typeof resetGlow === "function") resetGlow();
    showToast("Reset to defaults");
  });
})();
