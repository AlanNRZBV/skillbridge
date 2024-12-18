const iconUrl = `${import.meta.env.VITE_API_URL}/assets/icons/`;
// const imageUrl = `${import.meta.env.VITE_API_URL}/assets/images/`;

export enum ButtonVariant {
  BUTTON,
  LINK,
}

export const icons = {
  mainDesktop: `${iconUrl}/skillbridge-desktop.svg`,
  mainLaptop: `${iconUrl}/skillbridge-Laptop.svg`,
  mainMobile: `${iconUrl}/skillbridge-Mobile.svg`,
  facebook: `${iconUrl}/icon-facebook.png`,
  twitter: `${iconUrl}/icon-twitter.png`,
  linkedin: `${iconUrl}/icon-linkedin.png`,
  abstractLines: `${iconUrl}/insight-element.svg`,
  zapier: `${iconUrl}/icon-zapier.svg`,
  spotify: `${iconUrl}/icon-spotify.svg`,
  zoom: `${iconUrl}/icon-zoom.svg`,
  amazon: `${iconUrl}/icon-amazon.svg`,
  adobe: `${iconUrl}/icon-adobe.svg`,
  notion: `${iconUrl}/icon-notion.svg`,
  netflix: `${iconUrl}/icon-netflix.svg`,
};

export const paths = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Courses',
    path: '/courses',
  },
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Pricing',
    path: '/pricing',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const footerLinks = [
  {
    title: 'Home',
    links: [
      {
        title: 'Benefits',
        to: '/',
      },
      {
        title: 'Our Courses',
        to: '/',
      },
      {
        title: 'Our Testimonials',
        to: '/',
      },
      {
        title: 'Our FAQ',
        to: '/',
      },
    ],
  },
  {
    title: 'About Us',
    links: [
      {
        title: 'Company',
        to: '/',
      },
      {
        title: 'Achievements',
        to: '/',
      },
      {
        title: 'Our Goals',
        to: '/',
      },
    ],
  },
];
