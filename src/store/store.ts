import {
  KNIFE_FILTER,
  PISTOL_FILTER,
  RIFLE_FILTER,
  SHOTGUN_FILTER,
  SMG_FILTER,
  SNIPER_RIFLE_FILTER,
} from "@/app/config/filters.config";
import { ICart } from "@/app/types/cart.types";
import { ISkin } from "@/data/skins.data";
import { makeAutoObservable } from "mobx";
class FilterStore {
  private skins: ISkin[] = [];
  private priceFilter: number[] = [0, 1000000];
  private qualityFilters: string[] = [];
  private rareFilters: string[] = [];
  private phaseFilters: string[] = [];
  private categoryFilters: string[] = [];
  private stickerFilters: string[] = [];
  private typeFilters: string[] = [];
  private nameFilters: string[] = [];

  private classicFilter: string = "default";
  private typeConvert(filter: string): boolean {
    switch (filter) {
      case "Все пистолеты":
        const pistols: string[] = [
          ...PISTOL_FILTER.guns.filter((item) => item !== "Все пистолеты"),
        ];

        const allPistolsIncluded = pistols.every((item) =>
          this.typeFilters.includes(item)
        );

        if (allPistolsIncluded) {
          this.typeFilters = this.typeFilters.filter(
            (item) => !pistols.includes(item)
          );
        } else {
          this.typeFilters.push(
            ...pistols.filter((item) => !this.typeFilters.includes(item))
          );
        }
        return true;

      case "Все винтовки":
        const rifles: string[] = [
          ...RIFLE_FILTER.guns.filter((item) => item !== "Все винтовки"),
        ];

        const AllRiflesIncludes = rifles.every((item) =>
          this.typeFilters.includes(item)
        );

        if (AllRiflesIncludes) {
          this.typeFilters = this.typeFilters.filter(
            (item) => !rifles.includes(item)
          );
        } else {
          this.typeFilters.push(
            ...rifles.filter((item) => !this.typeFilters.includes(item))
          );
        }
        return true;
      case "Все снайперские винтовки":
        const snipers: string[] = [
          ...SNIPER_RIFLE_FILTER.guns.filter(
            (item) => item !== "Все снайперские винтовки"
          ),
        ];

        const AllSnipersIncludes = snipers.every((item) =>
          this.typeFilters.includes(item)
        );

        if (AllSnipersIncludes) {
          this.typeFilters = this.typeFilters.filter(
            (item) => !snipers.includes(item)
          );
        } else {
          this.typeFilters.push(
            ...snipers.filter((item) => !this.typeFilters.includes(item))
          );
        }
        return true;

      case "Все пистолет-пулеметы":
        const smgs: string[] = [
          ...SMG_FILTER.guns.filter((item) => item !== "Все пистолет-пулеметы"),
        ];

        const AllSMGSIncludes = smgs.every((item) =>
          this.typeFilters.includes(item)
        );

        if (AllSMGSIncludes) {
          this.typeFilters = this.typeFilters.filter(
            (item) => !smgs.includes(item)
          );
        } else {
          this.typeFilters.push(
            ...smgs.filter((item) => !this.typeFilters.includes(item))
          );
        }
        return true;

      case "Все дробовики":
        const shotguns: string[] = [
          ...SHOTGUN_FILTER.guns.filter((item) => item !== "Все дробовики"),
        ];

        const AllShotgunsIncludes = shotguns.every((item) =>
          this.typeFilters.includes(item)
        );

        if (AllShotgunsIncludes) {
          this.typeFilters = this.typeFilters.filter(
            (item) => !shotguns.includes(item)
          );
        } else {
          this.typeFilters.push(
            ...shotguns.filter((item) => !this.typeFilters.includes(item))
          );
        }
        return true;

      case "Все ножи":
        const knifes: string[] = [
          ...KNIFE_FILTER.guns.filter((item) => item !== "Все ножи"),
        ];

        const AllKnifesIncludes = knifes.every((item) =>
          this.typeFilters.includes(item)
        );

        if (AllKnifesIncludes) {
          this.typeFilters = this.typeFilters.filter(
            (item) => !knifes.includes(item)
          );
        } else {
          this.typeFilters.push(
            ...knifes.filter((item) => !this.typeFilters.includes(item))
          );
        }
        return true;
      default:
        return false;
    }
  }

  public resetAllFilters() {
    this.priceFilter = [0, 1000000];
    this.qualityFilters = [];
    this.rareFilters = [];
    this.phaseFilters = [];
    this.categoryFilters = [];
    this.stickerFilters = [];
    this.typeFilters = [];
    this.nameFilters = [];
    this.classicFilter = "default";
  }
  public constructor() {
    makeAutoObservable(this);
  }
  public setSkins(value: ISkin[]) {
    this.skins = value;
  }
  public getSkins() {
    return this.skins;
  }
  public setPriceFilter(number: number[]) {
    this.priceFilter = number;
  }
  public getPriceFilter() {
    return this.priceFilter;
  }
  public resetPriceFilter() {
    this.priceFilter = [0, 1000000];
  }

  public setQualityFilters(filter: string) {
    if (this.qualityFilters.includes(filter)) {
      this.qualityFilters = this.qualityFilters.filter(
        (item) => item !== filter
      );
    } else {
      this.qualityFilters.push(filter);
    }
  }
  public getQualityFilters() {
    return this.qualityFilters;
  }
  public resetQualityFilters() {
    this.qualityFilters = [];
  }
  public setRareFilters(filter: string) {
    if (this.rareFilters.includes(filter)) {
      this.rareFilters = this.rareFilters.filter((item) => item !== filter);
    } else {
      this.rareFilters.push(filter);
    }
  }
  public getRareFilters() {
    return this.rareFilters;
  }
  public resetRareFilters() {
    this.rareFilters = [];
  }

  public setPhaseFilters(filter: string) {
    if (this.phaseFilters.includes(filter)) {
      this.phaseFilters = this.phaseFilters.filter((item) => item !== filter);
    } else {
      this.phaseFilters.push(filter);
    }
  }
  public getPhaseFilters() {
    return this.phaseFilters;
  }
  public resetPhaseFilters() {
    this.phaseFilters = [];
  }

  public setCategoryFilters(filter: string) {
    if (this.categoryFilters.includes(filter)) {
      this.categoryFilters = this.categoryFilters.filter(
        (item) => item !== filter
      );
    } else {
      this.categoryFilters.push(filter);
    }
  }
  public getCategoryFilters() {
    return this.categoryFilters;
  }
  public resetCategoryFilters() {
    this.categoryFilters = [];
  }

  public setStickerFilters(filter: string) {
    if (this.stickerFilters.includes(filter)) {
      this.stickerFilters = this.stickerFilters.filter(
        (item) => item !== filter
      );
    } else {
      this.stickerFilters.push(filter);
    }
  }
  public getStickerFilters() {
    return this.stickerFilters;
  }
  public resetStickerFilters() {
    this.stickerFilters = [];
  }

  public setTypeFilters(filter: string) {
    const allTypes = this.typeConvert(filter);
    if (!allTypes) {
      if (this.typeFilters.includes(filter)) {
        this.typeFilters = this.typeFilters.filter((item) => item !== filter);
      } else {
        this.typeFilters.push(filter);
      }
    }
  }
  public getTypeFilters() {
    return this.typeFilters;
  }
  public resetTypeFilters() {
    this.typeFilters = [];
  }

  public setNameFilters(filter: string) {
    filter = filter.trim();
    if (this.nameFilters.includes(filter)) {
      this.nameFilters = this.nameFilters.filter((item) => item !== filter);
    } else {
      this.nameFilters.push(filter);
    }
  }
  public getNameFilters() {
    return this.nameFilters;
  }
  public resetNameFilters() {
    this.nameFilters = [];
  }

  public setClassicFilter(filter: string) {
    this.classicFilter = filter;
  }

  public getClassicFilter() {
    return this.classicFilter;
  }

  public resetClassicFilter() {
    this.classicFilter = "default";
  }
}
export const filterStore = new FilterStore();

class ShopingCartStore {
  private cart: ICart = { items: [] };
  constructor() {
    makeAutoObservable(this);
  }
  getCart() {
    return this.cart;
  }
  setCartItem(skin: ISkin) {
    const exists = this.cart.items.some((item) => item.id === skin.id);
    if (exists) {
      this.cart.items = this.cart.items.filter((i) => i.id !== skin.id);
    } else {
      this.cart.items.push(skin);
    }
  }

  clearCart() {
    this.cart.items = [];
  }
}
export const shopingCardStore = new ShopingCartStore();
