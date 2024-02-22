import { Item } from "./constants";
import shopFacotry from "./shopItemFactory";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map(item => {
      const factoryItem = shopFacotry(item);
      if (factoryItem) {
        const sellInChangeAmount = factoryItem?.getSellInChangeAmount();
        const qaulityChangeAmount = factoryItem?.getQualityChangeAmount();
        item.quality = item.quality + qaulityChangeAmount;
        item.sellIn = item.sellIn + sellInChangeAmount;
      }
      return item;
    })
  }
}