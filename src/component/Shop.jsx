import style from './Shop.module.css'

const Shop = () => {
  return (
    <>
    <div>
        {/* shop */}
        <section className={style.shop}>
            {/* text */}
            <div className={style.text}>
                <h1>Nigeria’s No. 1 online print shop 👑</h1>
                <p>Our print services and solutions are trusted by these brands and over 15,000 other businesses in Nigeria.</p>
            </div>

            {/* image */}
            <div className={style.image}>
                <img src="../src/assets/microsoft.png" alt="" />
            </div>
        </section>
    </div>
    </>
  )
}

export default Shop