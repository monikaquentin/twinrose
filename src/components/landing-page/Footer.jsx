import git_img from '@/assets/svg/git.svg'
import email_at_img from '@/assets/svg/email-at.svg'
import info_img from '@/assets/svg/info.svg'

import { useTranslation } from 'react-i18next'

function Footer() {
  //
  const { t } = useTranslation()

  return (
    <footer className="e1f31-footer flex-between">
      <h3 className="e1f31-footer__logo">
        <span className="red">Red</span>Velvet
      </h3>

      <ul className="e1f31-footer__nav">
        <li>
          <a href="#services">{t('navigation.services')}</a>
        </li>
        <li>
          <a href="#team">{t('navigation.team')}</a>
        </li>
      </ul>

      <div className="e1f31-footer_trx-address" role="alert">
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">TRX Tron (TRC20): </span>
          TFTw1CXDr3z1xEueF9shS3TN2AFxiVE9Aw
        </div>
      </div>

      <ul className="e1f31-footer__social">
        <li className="flex-center">
          <img src={git_img} alt="GIT" />
        </li>
        <li className="flex-center">
          <img src={email_at_img} alt="Email" />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
