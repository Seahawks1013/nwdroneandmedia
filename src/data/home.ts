// Content for the home page, carried over verbatim from the original design.
// `seed` picks the placeholder landscape; add `image: '/images/...'` and `alt`
// to any item to show a real footage still instead.
type Slot = { seed: number; image?: string; alt?: string };

export const STATS = [
  ['60+', 'weddings filmed'],
  ['Part 107', 'FAA licensed pilot'],
  ['3 angles', 'on every ceremony'],
  ['10 days', 'to your highlight film'],
];

export const TAGS = ['Full-day coverage', 'Lav + board audio', 'Licensed drone', 'Two shooters', '4K'];

export const MODES = {
  films:
    'Getting ready through the last dance. Three cameras at the ceremony, lav mics on the vows, a highlight film plus the whole thing uncut.',
  aerial:
    'Part 107 licensed and insured. Venue establishing shots, the ceremony from above, and the drive-away — flown legally, including inside PDX airspace with authorization.',
};

export const PILLARS = [
  {
    t: 'Licensed & insured',
    d: 'FAA Part 107 certified pilot with $1M liability. Venues ask for it — we already have it.',
    icon: 'M12 2l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V5l7-3z',
  },
  {
    t: 'Two shooters, three angles',
    d: 'Nothing important happens off camera, and nothing important gets missed for a battery swap.',
    icon: 'M4 7h4l2-2h4l2 2h4v12H4V7zm8 3a4 4 0 100 8 4 4 0 000-8z',
  },
  {
    t: 'Film in ten days',
    d: 'Teaser in 72 hours, full film in about ten days. Peak season we say so before you book.',
    icon: 'M12 3a9 9 0 109 9h-9V3z',
  },
];

export const WHAT_WE_FILM: (Slot & { t: string; d: string; m: string })[] = [
  { t: 'Wedding films', d: 'Getting ready through the last dance, cut into a highlight film plus the ceremony and speeches in full.', m: '6–10 hrs · two filmmakers', seed: 3 },
  { t: 'Elopements', d: 'Just the two of you on a ridge or a beach. One filmmaker, light footprint, drone up if the site allows it.', m: '2–4 hrs · one filmmaker', seed: 11 },
  { t: 'Aerial & venue films', d: 'Drone coverage for venues, builders and listings — flown legally, insured, and cut to length.', m: 'Half day · Part 107', seed: 19 },
  { t: 'Brand & event', d: 'Rehearsal dinners, anniversaries, and the local businesses that keep the wedding season running.', m: 'By the project', seed: 26 },
];

export const FILTERS = [
  ['all', 'Everything'],
  ['wedding', 'Weddings'],
  ['elope', 'Elopements'],
  ['drone', 'Aerial'],
  ['venue', 'Venues'],
  ['brand', 'Brand'],
];

export const FILMS: (Slot & { c: string; t: string; l: string; d: string; href?: string })[] = [
  { c: 'wedding', t: 'Hannah & Ben', l: 'Columbia Gorge', d: '6:41', seed: 2 },
  { c: 'elope', t: 'Cannon Beach elopement', l: 'Oregon Coast', d: '3:12', seed: 7 },
  { c: 'drone', t: 'Ridge ceremony, aerial cut', l: 'Hood River', d: '1:48', seed: 13 },
  { c: 'wedding', t: 'Maya & Chris', l: 'Willamette Valley', d: '8:03', seed: 5 },
  { c: 'venue', t: 'Cedar Barn venue tour', l: 'Ridgefield, WA', d: '2:20', seed: 17 },
  { c: 'brand', t: 'Timber & Co.', l: 'Portland', d: '1:05', seed: 23 },
];

export const PACKAGES = [
  { t: 'Ceremony', p: '$1,650', m: '4 hours · one filmmaker', f: ['Ceremony on two cameras', '3–4 minute highlight film', 'Full ceremony, uncut', 'Delivered in 3 weeks'], feature: false },
  { t: 'Full day', p: '$3,200', m: '8 hours · two filmmakers', f: ['Getting ready through first dances', '6–8 minute highlight film', 'Ceremony and speeches in full', 'Aerial coverage where permitted', '60-second social cut', 'Delivered in 10 days'], feature: true },
  { t: 'Full day + feature', p: '$4,750', m: '10 hours · two filmmakers + pilot', f: ['Everything in Full day', '20-minute documentary edit', 'Rehearsal dinner coverage', 'Second-location drone session', 'All source footage on a drive'], feature: false },
];

export const STEPS = [
  ['Say hello', "Send your date and venue. You'll hear back within a day with availability and a full price."],
  ['Walk the timeline', 'A twenty-minute call to plan light, first look, and where a drone can legally go up.'],
  ['Film day', "We arrive early, mic the officiant, stay out of your photographer's frame, and keep rolling."],
  ['Your film', 'Teaser in 72 hours. Highlight film and full ceremony in ten days, yours to download forever.'],
];

export const REVIEWS = [
  { q: "We watched the ceremony film with my grandmother, who couldn't travel. She heard every word of the vows. That alone was worth it.", n: 'Hannah & Ben', l: 'Hood River', i: 'HB' },
  { q: "He got the drone up between two rain squalls and somehow that's the shot everyone asks about.", n: 'Maya & Chris', l: 'Dundee', i: 'MC' },
  { q: 'Never once felt like there was a camera crew at our wedding. The film says otherwise.', n: 'Sam & Lily', l: 'Cannon Beach', i: 'SL' },
];

export const FAQ = [
  ['When do we get the film?', "A 60-second teaser lands within 72 hours of the wedding. The full highlight film, ceremony and speeches are delivered in about ten days — three weeks in peak season, and we'll tell you which before you book."],
  ['Can you fly a drone at our venue?', "Usually. We're Part 107 licensed and insured, which covers most of Oregon and Washington. Venues near PDX, HIO and Troutdale sit in controlled airspace, so we file for authorization ahead of the date. National parks and a few state parks don't allow it at all — we check your venue before you sign anything."],
  ['What happens if it rains?', "We shoot anyway. Our gear handles Northwest weather, and rain ceremonies tend to make the better films. The drone stays in the case if it's wet or gusting past 25 mph, and we make up for it on the ground."],
  ['Do you work with our photographer?', 'Every time. We share the timeline in advance, stay behind their line during the ceremony, and split the portrait window so neither of us is waiting around.'],
  ['Do you travel?', 'Anywhere within two hours of Vancouver, WA is included — Portland, the Gorge, the coast, Olympia. Bend, Seattle and Central Oregon add a flat travel fee. Farther than that, ask.'],
  ['How do we hold our date?', 'A signed agreement and a 30% retainer. The balance is due two weeks before the wedding, and you can split it into monthly payments at no extra cost.'],
];

// Hero backdrop: 5 columns of tilted tiles. `owner: true` marks the photo tile.
export const HERO_COLUMNS: { s: number; h: string; owner?: boolean }[][] = [
  [{ s: 4, h: 'h-[30vh]' }, { s: 9, h: 'h-[44vh]' }, { s: 14, h: 'h-[26vh]' }],
  [{ s: 21, h: 'h-[42vh]' }, { s: 6, h: 'h-[30vh]' }, { s: 31, h: 'h-[28vh]' }],
  [{ s: 12, h: 'h-[26vh]' }, { s: 2, h: 'h-[46vh]' }, { s: 27, h: 'h-[28vh]' }],
  [{ s: 18, h: 'h-[34vh]' }, { s: 41, h: 'h-[36vh]', owner: true }, { s: 7, h: 'h-[30vh]' }],
  [{ s: 33, h: 'h-[28vh]' }, { s: 11, h: 'h-[40vh]' }, { s: 24, h: 'h-[32vh]' }],
];
