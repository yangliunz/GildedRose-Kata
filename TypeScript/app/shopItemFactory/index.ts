import { Item, ShopItemName } from "../constants";
import BaseShopItem from "./shopItems/base";
import AgedBrieShopItem from "./shopItems/aged_brie";
import BackstagePassToTAFKAL80ETC from "./shopItems/backstage_pass";
import ConjuredManaCadeShopItem from "./shopItems/conjured_mana_cake";
import SulfurasHandOfRagnarosShopItem from "./shopItems/sulfuras_hand_of_ragnaros";

const shopFacotry = (item: Item) => {
  switch (item.name) {
    case ShopItemName.Aged_Brie:
      // create instance for Aged Brie;
      return new AgedBrieShopItem(item);
    case ShopItemName.Backstage_Pass_To_TAFKAL80ETC:
      // create instance for Sulfuras, Hand of Ragnaros;
      return new BackstagePassToTAFKAL80ETC(item);
    case ShopItemName.Conjured_Mana_Cake:
      // create instance for Conjured Mana Cake;
      return new ConjuredManaCadeShopItem(item)
      break;
    case ShopItemName.Sulfuras_Hand_Of_Ragnaros:
      // create instance for Sulfuras, Hand of Ragnaros;
      return new SulfurasHandOfRagnarosShopItem(item)
      break;
    default:
      //value 'Unknown' create instance for base item
      return new BaseShopItem(item)
  }
}

export default shopFacotry;