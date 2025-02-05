import Ceo from "@/app/src/assets/carousel/Reviews/ceo.png";
import Director from "@/app/src/assets/carousel/Reviews/director.png";
import Founder from "@/app/src/assets/carousel/Reviews/founder.png";
import Sonax from "@/app/src/assets/carousel/Partners/sonax.png";
import Carpro from "@/app/src/assets/carousel/Partners/carpro.png";
import Koch from "@/app/src/assets/carousel/Partners/koch.png";
import Meguiars from "@/app/src/assets/carousel/Partners/meguiars.png";
import Menzerna from "@/app/src/assets/carousel/Partners/menzerna.png";
import SEDAN from "@/app/src/assets/sedan.png";

type Logo = {
  image: any;
  id?: number;
  width?: number;
  height?: number;
  alt?: string;
};

type RefItem = {
  quote: string;
  author: string;
  role: string;
  id: number;
};

export const FREQUENTLYASKED = [
  { title: "HOW OFTEN SHOULD I SERVICE MY CAR?", id: 1 },
  { title: "WHAT'S INCLUDED IN A BASIC CAR SERVICE?", id: 2 },
  { title: "WHY IS REGULAR SERVICING IMPORTANT?", id: 3 },
  { title: "CAN SERVICING IMPROVE MY CAR'S RESALE VALUE?", id: 4 },
];

export const TESTIMONIALS: RefItem[] = [
  {
    quote:
      "The fire of anyone, without flattering the present, alleviates pain and corrupts those pains and troubles that are expected to be avoided.",
    author: "Justin Lee",
    role: "FOUNDER",
    id: 1,
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Sarah Johnson",
    role: "CEO",
    id: 2,
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Michael Chen",
    role: "DIRECTOR",
    id: 3,
  },
];

export const REVIEWS_IMAGE: Logo[] = [
  { image: Ceo, id: 1, alt: "Logo de CEO" },
  { image: Director, id: 2, alt: "Logo de Director" },
  { image: Founder, id: 3, alt: "Logo de Founder" },
];

export const PARTNERS: Logo[] = [
  { image: Menzerna, width: 222, height: 52, alt: "Logo de Menzerna" },
  { image: Sonax, width: 169, height: 35, alt: "Logo de Sonax" },
  { image: Carpro, width: 191, height: 40, alt: "Logo de Carpro" },
  { image: Meguiars, width: 136, height: 74, alt: "Logo de Meguiars" },
  { image: Koch, width: 278, height: 36, alt: "Logo de Koch" },
];

export interface Package {
  name: string;
  duration: string;
  bg: string;
  details: string[];
  amount: number;
}

export interface Car {
  image: any;
  type: string;
  packages: Package[];
}

export const CARS: Car[] = [
  {
    image: SEDAN,
    type: "SEDAN",
    packages: [
      {
        name: "Basic",
        duration: "2 hr apro",
        bg: "bg-[#DFDFDF]",
        details: [
          "Basic interior cleaning for SEDAN",
          "Exterior wash",
          "Tire shine",
        ],
        amount: 100,
      },
      {
        name: "Gold",
        duration: "3 hr apro",
        bg: "bg-[#BBBBBB]",
        details: [
          "Interior and exterior cleaning deep for SEDAN",
          "Upholstery vacuuming",
          "Wheels",
          "Glass cleaning",
        ],
        amount: 200,
      },
      {
        name: "Diamond",
        duration: "2 hr apro",
        bg: "bg-[#959595]",
        details: [
          "Full interior and exterior detailing for SEDAN",
          "Paint correction",
          "Ceramic coating",
        ],
        amount: 500,
      },
    ],
  },
  {
    image: SEDAN,
    type: "SEDAN 1",
    packages: [
      {
        name: "Basic",
        duration: "2 hr apro",
        bg: "bg-[#DFDFDF]",
        details: [
          "Basic interior cleaning for SEDAN 1",
          "Exterior wash and wax",
          "Tire shine",
        ],
        amount: 120,
      },
      {
        name: "Gold",
        duration: "3 hr apro",
        bg: "bg-[#BBBBBB]",
        details: [
          "Interior and exterior cleaning deep for SEDAN 1",
          "Upholstery shampooing",
          "Wheels and tires cleaning",
          "Glass cleaning",
        ],
        amount: 240,
      },
      {
        name: "Diamond",
        duration: "2 hr apro",
        bg: "bg-[#959595]",
        details: [
          "Full interior and exterior detailing for SEDAN 1",
          "Engine bay cleaning",
          "Headlight restoration",
        ],
        amount: 600,
      },
    ],
  },
  {
    image: SEDAN,
    type: "SEDAN 2",
    packages: [
      {
        name: "Basic",
        duration: "2 hr apro",
        bg: "bg-[#DFDFDF]",
        details: [
          "Basic interior cleaning for SEDAN 2",
          "Exterior wash and wax",
          "Tire shine",
        ],
        amount: 220,
      },
      {
        name: "Gold",
        duration: "3 hr apro",
        bg: "bg-[#BBBBBB]",
        details: [
          "Interior and exterior cleaning deep for SEDAN 2",
          "Upholstery shampooing",
          "Wheels and tires cleaning",
          "Glass cleaning",
        ],
        amount: 340,
      },
      {
        name: "Diamond",
        duration: "2 hr apro",
        bg: "bg-[#959595]",
        details: [
          "Full interior and exterior detailing for SEDAN 2",
          "Engine bay cleaning",
          "Headlight restoration",
        ],
        amount: 700,
      },
    ],
  },
];

export const HOME_TITLE = [
  {
    title: "Home.Ceramic.title",
    subtitle: "Home.Ceramic.subtitle",
  },
  {
    title: "Home.Detailing.title",
    subtitle: "Home.Detailing.subtitle",
  },
  {
    title: "Home.Interior.title",
    subtitle: "Home.Interior.subtitle",
  },
];
