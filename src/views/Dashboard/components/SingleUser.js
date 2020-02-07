import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { fetchUserId } from "../../../store/actions/users";
import { AppWrapper, Wrapper, Card } from "bushido-strap";
import theme from "bushido-strap/styled/theme";

function User ({ fetchUserId, user, error, isFetching }){
    const { id } = useParams();

    useEffect(() => {
        fetchUserId(id);
    }, [id]);

    if(isFetching){
        return <h2>Loading User...</h2>
    };

    const picture = "https://disk.megaimg.net/643219386dce9821c2d1c9ae99c555ab";
    
    return (
        <AppWrapper bg_src={picture} m="3rem 0 3rem 0">
            <Wrapper>
                <Card bg={theme.green0} color="#336600">
                <div key={user.id} id={user.id}>
                {error && <p>{error}</p>}
                    <img src={user.profile_url}></img>
                    <p>Username: {user.username}</p>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Location: {user.location}</p>
                    <p>Info: {user.profile_info}</p>
                </div>
                </Card>
            </Wrapper>
        </AppWrapper>
    );
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