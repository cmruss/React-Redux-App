import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


const Answer = props => {
    return(
        <div className='answer'>
            {props.question && <p>{props.question.toLowerCase()}</p>}
            {props.isFetching && (
                <Loader type="ThreeDots" color="grey" height={20} width={20} />
                )}
            {props.response.image && <img src={props.response.image} alt={props.response.answer}/>}
            
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