/* eslint-disable @next/next/no-img-element */
import { MenuIcon } from '@heroicons/react/outline';
import React from 'react';
import MagicBellLogo from '../../../public/magicbell.svg';

interface Props {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: Props) {
  const toggleMenu = () => {
    onToggleMenu();
  };

  return (
    <header className="z-20 flex-shrink-0 flex sticky top-0 bg-white md:px-8 p-4">
      <div className="flex-1 hidden justify-between md:flex max-w-screen-xl mx-auto">
        <div className="flex-1 flex items-center space-x-10 py-4">
          <div className="flex-1 flex space-x-24">
            <a href="https://magicbell.com" aria-label="Go to homepage">
              <MagicBellLogo
                className="md:h-7 h-6 fill-current text-darkPurple"
                role="img"
                aria-label="MagicBell logo"
                focusable="false"
              />
            </a>
            <div className="flex-1 space-x-6">
              <a href="https://magicbell.com/spec">Notification Spec</a>
              <a href="https://magicbell.com/docs">Docs</a>
              <a href="https://magicbell.com/pricing">Pricing</a>
            </div>
          </div>
          <a className="font-bold" href="https://app.magicbell.com">
            Sign up
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center md:hidden">
        <a href="https://magicbell.com">
          <MagicBellLogo
            className="h-6 fill-current text-darkPurple"
            role="img"
            aria-label="MagicBell logo"
            focusable="false"
          />
        </a>
      </div>
      <button className="p-4 focus:outline-none md:hidden" onClick={toggleMenu}>
        <span className="sr-only">Open main menu</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </header>
  );
}
