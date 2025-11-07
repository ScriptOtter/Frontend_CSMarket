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
import { SetStateAction } from "react";

interface IProps {
  filters: string[];
  setFilters: React.Dispatch<SetStateAction<string[]>>;
}

export const GunsFilter = ({ filters, setFilters }: IProps) => {
  return (
    <div className="flex flex-wrap mb-3">
      <GunsNavigationFilter
        dataFilter={PISTOL_FILTER}
        value={filters}
        setValue={setFilters}
      />
      <GunsNavigationFilter
        dataFilter={RIFLE_FILTER}
        value={filters}
        setValue={setFilters}
      />
      <GunsNavigationFilter
        dataFilter={SNIPER_RIFLE_FILTER}
        value={filters}
        setValue={setFilters}
      />
      <GunsNavigationFilter
        dataFilter={SMG_FILTER}
        value={filters}
        setValue={setFilters}
      />
      <GunsNavigationFilter
        dataFilter={MACHINEGUN_FILTER}
        value={filters}
        setValue={setFilters}
      />
      <GunsNavigationFilter
        dataFilter={SHOTGUN_FILTER}
        value={filters}
        setValue={setFilters}
      />
      <GunsNavigationFilter
        dataFilter={KNIFE_FILTER}
        value={filters}
        setValue={setFilters}
      />
      <p
        onClick={() =>
          setFilters((prev) =>
            prev.includes("Перчатки")
              ? [...prev.filter((i) => i !== "Перчатки")]
              : [...prev, "Перчатки"]
          )
        }
        className="text-md px-3 py-2 bg-main text-white/60 hover:bg-header hover:text-white/80 cursor-pointer"
      >
        Перчатки
      </p>
      <p
        onClick={() =>
          setFilters((prev) =>
            prev.includes("Контейнер")
              ? [...prev.filter((i) => i !== "Контейнер")]
              : [...prev, "Контейнер"]
          )
        }
        className="text-md px-3 py-2 bg-main text-white/60 hover:bg-header hover:text-white/80 cursor-pointer"
      >
        Контейнер
      </p>
      <p
        onClick={() =>
          setFilters((prev) =>
            prev.includes("Наклейка")
              ? [...prev.filter((i) => i !== "Наклейка")]
              : [...prev, "Наклейка"]
          )
        }
        className="text-md px-3 py-2 bg-main text-white/60 hover:bg-header hover:text-white/80 cursor-pointer"
      >
        Наклейка
      </p>
      <GunsNavigationFilter
        dataFilter={OTHER_FILTER}
        value={filters}
        setValue={setFilters}
      />
    </div>
  );
};
