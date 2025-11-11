import {
  KNIFE_FILTER,
  MACHINEGUN_FILTER,
  OTHER_FILTER,
  PISTOL_FILTER,
  RIFLE_FILTER,
  SHOTGUN_FILTER,
  SMG_FILTER,
  SNIPER_RIFLE_FILTER,
} from "@/app/config/filters.config";
import { GunsNavigationFilter } from "@/components/GunsNavigationFilter";
import { filterStore } from "@/store/store";
import { observer } from "mobx-react";
import { SetStateAction } from "react";

export const GunsFilter = observer(() => {
  const typeFilters = filterStore.getTypeFilters();
  const setTypeFilters = (filter: string) => filterStore.setTypeFilters(filter);

  return (
    <div className="flex flex-wrap mb-3">
      <GunsNavigationFilter dataFilter={PISTOL_FILTER} />
      <GunsNavigationFilter dataFilter={RIFLE_FILTER} />
      <GunsNavigationFilter dataFilter={SNIPER_RIFLE_FILTER} />
      <GunsNavigationFilter dataFilter={SMG_FILTER} />
      <GunsNavigationFilter dataFilter={MACHINEGUN_FILTER} />
      <GunsNavigationFilter dataFilter={SHOTGUN_FILTER} />
      <GunsNavigationFilter dataFilter={KNIFE_FILTER} />
      <p
        onClick={() => setTypeFilters("Перчатки")}
        className="text-md px-3 py-2 bg-main text-white/60 hover:bg-header hover:text-white/80 cursor-pointer"
      >
        Перчатки
      </p>
      <p
        onClick={() => setTypeFilters("Контейнер")}
        className="text-md px-3 py-2 bg-main text-white/60 hover:bg-header hover:text-white/80 cursor-pointer"
      >
        Контейнер
      </p>
      <p
        onClick={() => setTypeFilters("Наклейка")}
        className="text-md px-3 py-2 bg-main text-white/60 hover:bg-header hover:text-white/80 cursor-pointer"
      >
        Наклейка
      </p>
      <GunsNavigationFilter dataFilter={OTHER_FILTER} />
    </div>
  );
});
