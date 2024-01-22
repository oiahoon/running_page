interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://runs.miaowu.org/',
  logo: 'https://p.ipic.vip/w838cd.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://notes.miaowu.org',
    },
    {
      name: 'About',
      url: 'https://notes.miaowu.org/about',
    },
  ],
};

export default data;
