export const NEW_STOCK_PRICE_ACTION = 'NEW_STOCK_SALE';

export const newStockPriceChange = ({
    label,
    priceChange
}) => {
    return {
        type: NEW_STOCK_PRICE_ACTION,
        payload: {
            label,
            priceChange: Number(priceChange)
        }
    };
};