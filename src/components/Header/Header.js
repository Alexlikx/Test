import React from 'react';
import i18n from '../../i18n';
import StyledHeader from './Header.styled';
import { useTranslation } from 'react-i18next';

const lngs = {
    en: { nativeName: 'EN' },
    sk: { nativeName: 'SK' }
};

const Header = () => {
    const { t } = useTranslation();

    function CloseMenu() {
        const elem = document.getElementById("menu__toggle");
        elem.checked = false;
    }

    const ScrollTop = (e) => {
        e.preventDefault()
        window.scrollTo(0, 0)
    };

    return (
        <StyledHeader>
            <div className="header-content">
                <div className="header-logo">
                    Nicolas Mauer
                </div>
                <nav className="header-nav">
                    <a href="#about" className="nav-link" onClick={ScrollTop}>{t('description.headerLink1')}</a>
                    <a href="#services" className="nav-link">{t('description.headerLink2')}</a>
                    <a href="#sad" className="nav-link">{t('description.headerLink3')}</a>
                    <a href="#sad" className="nav-link">{t('description.headerLink4')}</a>
                </nav>
                <div className="lng-change">
                    <div className='change-lg'>
                        {t('description.EN')} <svg width="7px" height="5px" viewBox="0 0 7 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <g id="01---Homepage" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="01_01_9_alt" transform="translate(-1178.000000, -70.000000)" fill="#191A1A">
                                    <g id="Group-2" transform="translate(1155.000000, 60.000000)">
                                        <path d="M26.909616,10.5851657 L29.4492882,14.2132688 C29.6076454,14.4394935 29.552628,14.7512587 29.3264034,14.909616 C29.2423616,14.9684452 29.1422583,15 29.0396722,15 L23.9603278,15 C23.6841854,15 23.4603278,14.7761424 23.4603278,14.5 C23.4603278,14.3974139 23.4918826,14.2973106 23.5507118,14.2132688 L26.090384,10.5851657 C26.2487413,10.358941 26.5605065,10.3039236 26.7867312,10.4622809 C26.8345518,10.4957553 26.8761415,10.537345 26.909616,10.5851657 Z" id="Triangle" transform="translate(26.500000, 12.500000) scale(1, -1) translate(-26.500000, -12.500000) "></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className='language-changing'>
                        {Object.keys(lngs).map((lng) => (
                            <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                                {lngs[lng].nativeName}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="menu__box">
                        <li>
                            <a
                                href="#about"
                                className="header-link menu__item nav-link burger-link"
                                onClick={CloseMenu}
                            >
                                {t('description.headerLink1')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="header-link menu__item nav-link burger-link"
                                onClick={CloseMenu}
                            >
                                {t('description.headerLink2')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#blog"
                                className="header-link menu__item nav-link burger-link"
                                onClick={CloseMenu}
                            >
                                {t('description.headerLink3')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contacts"
                                className="header-link menu__item nav-link burger-link"
                                onClick={CloseMenu}
                            >
                                {t('description.headerLink4')}
                            </a>
                        </li>
                        {Object.keys(lngs).map((lng) => (
                            <li key={lng} type="submit" onClick={() => {
                                i18n.changeLanguage(lng)
                                CloseMenu()
                            }
                            }
                                className="header-link menu__item nav-link burger-link lg-link">
                                {lngs[lng].nativeName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header;
