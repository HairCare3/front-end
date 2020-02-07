import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link} from "react-router-dom";
import { fetchReviewId } from "../../../store/actions/reviews";

function Review ({ fetchReviewId, review, isFetching, error }) {

    const { id } = useParams();

    useEffect(() => {
        fetchReviewId(id);
    }, [id]);
    
    if(isFetching){
        return <h2>Loading Review...</h2>
    }
    
    return ( 

        <div key={review.id} id={review.id}>
            {error && <p>{error}</p>}
            <h3>Title: {review.title}</h3>
                <p>Text:</p>
                <p>{review.text}</p>
                <p>Stylist Rating: {review.stylist_rating}</p>
                <p>Haircut Rating: {review.haircut_rating}</p>
                {/* <Link to={`/stylists/${stylist.id}/reviews`}>
                            <div>View Profile</div>
                    </Link> */}
                {/* <div>
                <AddStylistReviews />
                </div> */}
        </div>
        
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