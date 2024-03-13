import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentRequest } from "../../utils/api"
import { useNavigate } from "react-router-dom";




const Cart = ({ setshowCart }) => {
    const { cartItems, cartSubTotal } = useContext(Context);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
    const navigate = useNavigate();

    const onchange = () => {
        navigate("/")
        setshowCart(false)
    };
 
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {
        }
    };
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setshowCart(false)}>
                        <MdClose size={25}  />
                        {/* <span className="text">Close</span> */}
                    </span>
                </div>
                {!cartItems?.length && <div className="empty-cart">
                    <BsCartX />
                    <span>Your Card is Empty..</span>
                    <button className="return-cta" onClick={onchange} >SHOP NOW</button>
                </div>}

                {!!cartItems?.length && <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subTotal">
                            <span className="text">Total</span>&nbsp;&nbsp;
                            <span className="text total">&#8377; {cartSubTotal}</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
};

export default Cart;


// makePaymentRequest