/** @format */

export const initialState = {
    basket: [],
};

export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.items],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `cann't remove product (id: ${action.id}) as it's not in basket!`
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
}
