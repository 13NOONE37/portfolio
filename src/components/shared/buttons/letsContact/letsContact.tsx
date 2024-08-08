import { SECTION_IDS } from '@/app/section_ids';
import { PrimaryButton } from '@/components/buttons/primary/primary';
import scrollToId from '@/utils/scrollToId';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React from 'react';

const LetsContact = () => {
  const t = useTranslations('Shared');
  const router = useRouter();

  return (
    <PrimaryButton
      onClick={() => {
        scrollToId(SECTION_IDS.contact, undefined, () => {
          router.push('/#contact');
        });
      }}
    >
      {t('lets_contact')}
    </PrimaryButton>
  );
};

export default LetsContact;