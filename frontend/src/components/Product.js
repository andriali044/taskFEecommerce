import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <img src="https://asset.kompas.com/crops/yqHUrUMME2QSGILGvNH-LYuTdns=/12x51:892x637/780x390/data/photo/2022/03/05/622358ed771fb.jpg" 
            alt="product name" />
            <div className="product__info">
                <p className="info__name"></p>
                <p className="info__description">
                    Lorem ipsum dolor sit amet con et magnis dis parturient mont et dis
                    partur adipiscing elit. Lorem ipsum dolor sit amet con et magnis dis
                    parturient mont et dis partur adipiscing elit.
                </p>
                <p className="info__price">$99.99</p>
                <Link to={`/product/${1111}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    );
};
export default Product;