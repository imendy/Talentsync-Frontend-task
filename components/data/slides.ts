import automattic from "../../public/Automattic.png";
import intercom from "../../public/intercom.png";
import Image, { StaticImageData } from "next/image";
import shopify from "../../public/Shopify.png";
import avatar from "../../public/Avatar.png";
import avaterBlack from "../../public/_black.png"
import avaterWhite from "../../public/_whites.png"

interface Slide {
  id: number;
  image: StaticImageData;
  testimony: string;
  avatar: StaticImageData;
  name: string;
  role: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: shopify,
    testimony:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and \n\n top-notch security make it essential for our team.",
    avatar: avatar,
    name: "Sarah Thompson",
    role: "Project Manager, Shopify",
  },
  {
    id: 2,
    image: intercom,
    testimony:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and \n\n top-notch security make it essential for our team.",
    avatar: avaterBlack ,
    name: "Amanda Jobs",
    role: "Head of Development, Intercom",
  },
  {
    id: 3,
    image: automattic,
    testimony:
      "ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and \n\n top-notch security make it essential for our team.",
    avatar: avaterWhite,
    name: "Paul Luther",
    role: "Project Manager, Automattic",
  },
];

export default slides;
