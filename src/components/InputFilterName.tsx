import { filterStore } from "@/store/store";
import { Search } from "lucide-react";
import { observer } from "mobx-react";
import { useState } from "react";

export const InputFilterName = observer(() => {
  const [input, setInput] = useState<string>("");
  const value = filterStore.getNameFilters();
  const setValue = () => filterStore.setNameFilters(input);
  const addFilter = () => {
    setValue();
    setInput("");
  };
  return (
    <div className="relative grow min-w-[380px] max-w-[530px] mr-2 ">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) =>
          e.code === "Enter" &&
          value &&
          !value.includes(input) &&
          input.trim() &&
          addFilter()
        }
        placeholder="Быстрый поиск"
        className="text-md font-light w-full h-[42px] py-3 pl-3.5 rounded-small bg-input-dark border border-border-gray hover:border-input-dark-hover focus:border-input-dark-hover duration-100 placeholder:text-white/50"
      />
      <Search
        onClick={() => !value.includes(input) && input.trim() && addFilter()}
        size={20}
        className="text-white/50 absolute top-[10.5px] right-3 rotate-90 cursor-pointer"
      />
    </div>
  );
});
