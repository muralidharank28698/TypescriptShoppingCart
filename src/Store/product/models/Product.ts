export interface ProductInterface {
  id: number;
  title: string;
  des: string;
  price: string;
  image: string;
  Memory: string;
}

export interface ProductReducerInterface {
  products: ProductInterface[];
}
