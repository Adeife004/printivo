import style from "./Count.module.css";
import TimeIcon from "../assets/time.svg";
import QualityIcon from "../assets/quality.svg";
import ServiceIcon from "../assets/service.svg";

const Count = () => {
  return (
    <>
      <div>
        <section className={style.count}>
          {/* text */}
          <div className={style.text}>
            <h2>You can count on us for:</h2>
          </div>

          {/* card-content */}
          <div className={style.cardContent}>
            {/* card */}
            <div className={style.card}>
              <img src={TimeIcon} alt="Fast turnaround icon" />
              {/* card-text */}
              <div className={style.cardText}>
                <h4>Fast Turnaround Within Days</h4>
                <p>
                  Your order gets to you within 3-7 working days via DHL or our
                  very own Printivo Direct.
                </p>
              </div>
            </div>

            {/* card */}
            <div className={style.card}>
              <img src={QualityIcon} alt="Top quality icon" />
              {/* card-text */}
              <div className={style.cardText}>
                <h4>100% Top Quality</h4>
                <p>
                  Only the finest materials, machines and people will be involved
                  in fulfilling your order.
                </p>
              </div>
            </div>

            {/* card */}
            <div className={style.card}>
              <img src={ServiceIcon} alt="Affordable service icon" />
              {/* card-text */}
              <div className={style.cardText}>
                <h4>Affordable Services</h4>
                <p>
                  All products are adequately priced to ensure you get value for
                  your money at all times.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Count;
