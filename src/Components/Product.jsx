import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../Redux/Actions/index";

const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [loading, setLoading] = useState(false);
  const dispath = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);


  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispath(addItem(product))
      setCartBtn("Remove from Cart")
    } else {
      dispath(delItem(product))

      setCartBtn("Add to Cart")
    }
  }

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-left mx-auto product">
              <img
                src={product.image} alt={product.title} height="400px" />
            </div>
            <div className="col-md-6 flex-column justify-content-center">

              <h4 className="text-uppercase text-black-50">{product.category}</h4>

              <h1 className="display-5 fw-bold">{product.title}</h1>
              <hr />
              <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i class="bi bi-star-fill"></i>
              </p>

              <h3 className="my-4">$ {product.price}</h3>

              <p className="lead">{product.description}</p>

              <button className="btn btn-outline-dark my-5"
                onClick={() => handleCart(product)}>
                <i class="bi bi-cart-plus-fill"></i> {cartBtn}
              </button>

              {/* <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2"> Buy Now </Link> */}
            </div>
          </div>

        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default Product;
