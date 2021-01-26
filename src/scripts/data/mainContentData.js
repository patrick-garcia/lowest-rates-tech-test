// ***** notes *****
// add object to array for new gallery tile

const gallery = [
  {
    title: 'nice mortgage rates',
    description: 'Come get the best mortgage rates at lowestrates.ca',
    img: 'https://placeimg.com/325/475/animals',
    imgDesc: 'animal',
  },
  {
    title: 'Get best Car insurance',
    description: 'Come get the best mortgage rates at lowestrates.ca',
    img: 'https://placeimg.com/325/475/architechture',
    imgDesc: 'architechture',
  },
  {
    title: 'Best Home Insurance',
    // description: 'Come get the best mortgage rates at lowestrates.ca',
    img: 'https://placeimg.com/325/475/nature',
    imgDesc: 'nature',
    multilineDesc: [
      'Get your best carloan insurance. Get it now. Come get it, the best of the best.',
      'What else?',
    ]
  },
  {
    title: 'car loans car loans car loans!',
    description: 'get ur car loans here. come come come',
    img: 'https://placeimg.com/325/475/people',
    imgDesc: 'people',
  },
  {
    title: 'some stuff you like',
    description: 'stuff you like stuff you like',
    img: 'https://placeimg.com/325/475/tech',
    imgDesc: 'tech',
  },
  {
    title: 'wanna try lowestrates.ca?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus diam sodales sapien blandit, ac pharetra est vestibulum. Vestibulum in nisl tempus nulla malesuada pharetra. Donec id libero ac leo tincidunt scelerisque ut ac massa. Cras a justo congue, tincidunt turpis eu, rutrum ante. Integer et tempor dolor. Suspendisse potenti.',
    img: 'https://placeimg.com/325/475/grayscale',
    imgDesc: 'grayscale',
  },
  {
    title: 'The Perfect Sandwich, A Real Classic',
    description: 'just some random text lorem ipsum dolor sit amet, consectetur adipiscing',
    img: 'https://placeimg.com/325/475/sepia',
    imgDesc: 'sepia',
  },
  {
    title: 'the classic!!',
    description: 'nice come get the classic classic',
    img: 'https://placeimg.com/325/475/animals',
  },
];

const sectionCopy = {
  'section1': {
    title: 'About Lowestrates',
    img: 'https://placeimg.com/640/380/any',
    alt: 'large image',
  },
  'section2': {
    title: 'What is lowestrates.ca?',
    subtitle: 'you will love it once you try it',
    description: 'come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!! come get it, best comparison site!!',
  }
};

module.exports = { gallery, sectionCopy };