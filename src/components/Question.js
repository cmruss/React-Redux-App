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
                id='question'
                name='question'
                placeholder='...do I stand a chance?'
                value={newQuestion}
                onChange={handleChange}

            />
            <button id='tbutton' onClick={()=>{props.getAnswer(newQuestion); setNewQuestion('')}}>ask</button>
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