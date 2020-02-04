import React, { useEffect } from "react";
import { registerUser } from "../../../store/actions/registerUser";
import { connect } from "react-redux";
import { Wrapper, Linkton, Box, Card } from "bushido-strap";

const Stylists = (props) => {
    console.log(props)

    const pushStylists = props.registerUser
    useEffect(() => {
        pushStylists()
    }, [pushStylists])

    return (
        <div className="stylist-wrapper">
            <div className="stylist-content">
                <h1>Stylists Profile</h1>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return({
     
    })
}

export default connect(mapStateToProps, { registerUser })(Stylists);