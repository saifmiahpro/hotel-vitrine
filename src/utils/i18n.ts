// i18n utility - Simple system with one JSON file per language
import localeFr from '../../locales/fr.json';
import localeEn from '../../locales/en.json';
import localeEs from '../../locales/es.json';
import localeDe from '../../locales/de.json';
import localeIt from '../../locales/it.json';
import localeJa from '../../locales/ja.json';
import localeNl from '../../locales/nl.json';
import localePt from '../../locales/pt.json';
import localeZh from '../../locales/zh.json';
import localeAr from '../../locales/ar.json';
import localeRu from '../../locales/ru.json';
import shared from '../../locales/shared.json';

// Import individual room files
const roomModules = import.meta.glob('../../content/rooms/*.json', { eager: true });

// Build sorted room list from individual files
type RoomData = {
  sortOrder: number;
  priceFrom: number;
  gallery: string[];
  [lang: string]: any;
};

const allRooms: RoomData[] = Object.values(roomModules)
  .map((mod: any) => mod.default || mod)
  .sort((a: RoomData, b: RoomData) => a.sortOrder - b.sortOrder);

const locales: Record<string, any> = {
  fr: localeFr,
  en: localeEn,
  es: localeEs,
  de: localeDe,
  it: localeIt,
  ja: localeJa,
  nl: localeNl,
  pt: localePt,
  zh: localeZh,
  ar: localeAr,
  ru: localeRu
};

export function getCurrentLang(url: URL): 'fr' | 'en' | 'es' | 'de' | 'it' | 'ja' | 'nl' | 'pt' | 'zh' | 'ar' | 'ru' {
  const pathname = url.pathname;
  if (pathname.startsWith('/ru')) return 'ru';
  if (pathname.startsWith('/ar')) return 'ar';
  if (pathname.startsWith('/zh')) return 'zh';
  if (pathname.startsWith('/pt')) return 'pt';
  if (pathname.startsWith('/nl')) return 'nl';
  if (pathname.startsWith('/ja')) return 'ja';
  if (pathname.startsWith('/it')) return 'it';
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/en')) return 'en';
  return 'fr';
}

export function getSiteData(url: URL) {
  const lang = getCurrentLang(url);
  const locale = locales[lang];

  // Build room types from individual room files + current language translations
  const ROOM_TYPES = allRooms.map((room) => ({
    name: room[lang]?.name ?? room.fr?.name ?? '',
    shortDesc: room[lang]?.shortDesc ?? room.fr?.shortDesc ?? '',
    priceFrom: room.priceFrom,
    gallery: room.gallery,
  }));

  return {
    ...locale,
    // Shared contact data
    PHONE: shared.PHONE,
    EMAIL: shared.EMAIL,
    ADDRESS: shared.ADDRESS,
    GOOGLE_MAPS_EMBED_URL: shared.GOOGLE_MAPS_EMBED_URL,
    RESERVATION_URL: shared.RESERVATION_URL,
    // Room types built from individual files
    ROOM_TYPES,
  };
}

export function getT(url: URL) {
  const lang = getCurrentLang(url);
  return locales[lang].UI;
}
