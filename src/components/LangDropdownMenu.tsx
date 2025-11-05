import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES } from "@/app/constants/LANGUAGES";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const LangDropdownMenu: React.FC = () => {
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const CurrentFlag = language.Flag;
  return (
    <DropdownMenu onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DropdownMenuTrigger asChild>
        <div className="flex space-x-1">
          <button className="w-[20px]">
            <CurrentFlag />
          </button>
          <p className="text-md text-white font-semibold">
            {language.language}
          </p>
          <div className="relative px-1.5">
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
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-slate-700 border-0" align="start">
        <DropdownMenuGroup>
          {LANGUAGES.map(({ language, Flag }) => (
            <DropdownMenuItem
              key={language}
              onClick={() => setLanguage({ language, Flag })}
            >
              <Flag /> <p>{language}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
