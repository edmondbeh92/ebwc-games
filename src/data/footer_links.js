import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
  {
    id: 1,
    url: "https://www.facebook.com/ebwcgames/",
    icon: faFacebookSquare,
    tooltip: "FACEBOOK",
  },
  {
    id: 2,
    url: "https://www.instagram.com/ebwcgames/",
    icon: faInstagram,
    tooltip: "INSTAGRAM",
  },
  {
    id: 3,
    url: "https://www.youtube.com/channel/UC9BABQRYm2wtb6VtGOEn15Q",
    icon: faYoutube,
    tooltip: "YOUTUBE",
  },
  {
    id: 4,
    url: "https://ebwc-games.itch.io/",
    icon: faItchIo,
    tooltip: "ITCH-IO",
  },
  {
    id: 5,
    url: "https://sketchfab.com/edmondbeh92",
    icon: null,
    image_url: require("../images/sketchfab_icon.png"),
    tooltip: "SKETCHFAB",
  },
];

export default footerLinks;
