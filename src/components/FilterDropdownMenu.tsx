import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FILTER_DROPDOWN_MENU } from "@/app/config/filters.config";
import { cn } from "@/lib/utils";
import { observer } from "mobx-react";
import { filterStore } from "@/store/store";

export const FilterDropdownMenu = observer(() => {
  const filter = filterStore.getClassicFilter();
  const setFilter = (filter: string) => filterStore.setClassicFilter(filter);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(filter);
  return (
    <DropdownMenu onOpenChange={() => setIsOpen((prev) => !prev)}>
      <>
        {FILTER_DROPDOWN_MENU.map(
          (item) =>
            item.id == filter && (
              <DropdownMenuTrigger
                className="mr-3 flex-none bg-filter-dropdown text-white/60 hover:bg-filter-dropdown-hover data-[state=open]:bg-filter-dropdown-focus data-[state=open]:text-white px-2.5 rounded-small"
                asChild
              >
                <div className="flex mr-1.5 group">
                  <button className="cursor-pointer">
                    <div className="flex items-center text-md  ">
                      <item.icon
                        size={18}
                        className={cn(
                          "group-hover:text-white duration-100 mr-1",
                          item.className
                        )}
                      />
                      <p className="group-hover:text-white duration-100">
                        {item.name}
                      </p>
                    </div>
                  </button>

                  <div className="relative px-2">
                    {isOpen ? (
                      <ChevronUp
                        size={12}
                        className="absolute top-4 right-0 text-white/60 group-hover:text-white duration-100"
                      />
                    ) : (
                      <ChevronDown
                        size={12}
                        className="absolute top-4 right-0 text-white/60 group-hover:text-white duration-100"
                      />
                    )}
                  </div>
                </div>
              </DropdownMenuTrigger>
            )
        )}
      </>
      <DropdownMenuContent
        className="bg-header border-0 rounded-small"
        align="start"
      >
        <DropdownMenuGroup className="text-white text-md rounded-0">
          {FILTER_DROPDOWN_MENU.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="w-40 h-12 space-x-2 text-md cursor-pointer bg-header focus:bg-filter-dropdown-hover focus:text-white hover:bg-filter-dropdown-hover flex items-center rounded-none"
              onClick={() => setFilter(item.id)}
            >
              <div className="flex items-center" key={item.id}>
                <item.icon
                  className={cn("text-white mr-1", item.className)}
                  size={18}
                />
                <p className="text-md">{item.name}</p>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
