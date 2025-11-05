"use client";

import { NAVIGATION_MENU } from "@/app/constants/NAVIGATON_MENU";
import { cn } from "@/lib/utils";
import { House, MessageCircleMore, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSteam } from "react-icons/fa";
import { LangDropdownMenu } from "./LangDropdownMenu";
import { CurrencyDropdownMenu } from "./СurrencyDropdownMenu";

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="min-h-[60px] items-center bg-slate-800">
      <div className="flex justify-between items-center  font-semibold">
        <div className="flex items-center space-x-6 ">
          <div className="bg-main-blue h-[60px] w-[60px] flex items-center justify-center">
            <House size={40} className="text-white" />
          </div>
          <nav className="flex list-none space-x-4">
            {NAVIGATION_MENU.map((item) => (
              <Link href={item.path} key={item.path}>
                <li
                  className={cn(
                    currentPath === item.path ? "text-white" : "text-slate-700",
                    "font-bold text-md"
                  )}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex justify-center items-center space-x-3">
          <div className="px-2 py-2 bg-gray-600 rounded-sm">
            <CurrencyDropdownMenu />
          </div>
          <div className="px-2 py-2 bg-gray-600 rounded-sm">
            <LangDropdownMenu />
          </div>
          <div className="px-2 py-2 bg-gray-600 rounded-sm">
            <MessageCircleMore />
          </div>
          <div className="bg-main-blue py-2.5 px-3.5 rounded-sm flex items-center space-x-2">
            <FaSteam className="text-white" size={16} />
            <p className="text-md font-semibold text-white">
              Войти через Steam
            </p>
          </div>
          <div className="bg-blue-500 h-[60px] w-[60px] flex items-center justify-center">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
