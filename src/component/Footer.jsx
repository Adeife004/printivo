import style from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <div>
        <section className={style.content}>
            {/* card */}
            <div className={style.card}>
                <h4>Printivo</h4>

                {/* cardList */}
                <ul className={style.cardList}>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Track Order</li>
                    <li>Printivo Promise</li>
                    <li>Printivo Blog</li>
                    <li>Career</li>
                </ul>
            </div>

            <div className={style.card}>
                <h4>Help and Information</h4>

                {/* cardList */}
                <ul className={style.cardList}>
                    <li>Paper Quality</li>
                    <li>Privacy Policy</li>
                    <li>Terms And Conditions</li>
                    <li>Font Licenses</li>
                    <li>Shipping and Delivery</li>
                </ul>
            </div>

            <div className={style.card}>
                <h4>Make Money</h4>

                {/* cardList */}
                <ul className={style.cardList}>
                    <li>Refer a friend & earn N1,000</li>
                    <li>Become a Reseller</li>
                    <li>Sell your Designs</li>
                    <li>Merch Store</li>
                </ul>
            </div>

            {/* social */}
            <div className={style.social}>
                <h4>Follow Us</h4>
                <div className={style.icons}>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
                
                <h4>Accepted Payments</h4>
                <div className={style.icons}>
                    <a href="#"><i className="fab fa-cc-visa"></i></a>
                    <a href="#"><i className="fas fa-credit-card"></i></a>
                    <a href="#"><i className="fas fa-university"></i></a>
                </div>
                
                <h4>Delivery</h4>
                <img src="../src/assets/delivery.png" alt="" />
            </div>
        </section>
        <footer>
            <p>Copyright © 2023 Printivo. All rights reserved.</p>
        </footer>
    </div>
    </>
  )
}

export default Footer