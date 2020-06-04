/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
const faker = require('faker');

exports.getRandomPage = (userContext, events, done) => {
  const id = faker.random.number({ min: 1, max: 1000000 });
  userContext.vars.id = id;

  return done();
};

const generateColors = () => {
  const colorGroup = [];
  for (let j = 0; j < 3; j += 1) {
    const color_name = faker.commerce.color();
    const price_modifier = Math.floor(Math.random() * (200 - 1) + 1);
    colorGroup.push({ color_name, price_modifier });
  }
  return JSON.stringify(colorGroup);
};

let i = 10000001;

exports.getProductData = (userContext, events, done) => {
  const id = i;
  const name = faker.commerce.productName();
  const description = faker.lorem.paragraph();
  const price = faker.commerce.price();
  const rating = faker.random.arrayElement([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
  const shop_name = faker.company.companyName(0);
  const owner_name = faker.name.findName();
  const total_sales = faker.random.number({ min: 100, max: 50000 });
  const location = faker.fake('{{address.city}}, {{address.country}}');
  const owner_url = faker.image.avatar();
  const colorsobj = generateColors();
  const colors = colorsobj.replace(/"/g, "'");

  i += 1;

  userContext.vars.id = id;
  userContext.vars.name = name;
  userContext.vars.description = description;
  userContext.vars.price = price;
  userContext.vars.rating = rating;
  userContext.vars.shop_name = shop_name;
  userContext.vars.owner_name = owner_name;
  userContext.vars.total_sales = total_sales;
  userContext.vars.location = location;
  userContext.vars.owner_name = owner_name;
  userContext.vars.owner_name = owner_url;
  userContext.vars.colors = colors;

  return done();
};
