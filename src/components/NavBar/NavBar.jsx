
import UserWidget from "../UserWidget/UserWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header className="header">
            <img src="./img/logo.webp" alt="Tekni brand" />
            <nav className="navBar">
                {/* <label for="menu">
                </label> */}
                <ul>
                    <li><img src="./img/home.svg" alt="Home icon"/>Home</li>
                    <li><img src="./img/products.svg" alt="Products icon"/>Products</li>
                    <li id="categorySection"><img src="./img/categories.svg" alt=""/>Categories
                        <nav className="categoryItems">
                            <ul>
                                <li className="li" ><img src="./img/laptop6.webp" alt="Laptop pic"/>Laptops</li>
                                <li className="li" ><img src="./img/smartphone6.webp" alt="smartphone pic"/>Smartphones</li>
                                <li className="li" ><img src="./img/tv8.webp" alt="Tv pic"/>SmartTVs</li>
                                <li className="li" ><img src="./img/headset1.webp" alt="Headset pic"/>Headset</li>
                            </ul>
                        </nav>
                    </li>
                    <li><img src="./img/services.svg" alt=""/>Services</li>
                    <li><img src="./img/contactUs.svg" alt=""/>Contact us</li>
                </ul>
            </nav>
            <UserWidget/>
            <CartWidget/>
            <ItemListContainer/>
        </header>
    )
}

export default NavBar

