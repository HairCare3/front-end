import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStylists } from "../../../store/actions/stylists";


function StylistsList (props) {
    console.log(props)

    const pushstylists = props.fetchStylists
    useEffect(() => {
        pushstylists()
    }, [pushstylists])

    return (
        <div>
            <h1>Stylist List</h1>
            <div>
                <p>Username: {props.stylist.username}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return({
        stylist: state.stylistReducer.stylists,
        username: state.stylistReducer.stylists.username 
// username: "bianca"
// name: "Bianca Severino"
// email: "biancasev@gmail.com"
// password: "password"
// location: "New Haven, CT"
// is_stylist: false
// profile_url: "https://avatars0.githubusercontent.com/u/10442143"
// profile_info: "Hi this is my profile!"
    })
}

export default connect(mapStateToProps, { fetchStylists })(StylistsList);