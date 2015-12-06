const categories = [
  'abstract',
  'animals',
  'business',
  'cats',
  'city',
  'food',
  'nightlife',
  'fashion',
  'people',
  'nature',
  'sports',
  'technics',
  'transport'
];

export default categories.reduce((pins, category) => {
  for(let i=1;i<=3;i++) {
    pins.push({
      id: pins.length + 1,
      description: `${category} ${i}`,
      image: `http://lorempixel.com/400/200/${category}/${i}/`
    });
  }
  return pins;
}, []);
