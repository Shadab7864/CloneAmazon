import React from "react"
import "./prod.css"




function product({ Id, title, img, price }) {
    return (
        <div className="prod">
            <div className="prodinfo">
                <span>{Id}</span>
                <span>{title}</span>

            </div>
            <div >
                <img className="image" src={img} alt="" />          
                <button className="prodbut">Add to cart</button>  <div className="price">
                    <small>₹</small>
                    {price}
                </div>


            </div>

        </div>
    );

};
export default product;