"use client";

import { useState } from "react";
import { QualityFilter } from "./QualityFilter";
import { RareFilter } from "./RareFilter";
import { PriceFilter } from "./PriceFilter";
import { PhaseFilter } from "./PhaseFilter";
import { CategoryFilter } from "./CategoryFilter";
import { StickerFilter } from "./StickerFilter";
import { SideBarFooter } from "./SideBarFooter";

export const FilterSideBar = () => {
  const [value, setValue] = useState<number[]>([0, 1000000]);
  const [qualityFilters, setQualityFilters] = useState<string[]>([]);
  const [rareFilters, setRareFilters] = useState<string[]>([]);
  const [phaseFilters, setPhaseFilters] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [stickerFilter, setStickerFilter] = useState<string[]>([]);
  function resetFilters() {
    setValue([0, 1000000]);
    setQualityFilters([]);
    setRareFilters([]);
    setPhaseFilters([]);
    setCategoryFilter([]);
    setStickerFilter([]);
  }

  const countFilters =
    qualityFilters.length +
    rareFilters.length +
    phaseFilters.length +
    categoryFilter.length +
    stickerFilter.length +
    Number(!!value[0] || value[1] !== 1000000);
  return (
    <div className="w-full border-r border-border-gray text-xs">
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
          <PriceFilter value={value} setValue={setValue} />
          <QualityFilter value={qualityFilters} setValue={setQualityFilters} />
          <RareFilter value={rareFilters} setValue={setRareFilters} />
          <PhaseFilter value={phaseFilters} setValue={setPhaseFilters} />
          <CategoryFilter value={categoryFilter} setValue={setCategoryFilter} />
          <StickerFilter value={stickerFilter} setValue={setStickerFilter} />
          <SideBarFooter />
        </div>
      </div>
    </div>
  );
};
