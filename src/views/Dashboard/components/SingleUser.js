import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { fetchUserId } from "../../../store/actions/users";

function User ({ fetchUserId, user, error, isFetching }){
    const { id } = useParams();

    useEffect(() => {
        fetchUserId(id);
    }, [id]);

    if(isFetching){
        return <h2>Loading User...</h2>
    };

    return (
        <div key={user.id} id={user.id}>
            {error && <p>{error}</p>}
                <img src={user.profile_url}></img>
                <h3>Username: {user.username}</h3>
                <h4>Name: {user.name}</h4>
                <p>Email: {user.email}</p>
                <p>Location: {user.location}</p>
                <p>Info: {user.profile_info}</p>
        </div>
    )
};

const mapStateToProps = state => {
    console.log("single user", state)
    return {
      user: state.users.userInfo,
      isFetching: state.users.isFetching,
      isEditing: state.users.isEditing,
      isDeleting: state.users.isDeleting,
      is_stylist: state.users.is_stylist,
      error: state.users.error
    };
  };
  
  export default connect(mapStateToProps, { fetchUserId })(User);