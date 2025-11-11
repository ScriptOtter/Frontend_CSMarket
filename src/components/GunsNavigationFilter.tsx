"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { filterStore } from "@/store/store";
import { observer } from "mobx-react";
import { SetStateAction } from "react";

interface DataFilter {
  title: string;
  guns: string[];
}

interface IProps {
  dataFilter: DataFilter;
}

export const GunsNavigationFilter = observer(({ dataFilter }: IProps) => {
  const value = filterStore.getTypeFilters();
  const setValue = (filter: string) => filterStore.setTypeFilters(filter);

  console.log(value);
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
                  onClick={() => setValue(name)}
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
});
