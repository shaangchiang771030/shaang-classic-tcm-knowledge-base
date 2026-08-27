// English availability registry.
// We intentionally do NOT create 178 thin English placeholder article pages.
// Add article paths here only when their English content is actually published.
export const ENGLISH_READY_PATHS = new Set([
  "/",
  "/research/",
  "/start-here/",
  "/about/",
  "/food-report/",
  "/research/spacetime/",
  "/research/qihua-physiology/",
  "/research/jingfang/",
  "/research/materia-medica/",
  "/research/acupuncture/",
  "/research/bianque-mirror/",
  "/research/weather-wuyun-liuqi/",
  "/research/ganzhi-food-therapy/",
  "/research/guilin-neijing/",
]);

export function isEnglishReady(zhPath: string) {
  const p = zhPath.length > 1 && !zhPath.endsWith('/') ? zhPath + '/' : zhPath;
  return ENGLISH_READY_PATHS.has(p) || ENGLISH_READY_PATHS.has(zhPath);
}
