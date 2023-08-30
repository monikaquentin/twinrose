import check_img from '@/assets/svg/check.svg'
import arrow_horizontal_img from '@/assets/svg/arrow-horizontal.svg'
import arrow_vertical_img from '@/assets/svg/arrow-vertical.svg'
import one_img from '@/assets/png/second-rose.png'
import two_img from '@/assets/png/third-rose.png'

export default function Service() {
  return (
    <section className="be259-service" id="food">
      <section className="be259-service__sushi">
        <div className="be259-service__content" data-aos="fade-right">
          <p className="fca02__subtitle">
            What&apos;s be259-service / トレンド
          </p>

          <h3 className="fca02__title">Relation</h3>
          <p className="fca02__description">
            Improve the way you communicate by using proper privacy and
            security.
          </p>

          <ul className="be259-service__list flex-between">
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Make Sushi</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Oshizushi</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Uramaki Sushi</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Nigiri Sushi</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Temaki Sushi</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Inari Sushi</p>
            </li>
          </ul>
        </div>

        <div className="be259-service__image flex-center">
          <img src={two_img} alt="Rose" data-aos="fade-left" />

          <div className="be259-service__arrow be259-service__arrow-left">
            <img src={arrow_vertical_img} alt="Arrow Vertical" />
          </div>

          <div className="be259-service__arrow be259-service__arrow-bottom">
            <img src={arrow_horizontal_img} alt="Arrow Horizontal" />
          </div>
        </div>
      </section>

      <div className="be259-service__discover" data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <section className="be259-service__drinks">
        <div className="be259-service__image flex-center">
          <img className="z" src={one_img} alt="Email" data-aos="fade-right" />

          <div className="be259-service__arrow be259-service__arrow-top">
            <img src={arrow_horizontal_img} alt="Arrow Horizontal" />
          </div>

          <div className="be259-service__arrow be259-service__arrow-right">
            <img src={arrow_vertical_img} alt="Arrow Vertical" />
          </div>
        </div>

        <div className="be259-service__content" data-aos="fade-left">
          <p className="fca02__subtitle">
            What&apos;s be259-service / トレンド
          </p>

          <h3 className="fca02__title">Finance</h3>
          <p className="fca02__description">
            Feel the taste of the most delicious Japense drinks here.
          </p>

          <ul className="be259-service__list flex-between">
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Oruncha</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Sakura Tea</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Aojiru</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Ofukucha</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Kombu-cha</p>
            </li>
            <li>
              <div className="be259-service__icon flex-center">
                <img src={check_img} alt="Check" />
              </div>
              <p>Mugicha</p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}
