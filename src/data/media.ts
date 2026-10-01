// Central list of site imagery and its alt text.
// To swap in real shots: drop a photo into src/assets/images/... with the same
// filename (or change the import path below) and update the alt text to describe it.
import type { ImageMetadata } from 'astro';

import heroAerial from '../assets/images/hero/hero-aerial.jpg';

import wheatFields from '../assets/images/gallery/wheat-fields.jpg';
import vineyardSunset from '../assets/images/gallery/vineyard-sunset.jpg';
import blueMountains from '../assets/images/gallery/blue-mountains.jpg';
import downtownMainSt from '../assets/images/gallery/downtown-main-st.jpg';
import snakeRiver from '../assets/images/gallery/snake-river.jpg';
import constructionSite from '../assets/images/gallery/construction-site.jpg';

import realEstate from '../assets/images/services/real-estate.jpg';
import commercial from '../assets/images/services/commercial.jpg';
import inspection from '../assets/images/services/inspection.jpg';
import postProduction from '../assets/images/services/post-production.jpg';

import pilot from '../assets/images/about/pilot.jpg';
import gear from '../assets/images/about/gear.jpg';

export interface MediaItem {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export const hero: MediaItem = {
  src: heroAerial,
  alt: 'Aerial view of rolling wheat fields in the Walla Walla Valley at golden hour, shot by drone',
};

export const gallery: MediaItem[] = [
  { src: wheatFields, alt: 'Overhead drone photo of patterned Palouse wheat fields during harvest', caption: 'Palouse Harvest' },
  { src: vineyardSunset, alt: 'Low-altitude aerial of vineyard rows at sunset near Walla Walla', caption: 'Vineyard Estate' },
  { src: blueMountains, alt: 'Wide aerial panorama of the Blue Mountains foothills under morning light', caption: 'Blue Mountains' },
  { src: downtownMainSt, alt: 'Drone shot looking down Main Street in downtown Walla Walla at dusk', caption: 'Downtown Walla Walla' },
  { src: snakeRiver, alt: 'Aerial view following the Snake River canyon from above', caption: 'Snake River' },
  { src: constructionSite, alt: 'Top-down progress photo of a commercial construction site', caption: 'Construction Progress' },
];

export const services = {
  realEstate: { src: realEstate, alt: 'Aerial exterior of a residential property and its lot lines for a real estate listing' },
  commercial: { src: commercial, alt: 'Cinematic drone footage still of a commercial facility and surrounding landscape' },
  inspection: { src: inspection, alt: 'Close-up drone inspection image of a rooftop and solar array' },
  postProduction: { src: postProduction, alt: 'Video editing timeline and color grading scopes on a monitor' },
} satisfies Record<string, MediaItem>;

export const about = {
  pilot: { src: pilot, alt: 'NW Drone & Media lead pilot preparing a drone for flight in an open field' },
  gear: { src: gear, alt: 'Drone, controller, cinema camera and spare batteries laid out in a hard case' },
} satisfies Record<string, MediaItem>;
