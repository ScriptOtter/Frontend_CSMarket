import { filterStore } from "@/store/store";
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@radix-ui/react-slider";
import { observer } from "mobx-react";
import { SetStateAction } from "react";

interface IProps {
  value: number[];
  setValue: React.Dispatch<SetStateAction<number[]>>;
}

// Оборачиваем компонент в observer
export const ValueSlider = observer(() => {
  const values = filterStore.getPriceFilter();

  const change = (number: number[]) => {
    filterStore.setPriceFilter(number);
  };

  return (
    <div className="flex items-center w-full pl-1.5 pr-0.5">
      <Slider
        value={values}
        onValueChange={change}
        min={0}
        max={1000000}
        step={1}
        className="relative flex items-center w-full h-2"
      >
        <SliderTrack className="relative h-1 bg-header-gray rounded-full grow">
          <SliderRange className="absolute h-full bg-slider rounded-full" />
        </SliderTrack>
        <SliderThumb className="absolute bg-white outline-2 outline-slider -top-2 w-3.5 h-3.5 -left-2 rounded-full cursor-pointer" />
        <SliderThumb className="absolute bg-white outline-2 outline-slider -top-2 w-3.5 h-3.5 -left-2 rounded-full cursor-pointer" />
      </Slider>
    </div>
  );
});
