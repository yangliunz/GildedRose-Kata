import { Item, ShopItemName } from "../constants";
import BaseShopItem from "./shopItems/base";
import AgedBrieShopItem from "./shopItems/aged_brie";
import BackstagePassToTAFKAL80ETC from "./shopItems/backstage_pass";
import ConjuredManaCadeShopItem from "./shopItems/conjured_mana_cake";

const shopFacotry = (item: Item) => {
  switch (item.name) {
    case ShopItemName.Aged_Brie:
      // create instance for Aged Brie;
      return new AgedBrieShopItem(item);
    case ShopItemName.Backstage_Pass_To_TAFKAL80ETC:
      // create instance for Sulfuras, Hand of Ragnaros;
      return new BackstagePassToTAFKAL80ETC(item);
    case ShopItemName.Conjured_Mana_Cake:
      return new ConjuredManaCadeShopItem(item)
      // create instance for Conjured Mana Cake;
      break;
    // case ShopItemName.Sulfuras_Hand_Of_Ragnaros:
    //   // create instance for Sulfuras, Hand of Ragnaros;
    //   break;
    default:
      //value 'Unknown' create instance for base item
      return new BaseShopItem(item)
  }
  return null;
}

export default shopFacotry;