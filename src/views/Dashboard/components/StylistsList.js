import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStylists } from "../../../store/actions/stylists";


function StylistsList (props) {
    console.log(props.stylist)

    const pushstylists = props.fetchStylists
    useEffect(() => {
        pushstylists()
    }, [pushstylists])

    return (
        <div>
            <h1>Stylist List</h1>
            <div>
                {props.stylist.map(stylist => (
                    <div key={stylist.id}>
                        <p>Username: {stylist.username}</p>
                        <p>Name: {stylist.name}</p>
                        <p>Email: {stylist.email}</p>
                        <p>Profile: {stylist.profile_info}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.stylistReducer.stylists)
    return({
        stylist: state.stylistReducer.stylists
    })
}

export default connect(mapStateToProps, { fetchStylists })(StylistsList);