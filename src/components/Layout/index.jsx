import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from 'src/components/Header';
import useSiteMetadata from 'src/hooks/useSiteMetadata';
import 'src/styles/index.scss';
import styles from './style.module.scss';

const Layout = ({ children }) => {
  const { siteTitle, description } = useSiteMetadata();

  return (
    <div>
      <Helmet bodyAttributes={{ class: styles.body }}>
        <html lang="en" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="running, music, endurance, sweat" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:type" content="profile.Joey" />
        <meta property="og:url" content="https://runs.miaowu.org/" />
        <meta property="og:image" content={logo} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>
      <Header title={siteTitle} />
      <div className="pa3 pa5-l">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
