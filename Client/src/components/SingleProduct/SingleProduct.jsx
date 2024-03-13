import "./SingleProduct.scss";
import { useState, useContext } from "react";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaCartPlus } from "react-icons/fa";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";

const SingleProduct = () => {
    const [quantity, setquantity] = useState(0);
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters] [id]=${id}`)
    const { handleAddToCart } = useContext(Context);

    const increment = () => {
        setquantity((perState) => perState + 1);
    };
    const decrement = () => {
        setquantity((perState) => {
            if (perState === 0) return 0
            return perState - 1;
        });
    };



    if (!data) return;
    const product = data.data[0].attributes
    return (
        <div className="single-prod-main-content">
            <div className="layout">
                <div className="single-prod-page">
                    <div className="left">
                        <img src={process.env.REACT_APP_DEV_URL + product.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">&#8377; {product.price}</span>
                        <span className="desc">{product.desc}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            {quantity > 0 ? (
                                <button className="add-to-cart-button" onClick={() => {
                                    handleAddToCart(data.data[0], quantity);
                                    setquantity(0);
                                }}>
                                    <FaCartPlus size={20} />
                                    ADD TO CART
                                </button>
                            ) : (
                                <button className="add-to-cart-button" disabled>
                                    <FaCartPlus size={20} />
                                    ADD TO CART
                                </button>
                            )}
                        </div>



                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category : &nbsp;
                                <span>{product.categories.data[0].attributes.title}</span>
                            </span>
                            <div className="text-bold">
                                <div className="social-icons"> Share : &nbsp;
                                    <div className="icon">
                                        <FaFacebook size={14} />
                                    </div>
                                    <div className="icon">
                                        <FaTwitter size={14} />
                                    </div>
                                    <div className="icon">
                                        <FaLinkedinIn size={14} />
                                    </div>
                                    <div className="icon">
                                        <FaInstagram size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts productId={id} categoryId={product?.categories?.data[0]?.id} />
            </div>
        </div>
    )
};

export default SingleProduct;
