import { ISkin } from "@/data/skins.data";
import { cn } from "@/lib/utils";
import { shopingCardStore } from "@/store/store";
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react";
import { observer } from "mobx-react";
interface IProps {
  skin: ISkin;
}
export const shortQuality: { [key: string]: string } = {
  "Factory New": "FN",
  "Minimal Wear": "MW",
  "Field-Tested": "FT",
  "Well-Worn": "WW",
  "Battle-Scarred": "BS",
};

const styleInner = (color: string) => {
  switch (color.toLowerCase()) {
    case "consumer-grade":
      return "bg-gradient-to-b from-bg-main from-1% to-consumer-grade to-100% hover:to-consumer-grade-hover transition duration-200";

    case "industrial-grade":
      return "bg-gradient-to-b from-bg-main from-1% to-industrial-grade to-100% hover:to-industrial-grade-hover transition duration-200";

    case "mil-spec-grade":
      return "bg-gradient-to-b from-bg-main from-1% to-mil-spec-grade to-100% hover:to-mil-spec-grade-hover transition duration-200";

    case "restricted":
      return "bg-gradient-to-b from-bg-main from-1% to-restricted to-100% hover:to-restricted-hover transition duration-200";

    case "classified":
      return "bg-gradient-to-b from-bg-main from-1% to-classified to-100% hover:to-classified-hover transition duration-200";

    case "covert":
      return "bg-gradient-to-b from-bg-main from-1% to-covert to-100% hover:to-covert-hover transition duration-200";

    case "contraband":
      return "bg-gradient-to-b from-bg-main from-1% to-contraband to-100% hover:to-contraband-hover transition duration-200";

    case "master":
      return "bg-gradient-to-b from-bg-main from-1% to-master to-100% hover:to-master-hover transition duration-200";

    case "superior":
      return "bg-gradient-to-b from-bg-main from-1% to-superior to-100% hover:to-superior-hover transition duration-200";

    case "exceptional":
      return "bg-gradient-to-b from-bg-main from-1% to-exceptional to-100% hover:to-exceptional-hover transition duration-200";

    case "distinguished":
      return "bg-gradient-to-b from-bg-main from-1% to-distinguished to-100% hover:to-distinguished-hover transition duration-200";

    case "base-grade":
      return "bg-gradient-to-b from-bg-main from-1% to-base-grade to-100% hover:to-base-grade-hover transition duration-200";

    case "high-grade":
      return "bg-gradient-to-b from-bg-main from-1% to-high-grade to-100% hover:to-high-grade-hover transition duration-200";

    case "remarkable":
      return "bg-gradient-to-b from-bg-main from-1% to-remarkable to-100% hover:to-remarkable-hover transition duration-200";

    case "exotic":
      return "bg-gradient-to-b from-bg-main from-1% to-exotic to-100% hover:to-exotic-hover transition duration-200";

    case "extraordinary":
      return "bg-gradient-to-b from-bg-main from-1% to-extraordinary to-100% hover:to-extraordinary-hover transition duration-200";
    default:
      return "bg-gradient-to-b from-bg-main from-1% to-transparent to-100%";
  }
};
export const SkinItem = observer(({ skin }: IProps) => {
  let bgGradient = styleInner(skin.rarity);

  const cartItems = shopingCardStore.getCart();
  const setCartItems = (item: ISkin) => {
    shopingCardStore.setCartItem(item);
  };
  const exists = cartItems.items.some((item) => item.id === skin.id);
  return (
    <div
      onClick={() => setCartItems(skin)}
      className={`z-0 pb-2 min-w-[156px] max-w-[175px] min-h-[174px] max-h-[186px] w-full rounded-md cursor-pointer group ${bgGradient}`}
    >
      <div className="relative rounded-md">
        {!exists ? (
          <div className="absolute rounded-md  flex items-center justify-center invisible group-hover:visible h-0 w-full group-hover:bg-header-blue-hover group-hover:h-8 duration-200">
            <PlusCircle
              size={14}
              className="opacity-0 group-hover:opacity-100 duration-100 mr-1"
            />
            <p className="text-xs font-semibold opacity-0 group-hover:opacity-100 duration-100">
              Добавить в корзину
            </p>
          </div>
        ) : (
          <div className="absolute rounded-md  flex items-center justify-center invisible group-hover:visible h-0 w-full group-hover:bg-header-blue-hover group-hover:h-8 duration-200">
            <MinusCircle
              size={14}
              className="opacity-0 group-hover:opacity-100 duration-100 mr-1"
            />
            <p className="text-xs font-semibold opacity-0 group-hover:opacity-100 duration-100">
              Удалить из корзины
            </p>
          </div>
        )}
      </div>
      <div className="px-2 ">
        <div className="relative h-[82px] w-full ">
          <img
            loading="lazy"
            src={skin.image}
            alt={skin.name}
            className="absolute top-1/7 left-1/14 group-hover:scale-115 duration-200"
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
    </div>
  );
});
