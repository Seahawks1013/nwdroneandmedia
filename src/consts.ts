// Single source of truth for business details used across the site.
export const SITE = {
  name: 'NW Drone & Media',
  owner: 'DJ Riley',
  title: 'NW Drone & Media — Wedding films, events & drone footage | Woodland, WA',
  description:
    'Wedding films, event videography and FAA Part 107 licensed drone footage by DJ Riley. Founded in Woodland, WA, serving Portland, Vancouver WA and the surrounding areas.',
  email: 'hello@nwdroneandmedia.com',
  phone: '', // e.g. '(360) 555-1234' — shown wherever a phone appears once filled in
  city: 'Woodland',
  region: 'WA',
  serviceArea: 'Portland (PDX), Vancouver WA & the surrounding areas',
  ogImage: '/og-default.jpg',
  // Static-site form handler (Formspree, Basin, Netlify Forms, etc.). Replace before launch.
  formEndpoint: 'https://formspree.io/f/your-form-id',
  social: {
    youtube: 'https://www.youtube.com/@davidriley-u9u',
    instagram: 'https://www.instagram.com/nwdroneandmedia',
  },
};

// Pill links in the top nav (left group shows on large screens only, as in the original).
export const NAV_LEFT = [
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/services/', label: 'Pricing' },
  { href: '/about/', label: 'About' },
];
export const NAV_RIGHT = { href: '/#process', label: 'How it works' };
export const NAV_CTA = { href: '/contact/', label: 'Check your date' };
// Shown instead of NAV_CTA on phones and tablets, where the nav links are hidden.
export const NAV_CTA_MOBILE = { href: '/services/', label: 'Pricing' };

export const LEGAL_LINKS = [
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
  { href: '/flight-safety/', label: 'Flight safety & FAA' },
];
export const LEGAL_UPDATED = 'October 1, 2026';

export const FOOTER_COLUMNS: [string, { label: string; href: string }[]][] = [
  [
    'Work',
    [
      { label: 'Portfolio', href: '/portfolio/' },
      { label: 'Weddings', href: '/portfolio/#weddings' },
      { label: 'Events & local business', href: '/portfolio/#events' },
      { label: 'Drone footage', href: '/services/#drone-shots' },
    ],
  ],
  [
    'Booking',
    [
      { label: 'Pricing', href: '/services/' },
      { label: 'How it works', href: '/#process' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'About DJ', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  ],
  [
    'Follow',
    [
      { label: 'YouTube', href: SITE.social.youtube },
      { label: 'Instagram', href: SITE.social.instagram },
    ],
  ],
];
