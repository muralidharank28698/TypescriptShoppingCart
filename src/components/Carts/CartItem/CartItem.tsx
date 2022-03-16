import React, { useState } from "react";
// import "./CartItem.css";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductInterface } from "../../../Store/product/models/Product";

import { connect } from "react-redux";

interface productProps {
  product: ProductInterface;
}
// interface AppProps {
//   productitem: () => void;
//   addtocart: () => void;
//   cart: ProductInterface[];
// }
type PropType = productProps;

const CartItem = (props: productProps) => {
  const { product } = props;

  // const { cart } = props;
  // console.log(product.title);

  // console.log(itemData);
  // console.log(itemdata.title);
  // const [input, setInput] = useState(itemData.qty);

  // const onChangeHandler = (e) => {
  //   // console.log(e.target.value);
  //   setInput(e.target.value);
  //   adjustQty(itemData.id, e.target.value);
  // };

  return (
    <div className="productSingleContainer">
      <div className="productSingleContainerImage">
        <img src={product.image} alt={product.title} />
      </div>
      <hr />
      <div className="productSingleContainerContents">
        <h2>
          <span>Model Name:</span> {product.title}
        </h2>
        <p>
          <span>Description:</span> {product.des}
        </p>
        <p>
          <span>M.R.P.:</span> {product.price}
        </p>
        <p>
          <span>Memory Storage:</span> {product.Memory}
        </p>
        <Stack spacing={2} direction="row" className="Btns">
          <Link to={`/`}>
            <Button color="warning" size="small" variant="contained">
              remove
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//     adjustQty: (id, value) => dispatch(adjustQty(id, value)),
//   };
// };

// export default connect(null, mapDispatchToProps)(CartItem);
export default CartItem;
