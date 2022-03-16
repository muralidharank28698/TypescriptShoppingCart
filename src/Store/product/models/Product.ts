export interface ProductInterface {
  id: number;
  title: string;
  des: string;
  price: string;
  image: string;
  Memory: string;
  qty?: number;
}

export interface ProductReducerInterface {
  products: ProductInterface[];
  cart: ProductInterface[];
  currentItem?: ProductInterface;
}
