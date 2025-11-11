"use client";

import { useFilter } from "@/app/hooks/useFilter";
import { FilterDropdownMenu } from "@/components/FilterDropdownMenu";
import { FilterSideBar } from "@/components/FilterSideBar";
import { GunFilters } from "@/components/GunFilters";
import { GunsFilter } from "@/components/GunsFilter";
import Header from "@/components/Header";
import { InputFilterName } from "@/components/InputFilterName";
import { SkinItem } from "@/components/SkinItem";
import { SkinsNotFound } from "@/components/SkinsNotFound";
import { skinData } from "@/data/skins.data";
import { filterStore } from "@/store/store";
import { observer } from "mobx-react";

const MarketPage = observer(() => {
  const [
    priceFilters,
    qualityFilters,
    rareFilters,
    phaseFilters,
    categoryFilters,
    stickerFilters,
    typeFilters,
    nameFilters,
    classicFilters,
  ] = [
    filterStore.getPriceFilter(),
    filterStore.getQualityFilters(),
    filterStore.getRareFilters(),
    filterStore.getPhaseFilters(),
    filterStore.getCategoryFilters(),
    filterStore.getStickerFilters(),
    filterStore.getTypeFilters(),
    filterStore.getNameFilters(),
    filterStore.getClassicFilter(),
  ];
  const skins = useFilter(
    skinData,
    priceFilters,
    qualityFilters,
    rareFilters,
    phaseFilters,
    categoryFilters,
    stickerFilters,
    typeFilters,
    nameFilters,
    classicFilters
  );

  return (
    <>
      <Header />
      <main className="text-white grid grid-cols-[308px_1fr]">
        <FilterSideBar />

        <div className="mt-8 mx-8 h-full flex">
          <div className="w-full h-full ">
            <GunsFilter />
            <div className="flex flex-wrap gap-y-[10.5px] mb-6.5">
              <InputFilterName />
              <FilterDropdownMenu />
              <GunFilters />
            </div>

            {skins.length > 0 ? (
              <div
                className="grid gap-1.5 w-full"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
                }}
              >
                {skins.map((item) => (
                  <SkinItem skin={item} key={item.id} />
                ))}
              </div>
            ) : (
              <SkinsNotFound />
            )}
          </div>
        </div>
      </main>
    </>
  );
});

export default MarketPage;
