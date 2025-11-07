import { X } from "lucide-react";
import { SetStateAction } from "react";

interface IProps {
  filters: string[];
  setFilters: React.Dispatch<SetStateAction<string[]>>;
}

export const GunFilters = ({ filters, setFilters }: IProps) => {
  return (
    <>
      {filters.map((item) => (
        <div
          key={item}
          onClick={() => setFilters((prev) => prev.filter((i) => i !== item))}
          className="mr-3 h-10.5 px-3 space-x-0.5 text-md flex items-center text-white/60 hover:text-white rounded-full outline-1 outline-filter-outline hover:outline-filter-outline-hover cursor-pointer duration-100"
        >
          <p>{item}</p>
          <X size={18} />
        </div>
      ))}
    </>
  );
};
