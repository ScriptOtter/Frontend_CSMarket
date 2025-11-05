import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CURRENCYS } from "@/app/constants/CURRENCYS";

export const CurrencyDropdownMenu: React.FC = () => {
  const [currency, setCurrency] = useState(CURRENCYS[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownMenu onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DropdownMenuTrigger asChild>
        <div className="space-x-4 relative">
          <button className="text-white">{currency.name}</button>

          {isOpen ? (
            <ChevronUp
              size={12}
              className="text-white absolute bottom-1/4 right-0"
            />
          ) : (
            <ChevronDown
              size={12}
              className="text-white absolute bottom-1/4 right-0"
            />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-slate-700 border-0" align="start">
        <DropdownMenuGroup>
          {CURRENCYS.map((item) => (
            <DropdownMenuItem key={item.name} onClick={() => setCurrency(item)}>
              {`${item.symbol} ${item.name}`}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
