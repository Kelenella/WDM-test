import { ReactComponent as Dcma } from '../../images/svg/dcma.svg';
import { ReactComponent as BlueLogo } from '../../images/svg/Logoblue.svg';
import TitleFooter from './TitleFooter';
import ContactCountry from './ContactCountry';
import ContactTel from './ContactTel';

import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerList}>
        <div className={s.wrapperTablet}>
          <div className={s.footerItem}>
            <div className={s.logoWrapper}>
              <BlueLogo />
            </div>

            <p className={s.text}>
              All Rights Reserved to{' '}
              <a
                href="/"
                alt="our site"
                target="_blank"
                noopener="true"
                noreferrer="true"
                className={s.site}
              >
                info.com
              </a>
            </p>
            <p className={s.text}>© DDD – Web Marketing</p>
            <p className={s.text}>Privacy Policy</p>
            <div className={s.dcmaWrapper}>
              <Dcma />
            </div>
          </div>

          <div className={s.footerItem}>
            <TitleFooter title="contact us" />
            <ul className={s.contactList}>
              <li className={s.contactItem}>
                <div className={s.contactsWrap}>
                  <ContactCountry country="UK" />
                  <ContactTel tel="+44-2020202020" />
                </div>
              </li>
              <li className={s.contactItem}>
                <div className={s.contactsWrap}>
                  <ContactCountry />
                  <ContactTel tel="+44-2020202020" />
                </div>
              </li>
              <li className={s.contactItem}>
                <div className={s.contactsWrap}>
                  <ContactCountry country="AUT" />
                  <ContactTel tel="+44-2020202020" />
                </div>
              </li>
              <li className={s.contactItem}>
                <div className={s.contactsWrap}>
                  <ContactCountry country="AUS" />
                  <ContactTel tel="+44-2020202020" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.addressWrapperTablet}>
          <div className={s.wrapperDesktop}>
            <div className={s.footerItem}>
              <TitleFooter title="address" />
              <address className={s.address}>Lorem ipsum set amet</address>
            </div>

            <div className={s.footerItem}>
              <TitleFooter title="our office hours" />
              <p className={s.text}>
                Mon-Fr: 8:00-18:00 GMT <br />
                Sat/Su: Closed
              </p>
            </div>
          </div>

          <div className={s.footerItem}>
            <TitleFooter title="email us" />
            <a className={s.text} href="mailto:info@info.com">
              info@info.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
