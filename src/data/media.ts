// Site imagery and alt text, all in one place.
//
// To add real footage stills: drop a JPG into src/assets/images/<folder>/,
// import it here, then pass it as `image` on an item in src/data/home.ts or
// src/data/services.ts. Any slot without an image shows the landscape placeholder.
import ownerPhoto from '../assets/images/about/owner.jpg';

export const owner = {
  src: ownerPhoto,
  alt: 'Owner of NW Drone & Media framing a shot',
  altAlt: 'Owner of NW Drone & Media holding a camera to frame a shot',
};
