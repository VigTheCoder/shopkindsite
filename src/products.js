// Main + thumbnail images imports
import img1 from './assets/images/1.avif';
import img1b from './assets/images/1b.avif';
import img1c from './assets/images/1c.avif';
import img1d from './assets/images/1d.avif';

import img2 from './assets/images/2.avif';
import img2b from './assets/images/2b.avif';
import img2c from './assets/images/2c.avif';
import img2d from './assets/images/2d.avif';

import img3 from './assets/images/3.avif';
import img3b from './assets/images/3b.avif';
import img3c from './assets/images/3c.avif';
import img3d from './assets/images/3d.avif';

import img4 from './assets/images/4.avif';
import img4b from './assets/images/4b.avif';
import img4c from './assets/images/4c.avif';
import img4d from './assets/images/4d.avif';

import img5 from './assets/images/5.avif';
import img5b from './assets/images/5b.avif';
import img5c from './assets/images/5c.avif';
import img5d from './assets/images/5d.avif';

import img6 from './assets/images/6.avif';
import img6b from './assets/images/6b.avif';
import img6c from './assets/images/6c.avif';
import img6d from './assets/images/6d.avif';

import img7 from './assets/images/7.avif';
import img7b from './assets/images/7b.avif';
import img7c from './assets/images/7c.avif';
import img7d from './assets/images/7d.avif';

import img8 from './assets/images/8.avif';
import img8b from './assets/images/8b.avif';
import img8c from './assets/images/8c.avif';
import img8d from './assets/images/8d.avif';

export const products = [
  // Products 1-8
  {
    id: 1,
    name: 'Regular Fit Cotton T-shirt',
    price: 19.99,
    images: [img1, img1b, img1c, img1d],
    description: 'Soft, breathable cotton T-shirt with a regular fit, perfect for everyday casual wear.',
    slug: 'regular-fit-cotton-t-shirt'
  },
  {
    id: 2,
    name: 'Slim Fit Stretch T-shirt',
    price: 24.99,
    images: [img2, img2b, img2c, img2d],
    description: 'Slim-fit T-shirt with stretch fabric for a comfortable, tailored look.',
    slug: 'slim-fit-stretch-t-shirt'
  },
  {
    id: 3,
    name: 'Oversized Jersey T-shirt',
    price: 11.99,
    images: [img3, img3b, img3c, img3d],
    description: 'Relaxed oversized T-shirt made from soft jersey fabric, ideal for a trendy casual look.',
    slug: 'oversized-jersey-t-shirt'
  },
  {
    id: 4,
    name: 'Collar Linen Blend T-shirt',
    price: 34.99,
    images: [img4, img4b, img4c, img4d],
    description: 'Lightweight Collar T-shirt crafted from a breathable linen blend, great for warm weather.',
    slug: 'v-neck-linen-blend-t-shirt'
  },
  {
    id: 5,
    name: 'Graphic Print T-shirt',
    price: 19.99,
    images: [img5, img5b, img5c, img5d],
    description: 'T-shirt featuring a bold graphic print for a casual, stylish look.',
    slug: 'graphic-print-t-shirt'
  },
  {
    id: 6,
    name: 'Henley Neck Cotton T-shirt',
    price: 24.99,
    images: [img6, img6b, img6c, img6d],
    description: 'Henley-style T-shirt with soft cotton fabric, perfect for smart-casual outfits.',
    slug: 'henley-neck-cotton-t-shirt'
  },
  {
    id: 7,
    name: 'Polo Collar Jersey T-shirt',
    price: 29.99,
    images: [img7, img7b, img7c, img7d],
    description: 'Classic polo-collar T-shirt made from comfortable jersey fabric for a polished look.',
    slug: 'polo-collar-jersey-t-shirt'
  },
  {
    id: 8,
    name: 'Pocket Detail T-shirt',
    price: 19.99,
    images: [img8, img8b, img8c, img8d],
    description: 'T-shirt with a subtle chest pocket detail, combining simplicity and style.',
    slug: 'pocket-detail-t-shirt'
  },

  // Products 9-16 (reusing images in different order)
  {
    id: 9,
    name: 'Regular Fit Basic T-shirt',
    price: 38.99,
    images: [img1, img1b, img1c, img1d],
    description: 'Classic regular-fit T-shirt for everyday casual wear, soft and breathable fabric.',
    slug: 'regular-fit-basic-t-shirt'
  },
  {
    id: 10,
    name: 'Slim Fit Athletic T-shirt',
    price: 43.99,
    images: [img2, img2b, img2c, img2d],
    description: 'Athletic-style slim-fit T-shirt with stretch fabric for enhanced movement and comfort.',
    slug: 'slim-fit-athletic-t-shirt'
  },
  {
    id: 11,
    name: 'Oversized Cotton T-shirt',
    price: 32.99,
    images: [img3, img3b, img3c, img3d],
    description: 'Oversized T-shirt in soft cotton, ideal for relaxed, casual style.',
    slug: 'oversized-cotton-t-shirt'
  },
  {
    id: 12,
    name: 'Crew Neck Linen T-shirt',
    price: 46.99,
    images: [img4, img4b, img4c, img4d],
    description: 'Crew neck T-shirt made from a breathable linen blend for lightweight comfort.',
    slug: 'crew-neck-linen-t-shirt'
  },
  {
    id: 13,
    name: 'Printed Logo T-shirt',
    price: 41.99,
    images: [img5, img5b, img5c, img5d],
    description: 'T-shirt featuring a printed logo for casual style with a sporty touch.',
    slug: 'printed-logo-t-shirt'
  },
  {
    id: 14,
    name: 'Henley Neck Jersey T-shirt',
    price: 15.99,
    images: [img6, img6b, img6c, img6d],
    description: 'Henley neck T-shirt in soft jersey fabric, perfect for layering or casual wear.',
    slug: 'henley-neck-jersey-t-shirt'
  },
  {
    id: 15,
    name: 'Classic Polo T-shirt',
    price: 20.99,
    images: [img7, img7b, img7c, img7d],
    description: 'Timeless polo-collar T-shirt with comfortable fabric, suitable for casual or semi-formal occasions.',
    slug: 'classic-polo-t-shirt'
  },
  {
    id: 16,
    name: 'Minimalist Pocket T-shirt',
    price: 40.99,
    images: [img8, img8b, img8c, img8d],
    description: 'Clean, minimalist T-shirt featuring a small pocket detail for understated style.',
    slug: 'minimalist-pocket-t-shirt'
  }
];
