export const NEW_STOCK_SALE_ACTION = 'NEW_STOCK_SALE';

export const newStockSale = ({
    label,
    price
}) => {
    return {
        type: NEW_STOCK_SALE_ACTION,
        payload: {
            label,
            price
        }
    };
};