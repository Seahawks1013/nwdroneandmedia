// Single source of truth for business details used across the site.
export const SITE = {
  name: 'NW Drone & Media',
  title: 'NW Drone & Media — Wedding films & aerial, Pacific Northwest',
  description:
    'Wedding films and FAA Part 107 licensed drone coverage in the Pacific Northwest. Two filmmakers on the ground, one licensed drone in the air.',
  email: 'hello@nwdroneandmedia.com',
  phone: '(360) 555-0134', // placeholder carried over from the original design — replace before launch
  city: 'Walla Walla',
  region: 'WA',
  serviceArea: 'Oregon, Washington & the greater Pacific Northwest',
  ogImage: '/og-default.jpg',
  // Static-site form handler (Formspree, Basin, Netlify Forms, etc.). Replace before launch.
  formEndpoint: 'https://formspree.io/f/your-form-id',
};

// Pill links in the top nav (left group shows on large screens only, as in the original).
export const NAV_LEFT = [
  { href: '/#work', label: 'Films' },
  { href: '/services/', label: 'Packages' },
  { href: '/about/', label: 'About' },
];
export const NAV_RIGHT = { href: '/#process', label: 'How it works' };
export const NAV_CTA = { href: '/contact/', label: 'Check your date' };

export const LEGAL_LINKS = [
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
  { href: '/flight-safety/', label: 'Flight safety & FAA' },
];
export const LEGAL_UPDATED = 'October 1, 2026';

export const FOOTER_COLUMNS: [string, { label: string; href: string }[]][] = [
  [
    'Films',
    [
      { label: 'Weddings', href: '/#work' },
      { label: 'Elopements', href: '/#work' },
      { label: 'Aerial', href: '/services/' },
      { label: 'Venue tours', href: '/#work' },
      { label: 'Brand films', href: '/services/' },
    ],
  ],
  [
    'Booking',
    [
      { label: 'Packages', href: '/#packages' },
      { label: 'How it works', href: '/#process' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  ],
  [
    'Follow',
    [
      { label: 'Instagram', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'TikTok', href: '#' },
      { label: 'The Knot', href: '#' },
    ],
  ],
];
