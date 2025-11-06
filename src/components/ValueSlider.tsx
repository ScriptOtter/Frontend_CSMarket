import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@radix-ui/react-slider";
import { SetStateAction } from "react";

interface IProps {
  value: number[];
  setValue: React.Dispatch<SetStateAction<number[]>>;
}

export const ValueSlider = ({ value, setValue }: IProps) => {
  return (
    <div className="flex items-center w-full pl-1.5 pr-0.5">
      <Slider
        value={value}
        onValueChange={setValue}
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
};
