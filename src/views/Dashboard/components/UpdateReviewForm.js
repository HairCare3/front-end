import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { editReview, removeReview } from "../../../store/actions/reviews";

const UpdateReviewForm = ({ editReview }) => {
    const [review, setReview] = useState({
        id: "",
        stylist_id: "",
        customer_id: "",
        photo_id: "",
        title: "",
        text: "",
        stylist_rating: "",
        haircut_rating: ""
    })
    const { id } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        editReview(id)
    }, [id]);

    const handleChange = e => {
        e.preventDefault();
        setReview({...review, [e.target.name] : e.target.value})
      };


    //   const handleDelete = (e, id) => {
    //       e.preventDefault();
    //       dispatch(removeReview(id));
    //       history.push("/review")
    //   }

      const handleSubmit = (e, id) => {
          e.preventDefault();
          dispatch(editReview(id));
          history.push(`/reviews/${review.id}`)
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                placeholder="Review Title"
                value={review.titile}
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
                {/* <button>Add</button>
                <button>Edit</button> */}
                <button>Update</button>
            </form>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {}
}

export default connect(mapStateToProps, { editReview })(UpdateReviewForm);