import React, { useState } from "react";
import "./viewProduct.css";
function ViewProduct({ product }) {
  //create state for QTY
  const [qty, setQty] = useState(1);
  const [showDescription, setShowDescription] = useState("");
  const [showReviews, setShowReviews] = useState("");

  function qtyDecrease() {
    setQty((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  }
  function qtyIncrease() {
    setQty((prev) => {
      return prev + 1;
    });
  }

  function toggleShowDescription() {
    setShowDescription((prev) => {
      console.log("triggered");
      let value = prev === "open" ? "" : "open";
      return value;
    });
  }

  function toggleShowReviews() {
    setShowReviews((prev) => {
      console.log("triggered");
      let value = prev === "open" ? "" : "open";
      return value;
    });
  }

  return (
    <div className="page-content flex-col j-center">
      <div className="view-product-container flex-col j-center gap20">
        <div className="product-header flex-row j-center a-center gap20">
          <h3>{product.title}</h3>
        </div>
        <div className="main-content j-center flex-row gap20">
          {/* LEFT SIDE - PRODUCT IMAGES */}
          <div className="left-side flex-col gap20">
            <div className="main-image flex-col j-center a-center">
              <img src={product.images[2]} alt={product.title} />
            </div>
            <div className="additional-images">
              {product.images.map((image, index) => (
                <div key={index} className="small-thumbnail">
                  <img src={image} alt="additional images" />
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT SIDE - PRODUCT INFO & ACTIONS */}
          <div className="right-side flex-col gap20">
            {/* qty button */}
            <div className="qty-btn-container flex-row a-center j-between">
              <button onClick={() => qtyDecrease()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M200-440v-80h560v80H200Z" />
                </svg>
              </button>
              <p>{qty}</p>
              <button onClick={() => qtyIncrease()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="black"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </button>
            </div>
            {/* add to cart button */}
            <button className="add-to-cart-btn">
              ADD TO CART | ${product.price}
            </button>
            {/* product info and misc */}
            <div className="flex-col gap20">
              {/* product info */}
              <div>
                <div
                  className="toggle-item flex-row j-between"
                  style={{ width: "200px" }}
                  onClick={() => toggleShowDescription()}
                >
                  <h3>PRODUCT INFO</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="black"
                  >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                </div>
                <div className={`toggle-item-content ${showDescription}`}>
                  <h4>Description</h4>
                  <p>{product.description}</p>
                  <div className="flex-col gap20">
                    <div>
                      <h4>Brand</h4>
                      <p>{product.brand}</p>
                    </div>
                    <div>
                      <h4>SKU</h4>
                      <p>{product.sku}</p>
                    </div>
                    <div className="flex-row gap20">
                      <div>
                        <h4>Width</h4>
                        <p>{product.dimensions.width} in</p>
                      </div>
                      <div>
                        <h4>Height</h4>
                        <p>{product.dimensions.height} in</p>
                      </div>
                      <div>
                        <h4>Width</h4>
                        <p>{product.dimensions.depth} in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* reviews */}
              <div>
                <div
                  className="toggle-item flex-row j-between"
                  style={{ width: "200px" }}
                  onClick={() => toggleShowReviews()}
                >
                  <h3>REVIEWS</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="black"
                  >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                  </svg>
                </div>
                <div className={`toggle-item-content ${showReviews}`}>
                  {product.reviews.map((review, index) => (
                    <div key={index} style={{ marginTop: "10px" }}>
                      <div className="flex-row gap10">
                        <p>{review.rating} stars</p>
                      </div>
                      <div className="flex-row gap10">
                        <h4>Review</h4>
                        <p>{review.comment}</p>
                      </div>
                      <p>By: {review.reviewerName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
