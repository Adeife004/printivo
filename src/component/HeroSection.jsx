import style from './HeroSection.module.css';
import heroImage from '../assets/hero-image.png'

const HeroSection = () => {
  return (
    <div>
        {/*heroSection */}
        <section className={style.heroSection}>
            {/* heroText */}
            <div className={style.heroText}>
                <h1>Quality Prints</h1>
                <h3>Shipped To Your Doorstep</h3>

                {/* search */}
                <div className={style.search}>
                    <p>What Would You Like To Print Today?</p>

                    {/* input search icon inside the input */}

                    <div className="searchInput">
                    <input type="text" placeholder="Search for products e.g Business Cards, Flyers, etc" />
                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                    </div>
                </div>
            </div>
            {/* heroImage */}
            <div className={style.heroImage}>
                <img src={heroImage} alt="" />
            </div>
        </section>
    </div>
  )
}

export default HeroSection