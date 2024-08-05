import React from 'react';
import cx from 'classnames';
import styles from './hero.module.css';
import fonts from '@/styles/fonts.module.css';
import { useTranslations } from 'next-intl';
import ArrowIcon from '@/assets/icons/arrow';

const Hero = () => {
  const t = useTranslations('Home');
  return (
    <section className={styles.container}>
      <h1 className={cx(fonts.heading_500, styles.introduction)}>
        {t.rich('my_name_is_oliwer')}
      </h1>
      <div className={styles.content}>
        <div className={cx(styles.block, styles.block__top)}>
          <span className={cx(fonts.heading_500, styles.subheading)}>
            {t('i_turn')}
          </span>
          <span className={cx(fonts.heading_700, styles.heading)}>
            {t('ideas')}
          </span>
          <span className={styles.arrow}>
            <div className={styles.arrowEnd}>
              <ArrowIcon />
            </div>
          </span>
        </div>

        <div className={cx(styles.block, styles.block__bottom)}>
          <span className={cx(fonts.heading_500, styles.subheading)}>
            {t('into')}
          </span>
          <span className={cx(fonts.heading_700, styles.heading)}>
            {t('reality')}
          </span>
          <span className={styles.arrow}>
            <div className={styles.arrowEnd}>
              <ArrowIcon />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;