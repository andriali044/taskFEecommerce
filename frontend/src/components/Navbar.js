import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            {/*logo*/}
            <div className="navbar__logo">
                <h2>Ali Square</h2>
            </div>
            {/*links*/}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        {/*icon*/}
                        <span>
                        Cart
                        <span className="cartlogo_badge">0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
            {/*hamburger menu*/}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;