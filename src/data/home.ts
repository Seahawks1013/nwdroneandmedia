// Home page copy. `seed` picks a placeholder landscape; add `image` (a
// "/images/..." path or URL) and `alt` to show a real still instead.
type Slot = { seed: number; image?: string; alt?: string };

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const STATS = [
  ['Part 107', 'FAA licensed drone pilot'],
  ['Woodland, WA', 'founded and based'],
  ['PDX · Vancouver', 'and the surrounding areas'],
];

export const TAGS = ['Weddings', 'Events', 'Local business', 'Licensed drone', 'Horizontal + vertical edits'];

export const PILLARS = [
  {
    t: 'Licensed & insured',
    d: 'FAA Part 107 certified drone pilot. Venues and event organizers ask for it — we already have it.',
    icon: 'M12 2l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V5l7-3z',
  },
  {
    t: 'Weddings, events & aerial',
    d: 'One filmmaker for the ground and the air, so your day or event is covered from every angle that matters.',
    icon: 'M4 7h4l2-2h4l2 2h4v12H4V7zm8 3a4 4 0 100 8 4 4 0 000-8z',
  },
  {
    t: 'Clear, simple pricing',
    d: 'Weddings from $300, events from $400, drone shots from $100. Add-ons are listed up front.',
    icon: 'M12 3a9 9 0 109 9h-9V3z',
  },
];

export const WHAT_WE_FILM: (Slot & { t: string; d: string; m: string; href: string })[] = [
  {
    t: 'Wedding films',
    d: 'Ceremony, rehearsal or the entire day, edited into a film you will actually rewatch.',
    m: 'From $300 · full day from $1,000',
    seed: 3,
    image: yt('8jsxHXfgNUU'),
    alt: "Still from Jake & Kenna's wedding trailer",
    href: '/portfolio/#weddings',
  },
  {
    t: 'Events & socials',
    d: 'Community gatherings, celebrations and company events, cut for YouTube, Instagram and your website.',
    m: 'Half day from $400 · full day from $800',
    seed: 11,
    image: yt('oSLn_6LOOjE'),
    alt: 'Still from the Port of Woodland End of Summer Social',
    href: '/portfolio/#events',
  },
  {
    t: 'Local business',
    d: 'Short films and vertical social clips that show customers who you are and what you do.',
    m: 'Vertical cuts $50 each',
    seed: 19,
    href: '/portfolio/#events',
  },
  {
    t: 'Drone footage',
    d: 'Aerials of venues, properties and events — flown legally, insured, and cut to length.',
    m: 'From $100 · Part 107',
    seed: 26,
    href: '/services/#drone-shots',
  },
];

export const STEPS = [
  ['Say hello', "Send your date, location and what you need. You'll hear back with availability and a price."],
  ['Plan it out', 'A quick call to walk the timeline, the shots that matter, and where a drone can legally go up.'],
  ['Film day', 'We arrive early, work around your photographer and guests, and keep rolling.'],
  ['Your film', 'Edited films delivered digitally — horizontal, vertical, or both — yours to download and keep.'],
];

// Real client reviews. The "What couples say" section on the home page only
// appears once this list has entries. Format:
// { q: 'Quote text', n: 'Jake & Kenna', l: 'Woodland, WA', i: 'JK' },
export const REVIEWS: { q: string; n: string; l: string; i: string }[] = [];

export const FAQ = [
  ['Can you fly a drone at our venue?', "Usually. We're FAA Part 107 licensed and insured. Venues near PDX and other airports sit in controlled airspace, so we file for authorization ahead of the date. National parks and some state parks don't allow drones at all — we check your location before you book."],
  ['What happens if it rains?', "We'll keep an eye on the forecast and assess the weather before and on the day. Depending on conditions, we may need to wait it out or reschedule — and drone flights only happen when it's dry and calm enough to fly safely."],
  ['Do you film events and businesses too?', 'Yes. Beyond weddings we film community events, socials and local businesses, with horizontal edits from $100 and vertical social cuts at $50 each.'],
  ['Where do you travel?', 'We\'re based in Woodland, WA and serve Portland, Vancouver WA and the surrounding areas. Farther than that? Ask — we\'re happy to travel.'],
];

// Hero backdrop: 5 columns of tilted tiles. Only the middle three columns are
// on screen (the grid is rotated and wider than the viewport), so photos go there;
// the edge columns keep the landscape placeholder art.
// `photo` is a file prefix in public/images/hero/ (-640.webp and -1200.webp exist,
// built by scripts/make-hero-images.mjs); `pos` is the CSS object-position.
// `owner: true` marks DJ's portrait tile.
type HeroTile = { s: number; h: string; owner?: boolean; photo?: string; pos?: string };
export const HERO_COLUMNS: HeroTile[][] = [
  [{ s: 4, h: 'h-[30vh]' }, { s: 9, h: 'h-[44vh]' }, { s: 14, h: 'h-[26vh]' }],
  [
    { s: 21, h: 'h-[42vh]', photo: 'night-ceremony-kiss', pos: '40% 35%' },
    { s: 6, h: 'h-[30vh]', photo: 'church-exit-applause', pos: '50% 45%' },
    { s: 31, h: 'h-[28vh]', photo: 'couple-on-stairs', pos: '45% 35%' },
  ],
  [
    { s: 12, h: 'h-[26vh]', photo: 'camera-gimbal-wedding', pos: '45% 50%' },
    { s: 2, h: 'h-[46vh]', photo: 'aerial-couple-on-grass', pos: '55% 50%' },
    { s: 27, h: 'h-[28vh]', photo: 'aerial-reception-tables', pos: '50% 50%' },
  ],
  [
    { s: 18, h: 'h-[34vh]', photo: 'dj-riley-shooting', pos: '46% 40%' },
    { s: 41, h: 'h-[36vh]', owner: true },
    { s: 7, h: 'h-[30vh]', photo: 'gear-sony-camera', pos: '50% 60%' },
  ],
  [{ s: 33, h: 'h-[28vh]' }, { s: 11, h: 'h-[40vh]' }, { s: 24, h: 'h-[32vh]' }],
];
