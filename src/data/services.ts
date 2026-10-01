import { services as img } from './media';

export const SERVICES = [
  {
    id: 'real-estate',
    title: 'Real Estate Media',
    summary: 'Listing photos and video that show the whole property, not just the front door.',
    image: img.realEstate,
    details: [
      'Aerial and ground photography, HDR-blended and color-corrected',
      'Property flyover video with lot lines and neighborhood context',
      'Vineyard, farm and acreage packages',
      'Next-day delivery, sized for MLS and social',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Aerial Footage',
    summary: 'Cinematic aerials for brands, wineries, tourism and promotional campaigns.',
    image: img.commercial,
    details: [
      '4K / 5.1K cinematic footage, 10-bit color profiles',
      'Brand films, event coverage and social cut-downs',
      'Construction progress documentation on a recurring schedule',
      'Licensed stock footage of the Pacific Northwest',
    ],
  },
  {
    id: 'inspections',
    title: 'Drone Inspections',
    summary: 'Safe, fast visual inspections without ladders, lifts or shutdowns.',
    image: img.inspection,
    details: [
      'Roof, chimney and gutter inspections for contractors and insurers',
      'Solar array, tower and agricultural structure surveys',
      'High-resolution zoom imagery with annotated reports',
      'Orthomosaic maps and site measurements on request',
    ],
  },
  {
    id: 'post-production',
    title: 'Video Editing & Color Grading',
    summary: 'Polished edits from our footage or yours, finished for any screen.',
    image: img.postProduction,
    details: [
      'Story-driven editing with licensed music and sound design',
      'Professional color grading for a consistent, cinematic look',
      'Vertical, square and widescreen exports for every platform',
      'Titles, lower thirds, maps and motion graphics',
    ],
  },
];
