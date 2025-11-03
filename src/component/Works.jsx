import style from './Work.module.css'
import techcrunch from '../assets/techcrunch.svg'
import forbes from '../assets/forbes.svg'
import techpoint from '../assets/techpoint.png'
import techcabal from '../assets/techcabal.svg'
import cnn from '../assets/cnn.svg'

const Works = () => {
  return (
    <>
      <div>
        <section className={style.work}>
          <h2>Our amazing work got noticed by:</h2>

          {/* card */}
          <div className={style.card}>
            <div className={style.tech}>
              <img src={techcrunch} alt="TechCrunch" />
              <a href="#">Read The Article Here</a>
            </div>

            <div className={style.forbes}>
              <img src={forbes} alt="Forbes" />
              <a href="#">Read The Article Here</a>
            </div>

            <div className={style.content}>
              <img src={techpoint} alt="TechPoint" />
              <a href="#">Read The Article Here</a>
            </div>

            <div className={style.content}>
              <img src={techcabal} alt="TechCabal" />
              <a href="#">Read The Article Here</a>
            </div>

            <div className={style.cnn}>
              <img src={cnn} alt="CNN" />
              <a href="#">Read The Article Here</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Works
