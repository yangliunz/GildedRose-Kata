import { Default_MAX_Quality, Default_MIN_Quality, Default_Rot_Speed, Item, ShopItem } from "../../constants";
import BaseShopItem from "./base";

class BackstagePassToTAFKAL80ETC extends BaseShopItem {
  constructor(item: Item) {
    super(item)
  }

  getQualityChangeAmount() {
    let amountToChange = 0

    if (this.sellIn <= 0) {
      amountToChange = -this.quality;
    } else if (this.sellIn <= 5) {
      amountToChange = 3;
    } else if (this.sellIn <= 10) {
      amountToChange = 2;
    } if (this.sellIn > 10) {
      amountToChange = -Default_Rot_Speed;
    }


    if (this.quality + amountToChange > Default_MAX_Quality) {
      amountToChange = Default_MAX_Quality - this.quality;
    } else if (this.quality + amountToChange < Default_MIN_Quality) {
      amountToChange = Default_MIN_Quality - this.quality;
    }

    return amountToChange;
  }

}

export default BackstagePassToTAFKAL80ETC;