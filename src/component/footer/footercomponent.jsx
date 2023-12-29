import { FaFacebook, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { useTheme } from "../../themeContext";

const FooterComponent = () => {
    const { isDarkTheme } = useTheme()
    return (<>
        <hr style={{ borderColor: isDarkTheme ? "black" : "white", margin: 0, padding: 0 }} />
        <div className="footer" fixed="bottom" style={{ backgroundColor: isDarkTheme ? "white" : "black", color: !isDarkTheme ? "white" : "black" }}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-3">
                        <h3>Menu</h3>
                        <span>
                            <ul>
                                <li>HOME</li>
                                <li>ONGOING</li>
                                <li>UPCOMING</li>
                                <li>RANDOM</li>
                            </ul>
                        </span>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <span>Email: info@example.com</span>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Follow Us</h3>
                        <p>Connect with us on social media:</p>
                        <span>
                            <FaFacebook size={25} className="me-2" />
                            <FaSquareXTwitter size={25} className="me-2" />
                            <FaInstagram size={25} className="me-2" />
                        </span>
                    </div>
                    <div className="col-md-3">
                        <h3>Need Help?</h3>
                        <p>FAQs</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center py-1">
                <p>&copy; 2023 PixAnime. All rights reserved.</p>
            </div>
        </div>
    </>)
}
export default FooterComponent;