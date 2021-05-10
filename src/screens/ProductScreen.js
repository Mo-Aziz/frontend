import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props) {
  // using find method to match the product id with the routing id
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> product Not Found</div>;
  }
  return (
      <div> 
          <Link to="/">Back to results</Link>
    <div className="row top">
      {/* photo column  */}
      <div className="col-2">
        <img className="large" src={product.image} alt={Product.name}></img>
      </div>
      {/* information div */}
      <div className="col-1">
        <ul>
          <li><h2>{product.name}</h2></li>
          <li>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </li>
          <li>Price : ${product.price}</li>
          <li>
            Description:
            <p>{product.description}</p>
          </li>
        </ul>
      </div>
      {/*Action column  */}
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>price</div>
                <div className="price">$ {product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div className="">
                  {product.countInStock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="error">Out Of Stock</span>
                  )}
                </div>
              </div>
            </li>
            <li>
              <button className="primary block"> Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
