const iconUrl = `${import.meta.env.VITE_API_URL}/assets/icons/`;
// const imageUrl = `${import.meta.env.VITE_API_URL}/assets/images/`;

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

export const BENEFITS_CARDS = [
  {
    id: '01',
    title: 'Flexible Learning Schedule',
    description:
      'Fit your coursework around your existing commitments and obligations.',
    link: '#',
  },
  {
    id: '02',
    title: 'Expert Instruction',
    description:
      'Learn from industry experts who have hands-on experience in design and development.',
    link: '#',
  },
  {
    id: '03',
    title: 'Diverse Course Offerings',
    description:
      'Explore a wide range of design and development courses covering various topics.',
    link: '#',
  },
  {
    id: '04',
    title: 'Updated Curriculum',
    description:
      'Access courses with up-to-date content reflecting the latest trends and industry practices.',
    link: '#',
  },
  {
    id: '05',
    title: 'Practical Projects and Assignments',
    description:
      'Develop a portfolio showcasing your skills and abilities to potential employers.',
    link: '#',
  },
  {
    id: '06',
    title: 'Interactive Learning Environment',
    description:
      'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
    link: '#',
  },
];

export const Lorem =
  'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.';
