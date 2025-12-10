const NAMES = [
  'Артём',
  'Ирина',
  'Сергей',
  'Екатерина',
  'Дмитрий',
  'Алина',
  'Владимир',
  'Мария',
  'Константин',
  'Ольга'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NUM_OF_PHOTOS = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

const idGenerator = createIdGenerator();

const generateComment = () => {
  const comments = [];

  for (let i = 0; i <= getRandomInteger(0, 30); i++) {
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

const generatePhotos = () => {
  const photos = [];

  for (let i = 1; i <= NUM_OF_PHOTOS; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Необычный кадр дня',
      likes : getRandomInteger(15, 200),
      comments : generateComment()
    };
    photos.push(photo);
  }
  return photos;
};

generatePhotos();
