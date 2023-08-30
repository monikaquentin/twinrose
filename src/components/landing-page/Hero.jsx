import twin_rose_img from '@/assets/png/twin-rose.png'
import re_img from '@/assets/jpg/avatar_default_1-20230707-0001.jpg'
import fingerprint_img from '@/assets/svg/fingerprint.svg'

import { useTranslation } from 'react-i18next'

export default function Hero() {
  //
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <section className="ba377-hero">
      <div className="ba377-hero__image">
        <img src={twin_rose_img} alt="Twin Rose" data-aos="fade-up" />
        <h2 data-aos="fade-up">
          ツ<br />イ<br />ン<br />ロ<br />ー<br />ズ
        </h2>

        <div className="ba377-hero__image-overlay"></div>
      </div>

      <div className="ba377-hero__content">
        <div className="ba377-hero__content-info" data-aos="fade-left">
          <h1>Twin Rose</h1>
          <p>{t('main_paragraph')}</p>

          <div className="ba377-hero__content-buttons">
            <button className="ba377-hero__content-services-button">
              {t('explore_services_btn')}
            </button>
            <button className="ba377-hero__content-public-key-button">
              <img src={fingerprint_img} alt="Public Key" />
              {t('public_key_btn')}
            </button>
          </div>
        </div>

        <div className="ba377-hero__content-testimonial" data-aos="fade-up">
          <div className="ba377-hero__content-customer flex-center">
            <h4>
              &copy;<span>{year}</span>
            </h4>
            <p>Twin Rose</p>
          </div>

          <div className="ba377-hero__content-review">
            <img src={re_img} alt="RE" />
            <p>{t('created_by')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
