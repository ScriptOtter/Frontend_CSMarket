import { CircleX, SearchX } from "lucide-react";

export const SkinsNotFound = () => {
  return (
    <div className="h-[70%]  xl:h-[91%] pr-3.5 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col text-md">
        <SearchX size={28} className="mb-6 rotate-90 text-white/60" />

        <p className="mb-2.5 font-bold">Ничего не найдено</p>
        <p className="mb-6 text-white/60">
          Попробуйте ослабить или сбросить фильтр
        </p>

        <button className="bg-header-blue hover:bg-header-blue-hover duration-100 px-4 py-2.5 rounded-small cursor-pointer">
          <div className="flex items-center space-x-2 text-md">
            <CircleX size={16} />
            <p>Сбросить фильтр</p>
          </div>
        </button>
      </div>
    </div>
  );
};
