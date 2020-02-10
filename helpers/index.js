export const formatNumber = price => {
  return String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
