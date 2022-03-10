import { type } from "os";

export const PRODUCT_ITEM = "PRODUCT_ITEM";
export const ADD_TO_CART = "ADD_TO_CART";

interface productItem {
  type: typeof PRODUCT_ITEM;
}

interface addToCart {
  type: typeof ADD_TO_CART;
}

export type ProductActionTypes = productItem | addToCart;
