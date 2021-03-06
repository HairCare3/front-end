import React, { useEffect } from "react";
import { registerUser } from "../../../store/actions/registerUser";
import { connect } from "react-redux";
import { Wrapper, Linkton, Box, Card } from "bushido-strap";

function CustomerProfile (props) {
    console.log(props)
    // props.stylists.is_stylist = false;
    // const dispatch = useDispatch()

    return (
        <div className="stylist-wrapper">
            <div className="stylist-content">
                <h1>Customer Profile</h1>
                <div>
                    <p>Username: {props.username}</p>
                </div>
                {/* <div key={props.stylists.id}>
                    <img src={props.stylists.profile_url} alt="avatar picture" />
                        <p>Name: {props.stylists.name}</p>
                        <p>Email: {props.stylists.email}</p>
                        <p>Location: {props.stylists.location}</p>
                        <p>{props.stylists.profile_info}</p>
                    </div> */}
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    console.log(state)
    return({
       username: "Bill" 
    })
}

export default connect(mapStateToProps, { registerUser })(CustomerProfile);