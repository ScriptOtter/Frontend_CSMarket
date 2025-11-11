const images = [
  "https://cdn2.csgo.com/item/image/width=128/M4A1-S%20%7C%20Black%20Lotus%20(Field-Tested).webp",
  "https://cdn2.csgo.com/item/image/width=128/Desert%20Eagle%20%7C%20Printstream%20(Battle-Scarred).webp",
  "https://cdn2.csgo.com/item/image/width=128/AWP%20%7C%20Mortis%20(Field-Tested).webp",
  "https://cdn2.csgo.com/item/image/width=128/AK-47%20%7C%20The%20Outsiders%20(Battle-Scarred).webp",
  "https://cdn2.csgo.com/item/image/width=128/USP-S%20%7C%20Cortex%20(Battle-Scarred).webp",
  "https://cdn2.csgo.com/item/image/width=128/AWP%20%7C%20Green%20Energy%20(Battle-Scarred).webp",
  "https://cdn2.csgo.com/item/image/width=128/AWP%20%7C%20Duality%20(Battle-Scarred).webp",
  "https://cdn2.csgo.com/item/image/width=128/AWP%20%7C%20Neo-Noir%20(Field-Tested).webp",
  "https://cdn2.csgo.com/item/image/width=128/StatTrak%E2%84%A2%20AWP%20%7C%20Duality%20(Field-Tested).webp",
  "https://cdn2.csgo.com/item/image/width=128/M4A1-S%20%7C%20Leaded%20Glass%20(Battle-Scarred).webp",
];
export interface ISkin {
  id: string;
  name: string;
  image: string;
  purchase: number;
  price: number;
  count: number;
  type: string;
  quality: string;
  rarity: string;
  category: string;
  phase: string;
  stickers: string[];
}
export const skinData: ISkin[] = [];
const skinNames = [
  "Asiimov",
  "Dragon Lore",
  "Fire Serpent",
  "Howl",
  "Medusa",
  "Karambit",
  "Butterfly Knife",
  "Fade",
  "Doppler",
  "Lore",
  // добавьте больше названий скинов
];

const weaponTypes = [
  "AK-47",
  "M4A4",
  "AWP",
  "USP-S",
  "Desert Eagle",
  "SG553",
  "FAMAS",
  "MP9",
  "P90",
  "Nova",
  // добавьте больше типов оружия
];

const qualities = [
  "Factory New",
  "Minimal Wear",
  "Field-Tested",
  "Well-Worn",
  "Battle-Scarred",
];

const rarities = [
  "Consumer-Grade",
  "Industrial-Grade",
  "Mil-Spec-Grade",
  "Restricted",
  "Classified",
  "Covert",
];

const categories = ["Common", "StatTrak™", "Souvenir"];

for (let i = 0; i < 100; i++) {
  const skin = {
    id: `skin_${i + 1}`,
    name: skinNames[Math.floor(Math.random() * skinNames.length)],
    image: images[Math.floor(Math.random() * images.length)],
    purchase: Math.floor(Math.random() * 150),
    price: Math.floor(Math.random() * 5 * (Math.random() * 10000)),
    type: weaponTypes[Math.floor(Math.random() * weaponTypes.length)],
    quality: qualities[Math.floor(Math.random() * qualities.length)],
    count: Math.floor(Math.random() * skinNames.length),
    rarity: rarities[Math.floor(Math.random() * rarities.length)],
    category: categories[Math.floor(Math.random() * categories.length)],
    float: Math.random(),
    phase: "",
    stickers: [],
  };

  skinData.push(skin);
}
