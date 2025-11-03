import style from './Work.module.css'

const Works = () => {
  return (
    <>
    <div>
        <section className={style.work}>
            <h2>Our amazing work got noticed by:</h2>

            {/* card */}
            <div className={style.card}>
                {/* content */}
                <div className={style.tech}>
                    <img src="../src/assets/techcrunch.svg" alt=""  />
                    <a href="#">Read The Article Here</a>
                </div>

                 {/* content */}
                <div className={style.forbes}>
                    <img src="../src/assets/forbes.svg" alt="" />
                    <a href="#">Read The Article Here</a>
                </div>

                 {/* content */}
                <div className={style.content}>
                    <img src="../src/assets/techpoint.png" alt="" />
                    <a href="#">Read The Article Here</a>
                </div>

                 {/* content */}
                <div className={style.content}>
                    <img src="../src/assets/techcabal.svg" alt=""  />
                    <a href="#">Read The Article Here</a>
                </div>

                 {/* content */}
                <div className={style.cnn}>
                    <img src="../src/assets/cnn.svg" alt="" className={style.cnn} />
                    <a href="#">Read The Article Here</a>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Works