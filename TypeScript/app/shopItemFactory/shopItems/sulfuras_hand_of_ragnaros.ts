import { Default_MAX_Quality, Default_MIN_Quality, Default_Rot_Speed, Item, ShopItem } from "../../constants";
import BaseShopItem from "./base";

class SulfurasHandOfRagnarosShopItem extends BaseShopItem {
  constructor(item: Item) {
    super(item)
  }

  getSellInChangeAmount(): number {
    if (this.sellIn < 0) {
      return -this.sellIn
    }
    return 0
  }

  getQualityChangeAmount(): number {
    return 0
  }

}

export default SulfurasHandOfRagnarosShopItem;