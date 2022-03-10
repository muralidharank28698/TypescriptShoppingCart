import { Action, Reducer } from "redux";
import {
  ProductActionTypes,
  PRODUCT_ITEM,
  ADD_TO_CART,
} from "./models/actions";

import { ProductInterface, ProductReducerInterface } from "./models/Product";
import vivo from "../../assets/vivo.png";
import oppo from "../../assets/oppo.png";
import redmi from "../../assets/redmi.png";
import poco from "../../assets/poco.png";

const initialState: ProductReducerInterface = {
  products: [
    {
      id: 1,
      title: "Vivo S1",
      des: "Vivo S1 (Skyline Blue, 4GB RAM, 128GB Storage)",
      price: "14,899",
      image: vivo,
      Memory: "1000 GB",
    },
    {
      id: 2,
      title: "Oppo A53",
      des: "Oppo A53 128 GB, 6 GB RAM, Electric Black, Smartphone",
      price: "12,999",
      image: oppo,
      Memory: "1000 GB",
    },
    {
      id: 3,
      title: "Redmi Note 11T 5G ",
      des: "Redmi Note 11T 5G (Matte Black 8GB RAM 128GB ROM) | Dimensity 810 5G",
      price: "18,999",
      image: redmi,
      Memory: "1000 GB",
    },
    {
      id: 4,
      title: "POCO M4 Pro ",
      des: "POCO M4 Pro (Cool Blue, 64 GB)  (6 GB RAM)",
      price: "14,999",
      image: poco,
      Memory: "800 GB",
    },
  ],
};

export const ProductReducer: Reducer<ProductReducerInterface, Action> = (
  state = initialState,
  action: ProductActionTypes
) => {
  //   const nextState = {
  //     id: state.id,
  //   };
  switch (action.type) {
    case PRODUCT_ITEM:
      //   nextState.id = state.id + 1;
      return {
        ...state,
      };
    case ADD_TO_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};