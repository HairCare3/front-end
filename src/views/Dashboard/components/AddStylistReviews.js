import React, { useEffect, useState, } from "react";
import { connect, useDispatch } from "react-redux";
import { addStylistReviews, deleteReview } from "../../../store/actions/stylists";
import { useParams, useHistory } from "react-router-dom";
import { AppWrapper, Wrapper, Form, Input, Button, Col} from "bushido-strap";
import theme from "bushido-strap/styled/theme"

const AddStylistReviews = ({ addStylistReviews }) => {

    const [review, setReview] = useState({
        id: "",
        review: "",
        text: "",
        stylist_rating: "",
        haircut_rating: ""
    });

    const { id } = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        addStylistReviews(id);
    }, [id]);
   
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
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();
        dispatch(addStylistReviews(id));
        history.push("/reviews");
    };

    const picture = "https://disk.megaimg.net/dfa0be22876b9845d14399425b68436b";
    return (
        <AppWrapper bg_src={picture} p="10rem" bg={theme.orange3}>
            <Wrapper>
            <h2>Review Form</h2>
            <Form direction="row" onSubmit={handleSubmit}>
                <>
                <Input
                type="text"
                name="review"
                placeholder="Review Title"
                value={review.review}
                onChange={handleChange} />
                <Input 
                type="text"
                name="text"
                placeholder="Enter text here"
                value={review.text}
                onChange={handleChange} />
                <label>Stylist Rating
                <Input
                type="number"
                name="stylist_rating" 
                min="1"
                max="5"
                placeholder="1-5"
                value={review.stylist_rating}
                onChange={handleChange} />
                </label>
                <label>Haircut Rating
                <Input
                type="number"
                name="haircut_rating"
                min="1"
                max="5"
                placeholder=" 1-5"
                value={review.haircut_rating}
                onChange={handleChange} />
                </label>
                </>
                <Button onClick={handleAdd}>Add</Button>
                <Button>Edit</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </Form>
            </Wrapper>
        </AppWrapper>
    );
};

const mapStateToProps = (state) => {
    console.log(state.stylists.reviews); 
    return({
        reviews: state.stylists.reviews
    })
};

export default connect(mapStateToProps, { addStylistReviews })(AddStylistReviews);