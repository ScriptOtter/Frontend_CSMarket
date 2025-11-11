import { ISkin } from "@/data/skins.data";
import { ShoppingCart } from "lucide-react";
interface IProps {
  skin: ISkin;
}
const shortQuality: { [key: string]: string } = {
  "Factory New": "FN",
  "Minimal Wear": "MW",
  "Field-Tested": "FT",
  "Well-Worn": "WW",
  "Battle-Scarred": "BS",
};
export const SkinItem = ({ skin }: IProps) => {
  return (
    <div className="min-w-[156px] max-w-[175px] min-h-[174px] max-h-[186px]   w-full  border rounded-small px-2">
      <div className="relative h-[82px] w-full">
        <img
          src={skin.image}
          alt={skin.name}
          className="absolute top-1/7 left-1/14"
        />
      </div>
      <p className="font-semibold text-xs">{shortQuality[skin.quality]}</p>
      <div className="flex items-center text-white/60">
        <ShoppingCart size={16} className="mr-0.5" />
        <p className="text-xs">{skin.purchase}</p>
      </div>
      <p className="font-bold">₽{skin.price}</p>
      <p className="text-white/60 text-xs font-light">{`${skin.type} | ${skin.name} (${skin.quality})`}</p>
    </div>
  );
};
