// Single source of truth for business details used across the site.
export const SITE = {
  name: 'NW Drone & Media',
  tagline: 'Aerial photography, video production & drone services',
  description:
    'FAA Part 107 certified drone operator in Walla Walla, WA. Aerial photography, cinematic video, real estate media and drone inspections across the Pacific Northwest.',
  email: 'hello@nwdroneandmedia.com',
  phone: '', // e.g. '(509) 555-0123' — leave empty to hide
  city: 'Walla Walla',
  region: 'WA',
  serviceArea: 'Walla Walla Valley, Tri-Cities, Eastern Oregon & the greater Pacific Northwest',
  ogImage: '/og-default.jpg',
  // Static-site form handler (Formspree, Basin, Netlify Forms, etc.). Replace before launch.
  formEndpoint: 'https://formspree.io/f/your-form-id',
  social: {
    instagram: '',
    youtube: '',
    facebook: '',
  },
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
