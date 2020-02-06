import React, { useEffect, useParams } from "react";
// import StylistCard from "../components/StylistCard";
import { connect } from "react-redux";
import { fetchUsers } from "../../../store/actions/users";
import { Wrapper } from "bushido-strap";
import { Link } from "react-router-dom";

function UsersList (props) {
    console.log(props)

    const pushusers = props.fetchUsers
    useEffect(() => {
        pushusers()
    }, [pushusers])

    const logout = () => {
        localStorage.removeItem("token")
    }

    return (
        <Wrapper>
            <div>
            <h1>User List</h1>
                {props.user.map(user => (
                    <div key={user.id}>
                        <p>Username: {user.username}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Profile: {user.profile_info}</p>
                    </div>
                ))}
                
                <button onClick={logout}>Log Out</button>
            </div>
        </Wrapper>
    )
};

const mapStateToProps = (state) => {
    console.log(state)
    return({
        user: state.users.userInfo
    })
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);

