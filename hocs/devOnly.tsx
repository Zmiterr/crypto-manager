import { FC } from 'react';

import { redirect } from '@/helpers';
import { useIsomorphicLayoutEffect } from '@/hooks';
import { APP_ENV, PAGES } from '@/shared/constants';

const devOnly = <T extends object>(Wrapped: FC<T>) => {
  return function (props: T) {
    useIsomorphicLayoutEffect(() => {
      if (APP_ENV !== 'development') {
        redirect(PAGES.home);
      }
    }, []);

    return <Wrapped {...props} />;
  };
};

export default devOnly;
