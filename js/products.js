/**
 * products.js
 * ------------------------------------------------------------
 * Hardcoded product catalogue. This is the ONLY place product
 * data lives. To add, remove, or edit a product, edit this array
 * directly and redeploy.
 */

const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

// Size guide charts — shown via a "Size Guide" link next to the size
// selector on cards for these two categories. Polo and shorts guides
// are not available yet; add SIZE_GUIDE_POLO / SIZE_GUIDE_SHORTS and
// wire them into the relevant products below once supplied.
const SIZE_GUIDE_TEE = 'images/size-guide-tee.jpg';
const SIZE_GUIDE_HOODIE = 'images/size-guide-hoodie.jpg';
const SIZE_GUIDE_POLO = 'images/size-guide-polo.jpg';
const SIZE_GUIDE_SHORTS = 'images/size-guide-shorts.jpg';

// The shorts chart only covers XS–XXL (no XXXL row provided), so the
// shorts size group offers one fewer option than everything else —
// keeps every selectable pill backed by real chart data.
const SHORTS_SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const PRODUCTS = [
  {
    code: 'POLO-BLACK',
    name: 'Polo 1',
    section: 'Apparel',
    price: 649,
    description: 'Classic polo, clean and versatile.',
    images: ['images/polo-1.jpg'],
    requiresSize: true,
    sizes: SIZE_OPTIONS,
    sizeGuideImage: SIZE_GUIDE_POLO,
    extraField: null
  },
  {
    code: 'POLO-BLUE',
    name: 'Polo 2',
    section: 'Apparel',
    price: 649,
    description: 'Classic polo, clean and versatile.',
    images: ['images/polo-2.jpg'],
    requiresSize: true,
    sizes: SIZE_OPTIONS,
    sizeGuideImage: SIZE_GUIDE_POLO,
    extraField: null
  },
  {
    code: 'POLO-MAROON',
    name: 'Polo 3',
    section: 'Apparel',
    price: 649,
    description: 'Classic polo, clean and versatile.',
    images: ['images/polo-3.jpg'],
    requiresSize: true,
    sizes: SIZE_OPTIONS,
    sizeGuideImage: SIZE_GUIDE_POLO,
    extraField: null
  },
  {
    code: 'TEE-XLER',
    name: 'Oversized Tee — XLer',
    section: 'Apparel',
    price: 699,
    description: 'Oversized tee with a bold back print.',
    // back shown first, then front — swipe/tap to see both
    images: ['images/tee-xler-back.jpg', 'images/tee-xler-front.jpg'],
    requiresSize: true,
    sizes: SIZE_OPTIONS,
    sizeGuideImage: SIZE_GUIDE_TEE,
    extraField: null
  },
  {
    code: 'TEE-SAPNO',
    name: 'Oversized Tee — Sapno',
    section: 'Apparel',
    price: 749,
    description: 'Oversized tee with an embroidered cloud detail.',
    images: ['images/tee-sapno-back.jpg', 'images/tee-sapno-front.jpg'],
    requiresSize: true,
    sizes: SIZE_OPTIONS,
    sizeGuideImage: SIZE_GUIDE_TEE,
    // This product also shows a Batch selector.
    extraField: {
      type: 'select',
      label: 'Batch',
      options: ['2027', '2028']
    }
  },
  {
    code: 'HOODIE-DOVE',
    name: 'Hoodie — Dove',
    section: 'Apparel',
    price: 1049,
    description: 'Pullover hoodie with a bold back print.',
    images: ['images/hoodie-dove-back.jpg', 'images/hoodie-dove-front.jpg'],
    requiresSize: true,
    sizes: SIZE_OPTIONS,
    sizeGuideImage: SIZE_GUIDE_HOODIE,
    // Only this product shows a Batch selector.
    extraField: {
      type: 'select',
      label: 'Batch',
      options: ['2027', '2028']
    }
  },
  {
    code: 'HOODIE-STAMPS',
    name: 'Hoodie — Campus Stamps',
    section: 'Apparel',
    price: 1099,
    description: 'Full-zip hoodie for easy layering.',
    images: ['images/hoodie-stamps-back.jpg', 'images/hoodie-stamps-front.jpg'],
    requiresSize: true,
    sizes: SIZE_OPTIONS,
    sizeGuideImage: SIZE_GUIDE_HOODIE,
    extraField: null
  },
  {
    code: 'COORD-QZIP',
    name: 'Half Zip + Shorts Co-ord',
    section: 'Apparel',
    price: 1599,
    description: 'Matching quarter-zip and shorts set.',
    images: ['images/coord-set.jpg'],
    requiresSize: false,
    sizes: [],
    // Two independent size choices — one per piece, each with its own guide.
    sizeGroups: [
      { key: 'zipper', label: 'Half Zipper Size', options: SIZE_OPTIONS, sizeGuideImage: SIZE_GUIDE_HOODIE },
      { key: 'shorts', label: 'Shorts Size', options: SHORTS_SIZE_OPTIONS, sizeGuideImage: SIZE_GUIDE_SHORTS }
    ],
    extraField: null
  },
  {
    code: 'STICKER-SET',
    name: 'Sticker Sheet',
    section: 'Accessories',
    price: 99,
    description: 'Set of 4 stickers.',
    images: ['images/sticker-sheet.jpg'],
    requiresSize: false,
    sizes: [],
    extraField: null
  },
  {
    code: 'SIPPER-01',
    name: 'XLRI Sipper',
    section: 'Accessories',
    price: 449,
    description: 'Insulated everyday sipper.',
    images: ['images/sipper.jpg'],
    requiresSize: false,
    sizes: [],
    extraField: null
  },
  {
    code: 'NAMEPLATE-01',
    name: 'Metal Name Plate',
    section: 'Accessories',
    price: 299,
    description: 'Personalized name plate for desk or hostel door.',
    images: ['images/nameplate.jpg'],
    requiresSize: false,
    sizes: [],
    extraField: {
      type: 'text',
      label: 'Name for plate',
      placeholder: 'e.g. KUNAL',
      maxLength: 17
    }
  },
  {
    code: 'MAGNET-KUDIYA',
    name: 'Magnet — XL Ki Kudiya',
    section: 'Accessories',
    price: 99,
    description: 'Fridge magnet.',
    images: ['images/magnet-kudiya.jpg'],
    requiresSize: false,
    sizes: [],
    extraField: null
  },
  {
    code: 'MAGNET-CAMPUS',
    name: 'Magnet — Campus',
    section: 'Accessories',
    price: 99,
    description: 'Fridge magnet.',
    images: ['images/magnet-campus.jpg'],
    requiresSize: false,
    sizes: [],
    extraField: null
  }
];

// ------------------------------------------------------------
// Settings — payment details, discount/caution rules, contacts.
// ------------------------------------------------------------
const SETTINGS = {
  upiId: 'sadhvi862@icici',
  qrImage: 'images/payment-qr.png',

  // Discount = min(cartTotal - 5000, 500), only when cartTotal > 5000.
  // Independent of whether the caution deposit is used.
  discountThreshold: 5000,
  discountCap: 500,

  // Caution deposit can offset up to this much of the bill.
  cautionDepositLimit: 5000,

  ordersOpen: true,

  contact: {
    teamName: 'Nova Exilaro Team',
    email: 'next@xlri.ac.in',
    pocs: [
      { name: 'Pranay', roll: 'B26474', phone: '8287697724' },
      { name: 'Shreya Tiwary', roll: 'B26353', phone: '9304117753' }
    ]
  }
};
