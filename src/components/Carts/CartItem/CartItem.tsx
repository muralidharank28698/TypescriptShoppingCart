import React, { useState } from "react";
// import "./CartItem.css";
import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

function CartItem() {
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
        <img src={require("../../../assets/vivo.png")} alt="image" />
      </div>
      <hr />
      <div className="productSingleContainerContents">
        <h2>
          <span>Model Name:</span> vivo
        </h2>
        <p>
          <span>Description:</span> sadfvb
        </p>
        <p>
          <span>M.R.P.:</span> 8888
        </p>
        <p>
          <span>Memory Storage:</span> 12000
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
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//     adjustQty: (id, value) => dispatch(adjustQty(id, value)),
//   };
// };

// export default connect(null, mapDispatchToProps)(CartItem);
export default CartItem;
