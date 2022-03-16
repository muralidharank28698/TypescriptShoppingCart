import { type } from "os";
import { ProductInterface } from "../../product/models/Product";

export const PRODUCT_ITEM = "PRODUCT_ITEM";
export const ADD_TO_CART = "ADD_TO_CART";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

// action types

interface productItem {
  type: typeof PRODUCT_ITEM;
}

interface addToCart {
  // payload: ProductInterface;
  payload: number;
  type: typeof ADD_TO_CART;
}

interface loadCurrentItem {
  type: typeof LOAD_CURRENT_ITEM;
  payload: ProductInterface;
}

export type ProductActionTypes = productItem | addToCart | loadCurrentItem;
