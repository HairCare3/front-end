import React, { useEffect, useParams } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../../store/actions/reviews";
import { Wrapper, AppWrapper, Card } from "bushido-strap";
import theme from "bushido-strap/styled/theme"
import { Link } from "react-router-dom";
import AddStylistReviews from "../components/AddStylistReviews"

function ReviewsList ({ fetchReviews, review }) {
    
    useEffect(() => {
        fetchReviews()
    }, [fetchReviews]);

    const picture = "https://disk.megaimg.net/0c8c2880bfcae34e83a739d6ea0f87a6";

    return (
        <AppWrapper bg_src={picture}>
            <Wrapper>
                <div>
                <Card bg="lightgray" m="10rem 0 0 0" color="#404040">
                <h1>Review List</h1>
                    {review.map(review => (
                        <div key={review.id}>
                            <h3>Title: {review.title}</h3>
                            {/* <p>Text: {review.text}</p> */}
                            <p>Stylist Rating: {review.stylist_rating}</p>
                            <p>Haircut Rating: {review.haircut_rating}</p>
                            <br></br>
                            <Link to={`/reviews/${review.id}`}>
                            <div>View Review</div>
                            </Link>
                            <Link to={`/stylists/${review.id}/reviews`}>
                                Add Review
                            </Link>
                        </div>
                    ))}
                </Card>
                {/* <AddStylistReviews /> */}
                {/* <button onClick={logout}>Log Out</button> */}
            </div>
        </Wrapper>
        </AppWrapper>
    );
};

const mapStateToProps = (state) => {
    console.log("review list", state)
    return({
        review: state.reviews.reviews
    });
};

export default connect(mapStateToProps, { fetchReviews })(ReviewsList);

