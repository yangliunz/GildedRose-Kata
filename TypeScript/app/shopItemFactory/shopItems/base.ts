import { Default_MAX_Quality, Default_MIN_Quality, Default_Rot_Speed, Item, ShopItem } from "../../constants";

class BaseShopItem implements ShopItem {
  name: string;
  quality: number;
  sellIn: number;

  constructor(item: Item) {
    this.name = item.name;;
    this.quality = item.quality;
    this.sellIn = item.sellIn;
  }

  getSellInChangeAmount(): number {
    return -1;
  }

  getQualityChangeAmount(): number {
    let amountToChange = this.sellIn < 0 ? 2 * Default_Rot_Speed : Default_Rot_Speed

    if (this.quality + amountToChange > Default_MAX_Quality) {
      amountToChange = Default_MAX_Quality - this.quality;
    } else if (this.quality + amountToChange < Default_MIN_Quality) {
      amountToChange = Default_MIN_Quality - this.quality;
    }

    return amountToChange;
  }

}

export default BaseShopItem;