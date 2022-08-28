import React from "react";
import "./prod.css";
import { useStateValue } from "./provider";

function Product({ id, title, img, price }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
            },
        });
    };

    return (
        <div className="prod">
            <div className="prodinfo">
                <span>{id}</span>
                <span>{title}</span>
                <div className="price">
                    <small>₹</small>
                    {price}
                </div>
            </div>
            <div>
                <img className="image" src={img} alt="" />
                <button className="prodbut" onClick={addToCart} >Add to cart</button>
            </div>
        </div>
    );
}

export default Product;