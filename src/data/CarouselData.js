const StanHacksLink = require('../assets/stanhacks.jpg').default;
const ClubLink = require('../assets/club.jpg').default;
const MercedLink = require('../assets/hackmerced.jpg').default;
const HackathonLink = require('../assets/hackathon.jpg').default;

const CarouselData = [
  {
    link: StanHacksLink,
    alt: 'StanHacks Group Photo',
    caption: 'Computer Science Club at Stanislaus State',
    subcaption: 'A community of undergrads at CSU Stanislaus aiming to foster and cultivate technical interest in Central Valley.',
  },
  {
    link: ClubLink,
    alt: 'Club Group Photo',
  },
  {
    link: MercedLink,
    alt: 'Stan Students at HackMerced Hackathon',
  },
  {
    link: HackathonLink,
    alt: 'Stan Students at MLH Hackathon',
  },
];

export default CarouselData;
