import { useEffect, memo } from 'react';

const PageTitleBase = ({ prefix = 'Локобанк - App - ', title } = {}) => {
  useEffect(() => {
    document.title = `${prefix}${title}`;
  });

  return null;
}

export const PageTitleBaseMemo = memo(PageTitleBase);