import {
    SET_QUESTION,
    FETCH_ANSWER_START,
    FETCH_ANSWER_SUCCESS,
    FETCH_ANSWER_FAILURE,
} from '../actions';

const initialState = {
    question: '',
    response: {
        answer: '',
        image: ''
    },
    isFetching: false,
    error: '',
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTION:
            return {
                ...state,
                question: action.payload
            };
        case FETCH_ANSWER_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_ANSWER_SUCCESS:
            return {
                ...state,
                response: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_ANSWER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;