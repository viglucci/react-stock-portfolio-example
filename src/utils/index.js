const currencFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const formatCurrency = (value) => {
    return currencFormatter.format(value);
};
