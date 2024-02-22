export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

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

  // get the amount to change for sellin by day
  getSellInChangeAmount():number;

  // get the amount to change for qaulity by day
  getQualityChangeAmount():number;
}

export const Default_Rot_Speed = -1;
export const Default_MAX_Quality = 50;
export const Default_MIN_Quality = 0;