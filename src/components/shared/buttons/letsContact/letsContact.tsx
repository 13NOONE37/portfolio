'use client';

import React from 'react';
import { SECTION_IDS } from '@/app/section_ids';
import { PrimaryButton } from '@/components/buttons/primary/primary';
import { useRouter } from '@/utils/navigation';
import scrollToId from '@/utils/scrollToId';
import { useTranslations } from 'next-intl';

const LetsContact = () => {
  const t = useTranslations('Shared');
  const router = useRouter();

  return (
    <PrimaryButton
      onClick={() => {
        scrollToId(SECTION_IDS.contact, 120, () => {
          router.push('/#contact');
        });
      }}
    >
      {t('lets_contact')}
    </PrimaryButton>
  );
};

export default LetsContact;
