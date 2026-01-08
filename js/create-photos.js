import { getRandomInteger, getRandomItem, createIdGenerator } from './util.js';
import { NAMES, MESSAGES } from './data.js';

const NUM_OF_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const idGenerator = createIdGenerator();

const createComments = () => {
  const comments = [];

  for (let i = 0; i <= getRandomInteger(MIN_COMMENTS, MAX_COMMENTS); i++) {
    const comment = {
      id: idGenerator(),
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: getRandomItem(MESSAGES),
      name: getRandomItem(NAMES)
    };
    comments.push(comment);
  }
  return comments;
};

const createPhotos = () => {
  const photos = [];

  for (let i = 1; i <= NUM_OF_PHOTOS; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Необычный кадр дня',
      likes : getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments : createComments()
    };
    photos.push(photo);
  }
  return photos;
};

export{ createPhotos };
