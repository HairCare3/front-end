import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { editReview } from "../../../store/actions/reviews";
import { AppWrapper, Wrapper, Form, Input, Button, Col} from "bushido-strap";
import theme from "bushido-strap/styled/theme"

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
    });
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

      const handleSubmit = (e, id) => {
          e.preventDefault();
          dispatch(editReview(id));
          history.push(`/reviews/${review.id}`)
      };

      const picture="https://disk.megaimg.net/7b60cd88376638ce100b15354139d685";

    return (
        <AppWrapper bg_src={picture} p="10rem" bg={theme.blue5}>
            <Wrapper >
                <Form direction="row" onSubmit={handleSubmit}>
                    <Col color="white">
                    <Input
                    type="text"
                    name="title"
                    placeholder="Review Title"
                    value={review.titile}
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
                    <label> Haircut Rating
                    <Input
                    type="number"
                    name="haircut_rating"
                    min="1"
                    max="5"
                    placeholder="1-5"
                    value={review.haircut_rating}
                    onChange={handleChange} />
                    </label>
                    <Button color="white" bg="blue">Update</Button>
                    </Col>
                </Form>
            </Wrapper>
        </AppWrapper>
    );
};

const mapStateToProps = state => {
    console.log(state)
    return {}
};

export default connect(mapStateToProps, { editReview })(UpdateReviewForm);