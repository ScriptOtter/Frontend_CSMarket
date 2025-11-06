"use client";

import { cn } from "@/lib/utils";
import { House, MessageCircleMore, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSteam } from "react-icons/fa";
import { LangDropdownMenu } from "./LangDropdownMenu";
import { CurrencyDropdownMenu } from "./СurrencyDropdownMenu";
import { NAVIGATION_MENU } from "@/app/config/pages.config";

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="min-h-[60px] items-center bg-header">
      <div className="flex justify-between items-center  font-semibold">
        <div className="flex items-center space-x-6 ">
          <div className="bg-header-blue h-[60px] w-[60px] flex items-center justify-center">
            <House size={40} className="text-white" />
          </div>
          <nav className="flex list-none space-x-5">
            {NAVIGATION_MENU.map((item) => (
              <Link href={item.path} key={item.path}>
                <li
                  className={cn(
                    currentPath === item.path ? "text-white" : "text-white/70",
                    "font-bold text-md"
                  )}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-center items-center gap-2.5 h-[42px]">
          <div className="h-full px-3 flex items-center rounded-small cursor-pointer bg-header-gray hover:bg-header-gray-hover duration-150">
            <CurrencyDropdownMenu />
          </div>
          <div className="h-full w-[82px] flex items-center justify-center rounded-small cursor-pointer bg-header-gray hover:bg-header-gray-hover duration-150">
            <LangDropdownMenu />
          </div>
          <div className="h-full w-[42px] flex items-center justify-center rounded-small cursor-pointer bg-header-gray hover:bg-header-gray-hover duration-150">
            <MessageCircleMore className="text-tarpaulin-grey" />
          </div>
          <div className="h-full w-[187px] px-3.5 flex items-center bg-header-blue rounded-small cursor-pointer space-x-2 hover:bg-header-blue-hover  duration-150">
            <FaSteam className="text-white" size={16} />
            <p className="text-md font-bold text-white">Войти через Steam</p>
          </div>
          <div className="bg-tarpaulin-grey h-[60px] w-[60px] flex items-center justify-center">
            <ShoppingCart className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
