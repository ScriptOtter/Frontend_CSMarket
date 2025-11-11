import { ISkin } from "@/data/skins.data";
import { cn } from "@/lib/utils";
import { shopingCardStore } from "@/store/store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ShoppingCart, X } from "lucide-react";
import { observer } from "mobx-react";
import { shortQuality } from "./SkinItem";
import { useEffect, useState } from "react";

export const CartDropdownMenu = observer(() => {
  const [open, setOpen] = useState(false);
  const cartItems = shopingCardStore.getCart();
  const setCartItems = (item: ISkin) => {
    shopingCardStore.setCartItem(item);
  };
  const clearCart = () => shopingCardStore.clearCart();
  const totalSum = cartItems.items.reduce((acc, item) => {
    return (acc = +item.price);
  }, 0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={!!!cartItems.items.length}>
        <button
          className={cn(
            cartItems.items.length
              ? "bg-cart-green hover:bg-cart-green-hover duration-150 cursor-pointer"
              : "bg-tarpaulin-grey",
            "w-full h-full flex items-center justify-center relative"
          )}
        >
          {cartItems.items.length > 0 && (
            <div className="flex items-center justify-center absolute top-[9px] right-[7px] bg-red-500 rounded-full px-[5px]">
              <p className="text-white text-xs font-bold ">{`${cartItems.items.length}`}</p>
            </div>
          )}
          <ShoppingCart className="text-white" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-header border-0 z-999 mr-4"
        align="start"
      >
        <DropdownMenuGroup className="text-white text-md rounded-0 z-999 ">
          <div className="w-[375px]  pt-[11px] z-999">
            <p className="mt-1 mb-1.5 ml-2 text-white font-bold">Корзина</p>
            <div className="pl-2.5 pr-5">
              <div className="py-2 space-y-1">
                {cartItems.items.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[95px_183px_1fr] bg-cart-item z-999 h-[93px]"
                  >
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        className=""
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                      />
                    </div>

                    <div className="flex flex-col my-1 mx-0.5 text-white/70">
                      <p className="text-xs font-light h-8">{`${item.type} | ${item.name} (${item.quality})`}</p>
                      <div>
                        <p className="font-bold text-white">{item.price}₽</p>
                        <p className="font-light text-xs">
                          {shortQuality[item.quality]}
                        </p>
                        <div className="flex items-center text-white/60">
                          <ShoppingCart size={12} className="mr-0.5" />
                          <p className="text-xs">{item.purchase}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center group pr-3">
                      <div
                        onClick={() => setCartItems(item)}
                        className="p-2 border border-white/10 rounded-small group-hover:border-white/20 duration-100 cursor-pointer"
                      >
                        <X
                          size={16}
                          className="text-white/70 group-hover:white duration-100"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <div className="w-1/2 border-r border-white/5">
                    <p className="text-white/60 font-normal text-xs mb-1">
                      Всего
                    </p>
                    <p className="text-white font-bold text-[15px]">
                      {totalSum}₽
                    </p>
                  </div>
                  <div className="w-1/2 ml-3">
                    <p className="text-white/60 font-normal text-xs mb-1">
                      Предметы
                    </p>
                    <p className="text-white font-bold text-[15px]">
                      {cartItems.items.length}
                    </p>
                  </div>
                </div>
                <div className="w-full pb-4 ">
                  <button
                    onClick={() => {
                      clearCart();
                      alert("Предметы куплены");
                    }}
                    className="w-full py-2.5 rounded-small bg-cart-green hover:bg-cart-green-hover duration-100 mb-2 cursor-pointer"
                  >
                    <p className="text-white font-bold text-md">Купить</p>
                  </button>
                  <button
                    onClick={() => clearCart()}
                    className="w-full py-2.5 rounded-small border border-white/5 group group-hover:border-white/15 mb-2 cursor-pointer"
                  >
                    <p className="font-bold text-md text-cart-green/70 group-hover:text-cart-green duration-100">
                      Очистить корзину
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});
