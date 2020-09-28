import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons';

export function buildIconLibrary(library: FaIconLibrary) {
  library.addIcons(faTwitter, faFacebook, faInstagram, faYoutube, faBars);
}
