import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  name: string | JSX.Element;
  to?: string | undefined;
  staticRoute?: boolean | undefined;
}

export default function PageLink({ name, to }: Props) {
  const router = useRouter();
  const isActive = router.asPath === to;

  return (
    <Link href={to || ''}>
      <a
        className={classNames(
          isActive
            ? 'bg-white text-gray-800 font-bold'
            : 'text-gray-600 hover:bg-white group-hover:text-gray-800',
          'group py-3 px-6 flex items-center md:text-sm',
        )}
      >
        {name}
      </a>
    </Link>
  );
}
