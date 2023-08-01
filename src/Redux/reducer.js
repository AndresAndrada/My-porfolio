import { GET_COUNT } from "./actions";

const initialState = {
    count: [],
    rewiews: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNT:
            console.log(action.payload, 'COUNT REDUCER');
            return {
                ...state,
                count: action.payload
            };
        default:
            return { ...state };
    };
};

export default rootReducer;