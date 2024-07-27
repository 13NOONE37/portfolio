import React from 'react';
import cx from 'classnames';
import { useTranslations } from 'next-intl';

import Logo from '@/assets/icons/logo';
import { Link } from '@/utils/navigation';
import ContactButton from './contactButton';

import styles from './footer.module.css';
import fonts from '@/styles/fonts.module.css';

const Footer = () => {
  const t = useTranslations('Footer');
  const tShared = useTranslations('Shared');

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Link
          href={'/'}
          aria-label={tShared('go_to_home_page')}
          className={styles.logo}
        >
          <Logo />
        </Link>

        <div className={cx(fonts.body, styles.contact)}>
          <ContactButton />
        </div>

        <Link href={'privacy'} className={styles.privacy}>
          {tShared('privacy_policy')}
        </Link>

        <span className={cx(fonts.body, styles.goodbye)}>{t('made_with')}</span>
      </div>
    </footer>
  );
};

export default Footer;