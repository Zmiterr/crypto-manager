import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { redirect } from '@/helpers';
import { useLocale } from '@/hooks/useLocale';
import { Loader } from '@/components/atoms';
import { PAGES } from '@/shared/constants';

const InitAppWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { asPath } = useRouter();
  const [loading, setLoading] = useState(true);

  const hideLoader = () => setLoading(false);

  useLocale();

  useEffect(() => {
    // Story book can be viewed only in dev mode
    if (asPath === PAGES.storyBook.pathname) {
      setLoading(false);

      return;
    }

    redirect(PAGES.home).then(hideLoader);
  }, []);

  return loading ? <Loader variant="page" /> : children;
};

export default InitAppWrapper;
