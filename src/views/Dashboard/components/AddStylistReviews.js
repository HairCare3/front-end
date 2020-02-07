import React, { useEffect, useState, } from "react";
import { connect, useDispatch } from "react-redux";
import { addStylistReviews, deleteReview } from "../../../store/actions/stylists";
import { useParams, useHistory } from "react-router-dom";

// title: "Review Title", // optional title
// text: "This is the body text of the review. I have no character limit.",
// stylist_rating: 4, // integer 1-5
// haircut_rating: 5, // integer 1-5
// img_url: "http://images.com/img.png", // optional photo
// img_description: "This is a photo description, I am not required."
const AddStylistReviews = ({ addStylistReviews, reviews }) => {

    const [review, setReview] = useState({
        id: "",
        review: "",
        text: "",
        stylist_rating: "",
        haircut_rating: ""
    })
    const { id } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        addStylistReviews(id);
    }, [id])
   
    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteReview(id));
        history.push("/reviews");
    };

    const handleChange = e => {
        e.preventDefault();
        setReview({...review, [e.target.name] : e.target.value})
    };
    
    const handleAdd = (e, id) => {
        e.preventDefault();
        dispatch(addStylistReviews(id))
        history.push(`/review/${id}`)
    }

    const handleSubmit = (e, id) => {
        e.preventDefault();
        dispatch(addStylistReviews(id));
        history.push("/reviews");
    };

    return (
        
        <div>
            <h2>Review Form</h2>
        <div>
        </div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="review"
                placeholder="Review Title"
                value={review.review}
                onChange={handleChange} />
                <input 
                type="text"
                name="text"
                placeholder="Enter text here"
                value={review.text}
                onChange={handleChange} />
                <input
                type="number"
                name="stylist_rating" 
                min="1"
                max="5"
                placeholder="Stylist Rating 1-5"
                value={review.stylist_rating}
                onChange={handleChange} />
                <input
                type="number"
                name="haircut_rating"
                min="1"
                max="5"
                placeholder="Haircut Rating 1-5"
                value={review.haircut_rating}
                onChange={handleChange} />
                <button onClick={handleAdd}>Add</button>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state.stylists.reviews); 
    return({
        reviews: state.stylists.reviews
    })
}

export default connect(mapStateToProps, { addStylistReviews })(AddStylistReviews);