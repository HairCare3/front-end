import React, { useEffect, useParams, location } from "react";
import AddStylistReviews from "../components/AddStylistReviews";
import { connect } from "react-redux";
import { fetchStylists } from "../../../store/actions/stylists";
import { addStylistReviews } from "../../../store/actions/stylists"
import { Wrapper } from "bushido-strap";
import { Link, Route } from "react-router-dom";

function StylistsList (props) {
    console.log("StylistList props", props)


    const pushstylists = props.fetchStylists
    useEffect(() => {
        pushstylists()
    }, [pushstylists]);


    const logout = () => {
        localStorage.removeItem("token")
    };

    return (
        <Wrapper>
            <div>
            <h1>Stylist List</h1>
                <div>
                    {props.stylist.map(stylist => (
                    <div key={stylist.id}>
                        <p>Username: {stylist.username}</p>
                        <p>Name: {stylist.name}</p>
                        <p>Email: {stylist.email}</p>
                        <p>Profile: {stylist.profile_info}</p>
                        <AddStylistReviews />
                    </div>
                ))}
                </div>
                <button onClick={logout}>Log Out</button>
                
            </div>
        </Wrapper>
    )
};

// function StylistDetails (stylist) {
//     console.log(stylist)

//     const pushstylist = fetchStylists
//     useEffect(() => {
//         pushstylist()
//     }, [pushstylist])

//     return (
//         <div></div>
//     //   <Link to={`/stylists/${stylists.id}`}>
//     //     <StylistCard stylist={stylist.stylist} />
//     //   </Link>
//     )
// }

const mapStateToProps = (state) => {
    console.log(state)
    return({
        stylist: state.stylists.stylists,
        review: state.stylists.reviews
    })
}

export default connect(mapStateToProps, { fetchStylists, addStylistReviews })(StylistsList);

