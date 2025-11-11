import { SetStateAction } from "react";
import { ValueSlider } from "./ValueSlider";
import { X } from "lucide-react";
import { filterStore } from "@/store/store";
import { observer } from "mobx-react";

export const PriceFilter = observer(() => {
  const value = filterStore.getPriceFilter();

  const setValue = (number: number[]) => {
    filterStore.setPriceFilter(number);
  };
  return (
    <>
      <div className="mb-6.5 flex justify-center">
        <div className="flex space-x-1">
          <div className="relative group">
            <p className="mb-3 text-white/60">Цена от</p>
            <input
              value={value[0] === 0 ? "" : value[0]}
              onChange={(e) => setValue([Number(e.target.value), value[1]])}
              placeholder="0"
              className="w-full text-md py-3 pl-3 rounded-small bg-input-dark border border-border-gray group-hover:border-input-dark-hover focus:border-input-dark-hover duration-100 placeholder:text-white/50"
            />
            {value[0] !== 0 && (
              <X
                onClick={() => setValue([0, value[1]])}
                size={17}
                className="absolute bottom-3.5 right-[4.5px] cursor-pointer text-white/60 hover:text-white duration-100"
              />
            )}
          </div>
          <div className="relative group">
            <p className="mb-3 text-white/60">Цена до</p>
            <input
              value={value[1] === 1000000 ? "" : value[1]}
              onChange={(e) => setValue([value[0], Number(e.target.value)])}
              placeholder="1000000"
              className="w-full text-md py-3 pl-3 rounded-small bg-input-dark border border-border-gray group-hover:border-input-dark-hover focus:border-input-dark-hover duration-100 placeholder:text-white/50"
            />
            {value[1] !== 1000000 && (
              <X
                onClick={() => setValue([value[0], 1000000])}
                size={17}
                className="absolute bottom-3.5 right-[4.5px] cursor-pointer text-white/60 hover:text-white duration-100"
              />
            )}
          </div>
        </div>
      </div>
      <div className="mb-8 ">
        <ValueSlider />
      </div>
    </>
  );
});
