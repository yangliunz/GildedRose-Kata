export enum ShopItemName {
  Aged_Brie = 'Aged Brie',
  Sulfuras_Hand_Of_Ragnaros = 'Sulfuras, Hand of Ragnaros',
  Backstage_Pass_To_TAFKAL80ETC = 'Backstage passes to a TAFKAL80ETC concert',
  Conjured_Mana_Cake = 'Conjured Mana Cake',
  Unknown = 'Unknown',
}

export interface ShopItem {
  name: ShopItemName | string;
  sellIn: number;
  quality: number;

  getSellInChangeAmount():number;
  getQualityChangeAmount():number;

}