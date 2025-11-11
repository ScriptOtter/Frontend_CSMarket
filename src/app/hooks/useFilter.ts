"use client";

import { ISkin } from "@/data/skins.data";
import { useEffect, useState } from "react";

export const useFilter = (
  data: ISkin[],
  priceFilter: number[],
  qualityFilter: string[],
  rareFilter: string[],
  phaseFilters: string[],
  categoryFilters: string[],
  stickerFilters: string[],
  typeFilter: string[],
  nameFilters: string[],
  classicFilter: string
): ISkin[] => {
  const [skins, setSkins] = useState<ISkin[]>(data);
  const classicFiltering = (data: ISkin[]) => {
    switch (classicFilter) {
      case "default":
        return data.sort((a, b) => b.purchase - a.purchase);
      case "popularityDesc":
        return data.sort((a, b) => b.purchase - a.purchase);
      case "popularityAsc":
        return data.sort((a, b) => a.purchase - b.purchase);
      case "priceDesc":
        return data.sort((a, b) => b.price - a.price);
      case "priceAsc":
        return data.sort((a, b) => a.price - b.price);

      case "profitDesc": //Need more information
        return data.sort((a, b) => b.price - a.price);
      case "profitAsc": //Need more information
        return data.sort((a, b) => a.price - b.price);
      case "countDesc":
        return data.sort((a, b) => b.count - a.count);
      case "countAsc":
        return data.sort((a, b) => a.count - b.count);
      default:
        return data;
    }
  };
  useEffect(() => {
    let filteredSkins = data;
    if (priceFilter[0] < priceFilter[1])
      filteredSkins = filteredSkins.filter(
        (item) => item.price >= priceFilter[0] && item.price <= priceFilter[1]
      );

    if (qualityFilter.length > 0)
      filteredSkins = filteredSkins.filter((item) =>
        qualityFilter.includes(item.quality)
      );
    if (rareFilter.length > 0)
      filteredSkins = filteredSkins.filter((item) =>
        rareFilter.includes(item.rarity)
      );
    if (phaseFilters.length > 0)
      filteredSkins = filteredSkins.filter((item) =>
        phaseFilters.includes(item.phase)
      );
    if (categoryFilters.length > 0)
      filteredSkins = filteredSkins.filter((item) =>
        categoryFilters.includes(item.category)
      );
    if (stickerFilters.length > 0)
      filteredSkins = filteredSkins.filter((item) =>
        item.stickers.map((i) => {
          stickerFilters.includes(i);
        })
      );
    if (typeFilter.length > 0)
      filteredSkins = filteredSkins.filter((item) =>
        typeFilter.includes(item.type)
      );
    if (nameFilters.length > 0)
      filteredSkins = filteredSkins.filter((item) =>
        nameFilters.includes(item.name)
      );
    filteredSkins = classicFiltering(filteredSkins);
    setSkins(filteredSkins);
  }, [
    data,
    priceFilter,
    qualityFilter.length,
    rareFilter.length,
    phaseFilters.length,
    categoryFilters.length,
    stickerFilters.length,
    typeFilter.length,
    nameFilters.length,
    classicFilter,
  ]);
  return skins;
};
