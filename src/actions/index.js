export const NEW_STOCK_SALE = 'NEW_STOCK_SALE';

export const newStockSale = ({
    label,
    price
}) => {
    return {
        type: NEW_STOCK_SALE,
        payload: {
            label,
            price
        }
    };
};