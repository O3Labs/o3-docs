/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: '/img/docusaurus.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'Documentation', // Title for your website.
  tagline: 'Your guide to the smart economy',
  url: 'https://docs.o3.network', // Your website URL
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'o3-docs',
  organizationName: 'O3Labs',

  gaTrackingId: 'UA-112635659-12',
  gaGtag: true,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'intro', label: 'User Guides'},
    {page: 'neoDapi', label: 'NEO dAPI'},
    {page: 'ontDapi', label: 'ONT dAPI'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/o3-logo.png',
  footerIcon: 'img/o3-logo.png',
  favicon: 'img/o3-logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E3336',
    secondaryColor: '#218FFF',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2018 O3 Labs Inc.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://docs.o3.network/js/custom.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/o3-logo.png',
  twitterImage: 'img/o3-logo.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
