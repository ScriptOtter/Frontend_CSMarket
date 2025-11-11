"use client";

import { QualityFilter } from "./QualityFilter";
import { RareFilter } from "./RareFilter";
import { PriceFilter } from "./PriceFilter";
import { PhaseFilter } from "./PhaseFilter";
import { CategoryFilter } from "./CategoryFilter";
import { StickerFilter } from "./StickerFilter";
import { SideBarFooter } from "./SideBarFooter";
import { filterStore } from "@/store/store";
import { observer } from "mobx-react";

export const FilterSideBar = observer(() => {
  const stickerFilter = filterStore.getStickerFilters();
  const priceFilter = filterStore.getPriceFilter();
  const qualityFilters = filterStore.getQualityFilters();
  const rareFilters = filterStore.getRareFilters();
  const phaseFilters = filterStore.getPhaseFilters();
  const categoryFilter = filterStore.getCategoryFilters();
  const typesFilters = filterStore.getTypeFilters();

  const resetFilters = () => filterStore.resetAllFilters();

  const countFilters =
    typesFilters.length +
    qualityFilters.length +
    rareFilters.length +
    phaseFilters.length +
    categoryFilter.length +
    stickerFilter.length +
    Number(!!priceFilter[0] || priceFilter[1] !== 1000000);
  return (
    <div className="border-r border-border-gray text-xs">
      <div className="px-7 flex justify-between py-[21px] mb-6.5 border-b border-border-gray w-full">
        <div className="w-full flex justify-between">
          <div className="flex space-x-1">
            <p className="font-normal text-md">Фильтры:</p>
            {!!countFilters && (
              <div className="flex justify-center items-center bg-red-500 rounded-full w-4 h-4 mt-0.5">
                <p className="text-[11px] font-bold ">{`${countFilters}`}</p>
              </div>
            )}
          </div>

          {!!countFilters && (
            <p
              onClick={resetFilters}
              className="text-orange-custom hover:text-white duration-100 cursor-pointer"
            >
              Сбросить все
            </p>
          )}
        </div>
      </div>
      <div className="max-h-[90vh] overflow-y-auto overflow-x-hidden pr-5">
        <div className="ml-7 mb-80">
          <PriceFilter />
          <QualityFilter />
          <RareFilter />
          <PhaseFilter />
          <CategoryFilter />
          <StickerFilter />
          <SideBarFooter />
        </div>
      </div>
    </div>
  );
});
