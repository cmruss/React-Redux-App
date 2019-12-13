import React, { useState } from 'react';
import { getAnswer } from '../actions';
import { connect } from 'react-redux';

const Question = props => {
    const [newQuestion, setNewQuestion] = useState();

    const handleChange = event => {
        setNewQuestion(event.target.value)
    }

    return(
        <div className='question'>
            <input
                type='text'
                name='question'
                placeholder='ask me a question...'
                value={newQuestion}
                onChange={handleChange}
            />
            <button onClick={()=>props.getAnswer(newQuestion)}>ask</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        question: state.question,
        answer: state.answer,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getAnswer }
)(Question);