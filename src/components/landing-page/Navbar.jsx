import Language from '@/components/global/Language'

import menu_button_img from '@/assets/svg/menu-black.svg'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Header() {
  //
  const { t } = useTranslation()

  return (
    <header>
      <nav className="b5122-navbar__nav">
        <div className="b5122-navbar__logo">
          <h4 data-aos="fade-down">
            <span className="red">Red</span>Velvet
          </h4>
          <div className="b5122-navbar__logo-overlay"></div>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <Language />
        </div>

        <ul className="b5122-navbar__menu" data-aos="fade-down">
          <li>
            <a href="#services">{t('navigation.services')}</a>
          </li>
          <li>
            <a href="#team">{t('navigation.team')}</a>
          </li>
          <li>|</li>
          <li>
            <Link to="/sign-in" className="w-full">
              <button
                type="submit"
                className="flex w-full justify-center bg-crimsom-color px-5 py-1.5 text-md font-semibold leading-6 bg-primary text-dim-white shadow-sm hover:bg-secondary hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creamson"
              >
                {t('navigation.login')}
              </button>
            </Link>
          </li>
        </ul>

        <ul className="b5122-navbar__menu-mobile" data-aos="fade-down">
          <li>
            <img src={menu_button_img} alt="Menu" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
