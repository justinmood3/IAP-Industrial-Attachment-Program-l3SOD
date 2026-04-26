const SETTINGS_KEY = "siteSettings";

const DEFAULT_SETTINGS = {
  textSize: "default",
  contrast: "normal",
  reduceMotion: false,
  keyboardFocus: false,
  screenReader: false,
  language: "en",
  themeMode: "system",
  colorTheme: "blue"
};

const I18N = {
  en: {
    nav_home: "Home",
    nav_converter: "Converter",
    nav_details: "Details",
    nav_history: "History",
    nav_settings: "Settings",
    header_main: "CURRENT CONVERTER 2026",
    header_details: "CURRENCY DETAILS DASHBOARD",
    hero_line1: "Currency made simple",
    hero_line2: "Convert money instantly in real-time",
    label_from: "FROM:",
    label_to: "TO:",
    btn_convert: "Convert",
    text_for_more: "For more",
    btn_get_start: "Get Started",
    enter_amount: "ENTER AMOUNT",
    history_title: "Conversion History",
    btn_clear_history: "Clear History",
    details_select_currency: "Select Currency:",
    details_demand_impact: "Demand Impact",
    details_compared_usd: "Compared to USD",
    details_trend_status: "Trend Status",
    details_historical_trend: "Historical Trend (Mock Chart)",
    details_strength_comparison: "Currency Strength Comparison (vs USD)",
    table_currency: "Currency",
    table_rate: "Rate (vs 1 USD)",
    table_strength_bar: "Strength Bar",
    settings_title: "Accessibility Settings",
    settings_display: "Display",
    settings_display_help: "Adjust visual settings to make the app easier to read and use.",
    settings_text_size: "Text size:",
    settings_text_default: "Default",
    settings_text_large: "Large",
    settings_text_x_large: "Extra Large",
    settings_contrast: "Contrast mode:",
    settings_contrast_normal: "Normal",
    settings_contrast_high: "High Contrast",
    settings_interaction: "Interaction",
    settings_interaction_help: "Improve control and reduce visual discomfort while using the app.",
    settings_reduce_motion: "Reduce motion effects",
    settings_keyboard_focus: "Show strong keyboard focus highlight",
    settings_screen_reader: "Enable screen reader friendly announcements",
    settings_language_theme: "Language & Theme",
    settings_language_theme_help: "Choose your preferred app language and display theme.",
    settings_language: "Language:",
    settings_theme_mode: "Theme mode:",
    settings_theme_system: "System Default",
    settings_theme_light: "Light",
    settings_theme_dark: "Dark",
    settings_color_theme: "Color theme:",
    settings_color_blue: "Blue",
    settings_color_green: "Green",
    settings_color_orange: "Orange",
    settings_color_gray: "Gray",
    settings_save: "Save Accessibility Settings",
    language_english: "English",
    language_french: "French",
    language_spanish: "Spanish",
    language_portuguese: "Portuguese",
    language_chinese: "Chinese",
    language_kinyarwanda: "Kinyarwanda",
    alert_valid_amount: "Enter a valid amount",
    time_updated: "Updated: ",
    alert_settings_saved: "Settings saved for all pages.",
    announce_settings_applied: "Accessibility settings applied.",
    details_title_suffix: "DETAILS",
    details_live_rate: "Live Rate: 1 USD = {rate} {currency}",
    details_app_usage_demand: "App Usage Demand: {demand}",
    details_compared_line: "1 USD ~= {rate} {currency}",
    details_trend_strong: "Strong currency (high usage in app)",
    details_trend_stable: "Stable / low usage currency",
    chart_label: "{currency} Market Growth Trend"
  },
  fr: {
    nav_home: "Accueil",
    nav_converter: "Convertisseur",
    nav_details: "Details",
    nav_history: "Historique",
    nav_settings: "Parametres"
  },
  es: {
    nav_home: "Inicio",
    nav_converter: "Convertidor",
    nav_details: "Detalles",
    nav_history: "Historial",
    nav_settings: "Configuracion"
  },
  pt: {
    nav_home: "Inicio",
    nav_converter: "Conversor",
    nav_details: "Detalhes",
    nav_history: "Historico",
    nav_settings: "Configuracoes"
  },
  zh: {
    nav_home: "Home",
    nav_converter: "Converter",
    nav_details: "Details",
    nav_history: "History",
    nav_settings: "Settings"
  },
  rw: {
    nav_home: "Ahabanza",
    nav_converter: "Guhindura",
    nav_details: "Ibisobanuro",
    nav_history: "Amateka",
    nav_settings: "Igenamiterere",
    header_main: "MUCUNGUZI W'AMAFARANGA 2026",
    header_details: "DASHIBODI Y'IBISOBANURO BY'AMAFARANGA",
    hero_line1: "Guhindura amafaranga byoroshye",
    hero_line2: "Hindura amafaranga ako kanya mu gihe nyacyo",
    label_from: "KUVA:",
    label_to: "KUGEZA:",
    btn_convert: "Hindura",
    text_for_more: "Kubindi",
    btn_get_start: "Tangira",
    enter_amount: "SHYIRAMO AMAFARANGA",
    history_title: "Amateka y'Ivunjisha",
    btn_clear_history: "Siba Amateka",
    details_select_currency: "Hitamo ifaranga:",
    details_demand_impact: "Ingaruka z'Icyifuzo",
    details_compared_usd: "Ugereranyije na USD",
    details_trend_status: "Imiterere y'Isoko",
    details_historical_trend: "Imigendekere y'Amateka (Imbonerahamwe)",
    details_strength_comparison: "Kugereranya Imbaraga z'Amafaranga (na USD)",
    table_currency: "Ifaranga",
    table_rate: "Igipimo (ku 1 USD)",
    table_strength_bar: "Urwego rw'Imbaraga",
    settings_title: "Igenamiterere ryo Korohereza Gukoresha",
    settings_display: "Imigaragarire",
    settings_display_help: "Hindura imigaragarire kugira ngo porogaramu yorohere gusoma no gukoresha.",
    settings_text_size: "Ingano y'inyuguti:",
    settings_text_default: "Isanzwe",
    settings_text_large: "Nini",
    settings_text_x_large: "Nini cyane",
    settings_contrast: "Uburyo bw'itandukaniro:",
    settings_contrast_normal: "Busanzwe",
    settings_contrast_high: "Itandukaniro Rirenga",
    settings_interaction: "Imikoranire",
    settings_interaction_help: "Rinda guhindagurika kwinshi no korohereza igenzura rya porogaramu.",
    settings_reduce_motion: "Gabanya imyunyungugu ku rubuga",
    settings_keyboard_focus: "Erekana aho clavier ihagaze neza",
    settings_screen_reader: "Emera amatangazo afasha abasomyi ba ecran",
    settings_language_theme: "Ururimi n'Insanganyamatsiko",
    settings_language_theme_help: "Hitamo ururimi n'imiterere ushaka gukoresha.",
    settings_language: "Ururimi:",
    settings_theme_mode: "Uburyo bw'igaragaza:",
    settings_theme_system: "Imiterere ya Sisiteme",
    settings_theme_light: "Urumuri",
    settings_theme_dark: "Umwijima",
    settings_color_theme: "Ibara ry'insanganyamatsiko:",
    settings_color_blue: "Ubururu",
    settings_color_green: "Icyatsi",
    settings_color_orange: "Icunga",
    settings_color_gray: "Ikijuju",
    settings_save: "Bika Igenamiterere",
    language_english: "Icyongereza",
    language_french: "Igifaransa",
    language_spanish: "Icyesipanyolo",
    language_portuguese: "Igiporutugali",
    language_chinese: "Igishinwa",
    language_kinyarwanda: "Ikinyarwanda",
    alert_valid_amount: "Andika umubare wemewe",
    time_updated: "Byavuguruwe: ",
    alert_settings_saved: "Igenamiterere ryabitswe ku mapaji yose.",
    announce_settings_applied: "Igenamiterere ryo korohereza gukoresha ryashyizweho.",
    details_title_suffix: "IBISOBANURO",
    details_live_rate: "Igipimo kizima: 1 USD = {rate} {currency}",
    details_app_usage_demand: "Icyifuzo cyo gukoresha porogaramu: {demand}",
    details_compared_line: "1 USD ~= {rate} {currency}",
    details_trend_strong: "Ifaranga rikomeye (rikoreshwa cyane muri porogaramu)",
    details_trend_stable: "Ifaranga rihagaze neza / rikoreshwa gake",
    chart_label: "Imigendekere y'Isoko rya {currency}"
  }
};

function getText(language, key, values = {}) {
  const selected = I18N[language] || I18N.en;
  const fallback = I18N.en[key] || key;
  const template = selected[key] || fallback;

  return template.replace(/\{(\w+)\}/g, (_, token) => {
    return values[token] !== undefined ? values[token] : `{${token}}`;
  });
}

window.translateText = function translateText(key, values = {}) {
  const settings = getSavedSettings();
  return getText(settings.language, key, values);
};

function getSavedSettings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (error) {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function getResolvedTheme(mode) {
  if (mode === "dark") return "dark";
  if (mode === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = getText(language, key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.setAttribute("placeholder", getText(language, key));
  });
}

function ensureAnnouncer() {
  let liveRegion = document.getElementById("screen-reader-announcer");
  if (!liveRegion) {
    liveRegion = document.createElement("div");
    liveRegion.id = "screen-reader-announcer";
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.className = "sr-only";
    document.body.appendChild(liveRegion);
  }
  return liveRegion;
}

function applySettingsToPage(settings) {
  const root = document.documentElement;
  const body = document.body;
  const theme = getResolvedTheme(settings.themeMode);

  root.classList.remove("text-default", "text-large", "text-x-large");
  body.classList.remove(
    "theme-light",
    "theme-dark",
    "text-default",
    "text-large",
    "text-x-large",
    "contrast-normal",
    "contrast-high",
    "color-blue",
    "color-green",
    "color-orange",
    "color-gray",
    "reduce-motion",
    "focus-strong"
  );

  root.classList.add(`text-${settings.textSize}`);
  body.classList.add(`theme-${theme}`);
  body.classList.add(`contrast-${settings.contrast}`);
  body.classList.add(`color-${settings.colorTheme}`);

  if (settings.reduceMotion) body.classList.add("reduce-motion");
  if (settings.keyboardFocus) body.classList.add("focus-strong");

  applyLanguage(settings.language);

  const announcer = ensureAnnouncer();
  if (settings.screenReader) {
    announcer.textContent = getText(settings.language, "announce_settings_applied");
  } else {
    announcer.textContent = "";
  }
}

function syncSettingsForm(settings) {
  const form = document.querySelector("section[aria-labelledby='accessibility-settings'] form");
  if (!form) return;

  const textSize = document.getElementById("text-size");
  const contrast = document.getElementById("contrast");
  const language = document.getElementById("language");
  const themeMode = document.getElementById("theme-mode");
  const colorTheme = document.getElementById("color-theme");
  const reduceMotion = form.querySelector("input[name='reduce-motion']");
  const keyboardFocus = form.querySelector("input[name='keyboard-focus']");
  const screenReader = form.querySelector("input[name='screen-reader']");

  if (textSize) textSize.value = settings.textSize;
  if (contrast) contrast.value = settings.contrast;
  if (language) language.value = settings.language;
  if (themeMode) themeMode.value = settings.themeMode;
  if (colorTheme) colorTheme.value = settings.colorTheme;
  if (reduceMotion) reduceMotion.checked = settings.reduceMotion;
  if (keyboardFocus) keyboardFocus.checked = settings.keyboardFocus;
  if (screenReader) screenReader.checked = settings.screenReader;
}

function getFormSettings() {
  const form = document.querySelector("section[aria-labelledby='accessibility-settings'] form");
  if (!form) return null;

  return {
    textSize: document.getElementById("text-size")?.value || "default",
    contrast: document.getElementById("contrast")?.value || "normal",
    reduceMotion: !!form.querySelector("input[name='reduce-motion']")?.checked,
    keyboardFocus: !!form.querySelector("input[name='keyboard-focus']")?.checked,
    screenReader: !!form.querySelector("input[name='screen-reader']")?.checked,
    language: document.getElementById("language")?.value || "en",
    themeMode: document.getElementById("theme-mode")?.value || "system",
    colorTheme: document.getElementById("color-theme")?.value || "blue"
  };
}

function initSettingsForm(settings) {
  const form = document.querySelector("section[aria-labelledby='accessibility-settings'] form");
  if (!form) return;

  syncSettingsForm(settings);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const updatedSettings = getFormSettings();
    if (!updatedSettings) return;
    saveSettings(updatedSettings);
    applySettingsToPage(updatedSettings);
    alert(getText(updatedSettings.language, "alert_settings_saved"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const settings = getSavedSettings();
  applySettingsToPage(settings);
  initSettingsForm(settings);
});
