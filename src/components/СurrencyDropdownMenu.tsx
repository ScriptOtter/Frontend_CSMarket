import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CURRENCIES } from "@/app/config/pages.config";

export const CurrencyDropdownMenu: React.FC = () => {
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownMenu onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DropdownMenuTrigger asChild>
        <div className="space-x-4 relative">
          <button className="text-white text-md font-bold cursor-pointer">
            {currency.name}
          </button>

          {isOpen ? (
            <ChevronUp
              size={12}
              className="text-white absolute bottom-1/6 right-0"
            />
          ) : (
            <ChevronDown
              size={12}
              className="text-white absolute bottom-1/6 right-0"
            />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-header border-0 mt-2.5 -ml-3 "
        align="start"
      >
        <DropdownMenuGroup className="text-white text-md rounded-0">
          {CURRENCIES.map((item) => (
            <DropdownMenuItem
              className="w-20 h-12 space-x-2 cursor-pointer hover:bg-header-gray "
              key={item.name}
              onClick={() => setCurrency(item)}
            >
              {`${item.symbol} ${item.name}`}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
