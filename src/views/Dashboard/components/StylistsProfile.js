import React, { useEffect } from "react";
import { registerUser } from "../../../store/actions/registerUser";
import { connect } from "react-redux";
import { Wrapper, Linkton, Box, Card } from "bushido-strap";

const Stylists = (props) => {
    console.log(props.stylists)

    // const pushStylists = props.registerUser
    // useEffect(() => {
    //     pushStylists()
    // }, [pushStylists])

    return (
        <div className="stylist-wrapper">
            <div className="stylist-content">
                <h1>Stylists Profile</h1>
                <div key={props.stylists.id}>
                    <img src={props.stylists.profile_url} alt="avatar picture" />
                        <p>Name: {props.stylists.name}</p>
                        <p>Email: {props.stylists.email}</p>
                        <p>Location: {props.stylists.location}</p>
                        <p>{props.stylists.profile_info}</p>
                    </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return({
        stylists: state.registerReducer,
        
    })
}

export default connect(mapStateToProps, { registerUser })(Stylists);