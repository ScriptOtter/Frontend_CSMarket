"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SetStateAction } from "react";

interface DataFilter {
  title: string;
  guns: string[];
}

interface IProps {
  dataFilter: DataFilter;
  value: string[];
  setValue: React.Dispatch<SetStateAction<string[]>>;
}

export const GunsNavigationFilter = ({
  dataFilter,
  value,
  setValue,
}: IProps) => {
  const onCheckedFilter = (filter: string) => {
    if (dataFilter.title !== "Пулемет" && dataFilter.title !== "Другое") {
      if (value.includes(filter)) {
        setValue((prev) => [...prev.filter((item) => item !== filter)]);
      } else if (
        filter !== dataFilter.guns[0] &&
        !value.includes(dataFilter.guns[0])
      ) {
        setValue((prev) => [...prev, filter]);
      } else if (filter === dataFilter.guns[0]) {
        setValue((prev) => [
          ...prev.filter((i) => !dataFilter.guns.includes(i)),
          filter,
        ]);
      }
    } else if (value.includes(filter)) {
      setValue((prev) => [...prev.filter((item) => item !== filter)]);
    } else {
      setValue((prev) => [...prev, filter]);
    }
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-main text-white/70 cursor-pointer ">
            {dataFilter.title}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-header py-1">
            <ul className="w-full mr-12 whitespace-nowrap -space-y-1">
              {dataFilter.guns.map((name) => (
                <li
                  key={name}
                  onClick={() => onCheckedFilter(name)}
                  className={cn(
                    value.includes(name)
                      ? "bg-gray-navigation-hover text-white"
                      : "bg-header text-white/60",

                    "hover:bg-gray-navigation-hover pl-3 py-2 h-10 mt-1 cursor-pointer text-md hover:text-white"
                  )}
                >
                  {name}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
