import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import "./SingleItem.css";
// import vivo from "../../assets/vivo.png";
import { AppState } from "../../Store/rootStore";

const SingleItem = ({}) => {
  //   console.log(currentItem);
  return (
    <div className="singleProductContainer">
      <div className="singleProductContainer-image">
        {/* <img src={currentItem.image} alt={currentItem.title} /> */}
        <img src={require("../../assets/vivo.png")} alt="image" />
      </div>
      <hr />
      <div className="singleProductContainerContent">
        <table>
          <tr>
            <th>Product Name:</th>
            <td>
              <h2>vivo</h2>
            </td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>
              <p>
                descriptionvdescription description description description
                description
              </p>
            </td>
          </tr>
          <tr>
            <th>Price:</th>
            <td>
              <p>₹ 12000</p>
            </td>
          </tr>
          <tr>
            <th>Memory:</th>
            <td>
              <p>1000</p>
            </td>
          </tr>
          <tr>
            <th></th>
            <td style={{ float: "right" }}>
              <Button color="secondary" variant="contained">
                Add To Cart
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

// const mapStateToProps = (state: AppState) => {
//   console.log(state);
//   return {
//     currentItem: state.ProductReducer.products,
//   };
// };
// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     currentItem: state.shop.currentItem,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };

// export default connect(mapStateToProps)(SingleItem);
export default SingleItem;
