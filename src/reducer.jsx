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
        default:
            return state;
    }
}
