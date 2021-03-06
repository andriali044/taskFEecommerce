import "./HomeScreen.css";
import Product from "../components/Product";

const HomeScreen = () => {
    return (
    <div className="homescreen">
        <h2 className="homescreen__tittle">Latest Product</h2>
        <div className="homescreen__products">
            <Product />
        </div>
    </div>
    );
};

export default HomeScreen;