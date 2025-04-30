import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

export function initializeFontAwesome(library: FaIconLibrary) {
  // Add brand icons
  library.addIcons(
    faGithub,
    faLinkedin,
    faTwitter,
    faFacebook,
    faInstagram
  );

  // Add solid icons
  library.addIcons(
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faBars,
    faTimes
  );
} 