import type { ImageMetadata } from 'astro';

// Add `image` (imported from src/assets/images) to replace a placeholder slot.
export const SERVICES: {
  id: string;
  title: string;
  summary: string;
  meta: string;
  seed: number;
  image?: ImageMetadata;
  alt?: string;
  details: string[];
}[] = [
  {
    id: 'real-estate',
    title: 'Real estate media',
    summary: 'Listing photos and video that show the whole property, not just the front door.',
    meta: 'Next-day delivery · MLS ready',
    seed: 19,
    details: [
      'Aerial and ground photography, color-corrected',
      'Property flyover video with lot lines and neighborhood context',
      'Vineyard, farm and acreage packages',
      'Sized for MLS, Zillow and social',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial aerial footage',
    summary: 'Cinematic aerials for brands, wineries, tourism and promotional campaigns.',
    meta: 'Half day or full day · Part 107',
    seed: 26,
    details: [
      '4K footage in 10-bit log profiles',
      'Brand films, event coverage and social cut-downs',
      'Construction progress on a recurring schedule',
      'Licensed stock footage of the Northwest',
    ],
  },
  {
    id: 'inspections',
    title: 'Drone inspections',
    summary: 'Roofs, towers and solar arrays, inspected without ladders, lifts or shutdowns.',
    meta: 'Annotated report included',
    seed: 13,
    details: [
      'Roof, chimney and gutter inspections for contractors and insurers',
      'Solar, tower and agricultural structure surveys',
      'High-zoom stills with an annotated PDF report',
      'Orthomosaic maps and measurements on request',
    ],
  },
  {
    id: 'post-production',
    title: 'Editing & color grading',
    summary: 'Polished edits from our footage or yours, finished for every screen.',
    meta: 'By the project',
    seed: 5,
    details: [
      'Story-first editing with licensed music and sound design',
      'Color grading for a consistent, filmic look',
      'Vertical, square and widescreen exports',
      'Titles, lower thirds, maps and motion graphics',
    ],
  },
];
