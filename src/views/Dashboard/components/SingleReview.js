import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter as Router, Link} from "react-router-dom";
import { fetchReviewId, removeReview } from "../../../store/actions/reviews";
import { useHistory } from "react-router";
import { AppWrapper, Wrapper, Form, Input, Button, Card, Box, Row, Col} from "bushido-strap";
import theme from "bushido-strap/styled/theme"


function Review ({ fetchReviewId, review, isFetching, error }) {

    const { id } = useParams();

    useEffect(() => {
        fetchReviewId(id);
    }, [id]);

    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(removeReview(id));
        history.push("/reviews");
    };

    const handleEditClick = e => {
        e.preventDefault();
        history.push(`/reviews/${review.id}`);
      };

    if(isFetching){
        return <h2>Loading Review...</h2>
    }
    
    return ( 
        <AppWrapper bg={theme.blue3}>
            <div key={review.id} id={review.id}>
            {error && <p>{error}</p>}
            <h3>Title: {review.title}</h3>
                <p>Text:</p>
                <p>{review.text}</p>
                <p>Stylist Rating: {review.stylist_rating}</p>
                <p>Haircut Rating: {review.haircut_rating}</p>
                <div>
                    {/* <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDelete}>Delete</button> */}
                </div>
        </div>
        </AppWrapper>
    )
}

const mapStateToProps = state => {
    console.log("single stylist", state)
    return {
      review: state.reviews.reviews,
      isFetching: state.reviews.isFetching,
      error: state.reviews.error
    };
  };
  
  export default connect(mapStateToProps, { fetchReviewId })(Review);