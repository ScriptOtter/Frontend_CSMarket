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
