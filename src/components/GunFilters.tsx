import { filterStore } from "@/store/store";
import { X } from "lucide-react";
import { observer } from "mobx-react";

export const GunFilters = observer(() => {
  const value = filterStore.getTypeFilters();
  const setValue = (filter: string) => filterStore.setTypeFilters(filter);
  const name = filterStore.getNameFilters();
  const setName = (filter: string) => filterStore.setNameFilters(filter);
  return (
    <>
      {value.map((item) => (
        <div
          key={item}
          onClick={() => setValue(item)}
          className="mr-3 h-10.5 px-3 space-x-0.5 text-md flex items-center text-white/60 hover:text-white rounded-full outline-1 outline-filter-outline hover:outline-filter-outline-hover cursor-pointer duration-100"
        >
          <p>{item}</p>
          <X size={18} />
        </div>
      ))}
      {name.map((item) => (
        <div
          key={item}
          onClick={() => setName(item)}
          className="mr-3 h-10.5 px-3 space-x-0.5 text-md flex items-center text-white/60 hover:text-white rounded-full outline-1 outline-filter-outline hover:outline-filter-outline-hover cursor-pointer duration-100"
        >
          <p>{item}</p>
          <X size={18} />
        </div>
      ))}
    </>
  );
});
