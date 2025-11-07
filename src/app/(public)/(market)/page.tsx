"use client";

import { FilterDropdownMenu } from "@/components/FilterDropdownMenu";
import { FilterSideBar } from "@/components/FilterSideBar";
import { GunFilters } from "@/components/GunFilters";
import { GunsFilter } from "@/components/GunsFilter";
import Header from "@/components/Header";
import { SkinItem } from "@/components/SkinItem";
import { SkinsNotFound } from "@/components/SkinsNotFound";
import { ISkin, skinData } from "@/data/skins.data";
import { Search } from "lucide-react";
import { useState } from "react";

const MarketPage = () => {
  console.log(skinData);
  const [input, setInput] = useState<string>("");
  const [sideBarFilters, setSideBarFilters] = useState<string[]>([]);
  const [gunFilters, setGunFilters] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [skins, setSkins] = useState<ISkin[]>(skinData);
  const addFilter = () => {
    setGunFilters((prev) => [...prev, input]);
    setInput("");
  };
  return (
    <>
      <Header />
      <main className="text-white grid grid-cols-[308px_1fr]">
        <FilterSideBar filters={gunFilters} setFilters={setGunFilters} />

        <div className="mt-8 mx-8">
          <GunsFilter filters={gunFilters} setFilters={setGunFilters} />
          <div className="flex flex-wrap gap-y-[10.5px]">
            <div className="relative grow min-w-[380px] max-w-[530px] mr-2 ">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.code === "Enter" && addFilter()}
                placeholder="Быстрый поиск"
                className="text-md font-light w-full h-[42px] py-3 pl-3.5 rounded-small bg-input-dark border border-border-gray hover:border-input-dark-hover focus:border-input-dark-hover duration-100 placeholder:text-white/50"
              />
              <Search
                onClick={() => addFilter()}
                size={20}
                className="text-white/50 absolute top-[10.5px] right-3 rotate-90"
              />
            </div>

            <FilterDropdownMenu setFilters={setFilter} />

            <GunFilters filters={gunFilters} setFilters={setGunFilters} />
          </div>

          {skins.length > 0 ? (
            skins.map((item) => <SkinItem skin={item} key={item.id} />)
          ) : (
            <SkinsNotFound />
          )}
        </div>
      </main>
    </>
  );
};

export default MarketPage;
