// Every image on the site, with the morphology words people might search for.
// view = the page the image lives on (used for the "Go to" button).
// Kept in this file (not a separate one) so the site only needs index.html, styles.css, script.js and assets/.
const SEARCH_INDEX = [
  {
    image: "assets/LANDINGPAGE_general_approach_ecg.png",
    title: "Approach to ECG Interpretation",
    view: "steps", step: "All Steps",
    keywords: "approach steps stepwise overview rate rhythm axis intervals p wave qrs st segment t wave"
  },
  {
    image: "assets/STEP1_rate_calculation.png",
    title: "Rate Calculation",
    view: "rate", step: "Rate",
    keywords: "rate calculation heart rate hr how to determine r waves x 6 six second method 300 rule number of boxes large boxes bpm"
  },
  {
    image: "assets/STEP1_rates.png",
    title: "Rates (Tachycardia, Normal, Bradycardia)",
    view: "rate-ranges", step: "Rate",
    keywords: "rates heart rate hr tachycardia normal bradycardia 60 100 bpm fast slow"
  },
  {
    image: "assets/STEP2_bradycardia.png",
    title: "Approach to Bradycardic Rhythm",
    view: "rhythm-brady", step: "Rhythm",
    keywords: "bradycardia bradyarrhythmia slow sinus bradycardia heart block av block first degree 1st degree second degree 2nd degree mobitz i mobitz 1 wenckebach mobitz ii mobitz 2 third degree 3rd degree complete heart block av dissociation dropped qrs prolonged pr"
  },
  {
    image: "assets/junctional-escape.png",
    title: "Junctional Escape Rhythm",
    view: "rhythm-brady", step: "Rhythm",
    keywords: "junctional escape rhythm av junction nodal bradycardia inverted p retrograde p short pr narrow qrs 40-60 sick sinus syndrome"
  },
  {
    image: "assets/ventricular-escape.png",
    title: "Ventricular Escape (Idioventricular) Rhythm",
    view: "rhythm-brady", step: "Rhythm",
    keywords: "ventricular escape rhythm idioventricular rhythm ivr wide qrs no p waves 20-40 bradycardia complete heart block pacing"
  },
  {
    image: "assets/STEP2_tachycardia_MAIN.png",
    title: "Approach to Tachycardic Rhythm",
    view: "rhythm-tachy", step: "Rhythm",
    keywords: "tachycardia tachyarrhythmia fast narrow complex wide complex regular irregular sinus tachycardia 2:1 atrial flutter psvt svt avrt avnrt atrial fibrillation multifocal atrial tachycardia ventricular tachycardia torsades ventricular fibrillation"
  },
  {
    image: "assets/STEP2_tachycardia_narrow.png",
    title: "Narrow Irregular Tachycardia",
    view: "rhythm-tachy", step: "Rhythm",
    keywords: "narrow complex irregular tachycardia atrial fibrillation af afib a-fib fibrillatory waves atrial flutter variable block sawtooth multifocal atrial tachycardia mat variable r-r interval"
  },
  {
    image: "assets/STEP2_tachycardia_wide.png",
    title: "Wide Complex Tachycardia",
    view: "rhythm-tachy", step: "Rhythm",
    keywords: "wide complex tachycardia ventricular tachycardia vt vtach monomorphic polymorphic torsades de pointes tdp pmvt ventricular fibrillation vf vfib"
  },
  {
    image: "assets/avrt-avnrt.png",
    title: "PSVT: AVRT vs AVNRT",
    view: "rhythm-tachy", step: "Rhythm",
    keywords: "psvt svt paroxysmal supraventricular tachycardia avrt avnrt orthodromic accessory pathway wpw wolff parkinson white delta wave av node reentry slow fast pathway pseudo r pseudo s retrograde p narrow regular"
  },
  {
    image: "assets/premature-ventricular-contraction-bigeminy-trigeminy.jpg",
    title: "Premature Ventricular Contractions (PVCs)",
    view: "rhythm", step: "Rhythm",
    keywords: "pvc pvcs premature ventricular contraction complex ectopic ectopy extrasystole ventricular bigeminy trigeminy wide qrs"
  },
  {
    image: "assets/STEP3_left_axis_deviation.png",
    title: "Left Axis Deviation",
    view: "axis-left", step: "Axis",
    keywords: "left axis deviation lad axis lead i positive avf negative lead ii negative lbbb lvh lafb left anterior fascicular block"
  },
  {
    image: "assets/STEP3_right_axis_deviation.png",
    title: "Right Axis Deviation",
    view: "axis-right", step: "Axis",
    keywords: "right axis deviation rad axis lead i negative avf positive rvh lpfb left posterior fascicular block pulmonary"
  },
  {
    image: "assets/STEP3_extreme_right_axis_deviation.png",
    title: "Extreme Right Axis Deviation",
    view: "axis-extreme-right", step: "Axis",
    keywords: "extreme right axis deviation extreme axis northwest axis no man's land lead i negative avf negative"
  },
  {
    image: "assets/STEP4_pr_qt_interval_MAIN.png",
    title: "Approach to Intervals",
    view: "intervals", step: "Intervals",
    keywords: "intervals pr interval qt interval prolonged short av blocks wpw"
  },
  {
    image: "assets/STEP4_long_pr_interval.png",
    title: "Prolonged PR Interval (AV Blocks)",
    view: "intervals", step: "Intervals",
    keywords: "prolonged pr interval long pr av block heart block first degree 1st degree"
  },
  {
    image: "assets/STEP4_short_pr_interval.png",
    title: "Short PR Interval (WPW Syndrome)",
    view: "intervals", step: "Intervals",
    keywords: "short pr interval wpw wolff-parkinson-white wolff parkinson white delta wave pre-excitation preexcitation accessory pathway"
  },
  {
    image: "assets/STEP4_long_qt_interval.png",
    title: "Prolonged QT Interval",
    view: "intervals", step: "Intervals",
    keywords: "prolonged qt interval long qt qtc anti-arrhythmics antibiotics antipsychotics antidepressants antiemetics hypokalemia hypomagnesemia hypocalcemia"
  },
  {
    image: "assets/STEP5_p_wave_MAIN.png",
    title: "Approach to P Waves",
    view: "p-wave", step: "P Wave",
    keywords: "p wave atrial enlargement bifid biphasic left atrial enlargement right atrial enlargement"
  },
  {
    image: "assets/STEP5_bifid_p_wave.png",
    title: "Bifid P Wave (Left Atrial Enlargement)",
    view: "p-wave", step: "P Wave",
    keywords: "bifid p wave notched p wave m-shaped p wave p mitrale left atrial enlargement lae biphasic p wave large terminal component v1 mitral"
  },
  {
    image: "assets/STEP5_large_biphasic_p_wave.png",
    title: "P Wave ≥ 2.5 mm (Right Atrial Enlargement)",
    view: "p-wave", step: "P Wave",
    keywords: "tall p wave peaked p wave large p wave 2.5 mm p pulmonale right atrial enlargement rae biphasic p wave large initial component tricuspid pulmonary hypertension"
  },
  {
    image: "assets/STEP6_qrs_complex_MAIN.png",
    title: "Approach to the QRS Complex",
    view: "qrs", step: "QRS Complex",
    keywords: "qrs complex bundle branch block bbb hypertrophy lbbb rbbb lvh rvh rs rsr deep s wave tall r wave"
  },
  {
    image: "assets/STEP6_qrs_rs_wave.png",
    title: "rS Wave (Left Bundle Branch Block)",
    view: "qrs", step: "QRS Complex",
    keywords: "rs wave lbbb left bundle branch block notched r wave m-shaped v6 broad qrs wide qrs"
  },
  {
    image: "assets/STEP6_qrs_rsr_wave.png",
    title: "rSR′ Wave (Right Bundle Branch Block)",
    view: "qrs", step: "QRS Complex",
    keywords: "rsr' rsr prime rsr wave rbbb right bundle branch block rabbit ears m-shaped v1 wide slurred s wave broad qrs wide qrs"
  },
  {
    image: "assets/STEP6_qrs_deep_s_wave.png",
    title: "Deep S Wave (Left Ventricular Hypertrophy)",
    view: "qrs", step: "QRS Complex",
    keywords: "deep s wave v1 v2 tall r wave v5 v6 lvh left ventricular hypertrophy aortic stenosis hypertension"
  },
  {
    image: "assets/STEP6_qrs_tall_r_wave.png",
    title: "Tall R Wave (Right Ventricular Hypertrophy)",
    view: "qrs", step: "QRS Complex",
    keywords: "tall r wave v1 v2 dominant r wave deep s wave v5 v6 rvh right ventricular hypertrophy pulmonary hypertension"
  },
  {
    image: "assets/STEP6_qrs_lvh_rvh.png",
    title: "Spotting Ventricular Hypertrophy (LVH vs RVH)",
    view: "qrs", step: "QRS Complex",
    keywords: "lvh rvh ventricular hypertrophy left right strain pattern rs complex qr complex r complex rsr convex st segment"
  },
  {
    image: "assets/STEP7_st_elevation_hyperacute_t_waves.png",
    title: "ST Elevation and Hyperacute T Waves",
    view: "st-t", step: "ST & T Wave",
    keywords: "st elevation ste hyperacute t waves peaked t waves tall t waves stemi pericarditis hyperkalemia"
  },
  {
    image: "assets/STEP7_st_elevation_types.png",
    title: "Types of ST Elevation (Concave vs Convex)",
    view: "st-t", step: "ST & T Wave",
    keywords: "st elevation concave convex coved tombstone smiley frowny morphology limb leads precordial leads"
  },
  {
    image: "assets/STEP7_st_depression_t_inversion.png",
    title: "ST Depression and T Wave Inversion",
    view: "st-depression", step: "ST & T Wave",
    keywords: "st depression t wave inversion inverted t waves nste-acs nstemi unstable angina troponin digoxin toxicity hypokalemia ischemia"
  },
  {
    image: "assets/STEP7_st_depression_types.png",
    title: "Types of ST Depression (Horizontal, Down-sloping, Up-sloping)",
    view: "st-depression", step: "ST & T Wave",
    keywords: "st depression horizontal downsloping down-sloping upsloping up-sloping ischemia contiguous leads"
  },
  {
    image: "assets/STEP8_1stemi_localization.png",
    title: "Localize the STEMI",
    view: "stemi", step: "STEMI",
    keywords: "stemi localization localize infarct territory st elevation anterior inferior lateral posterior septal lad rca lcx pda"
  },
  {
    image: "assets/STEP8_anterior_stemi.png",
    title: "Anterior STEMI (V1–V4, LAD)",
    view: "stemi", step: "STEMI",
    keywords: "anterior stemi anterior mi st elevation v1 v2 v3 v4 lad left anterior descending reciprocal changes"
  },
  {
    image: "assets/STEP8_inferior_stemi.png",
    title: "Inferior STEMI (II, III, aVF, RCA)",
    view: "stemi", step: "STEMI",
    keywords: "inferior stemi inferior mi st elevation ii iii avf rca right coronary artery reciprocal changes"
  },
  {
    image: "assets/STEP8_lateral_stemi.png",
    title: "Lateral STEMI (I, aVL, V5–V6, LCX)",
    view: "stemi", step: "STEMI",
    keywords: "lateral stemi lateral mi st elevation i avl v5 v6 lcx left circumflex reciprocal changes"
  },
  {
    image: "assets/STEP8_posterior_stemi_v1-3.png",
    title: "Posterior STEMI: ST Depression in V1–V3",
    view: "stemi", step: "STEMI",
    keywords: "posterior stemi posterior mi st depression v1 v2 v3 t wave inversion tall r wave v1 pda reciprocal"
  },
  {
    image: "assets/STEP8_posterior_stemi_v7-9.png",
    title: "Posterior STEMI (V7–V9, PDA)",
    view: "stemi", step: "STEMI",
    keywords: "posterior stemi posterior mi st elevation v7 v8 v9 posterior leads pda posterior descending artery"
  }
];

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeTargets = document.querySelectorAll("[data-close-modal]");
const views = document.querySelectorAll("[data-view]");
const navButtons = document.querySelectorAll(".nav-button[data-nav]");
const stepsMenuButton = document.getElementById("stepsMenuButton");
const stepsMenu = document.getElementById("stepsMenu");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchCount = document.getElementById("searchCount");

const SITE_TITLE = "ECG Interpretation";
const STEP_SECTIONS = new Set(["steps", "rate", "rhythm", "axis", "intervals", "p-wave", "qrs", "st-t", "stemi"]);

let lastFocusedElement = null;

function openModal(imageSrc, title) {
  lastFocusedElement = document.activeElement;
  modalImage.src = imageSrc;
  modalImage.alt = title;
  modalTitle.textContent = title;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modal.querySelector(".modal-close").focus());
}

function closeModal() {
  if (!modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  window.setTimeout(() => {
    if (!modal.classList.contains("is-open")) {
      modalImage.src = "";
      modalImage.alt = "";
    }
  }, 180);

  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

/* ---------- Steps dropdown ---------- */
function setStepsMenu(open) {
  stepsMenu.hidden = !open;
  stepsMenuButton.setAttribute("aria-expanded", String(open));
}

stepsMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  setStepsMenu(stepsMenu.hidden);
});

/* ---------- Views ---------- */
function showView(viewName) {
  closeModal();
  setStepsMenu(false);

  let activeView = null;
  views.forEach((view) => {
    const active = view.dataset.view === viewName;
    view.hidden = !active;
    view.classList.toggle("is-active", active);
    if (active) activeView = view;
  });

  // Every step page (and its sub-pages) highlights "Steps" in the top bar,
  // and the matching step inside the dropdown.
  const section = activeView ? activeView.dataset.section : "home";
  const navSection = STEP_SECTIONS.has(section) ? "steps" : section;
  navButtons.forEach((button) => {
    const active = button.dataset.nav === navSection;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  stepsMenu.querySelectorAll("[data-nav-item]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.navItem === section);
  });

  if (viewName === "search") requestAnimationFrame(() => searchInput.focus());

  const pageTitle = activeView ? activeView.dataset.title : "";
  document.title = pageTitle ? `${pageTitle} — ${SITE_TITLE}` : SITE_TITLE;

  // Gives browser back/forward useful state without creating separate pages.
  if (history.replaceState) {
    history.replaceState({ view: viewName }, "", `#${viewName}`);
  }
}

/* ---------- Morphology search (its own page) ---------- */
function normalize(text) {
  return text.toLowerCase().replace(/[′’]/g, "'").replace(/[–—]/g, "-");
}

const searchable = SEARCH_INDEX.map((entry) => ({
  ...entry,
  haystack: normalize(`${entry.title} ${entry.step} ${entry.keywords}`),
  titleText: normalize(entry.title)
}));

function searchImages(query) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return searchable
    .filter((entry) => words.every((word) => entry.haystack.includes(word)))
    .map((entry) => ({
      entry,
      // Title matches first, and specific examples before the step overview tables,
      // so "rbbb" lists the RBBB image before the QRS overview.
      score: words.filter((word) => entry.titleText.includes(word)).length
        - (entry.titleText.startsWith("approach to") ? 0.5 : 0)
        // Ties: images whose keyword list mentions the word earlier are more about it.
        - entry.haystack.indexOf(words[0]) / 100000
    }))
    .sort((a, b) => b.score - a.score)
    .map((result) => result.entry);
}

function renderSearch() {
  const query = searchInput.value.trim();
  searchResults.replaceChildren();

  if (!query) {
    searchCount.textContent = "";
    return;
  }

  const results = searchImages(query);
  searchCount.textContent = results.length
    ? `${results.length} image${results.length === 1 ? "" : "s"} match “${query}”`
    : `No images match “${query}”. Try a shorter word, like “block” or “st”.`;

  results.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "search-card";

    const open = document.createElement("button");
    open.type = "button";
    open.className = "search-card-open";
    open.setAttribute("aria-label", `Open ${entry.title}`);
    open.addEventListener("click", () => openModal(entry.image, entry.title));

    const thumb = document.createElement("img");
    thumb.src = entry.image;
    thumb.alt = "";
    thumb.loading = "lazy";
    open.append(thumb);

    const text = document.createElement("div");
    text.className = "search-card-text";
    const title = document.createElement("strong");
    title.textContent = entry.title;
    const step = document.createElement("small");
    step.textContent = entry.step;
    text.append(title, step);

    const go = document.createElement("button");
    go.type = "button";
    go.className = "footer-secondary search-card-go";
    go.textContent = `Go to ${entry.step} →`;
    go.addEventListener("click", () => showView(entry.view));

    card.append(open, text, go);
    searchResults.append(card);
  });
}

searchInput.addEventListener("input", renderSearch);
document.querySelectorAll("[data-search-example]").forEach((chip) => {
  chip.addEventListener("click", () => {
    searchInput.value = chip.dataset.searchExample;
    renderSearch();
    searchInput.focus();
  });
});

/* ---------- Wiring ---------- */
document.querySelectorAll("[data-modal-image]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openModal(trigger.dataset.modalImage, trigger.dataset.modalTitle);
  });
});

closeTargets.forEach((target) => target.addEventListener("click", closeModal));
document.querySelectorAll("[data-view-target]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});

// Clicking anywhere else closes the dropdown and the search results.
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-dropdown")) setStepsMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (modal.classList.contains("is-open")) {
    closeModal();
    return;
  }
  setStepsMenu(false);
});

// Open a bookmarked section if one is present; otherwise show Home.
const initialHash = window.location.hash.replace("#", "");
const validViews = new Set([...views].map((view) => view.dataset.view));
showView(validViews.has(initialHash) ? initialHash : "home");

// Typing or pasting a #step link while the page is open jumps there too.
window.addEventListener("hashchange", () => {
  const view = window.location.hash.replace("#", "");
  if (validViews.has(view)) showView(view);
});
