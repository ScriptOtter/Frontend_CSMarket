import { ISkin } from "@/data/skins.data";

export interface ICart {
  items: IItem[];
}
interface IItem extends ISkin {}
