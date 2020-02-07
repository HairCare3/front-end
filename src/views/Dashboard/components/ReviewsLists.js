import React, { useEffect, useParams } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../../store/actions/reviews";
import { Wrapper } from "bushido-strap";
import { Link } from "react-router-dom";


function ReviewsList ({ fetchReviews, review }) {
    
    useEffect(() => {
        fetchReviews()
    }, [fetchReviews])

//     title: "This is a review"
// text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan nulla a elit hendrerit porta. Nam nec mollis velit. Nulla et ipsum sit amet quam fermentum interdum. In quis enim vulputate, convallis velit in, vehicula mauris. Mauris blandit arcu nisl, nec finibus augue molestie in. Sed vitae facilisis nisi. Etiam condimentum tortor ut iaculis commodo. Sed varius lacus purus, non dapibus turpis fermentum id. Phasellus dignissim, enim eu ornare pretium, libero eros iaculis urna, sit amet posuere mi ante vitae velit. Nunc nec ante ut purus commodo rhoncus. Morbi feugiat dolor sit amet magna rhoncus, vehicula condimentum purus tincidunt. Pellentesque convallis nisi nulla, non gravida est tempus vitae. Morbi metus diam, fermentum non rhoncus et, efficitur a tellus. Quisque leo diam, scelerisque eu dolor et, venenatis euismod magna. Proin eu nunc eu lectus placerat sollicitudin. Sed sodales lacus et elementum congue."
// stylist_rating: 5
// haircut_rating: 5

    return (
        <Wrapper>
            <div>
            <h1>User List</h1>
                <div>
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
                        </div>
                    ))}
                </div>
                
                {/* <button onClick={logout}>Log Out</button> */}
            </div>
        </Wrapper>
    )
};

const mapStateToProps = (state) => {
    console.log("review list", state)
    return({
        review: state.reviews.reviews
    })
}

export default connect(mapStateToProps, { fetchReviews })(ReviewsList);

