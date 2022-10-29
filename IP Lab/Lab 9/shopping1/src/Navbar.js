import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div>
        <nav className="nav1">
            <p className="navp1"><strong>Flipkart</strong></p>
            <input className="navsearch1" type="text" placeholder="Search for products, brands and more" />
            <button className="navlogin1">Login</button>
            <p className="navtxt1">Become a Seller</p>
            <p className="navtxt1"><Link style={{color:"white",textDecorationLine:"none"}} to="/contact">Contact us</Link></p>
            <p className="navtxt1">Cart</p>
        </nav>
    </div>
        <div>
        <nav className="navbar2">
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f0b3c58d99158fc3.png?q=100" alt="Loading" />
                <p>Top Offers</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/9bb3499c8248d2ba.png?q=100" alt="Loading" />
                <p><Link to="/" style={{color:"black",textDecorationLine:"none"}}>Mobiles & Tablets</Link></p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f8928124c04bc6e9.png?q=100" alt="Loading" />
                <p>Electronics</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d7278abbff8ba2a.png?q=100" alt="Loading" />
                <p>TVs & Appliances</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a28598a782b6b4cf.png?q=100" alt="Loading" />
                <p>Fashion</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a84e58e11c8b10b6.png?q=100" alt="Loading" />
                <p>Beauty</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47874cd4acbfaf20.png?q=100" alt="Loading" />
                <p>Home & Furniture</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a1140bead6bfd787.png?q=100" alt="Loading" />
                <p>FK Originals</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/705e339964226df2.png?q=100" alt="Loading" />
                <p>Flights & Hotels</p>
            </div>
            <div className="nav2imgtxt">
                <img className="nav2img" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5b09c4d0a60ecad7.png?q=100" alt="Loading" />
                <p>Grocery</p>
            </div>
        </nav>
    </div>
    </>
    );
}

export default Navbar;