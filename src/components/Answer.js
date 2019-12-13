import React from 'react';
import { connect } from 'react-redux';


const Answer = props => {
    return(
        <div className='answer'>
            <p>Q: {props.question}</p>
            <p>A: {props.response.answer}</p>
            <img src={props.response.image}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        question: state.question,
        response: state.response,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { }
)(Answer);