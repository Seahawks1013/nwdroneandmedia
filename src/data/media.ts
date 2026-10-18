// Site imagery and alt text, all in one place.
//
// Images live in public/images/ and are referenced by root path ("/images/...").
// To add a footage still: drop the file into public/images/<folder>/, then pass
// its path as `image` (plus `alt`) on an item in src/data/home.ts.
// Any slot without an image shows the landscape placeholder.
//
// Export web-sized WebP files (about 1600px on the long edge; scripts/make-about-webp.mjs converts JPGs):
// files in public/ are served as-is, without automatic resizing.
export type Photo = { src: string; width: number; height: number; alt: string; position?: string };

const photo = (file: string, alt: string, position?: string): Photo => ({
  src: `/images/about/${file}`,
  width: 1600,
  height: 1066,
  alt,
  position,
});

export const PHOTOS = {
  // Main photo of the owner.
  portrait: photo('dj-riley-portrait.webp', 'DJ Riley, owner of NW Drone & Media, standing in a meadow with his camera', '61% 30%'),
  smiling: photo('dj-riley-smiling.webp', 'DJ Riley smiling and holding his camera at golden hour', '45% 35%'),
  // About page "DJ's story" — small card beside the portrait (WebP).
  viewfinder: {
    src: '/images/about/dj-riley-viewfinder.webp',
    width: 1400,
    height: 933,
    alt: 'DJ Riley looking through the viewfinder of his Sony camera in a sunlit meadow',
    position: '60% 45%',
  },
  // Vertical photo (1200×1800) used in the home page "Meet DJ Riley" card.
  cameraShoulder: {
    src: '/images/about/dj-riley-camera-shoulder.webp',
    width: 1200,
    height: 1800,
    alt: 'DJ Riley smiling in a meadow with his camera resting on his shoulder',
    position: '50% 30%',
  },
  shooting: photo('dj-riley-shooting.webp', 'DJ Riley framing a shot with his camera against a blue evening sky', '46% 40%'),
  packing: photo('dj-riley-packing-gear.webp', 'DJ Riley packing his camera bag before a shoot, with a Sony camera and portable power station on the table', '40% 40%'),
  gear: photo('gear-sony-camera.webp', 'Sony mirrorless camera and portable power station ready for a full-day shoot', '50% 60%'),
};
