import { useTranslation } from 'react-i18next'

function Newsletter() {
  //
  const { t } = useTranslation()

  return (
    <section className="d1d09-newsletter flex-center" id="services">
      <h2 data-aos="flip-down">{t('newsletter_title')}</h2>
      <p data-aos="fade-up">{t('newsletter_paragraph')}</p>

      <div className="d1d09-newsletter__form" data-aos="fade-up">
        <input type="text" placeholder={t('email_input_placeholder')} />
        <button>{t('get_started_btn')}</button>
      </div>
    </section>
  )
}

export default Newsletter
