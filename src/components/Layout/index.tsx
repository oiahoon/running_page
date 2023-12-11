import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import styles from './style.module.scss';
import { SpeedInsights } from "@vercel/speed-insights/next"

const Layout = ({ children }: React.PropsWithChildren) => {
  const { siteTitle, description } = useSiteMetadata();

  return (
    <>
      <Helmet bodyAttributes={{ class: styles.body }}>
        <html lang="en" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="running, music, endurance, sweat" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="profile.Joey" />
        <meta property="og:url" content="https://runs.miaowu.org/" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <Header />
      <div className="pa3 pa5-l mb5 cf">
        {children}
        <SpeedInsights />
        </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
