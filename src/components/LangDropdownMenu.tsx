import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { LANGUAGES } from "@/app/config/pages.config";

export const LangDropdownMenu: React.FC = () => {
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const CurrentFlag = language.Flag;

  return (
    <DropdownMenu onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DropdownMenuTrigger asChild>
        <div className="flex">
          <div className="flex space-x-1.5">
            <button className="w-6 cursor-pointer">
              <CurrentFlag />
            </button>
            <p className="text-md text-white font-bold">{language.short}</p>
          </div>
          <div className="relative px-2">
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
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-header border-0 mt-2.5 -ml-2.5"
        align="start"
      >
        <DropdownMenuGroup className="text-white text-md rounded-0">
          {LANGUAGES.map(({ short, language, Flag }) => (
            <DropdownMenuItem
              className="w-50 h-12 space-x-2 cursor-pointer hover:bg-header-gray "
              key={language}
              onClick={() => setLanguage({ short, language, Flag })}
            >
              <div className="scale-120">
                <Flag />
              </div>{" "}
              <p>{language}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
