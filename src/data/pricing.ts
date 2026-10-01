// Pricing, from the owner's pricing sheet. Edit here; the Pricing page,
// home page and booking form all read from this file.

export type Plan = {
  id: string;
  name: string;
  /** Short label above the name, e.g. "Custom package". */
  kicker?: string;
  price: string;
  /** Small line under the price. */
  unit: string;
  includes: string[];
  addOns?: string[];
  featured?: boolean;
};

export const WEDDING_PLANS: Plan[] = [
  {
    id: 'wedding-ceremony',
    kicker: 'Custom package',
    name: 'Ceremony',
    price: '$300',
    unit: 'Ceremony coverage',
    includes: ['One angle of the altar', 'Minimal editing included', 'Additional content priced accordingly'],
    addOns: ['Drone +$50'],
  },
  {
    id: 'wedding-full-day',
    kicker: 'Full day package',
    name: 'Full wedding day',
    price: '$1,000',
    unit: 'Field-work minimum · covers the entire day',
    includes: [
      'Coverage of the entire day',
      'Edited film: $150 per 10 minutes',
      'Each additional minute: $10',
    ],
    addOns: ['Drone +$100', 'Rehearsal +$200', 'Interviews +$100'],
    featured: true,
  },
  {
    id: 'wedding-rehearsal',
    kicker: 'Custom package',
    name: 'Rehearsal',
    price: '$400',
    unit: 'Rehearsal coverage',
    includes: [
      'Bride and groom as the priority, guests as secondary',
      'Minimal editing included',
      'Additional content priced accordingly',
    ],
    addOns: ['Drone +$50'],
  },
];

export const EVENT_PLANS: Plan[] = [
  {
    id: 'event-half-day',
    kicker: 'Special events',
    name: 'Half day',
    price: '$400',
    unit: 'Field-work minimum · up to 5 hours',
    includes: [
      'Up to 5 hours of field work',
      'Horizontal video from $100 each, depending on style and length of edit',
      'Vertical video $50 each',
    ],
    addOns: ['Drone +$50'],
  },
  {
    id: 'event-full-day',
    kicker: 'Special events',
    name: 'Full day',
    price: '$800',
    unit: 'Field-work minimum · covers the entire event',
    includes: [
      'Coverage of the entire event',
      'Horizontal video from $100 each, depending on style and length of edit',
      'Vertical video $50 each',
    ],
    addOns: ['Drone +$100'],
    featured: true,
  },
  {
    id: 'drone-shots',
    kicker: 'Aerial',
    name: 'Drone shots',
    price: '$100',
    unit: 'Minimum · price varies per hour',
    includes: [
      'FAA Part 107 licensed and insured pilot',
      'Venues, properties, local businesses and events',
      'Airspace checked before every booking',
    ],
  },
];

// Options for the booking form's "What are you booking?" select.
export const BOOKING_OPTIONS = [
  'Not sure yet',
  'Wedding — full day (from $1,000)',
  'Wedding — ceremony ($300)',
  'Wedding — rehearsal ($400)',
  'Event — half day (from $400)',
  'Event — full day (from $800)',
  'Drone shots (from $100)',
  'Something else',
];
