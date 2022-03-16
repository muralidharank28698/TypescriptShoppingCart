import { PRODUCT_ITEM, ADD_TO_CART, LOAD_CURRENT_ITEM } from "./models/actions";
import { ProductInterface } from "../product/models/Product";

// action creators

export const productItem = () => ({
  type: PRODUCT_ITEM,
});

export const addToCart = (itemId: number) => ({
  type: ADD_TO_CART,
  payload: itemId,
});

export const loadCurrentItem = (item: ProductInterface) => ({
  type: LOAD_CURRENT_ITEM,
  payload: item,
});
