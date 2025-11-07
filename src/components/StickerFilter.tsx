import { STICKERS_FILTER } from "@/app/config/filters.config";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { SetStateAction, useRef, useState } from "react";

interface IProps {
  value: string[];
  setValue: React.Dispatch<SetStateAction<string[]>>;
}

export const StickerFilter = ({ value, setValue }: IProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { isVisible, setIsVisible, resetVisible } = useClickOutside(divRef);
  const [input, setInput] = useState<string>("");
  const onCheckedFilter = (filter: string) => {
    if (value.includes(filter)) {
      setValue((prev) => [...prev.filter((item) => item !== filter)]);
    } else {
      setValue((prev) => [...prev, filter]);
    }
  };

  return (
    <div className="mb-4.5">
      <p className="mb-2 text-white/50">Наклейки и брелки</p>
      <div className="relative">
        <input
          onKeyDown={(key) =>
            key.code == "Escape" ? resetVisible() : setIsVisible(true)
          }
          onFocus={() => setIsVisible(true)}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Поиск по стикерам"
          className="w-full h-[42px] py-3 pl-3 rounded-small bg-input-dark border border-border-gray hover:border-input-dark-hover focus:border-input-dark-hover duration-100 placeholder:text-white/50"
        />
        <Search
          size={20}
          className="text-white/50 absolute top-[10.5px] right-[17px] rotate-90"
        />
        {isVisible && STICKERS_FILTER.length !== value.length && (
          <div
            ref={divRef}
            className="absolute bg-input-search top-11 max-h-[200px] z-1 left-0 w-full px-2 overflow-y-auto overflow-x-hidden space-y-4 py-2"
          >
            {STICKERS_FILTER.map((item) => {
              if (!value.includes(item.id))
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      onCheckedFilter(item.id);
                      resetVisible();
                    }}
                    className="flex justify-between cursor-pointer relative"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      height={64}
                      width={64}
                    />
                    <p
                      className={cn(
                        value.includes(item.id)
                          ? "text-white"
                          : "text-white/50",
                        "text-wrap  hover:text-white"
                      )}
                    >
                      {item.name}
                    </p>
                  </div>
                );
            })}
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-3 mt-2">
        {STICKERS_FILTER.map((item) => {
          // Проверяем, есть ли item.id в массиве value
          if (value.includes(item.id)) {
            return (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                className="scale-90 cursor-pointer rounded-small bg-header-gray hover:bg-header-gray-hover"
                onClick={() => onCheckedFilter(item.id)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
