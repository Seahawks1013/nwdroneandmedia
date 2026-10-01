// Site imagery and alt text, all in one place.
//
// Images live in public/images/ and are referenced by root path ("/images/...").
// To add a footage still: drop the file into public/images/<folder>/, then pass
// its path as `image` (plus `alt`) on an item in src/data/home.ts or
// src/data/services.ts. Any slot without an image shows the landscape placeholder.
//
// Export web-sized files (about 2000px on the long edge, JPG quality ~80, or WebP):
// files in public/ are served as-is, without automatic resizing.
export const owner = {
  src: '/images/about/owner.jpg',
  width: 1000,
  height: 1596,
  alt: 'Owner of NW Drone & Media framing a shot',
  altAlt: 'Owner of NW Drone & Media holding a camera to frame a shot',
};
