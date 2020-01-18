import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = ({ title, description, image }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={image} />
    <meta property="og:url" content="https://scizzor.ai/" />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content="Scizzor App" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@xyz" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* generics */}
    <link
      rel="icon"
      href="/images/favicon/Xchange-Favicon-32px.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      href="/images/favicon/Xchange-Favicon-57px.png"
      sizes="57x57"
    />
    <link
      rel="icon"
      href="/images/favicon/Xchange-Favicon-76px.png"
      sizes="76x76"
    />
    <link
      rel="icon"
      href="/images/favicon/Xchange-Favicon-96px.png"
      sizes="96x96"
    />
    <link
      rel="icon"
      href="/images/favicon/Xchange-Favicon-128px.png"
      sizes="128x128"
    />
    <link
      rel="icon"
      href="/images/favicon/Xchange-Favicon-192px.png"
      sizes="192x192"
    />
    <link
      rel="icon"
      href="/images/favicon/Xchange-Favicon-228px.png"
      sizes="228x228"
    />

    {/* Android */}
    <link
      rel="shortcut icon"
      sizes="196x196"
      href="“/images/favicon/Xchange-Favicon-196px.png"
    />

    {/* iOS */}
    <link
      rel="apple-touch-icon"
      href="/images/favicon/Xchange-Favicon-120px.png"
      sizes="120x120"
    />
    <link
      rel="apple-touch-icon"
      href="/images/favicon/Xchange-Favicon-152px.png"
      sizes="152x152"
    />
    <link
      rel="apple-touch-icon"
      href="/images/favicon/Xchange-Favicon-180px.png"
      sizes="180x180"
    />

    {/* — Windows 8.1 + IE11 and above — */}
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta
      name="msapplication-square70x70logo"
      content="/images/favicon/Xchange-Favicon-128px.png"
    />
    <meta
      name="msapplication-TileImage"
      content="/images/favicon/Xchange-Favicon-144px.png"
    />
    <meta name="msapplication-config" content="none" />
  </Head>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SEO;
