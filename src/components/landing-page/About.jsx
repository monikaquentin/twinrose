import doll_img from '@/assets/png/doll.png'

import { useTranslation } from 'react-i18next'

function About() {
  //
  const { t, i18n } = useTranslation()

  return (
    <section className="a71a4-about" id="a71a4-about">
      <div className="a71a4-about__image">
        <div className="a71a4-about__fca02">
          <h1>
            フ<br />リ
          </h1>
          <p className="fca02__title">{t('terms_title')}</p>
          <p className="fca02__description">{t('terms_paragraph')}</p>
          <ul className="fca02__description">
            <li>{t('terms_ul.one')}</li>
            <li>{t('terms_ul.two')}</li>
            <li>{t('terms_ul.three')}</li>
            <li>{t('terms_ul.four')}</li>
            <li>{t('terms_ul.five')}</li>
          </ul>
        </div>

        <div className="a71a4-about__fca02">
          <h1>ー</h1>
          <p className="fca02__title">{t('conditions_title')}</p>
          <p className="fca02__description">{t('conditions_paragraph')}</p>
        </div>

        <div className="a71a4-about__image-fca022">
          <h1>
            ダ<br />ム
          </h1>
          <p className="fca02__title">{t('law_enforcement_title')}</p>
          <p className="fca02__description">{t('law_enforcement_paragraph')}</p>
        </div>
      </div>

      <div className="a71a4-about__content" data-aos="fade-left">
        <p className="fca02__subtitle">
          {t('our_mission_title')}
          <span>{i18n.language !== 'jp' ? ' / 我々の使命' : null}</span>
        </p>
        <h3 className="fca02__title">{t('our_mission_subtitle')}</h3>
        <img src={doll_img} alt="Doll" />
        <p className="fca02__description">{t('our_mission_paragraph')}</p>
      </div>
    </section>
  )
}

export default About
