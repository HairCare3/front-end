import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStylists } from "../../../store/actions/stylists";
import { Wrapper } from "bushido-strap";


function StylistsList (props) {
    console.log(props.stylist)

    const pushstylists = props.fetchStylists
    useEffect(() => {
        pushstylists()
    }, [pushstylists])

    const logout = () => {
        localStorage.removeItem("token")
    }

    return (
        <Wrapper>
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
                <button onClick={logout}>Log Out</button>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return({
        stylist: state.stylists.stylists
    })
}

export default connect(mapStateToProps, { fetchStylists })(StylistsList);