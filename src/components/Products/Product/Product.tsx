import React from "react";
import { Button, Stack } from "@mui/material";
import { ProductInterface } from "../../../Store/product/models/Product";

import "./Product.css";
import { Link } from "react-router-dom";

interface productProps {
  products: ProductInterface;
}

const Product = (props: productProps) => {
  const { products } = props;
  return (
    <div className="productSingleContainer">
      <div className="productSingleContainerImage">
        <img src={products.image} alt={products.title}></img>
      </div>
      <hr />
      <div className="productSingleContainerContents">
        <h2>
          <span>Model Name:</span> {products.title}
        </h2>
        <p>
          <span>Description:</span> {products.des}
        </p>
        <p>
          <span>M.R.P.:</span> {products.price}
        </p>
        <p>
          <span>Memory Storage:</span> {products.Memory}
        </p>
        <Stack spacing={2} direction="row" className="Btns">
          <Link to={`/SingleItem`}>
            <Button color="secondary" size="small" variant="contained">
              view Item
            </Button>
          </Link>
          <Button color="success" size="small" variant="contained">
            Add To Cart
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Product;
