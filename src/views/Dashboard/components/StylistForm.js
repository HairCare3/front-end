import React, { useParams, useEffect, useState } from "react";
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { connect, useDispatch } from "react-redux";
import { addStylistReviews } from "../../../store/actions/stylists";
// title: "Review Title", // optional title
// text: "This is the body text of the review. I have no character limit.",
// stylist_rating: 4, // integer 1-5
// haircut_rating: 5, // integer 1-5
// img_url: "http://images.com/img.png", // optional photo
// img_description: "This is a photo description, I am not required."
const StylistForm = (props) => {
    console.log(props)

    const [id, setId] = useState({
        id: "",
        review: "",
        text: "",
        stylist_rating: "",
        haircut_rating: ""
    })
    // const { id } = props.match.params;

    const dispatch = useDispatch();

  const pushreviews = props.addStylistReviews
    useEffect((id) => {
        pushreviews(id)
    }, [pushreviews]);

    const handleChange = e => {
        e.preventDefault();
        setId({...id, [e.target.name] : e.target.value})
      }

    const handleSubmit = (e, id) => {
        e.preventDefault();
        dispatch(addStylistReviews(id));
        // history.push("/users");
      };

    //   const postReview = (id) => {
    //     axiosWithAuth()
    //     .post(`https://haircare-api-3.herokuapp.com/api/stylists/${id}/reviews`, id)
    //     .then(res => {
    //         console.log("stylist by id response", res)
    //         setId({
    //             id: res.data.message
    //         })
    //     })
    //     .catch(err => {
    //         console.log("get stylist by id", err)
    //     })
    // };

    return (
        <div>
            <form>
                <input
                type="text"
                name="review"
                placeholder="Review Title" />
                <input 
                type="text"
                name="text"
                placeholder="Enter text here" />
                <input
                type="number"
                name="stylist_rating" 
                min="1"
                max="5"
                placeholder="Stylist Rating 1-5" />
                <input
                type="number"
                name="haircut_rating"
                min="1"
                max="5"
                placeholder="Haircut Rating 1-5" />
                <button>Add Review</button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state.stylists); 
    return({
        reviews: state.stylists.reviews
    })
}

export default connect(mapStateToProps, { addStylistReviews })(StylistForm);