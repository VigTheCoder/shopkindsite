// src/data/cookies.js
// Cookie products with main + thumbnail images

import clifa from '../assets/images/clifa.avif';
import clifb from '../assets/images/clifb.webp';
import clifc from '../assets/images/clifc.webp';
import clifd from '../assets/images/clifd.webp';

import goodiea from '../assets/images/goodiea.avif';
import goodieb from '../assets/images/goodieb.webp';
import goodiec from '../assets/images/goodiec.webp';
import goodied from '../assets/images/goodied.webp';

import oreoa from '../assets/images/oreoa.avif';
import oreob from '../assets/images/oreob.webp';
import oreoc from '../assets/images/oreoc.webp';
import oreod from '../assets/images/oreod.webp';

import tatesa from '../assets/images/tatesa.avif';
import tatesb from '../assets/images/tatesb.webp';
import tatesc from '../assets/images/tatesc.webp';
import tatesd from '../assets/images/tatesd.webp';

import trubara from '../assets/images/trubara.avif';
import trubarb from '../assets/images/trubarb.webp';
import trubarc from '../assets/images/trubarc.webp';
import trubard from '../assets/images/trubard.webp';

import yumeartha from '../assets/images/yumeartha.avif';
import yumearthb from '../assets/images/yumearthb.webp';
import yumearthc from '../assets/images/yumearthc.webp';
import yumearthd from '../assets/images/yumearthd.webp';

import biscoffa from '../assets/images/biscoffa.avif';
import biscoffb from '../assets/images/biscoffb.webp';
import biscoffc from '../assets/images/biscoffc.webp';
import biscoffd from '../assets/images/biscoffd.webp';

import chipsa from '../assets/images/chipsa.avif';
import chipsb from '../assets/images/chipsb.webp';
import chipsc from '../assets/images/chipsc.webp';
import chipsd from '../assets/images/chipsd.webp';

export const cookies = [
  {
    id: 301,
    name: 'Clif Cookies',
    price: 3.49,
    category: 'cookies',
    images: [clifa, clifb, clifc, clifd],
    description: 'Wholesome Clif cookies packed with energy and flavor.',
    slug: 'clif-cookies'
  },
  {
    id: 302,
    name: 'Goodie Cookies',
    price: 2.99,
    category: 'cookies',
    images: [goodiea, goodieb, goodiec, goodied],
    description: 'Soft and chewy cookies with a burst of chocolate goodness.',
    slug: 'goodie-cookies'
  },
  {
    id: 303,
    name: 'Oreo Cookies',
    price: 1.99,
    category: 'cookies',
    images: [oreoa, oreob, oreoc, oreod],
    description: 'Classic sandwich cookies with creamy filling between chocolate wafers.',
    slug: 'oreo-cookies'
  },
  {
    id: 304,
    name: 'Tate’s Cookies',
    price: 3.99,
    category: 'cookies',
    images: [tatesa, tatesb, tatesc, tatesd],
    description: 'Crispy, buttery cookies baked to perfection.',
    slug: 'tates-cookies'
  },
  {
    id: 305,
    name: 'TruBar Cookies',
    price: 4.49,
    category: 'cookies',
    images: [trubara, trubarb, trubarc, trubard],
    description: 'Protein-packed cookies for a healthy snack anytime.',
    slug: 'trubar-cookies'
  },
  {
    id: 306,
    name: 'YumEarth Cookies',
    price: 3.29,
    category: 'cookies',
    images: [yumeartha, yumearthb, yumearthc, yumearthd],
    description: 'Delightfully sweet cookies made with natural ingredients.',
    slug: 'yumearth-cookies'
  },
  {
    id: 307,
    name: 'Biscoff Cookies',
    price: 2.79,
    category: 'cookies',
    images: [biscoffa, biscoffb, biscoffc, biscoffd],
    description: 'Crispy caramelized cookies with signature Biscoff flavor.',
    slug: 'biscoff-cookies'
  },
  {
    id: 308,
    name: 'Chips Cookies',
    price: 2.99,
    category: 'cookies',
    images: [chipsa, chipsb, chipsc, chipsd],
    description: 'Classic chocolate chip cookies, crispy on the edges and soft inside.',
    slug: 'chips-cookies'
  }
];
