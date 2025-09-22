// src/data/chocolates.js
// Chocolate products with main + thumbnail images

import almondjoya from '../assets/images/almondjoya.avif';
import almondjoyb from '../assets/images/almondjoyb.webp';
import almondjoyc from '../assets/images/almondjoyc.webp';
import almondjoyd from '../assets/images/almondjoyd.webp';

import hersheysa from '../assets/images/hersheysa.avif';
import hersheysb from '../assets/images/hersheysb.webp';
import hersheysc from '../assets/images/hersheysc.webp';
import hersheysd from '../assets/images/hersheysd.webp';

import mandma from '../assets/images/mandma.avif';
import mandmb from '../assets/images/mandmb.webp';
import mandmc from '../assets/images/mandmc.webp';
import mandmd from '../assets/images/mandmd.webp';

import milkywaya from '../assets/images/milkywaya.avif';
import milkywayb from '../assets/images/milkywayb.webp';
import milkywayc from '../assets/images/milkywayc.webp';
import milkywayd from '../assets/images/milkywayd.webp';

import moundsa from '../assets/images/moundsa.avif';
import moundsb from '../assets/images/moundsb.webp';
import moundsc from '../assets/images/moundsc.webp';
import moundsd from '../assets/images/moundsd.webp';

import reesesa from '../assets/images/reesesa.avif';
import reesesb from '../assets/images/reesesb.webp';
import reesesc from '../assets/images/reesesc.webp';
import reesesd from '../assets/images/reesesd.webp';

import skinnydippeda from '../assets/images/skinnydippeda.avif';
import skinnydippedb from '../assets/images/skinnydippedb.webp';
import skinnydippedc from '../assets/images/skinnydippedc.webp';
import skinnydippedd from '../assets/images/skinnydippedd.webp';

import snickersa from '../assets/images/snickersa.avif';
import snickersb from '../assets/images/snickersb.webp';
import snickersc from '../assets/images/snickersc.webp';
import snickersd from '../assets/images/snickersd.webp';

import sweetartsa from '../assets/images/sweetartsa.avif';
import sweetartsb from '../assets/images/sweetartsb.webp';
import sweetartsc from '../assets/images/sweetartsc.webp';
import sweetartsd from '../assets/images/sweetartsd.webp';

import trubara from '../assets/images/trubara.avif';
import trubarb from '../assets/images/trubarb.webp';
import trubarc from '../assets/images/trubarc.webp';
import trubard from '../assets/images/trubard.webp';

export const chocolates = [
  {
    id: 201,
    name: 'Almond Joy',
    price: 2.99,
    category: 'chocolates',
    images: [almondjoya, almondjoyb, almondjoyc, almondjoyd],
    description: 'Classic candy bar with coconut, almonds, and rich milk chocolate.',
    slug: 'almond-joy'
  },
  {
    id: 202,
    name: 'Hershey’s Milk Chocolate',
    price: 1.99,
    category: 'chocolates',
    images: [hersheysa, hersheysb, hersheysc, hersheysd],
    description: 'Smooth and creamy Hershey’s milk chocolate bar.',
    slug: 'hersheys-milk-chocolate'
  },
  {
    id: 203,
    name: 'M&M’s',
    price: 3.49,
    category: 'chocolates',
    images: [mandma, mandmb, mandmc, mandmd],
    description: 'Colorful candy-coated milk chocolate pieces.',
    slug: 'm-and-ms'
  },
  {
    id: 204,
    name: 'Milky Way',
    price: 2.49,
    category: 'chocolates',
    images: [milkywaya, milkywayb, milkywayc, milkywayd],
    description: 'Chocolate bar filled with nougat, caramel, and milk chocolate.',
    slug: 'milky-way'
  },
  {
    id: 205,
    name: 'Mounds',
    price: 2.99,
    category: 'chocolates',
    images: [moundsa, moundsb, moundsc, moundsd],
    description: 'Dark chocolate bar with sweet coconut filling.',
    slug: 'mounds'
  },
  {
    id: 206,
    name: 'Reese’s Peanut Butter Cups',
    price: 3.29,
    category: 'chocolates',
    images: [reesesa, reesesb, reesesc, reesesd],
    description: 'Milk chocolate cups filled with creamy peanut butter.',
    slug: 'reeses-peanut-butter-cups'
  },
  {
    id: 207,
    name: 'SkinnyDipped Almonds',
    price: 4.49,
    category: 'chocolates',
    images: [skinnydippeda, skinnydippedb, skinnydippedc, skinnydippedd],
    description: 'Almonds dipped in thin layers of chocolate for a light treat.',
    slug: 'skinnydipped-almonds'
  },
  {
    id: 208,
    name: 'Snickers',
    price: 2.99,
    category: 'chocolates',
    images: [snickersa, snickersb, snickersc, snickersd],
    description: 'Nougat, caramel, peanuts, and milk chocolate in a classic bar.',
    slug: 'snickers'
  },
  {
    id: 209,
    name: 'Sweetarts Ropes',
    price: 3.99,
    category: 'chocolates',
    images: [sweetartsa, sweetartsb, sweetartsc, sweetartsd],
    description: 'Chewy candy ropes with a tart and fruity filling.',
    slug: 'sweetarts-ropes'
  },
  {
    id: 210,
    name: 'TruBar',
    price: 5.49,
    category: 'chocolates',
    images: [trubara, trubarb, trubarc, trubard],
    description: 'Plant-based protein bar coated with chocolate.',
    slug: 'trubar'
  }
];
