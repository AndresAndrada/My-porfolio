import axios from 'axios';
export const GET_COUNT = 'GET_COUNT';
export const PATCH_COUNT = 'PATCH_COUNT';
export const CLEAR_COUNT = 'CLEAR_COUNT';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const getCount = () => {
    return async (dispatch) => {
        const aux = await axios.get('/count');
        console.log(aux.data, 'DATA ACTIONS');
        return dispatch({
            type: GET_COUNT,
            payload: aux.data
        });
    };
};

export const patchCount = (id, count) => {
    return async (dispatch) => {
        // const aux = await axios.patch(`/count/${id}`, count);
        const aux = { id, ...count };
        return dispatch({
            type: PATCH_COUNT,
            payload: aux.data
        });
    };
};

export const postReviews = (obj) => {
    return async (dispatch) => {
        console.log(obj);
        const aux = await axios.post('/reviews', obj);
        console.log(aux.data);
    }
};

export const changeDarkMode = (obj) => {
    return async (dispatch) => {
        console.log(obj);
        const aux = await axios.post('/reviews', obj);
        console.log(aux.data);
    }
};