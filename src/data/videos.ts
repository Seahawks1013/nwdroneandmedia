// YouTube videos shown on the site. To add one, copy an entry and paste the
// video ID (the part after "watch?v=" or "shorts/").

export type Category = 'weddings' | 'events' | 'drone';

export type Video = {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  vertical?: boolean;
  /** Show in the home page's featured films. */
  featured?: boolean;
};

// `cover`: photo shown in a category that has no videos yet.
export const CATEGORIES: { id: Category; label: string; intro: string; cover?: { src: string; alt: string } }[] = [
  { id: 'weddings', label: 'Weddings', intro: 'Wedding days, cut into trailers and full-length films.' },
  { id: 'events', label: 'Events & local business', intro: 'Community events, socials and the local businesses behind them.' },
  {
    id: 'drone',
    label: 'Drone footage',
    intro: 'FAA Part 107 aerials of venues, properties and events.',
    cover: { src: '/images/work/dji-air-3s-drone.webp', alt: 'DJI Air 3S drone and its controller ready for a flight' },
  },
];

export const VIDEOS: Video[] = [
  { id: '8jsxHXfgNUU', title: "Jake & Kenna's Wedding", subtitle: 'Wedding trailer', category: 'weddings', featured: true },
  { id: 'oSLn_6LOOjE', title: 'Port of Woodland', subtitle: 'End of Summer Social', category: 'events', featured: true },
  { id: 'FCHUmoTD9RE', title: 'Port of Woodland', subtitle: 'End of Summer Social · vertical cut', category: 'events', vertical: true },
];
