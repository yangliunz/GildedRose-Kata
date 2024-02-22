import { Default_MAX_Quality, Default_MIN_Quality, Default_Rot_Speed, Item, ShopItem } from "../../constants";
import BaseShopItem from "./base";

class AgedBrieShopItem extends BaseShopItem {
  constructor(item: Item) {
    super(item)
  }

  getQualityChangeAmount() {
    let amountToChange = this.sellIn < 0 ? -2 * Default_Rot_Speed : -Default_Rot_Speed

    if (this.quality + amountToChange > Default_MAX_Quality) {
      amountToChange = Default_MAX_Quality - this.quality;
    } else if (this.quality + amountToChange < Default_MIN_Quality) {
      amountToChange = Default_MIN_Quality - this.quality;
    }

    return amountToChange;
  }

}

export default AgedBrieShopItem;