import axios from 'axios';

export const SET_QUESTION = 'SET_QUESTION';
export const FETCH_ANSWER_START = 'FETCH_ANSWER_START';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const FETCH_ANSWER_FAILURE = 'FETCH_ANSWER_FAILURE';

export const getAnswer = (newQuestion) => dispatch => {

    dispatch({ type: SET_QUESTION, payload: newQuestion });

    dispatch({ type: FETCH_ANSWER_START });
    axios
        .get('https://yesno.wtf/api')
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_ANSWER_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCH_ANSWER_FAILURE, payload: error.response })
        })
}