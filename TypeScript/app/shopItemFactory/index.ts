import { Item, ShopItemName } from "@/constants";

const shopFacotry = (item: Item) => {
  switch (item.name) {
    case ShopItemName.Aged_Brie:
      // create instance for Aged Brie;
      break;
    case ShopItemName.Backstage_Pass_To_TAFKAL80ETC:
      // create instance for Sulfuras, Hand of Ragnaros;
      break;
    case ShopItemName.Conjured_Mana_Cake:
      // create instance for Conjured Mana Cake;
      break;
    case ShopItemName.Sulfuras_Hand_Of_Ragnaros:
      // create instance for Sulfuras, Hand of Ragnaros;
      break;
    default:
      //value 'Unknown' create instance for base item
      break;
  }
}

export default shopFacotry;