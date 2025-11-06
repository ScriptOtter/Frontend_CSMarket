import { CATEGORY_FILTER } from "@/app/config/pages.config";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SetStateAction, useState } from "react";
import { Checkbox } from "./ui/checkbox";

interface IProps {
  value: string[];
  setValue: React.Dispatch<SetStateAction<string[]>>;
}

export const CategoryFilter = ({ value, setValue }: IProps) => {
  const [visible, setVisible] = useState<boolean>(true);
  const onCheckedFilter = (filter: string) => {
    if (value.includes(filter)) {
      setValue((prev) => [...prev.filter((item) => item !== filter)]);
    } else {
      setValue((prev) => [...prev, filter]);
    }
  };

  return (
    <div
      className={cn(
        visible ? "h-auto mb-4" : "h-11.5",
        "text-white/60 text-xs"
      )}
    >
      <div
        onClick={() => setVisible((prev) => !prev)}
        className="flex justify-between cursor-pointer"
      >
        <p className="hover:text-white mb-5">
          Категория {!!value.length && `(${value.length})`}
        </p>
        <div className="flex space-x-2">
          {!!value.length && (
            <p
              onClick={(e) => {
                e.stopPropagation();
                setValue([]);
              }}
              className="text-orange-custom hover:text-white duration-100"
            >
              Сбросить
            </p>
          )}
          {visible ? (
            <ChevronUp size={12} className="text-white mt-1" />
          ) : (
            <ChevronDown size={12} className="text-white mt-1" />
          )}
        </div>
      </div>
      <div
        className={cn(
          visible ? "h-auto opacity-100" : "h-0 opacity-0",
          "overflow-hidden transition-all duration-300 space-y-[3px]"
        )}
      >
        {CATEGORY_FILTER.map((item) => (
          <div
            key={item.id}
            onClick={() => onCheckedFilter(item.id)}
            hidden={!visible}
            className="grid grid-cols-[1fr_5fr] space-x-2.5 group w-full space-y-4.5 cursor-pointer"
          >
            <Checkbox
              id={item.id}
              checked={value.includes(item.id)}
              className="cursor-pointer data-[state=checked]:text-slider  border data-[state=checked]:border-2  border-white/10 bg-input-dark group-hover:bg-input-dark-hover data-[state=checked]:bg-white/5 data-[state=checked]:border-input-dark-hover w-5 h-5 group-hover:border-white/5 duration-500"
            />

            <p className="text-md group-hover:text-white duration-100">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
