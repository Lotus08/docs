import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import path from 'path';
import React, { useEffect } from 'react';
import { useToggle } from 'react-use';
import sitemap from '../../../lib/sitemap';
import DesktopMenu from '../menu/DesktopMenu';
import MobileMenu from '../menu/MobileMenu';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

interface Props {
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
}

export default function DocPageLayout({ title = 'Docs', description, children }: Props) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useToggle(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setSidebarOpen(false);
  }, [router.asPath]);

  return (
    <div className="min-h-screen flex flex-col">
      <NextSeo
        title={`MagicBell - ${title}`}
        description={description}
        canonical={path.join('https://magicbell.com', router.basePath, router.asPath)}
      />
      <Header onToggleMenu={toggleSidebar} />
      <div className="max-w-screen-2xl mx-auto flex flex-1 overflow-hidden bg-white md:space-x-2 xl:space-x-10 w-full">
        <MobileMenu
          navigationItems={sitemap}
          isOpen={sidebarOpen}
          toggle={toggleSidebar}
        />
        <DesktopMenu navigationItems={sitemap} />
        <Content>{children}</Content>
      </div>
      <Footer />
    </div>
  );
}
