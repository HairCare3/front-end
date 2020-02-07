import React, { useEffect, location } from "react";
import AddStylistReviews from "../components/AddStylistReviews";
import Stylist from "../components/SingleStylist";
import { connect } from "react-redux";
import { fetchStylists, fetchStylistsId } from "../../../store/actions/stylists";
import { addStylistReviews } from "../../../store/actions/stylists"
import { Wrapper } from "bushido-strap";
import { Link, Route, useParams } from "react-router-dom";

function StylistsList ({ fetchStylists, fetchStylistsId, addStylistReviews, stylist, review }) {

    const { id } = useParams();

    useEffect(() => {
        fetchStylists();
    }, [fetchStylists])

    useEffect(() => {
        fetchStylistsId();
    }, [fetchStylistsId]);

    const logout = () => {
        localStorage.removeItem("token")
    };

    return (
        <Wrapper>
            <div>
            <h1>Stylist List</h1>
                <div>
                {stylist.map(stylist => (
                    <div key={stylist.id} id={stylist.id}>
                        <p>Username: {stylist.username}</p>
                        <p>Name: {stylist.name}</p>
                        <p>Email: {stylist.email}</p>
                        <br></br>
                        <Link to={`/stylists/${stylist.id}`}>
                            <div>View Profile</div>
                    </Link>
                    </div>
                ))}
                
                </div>
                <button onClick={logout}>Log Out</button>
                
            </div>
        </Wrapper>
    )
};

const mapStateToProps = (state) => {
    console.log(state.stylists.stylists)
    console.log(state.stylists.reviews)
    return({
        stylist: state.stylists.stylists,
        review: state.stylists.reviews
    })
}

export default connect(mapStateToProps, { fetchStylists, fetchStylistsId, addStylistReviews })(StylistsList);

