import { GB, RU } from "country-flag-icons/react/3x2";

export const CURRENCIES = [
  { name: "RUB", symbol: "₽" },
  { name: "USD", symbol: "$" },
  { name: "EUR", symbol: "€" },
];

export const LANGUAGES: { short: string; language: string; Flag: React.FC }[] =
  [
    { short: "РУ", language: "Русский", Flag: RU },
    { short: "EN", language: "English", Flag: GB },
  ];

export const NAVIGATION_MENU = [
  { name: "Купить", path: "/" },
  { name: "Продать", path: "/sell" },
  { name: "Поддержка", path: "/support" },
  { name: "FAQ", path: "/faq" },
];

export const QUALITY_FILTER = [
  {
    name: "Прямо с завода",
    short: "FN",
    className:
      "text-[9px] flex items-center justify-center w-5 h-5 bg-FN group-hover:bg-FN-hover",
  },
  {
    name: "Немного поношенное",
    short: "MW",
    className:
      "text-[8px] flex items-center justify-center w-5 h-5 bg-FN bg-MW group-hover:bg-MW-hover",
  },
  {
    name: "После полевых испытаний",
    short: "FT",
    className:
      "text-[9px] flex items-center justify-center w-5 h-5 bg-FN bg-FT group-hover:bg-FT-hover",
  },
  {
    name: "Поношенное",
    short: "WW",
    className:
      "text-[8px] flex items-center justify-center w-5 h-5 bg-FN bg-WW group-hover:bg-WW-hover",
  },
  {
    name: "Закаленное в боях",
    short: "BS",
    className:
      "text-[9px] flex items-center justify-center w-5 h-5 bg-FN bg-BS group-hover:bg-BS-hover",
  },
  {
    name: "Не окрашено",
  },
];

export const RARE_FILTER = [
  {
    name: "Ширпотреб",
    filter_name: "consumer-grade",
    className: "bg-consumer-grade group-hover:bg-consumer-grade-hover",
  },
  {
    name: "Промышленное качество",
    filter_name: "industrial-grade",
    className: "bg-industrial-grade group-hover:bg-industrial-grade-hover",
  },
  {
    name: "Армейское качество",
    filter_name: "mil-spec-grade",
    className: "bg-mil-spec-grade group-hover:bg-mil-spec-grade-hover",
  },
  {
    name: "Запрещенное",
    filter_name: "restricted",
    className: "bg-restricted group-hover:bg-restricted-hover",
  },
  {
    name: "Засекреченное",
    filter_name: "classified",
    className: "bg-classified group-hover:bg-classified-hover",
  },
  {
    name: "Тайное",
    filter_name: "covert",
    className: "bg-covert group-hover:bg-covert-hover",
  },
  {
    name: "Контрабандное",
    filter_name: "contraband",
    className: "bg-contraband group-hover:bg-contraband-hover",
  },
  {
    name: "Мастерский",
    filter_name: "master",
    className: "bg-master group-hover:bg-master-hover",
  },
  {
    name: "Превосходный",
    filter_name: "superior",
    className: "bg-superior group-hover:bg-superior-hover",
  },
  {
    name: "Исключительный",
    filter_name: "exceptional",
    className: "bg-exceptional group-hover:bg-exceptional-hover",
  },
  {
    name: "Заслуженный",
    filter_name: "distinguished",
    className: "bg-distinguished group-hover:bg-distinguished-hover",
  },
  {
    name: "Базовый класс",
    filter_name: "base-grade",
    className: "bg-base-grade group-hover:bg-base-grade-hover",
  },
  {
    name: "Высший класс",
    filter_name: "high-grade",
    className: "bg-high-grade group-hover:bg-high-grade-hover",
  },
  {
    name: "Примечательного типа",
    filter_name: "remarkable",
    className: "bg-remarkable group-hover:bg-remarkable-hover",
  },
  {
    name: "Экзотичного вида",
    filter_name: "exotic",
    className: "bg-exotic group-hover:bg-exotic-hover",
  },
  {
    name: "Экстраординарного типа",
    filter_name: "extraordinary",
    className: "bg-extraordinary group-hover:bg-extraordinary-hover",
  },
];

export const PHASE_FILTER = [
  { id: "Phase_1", name: "Phase 1" },
  { id: "Phase_2", name: "Phase 2" },
  { id: "Phase_3", name: "Phase 3" },
  { id: "Phase_4", name: "Phase 4" },
  { id: "Emerald", name: "Emerald" },
  { id: "Sapphire", name: "Sapphire" },
  { id: "Ruby", name: "Ruby" },
  { id: "Black_Pearl", name: "Black Pearl" },
];

export const CATEGORY_FILTER = [
  { id: "Common", name: "Обычное " },
  { id: "StatTrak™", name: "StatTrak™" },
  { id: "Souvenir", name: "Сувенир" },
  { id: "★", name: "★" },
  { id: "With_any_charms", name: "Наличие брелка" },
  { id: "With_any_stickers ", name: "Наличие наклейки" },
];

export const STICKERS_FILTER = [
  {
    id: "1",
    name: "Team Spirit (золотая) | Копенгаген-2024",
    image:
      "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/cph2024/spir_gold.70e01064eec1c6eed1ab6ef536c796e54a3e50be.png",
  },
  {
    id: "2",
    name: "Team Spirit (золотая) | Стокгольм-2021",
    image:
      "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/stockh2021/spir_gold.1c736397f749791588401c51c42c9f2e8eb52c46.png",
  },
  {
    id: "3",
    name: "Team Spirit | Стокгольм-2021",
    image:
      "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/stockh2021/spir.0b3399dea7c7fbeed126f40e6542994dbfb3deae.png",
  },
  {
    id: "4",
    name: "Team Spirit (золотая) | Остин-2025",
    image:
      "https://community.fastly.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWV-CF7b4mNzDWk9LIgtbsvT1LVc3ivGdJGVHu4uwldfTk_OsZ-_Vl2hV6ZQoib6V8NjwjQGw8ktlfSmtc-nQ4X-j/",
  },
  {
    id: "5",
    name: "Team Spirit (голографическая) | Остин-2025",
    image:
      "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWV-CF7b4mNzDWk9LLQtbufT9fAVkhPGYcD5Guo-1x4PflPSkZL2Ez21V6cMj37iTptWn31a2_Es-fSmtczE4pWuw/",
  },
];
