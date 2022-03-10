import { PRODUCT_ITEM, ADD_TO_CART } from "./models/actions";

export const productItem = () => ({
  type: PRODUCT_ITEM,
});

export const addToCart = () => ({
  type: ADD_TO_CART,
});
