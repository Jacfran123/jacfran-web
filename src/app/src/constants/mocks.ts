import Ceo from "@/app/src/assets/carousel/Reviews/ceo.png";
import Director from "@/app/src/assets/carousel/Reviews/director.png";
import Founder from "@/app/src/assets/carousel/Reviews/founder.png";
//Partners Logos
import Sonax from "@/app/src/assets/carousel/Partners/logo-carrousell-1.png";
import Carpro from "@/app/src/assets/carousel/Partners/logo-2.png";
import Koch from "@/app/src/assets/carousel/Partners/logo-3.png";
import Meguiars from "@/app/src/assets/carousel/Partners/logo-4.png";
import Menzerna from "@/app/src/assets/carousel/Partners/logo-5.png";
//Packages Logos
import Sedan from "@/app/src/assets/packages/1-tipo-sedan.png";
import Suv from "@/app/src/assets/packages/2-modelo-SUV.png";
import Truck from "@/app/src/assets/packages/3-modelo-truck.png";
//Gallery Logos
import GalleryOne from "@/app/src/assets/gallery/galeria-1.webp";
import GalleryTwo from "@/app/src/assets/gallery/galeria-2.webp";
import GalleryThree from "@/app/src/assets/gallery/galeria-3.webp";
import GalleryFour from "@/app/src/assets/gallery/galeria-4.webp";
import GalleryFive from "@/app/src/assets/gallery/galeria-5.webp";
import GallerySix from "@/app/src/assets/gallery/galeria-6.webp";
import GallerySeven from "@/app/src/assets/gallery/galeria-7.webp";
import GalleryEight from "@/app/src/assets/gallery/galeria-8.webp";
//Services Logos
import Cuero from "@/app/src/assets/services/cuero.webp";
import Faros from "@/app/src/assets/services/faros.webp";
import Interior from "@/app/src/assets/services/interior.webp";
import Motor from "@/app/src/assets/services/limpieza-motor.webp";
import Ozono from "@/app/src/assets/services/ozono.webp";
import Mascotas from "@/app/src/assets/services/pelos-mascotas.webp";
import Pintura from "@/app/src/assets/services/pintura.webp";
import Plastico from "@/app/src/assets/services/plasticos.webp";
import Recubrimiento from "@/app/src/assets/services/recubrimiento.webp";
import Ventanas from "@/app/src/assets/services/ventanas.webp";
//Testimonials
import TestiMonialOne from "@/app/src/assets/testimonio-1.png";
import TestiMonialTwo from "@/app/src/assets/testimonio-2.png";
import TestiMonialThree from "@/app/src/assets/testimonio-3.png";

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
  id: number;
  //image: any;
  alt: string;
};

export const FREQUENTLYASKED = [
  {
    title: "FrequentlyAsked.CarDetailing.title",
    description: "FrequentlyAsked.CarDetailing.description",
    id: 1,
  },
  {
    title: "FrequentlyAsked.CarCleaning.title",
    description: "FrequentlyAsked.CarCleaning.description",
    id: 2,
  },
  {
    title: "FrequentlyAsked.IGetMyCarDetailed.title",
    description: "FrequentlyAsked.IGetMyCarDetailed.description",
    id: 3,
  },
  {
    title: "FrequentlyAsked.BenefitsOfCarDetailing.title",
    description: "FrequentlyAsked.BenefitsOfCarDetailing.description",
    points: {
      one: "FrequentlyAsked.BenefitsOfCarDetailing.points.one",
      two: "FrequentlyAsked.BenefitsOfCarDetailing.points.two",
      three: "FrequentlyAsked.BenefitsOfCarDetailing.points.three",
      four: "FrequentlyAsked.BenefitsOfCarDetailing.points.four",
    },
    id: 4,
  },
  {
    title: "FrequentlyAsked.FullCarDetail.title",
    description: "FrequentlyAsked.FullCarDetail.description",
    points: {
      one: "FrequentlyAsked.FullCarDetail.points.one",
      two: "FrequentlyAsked.FullCarDetail.points.two",
    },
    id: 5,
  },
  {
    title: "FrequentlyAsked.DetailingCost.title",
    description: "FrequentlyAsked.DetailingCost.description",
    id: 6,
  },
  {
    title: "FrequentlyAsked.WillDetailingProtect.title",
    description: "FrequentlyAsked.WillDetailingProtect.description",
    id: 7,
  },
  {
    title: "FrequentlyAsked.MobileCarDetailing.title",
    description: "FrequentlyAsked.MobileCarDetailing.description",
    id: 8,
  },
  {
    title: "FrequentlyAsked.OfferSameDayCar.title",
    description: "FrequentlyAsked.OfferSameDayCar.description",
    id: 9,
  },
  {
    title: "FrequentlyAsked.CanAutoDetailingRemove.title",
    description: "FrequentlyAsked.CanAutoDetailingRemove.description",
    id: 10,
  },
];

export const TESTIMONIALS: RefItem[] = [
  {
    quote: "Reviews.onePerson.description",
    author: "Reviews.onePerson.name",
    id: 1,
    alt: "Review Two",
  },
  {
    quote: "Reviews.twoPerson.description",
    author: "Reviews.twoPerson.name",
    id: 2,
    alt: "Review One",
  },
  {
    quote: "Reviews.threePerson.description",
    author: "Reviews.threePerson.name",
    id: 3,
    alt: "Review Three",
  },
  {
    quote: "Reviews.fourPerson.description",
    author: "Reviews.fourPerson.name",
    id: 4,
    alt: "Review Four",
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

export const CARS = [
  {
    image: Sedan,
    type: "Sedan",
    packages: [
      {
        name: "Basic",
        duration: "2 hr apro",
        bg: "bg-[#DFDFDF]",
        amount: 255,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Basic.includes.Interior"],
          exterior: ["Packages.Basic.includes.Exterior"],
        },
      },
      {
        name: "Gold",
        duration: "3 hr apro",
        bg: "bg-[#BBBBBB]",
        amount: 382,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Gold.includes.Interior"],
          exterior: ["Packages.Gold.includes.Exterior"],
        },
      },
      {
        name: "Diamond",
        duration: "2 hr apro",
        bg: "bg-[#959595]",
        amount: 1274,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Diamond.includes.Interior"],
          exterior: ["Packages.Diamond.includes.Exterior"],
        },
      },
    ],
  },
  {
    image: Suv,
    type: "Suv",
    packages: [
      {
        name: "Basic",
        duration: "2 hr apro",
        bg: "bg-[#DFDFDF]",
        details: [],
        amount: 311,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Basic.includes.Interior"],
          exterior: ["Packages.Basic.includes.Exterior"],
        },
      },
      {
        name: "Gold",
        duration: "3 hr apro",
        bg: "bg-[#BBBBBB]",
        details: [],
        amount: 399,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Gold.includes.Interior"],
          exterior: ["Packages.Gold.includes.Exterior"],
        },
      },
      {
        name: "Diamond",
        duration: "2 hr apro",
        bg: "bg-[#959595]",
        details: [],
        amount: 1486,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Diamond.includes.Interior"],
          exterior: ["Packages.Diamond.includes.Exterior"],
        },
      },
    ],
  },
  {
    image: Truck,
    type: "Trucks",
    packages: [
      {
        name: "Basic",
        duration: "2 hr apro",
        bg: "bg-[#DFDFDF]",
        details: [],
        amount: 365,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Basic.includes.Interior"],
          exterior: ["Packages.Basic.includes.Exterior"],
        },
      },
      {
        name: "Gold",
        duration: "3 hr apro",
        bg: "bg-[#BBBBBB]",
        details: [],
        amount: 425,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Gold.includes.Interior"],
          exterior: ["Packages.Gold.includes.Exterior"],
        },
      },
      {
        name: "Diamond",
        duration: "2 hr apro",
        bg: "bg-[#959595]",
        details: [],
        amount: 1656,
        includesPlans: {
          interiorTitle: "Packages.interior",
          exteriorTitle: "Packages.exterior",
          interior: ["Packages.Diamond.includes.Interior"],
          exterior: ["Packages.Diamond.includes.Exterior"],
        },
      },
    ],
  },
];

export const HOME_TITLE = [
  {
    title: "Home.Ceramic.title",
    subtitleGreen: "Home.Ceramic.subtitleGreen",
    subtitleWhite: "Home.Ceramic.subtitleWhite",
  },
  {
    title: "Home.Detailing.title",
    subtitleGreen: "Home.Detailing.subtitleGreen",
    subtitleWhite: "Home.Detailing.subtitleWhite",
  },
  {
    title: "Home.Interior.title",
    subtitleGreen: "Home.Interior.subtitleGreen",
    subtitleWhite: "Home.Interior.subtitleWhite",
  },
];

export const GALLERY = [
  { title: "Gallery.headlight", image: GalleryOne },
  { title: "Gallery.steam", image: GalleryTwo },
  { title: "Gallery.professional", image: GalleryThree },
  { title: "Gallery.rim", image: GalleryFour },
  { title: "Gallery.polishing", image: GalleryFive },
  { title: "Gallery.carnauba", image: GallerySix },
  { title: "Gallery.deep", image: GallerySeven },
  { title: "Gallery.leather", image: GalleryEight },
];

export const FEATURES_SECTION = [
  {
    title: "Services.engineWashandConditioning.title",
    logo: Motor,
    descriptions: ["Services.engineWashandConditioning.descriptions"],
  },
  {
    title: "Services.headlightRestoration.title",
    logo: Faros,
    descriptions: ["Services.headlightRestoration.descriptions"],
  },
  {
    title: "Services.windowPolishing.title",
    logo: Ventanas,
    descriptions: ["Services.windowPolishing.descriptions"],
  },
  {
    title: "Services.odorRemoval.title",
    logo: Ozono,
    descriptions: ["Services.odorRemoval.descriptions"],
  },
  {
    title: "Services.interiorCleaning.title",
    logo: Interior,
    descriptions: ["Services.interiorCleaning.descriptions"],
  },
  {
    title: "Services.paintCorrection.title",
    logo: Pintura,
    descriptions: ["Services.paintCorrection.descriptions"],
  },
  {
    title: "Services.ceramicCoating.title",
    logo: Recubrimiento,
    descriptions: ["Services.ceramicCoating.descriptions"],
  },
  {
    title: "Services.petHairRemoval.title",
    logo: Mascotas,
    descriptions: ["Services.petHairRemoval.descriptions"],
  },
  {
    title: "Services.leatherConditioningHydration.title",
    logo: Cuero,
    descriptions: ["Services.leatherConditioningHydration.descriptions"],
  },
  {
    title: "Services.plasticConditioning.title",
    logo: Plastico,
    descriptions: ["Services.plasticConditioning.descriptions"],
  },
];
