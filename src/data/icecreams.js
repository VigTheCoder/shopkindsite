// src/data/icecreams.js
// Ice cream products with main + thumbnail images

import bena from '../assets/images/bena.avif';
import benb from '../assets/images/benb.webp';
import benc from '../assets/images/benc.webp';
import bend from '../assets/images/bend.webp';

import breyersa from '../assets/images/breyersa.avif';
import breyersb from '../assets/images/breyersb.webp';
import breyersc from '../assets/images/breyersc.webp';
import breyersd from '../assets/images/breyersd.jpg';

import drumsticka from '../assets/images/drumsticka.avif';
import drumstickb from '../assets/images/drumstickb.webp';
import drumstickc from '../assets/images/drumstickc.webp';
import drumstickd from '../assets/images/drumstickd.webp';

import frolliesa from '../assets/images/frolliesa.avif';
import frolliesb from '../assets/images/frolliesb.webp';
import frolliesc from '../assets/images/frolliesc.webp';
import frolliesd from '../assets/images/frolliesd.webp';

import haagena from '../assets/images/haagena.avif';
import haagenb from '../assets/images/haagenb.webp';
import haagenc from '../assets/images/haagenc.webp';
import haagend from '../assets/images/haagend.webp';

import mickeya from '../assets/images/mickeya.avif';
import mickeyb from '../assets/images/mickeyb.webp';
import mickeyc from '../assets/images/mickeyc.webp';
import mickeyd from '../assets/images/mickeyd.webp';

import talentia from '../assets/images/talentia.avif';
import talentib from '../assets/images/talentib.webp';
import talentic from '../assets/images/talentic.webp';
import talentid from '../assets/images/talentid.webp';

import edysa from '../assets/images/edysa.avif';
import edysb from '../assets/images/edysb.webp';
import edysc from '../assets/images/edysc.webp';
import edysd from '../assets/images/edysd.webp';

export const icecreams = [
  {
    id: 401,
    name: "Ben & Jerry's",
    price: 4.99,
    category: 'icecreams',
    images: [bena, benb, benc, bend],
    description: 'Rich and creamy ice cream with chunks of chocolate and cookie dough.',
    slug: 'ben-and-jerrys'
  },
  {
    id: 402,
    name: 'Breyers',
    price: 3.99,
    category: 'icecreams',
    images: [breyersa, breyersb, breyersc, breyersd],
    description: 'Classic smooth ice cream made with natural ingredients.',
    slug: 'breyers'
  },
  {
    id: 403,
    name: 'Drumstick',
    price: 2.49,
    category: 'icecreams',
    images: [drumsticka, drumstickb, drumstickc, drumstickd],
    description: 'Crispy cone with chocolate and vanilla ice cream, topped with nuts.',
    slug: 'drumstick'
  },
  {
    id: 404,
    name: "Frolle's",
    price: 5.29,
    category: 'icecreams',
    images: [frolliesa, frolliesb, frolliesc, frolliesd],
    description: 'Premium gelato with exotic flavors and creamy texture.',
    slug: 'frolles'
  },
  {
    id: 405,
    name: 'Haagen-Dazs',
    price: 6.49,
    category: 'icecreams',
    images: [haagena, haagenb, haagenc, haagend],
    description: 'Luxurious ice cream crafted with rich cream and natural flavors.',
    slug: 'haagen-dazs'
  },
  {
    id: 406,
    name: 'Mickey Ice Cream',
    price: 3.49,
    category: 'icecreams',
    images: [mickeya, mickeyb, mickeyc, mickeyd],
    description: 'Fun-shaped ice cream for kids, creamy vanilla with chocolate coating.',
    slug: 'mickey-ice-cream'
  },
  {
    id: 407,
    name: 'Talenti Gelato',
    price: 5.99,
    category: 'icecreams',
    images: [talentia, talentib, talentic, talentid],
    description: 'Authentic Italian gelato with smooth, rich flavors.',
    slug: 'talenti-gelato'
  },
  {
    id: 408,
    name: "Edy's",
    price: 4.49,
    category: 'icecreams',
    images: [edysa, edysb, edysc, edysd],
    description: 'Creamy ice cream with a variety of classic and seasonal flavors.',
    slug: 'edys'
  }
];