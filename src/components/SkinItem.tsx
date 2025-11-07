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
    <div className="min-w-[143px] min-h-[174px] max-w-[175px] max-h-[186px] bg-red-300">
      <img src={skin.image} alt={skin.name} />
      <p className="font-semibold text-xs">{shortQuality[skin.quality]}</p>
      <div>
        <ShoppingCart />
        <p>{skin.purchase}</p>
      </div>
      <p className="font-bold">{skin.price}</p>
      <p className="text-white/60">{`${skin.type} | ${skin.name} ${skin.quality}`}</p>
    </div>
  );
};
