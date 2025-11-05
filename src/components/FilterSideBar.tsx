export const FilterSideBar = () => {
  return (
    <div className="h-full border-r text-md">
      <p className="py-4.5 px-5.5 border-b font-semibold">Фильтры:</p>
      <div className="pt-5">
        <div className="flex justify-center">
          <div className="flex ">
            <div>
              <p>Цена от</p>
              <input className="bg-amber-600 border w-[6vw]" />
            </div>
            <div>
              <p>Цена до</p>
              <input className="bg-amber-600 border w-[6vw]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
