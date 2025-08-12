import { GET_COUNT, TOGGLE_DARK_MODE } from "./actions";

const initialState = {
    count: [],
    rewiews: [],
    darkMode: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNT:
            console.log(action.payload, 'COUNT REDUCER');
            return {
                ...state,
                count: action.payload
            };
        case TOGGLE_DARK_MODE:
        default:
            return { ...state };
    };
};

export default rootReducer;