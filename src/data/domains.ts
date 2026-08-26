// Cosmos Order — WBS 1.1 Domain Registry
// Stable domain identity must NOT depend on source folder names or article URLs.
// This file is intentionally data-only in WBS 1; UI consumption comes in later WBS tasks.

export type DomainStatus = 'live' | 'planned';
export type ArticleRouteStrategy = 'legacy-base' | 'hub-child';
export type SupportedLanguage = 'zh' | 'en';

export interface DomainDefinition {
  sortOrder: number;
  key: string;
  titleZh: string;
  titleEn: string;
  status: DomainStatus;
  hubPath: string;
  sourceDirectory: string | null;
  currentArticleBasePath: string;
  articleRouteStrategy: ArticleRouteStrategy;
  defaultLanguage: SupportedLanguage;
  descriptionZh: string;
  notes: string;
}

export const DOMAIN_REGISTRY = [
  {
    sortOrder: 10,
    key: "spacetime",
    titleZh: "時空篇",
    titleEn: "Spacetime",
    status: "live",
    hubPath: "/research/spacetime/",
    sourceDirectory: "concept",
    currentArticleBasePath: "/concept/",
    articleRouteStrategy: "legacy-base",
    defaultLanguage: "zh",
    descriptionZh: "古典醫學如何以時間、空間、週期與幾何描述天地與人體秩序。",
    notes: "Preserve all current /concept/* article URLs during redesign.",
  },
  {
    sortOrder: 20,
    key: "qihua-physiology",
    titleZh: "氣化生理篇",
    titleEn: "Qi Transformation Physiology",
    status: "live",
    hubPath: "/research/qihua-physiology/",
    sourceDirectory: "qihua_physiology_concept",
    currentArticleBasePath: "/qihua_physiology_concept/",
    articleRouteStrategy: "legacy-base",
    defaultLanguage: "zh",
    descriptionZh: "從一氣、升降出入、中土、臟腑、經絡、六經與營衛重建古典人體生理。",
    notes: "Preserve all current qihua article URLs during redesign.",
  },
  {
    sortOrder: 30,
    key: "jingfang",
    titleZh: "經方篇",
    titleEn: "Jingfang",
    status: "live",
    hubPath: "/research/jingfang/",
    sourceDirectory: "jingfang_concept",
    currentArticleBasePath: "/jingfang_concept/",
    articleRouteStrategy: "legacy-base",
    defaultLanguage: "zh",
    descriptionZh: "從五味、時空雙座標、六氣場景與治法文法理解經方生成規則。",
    notes: "Legacy numbering intentionally skips article 10; preserve current URLs and IDs.",
  },
  {
    sortOrder: 40,
    key: "materia-medica",
    titleZh: "藥物篇",
    titleEn: "Materia Medica",
    status: "live",
    hubPath: "/research/materia-medica/",
    sourceDirectory: "drug_concept",
    currentArticleBasePath: "/drug_concept/",
    articleRouteStrategy: "legacy-base",
    defaultLanguage: "zh",
    descriptionZh: "從藥物本體、古籍因果、單藥驗證到方中作用層位重建選藥邏輯。",
    notes: "Preserve all current drug article URLs during redesign.",
  },
  {
    sortOrder: 50,
    key: "acupuncture",
    titleZh: "針灸篇",
    titleEn: "Acupuncture",
    status: "live",
    hubPath: "/research/acupuncture/",
    sourceDirectory: "acupuncture_concept",
    currentArticleBasePath: "/acupuncture_concept/",
    articleRouteStrategy: "legacy-base",
    defaultLanguage: "zh",
    descriptionZh: "以《針灸甲乙經》為核心，研究穴位相位、幾何規則與控制結構。",
    notes: "Preserve all current acupuncture article URLs during redesign.",
  },
  {
    sortOrder: 60,
    key: "bianque-mirror",
    titleZh: "扁鵲鏡經篇",
    titleEn: "Bian Que Mirror Classic",
    status: "live",
    hubPath: "/research/bianque-mirror/",
    sourceDirectory: "Mirror_Classic _of_Bian_Que",
    currentArticleBasePath: "/mirror_classic-_of_bian_que/",
    articleRouteStrategy: "legacy-base",
    defaultLanguage: "zh",
    descriptionZh: "從量測、編碼、座標、網路與診斷理解《扁鵲鏡經》的氣化系統。",
    notes: "Source directory and live URL contain legacy naming irregularities; do not rename in WBS 1.",
  },
  {
    sortOrder: 70,
    key: "weather-wuyun-liuqi",
    titleZh: "現代氣象 × 五運六氣",
    titleEn: "Modern Meteorology × Five Movements and Six Qi",
    status: "planned",
    hubPath: "/research/weather-wuyun-liuqi/",
    sourceDirectory: null,
    currentArticleBasePath: "/research/weather-wuyun-liuqi/",
    articleRouteStrategy: "hub-child",
    defaultLanguage: "zh",
    descriptionZh: "以歷史氣象資料檢驗五運六氣模型，並研究天氣與人體狀態。",
    notes: "New domain; articles should be children of the hub route.",
  },
  {
    sortOrder: 80,
    key: "ganzhi-food-therapy",
    titleZh: "干支命理 × 食療",
    titleEn: "Ganzhi Timing × Food Therapy",
    status: "planned",
    hubPath: "/research/ganzhi-food-therapy/",
    sourceDirectory: null,
    currentArticleBasePath: "/research/ganzhi-food-therapy/",
    articleRouteStrategy: "hub-child",
    defaultLanguage: "zh",
    descriptionZh: "以干支時空與古典食療規則建立個人時空／體質研究與食療應用。",
    notes: "Knowledge content and paid report application must remain architecturally separated.",
  },
  {
    sortOrder: 90,
    key: "guilin-neijing",
    titleZh: "桂林古本 × 內經以經解經",
    titleEn: "Guilin Ancient Edition × Inner Classic Exegesis",
    status: "planned",
    hubPath: "/research/guilin-neijing/",
    sourceDirectory: null,
    currentArticleBasePath: "/research/guilin-neijing/",
    articleRouteStrategy: "hub-child",
    defaultLanguage: "zh",
    descriptionZh: "以《內經》自身規則重建桂林古本中的症脈、病機與方藥關係。",
    notes: "Future multi-entry research explorer: clause, symptom, mechanism, formula, herb.",
  }
] as const satisfies readonly DomainDefinition[];

export type DomainKey = (typeof DOMAIN_REGISTRY)[number]['key'];

export function getDomainByKey(key: DomainKey) {
  return DOMAIN_REGISTRY.find((domain) => domain.key === key);
}

export function getLiveDomains() {
  return DOMAIN_REGISTRY.filter((domain) => domain.status === 'live');
}
