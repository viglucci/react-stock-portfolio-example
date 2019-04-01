import Chance from 'chance';
const chance = new Chance(Math.random);

const currencFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const formatCurrency = (value) => {
    return currencFormatter.format(value);
};

export const getRandomStockPriceChange = () => {
  return chance.floating({ min: -1.00, max: 1.00 });
};