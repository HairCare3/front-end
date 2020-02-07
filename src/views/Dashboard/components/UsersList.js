import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../../store/actions/users";
import { AppWrapper, Wrapper, Button, Card } from "bushido-strap";
import theme from "bushido-strap/styled/theme"
import { Link } from "react-router-dom";

function UsersList ({ fetchUsers, user }) {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);


    const logout = () => {
        localStorage.removeItem("token")
    };

    const picture = "https://disk.megaimg.net/7838817de33e60b4cb623f000dce1252";

    return (
       <AppWrapper bg_src={picture}>
            <Wrapper>
                <div>
                    <Card m="10rem 0 0 0" bg={theme.red0} color="darkred">
                <h1>User List</h1>
                    <div>
                    {user.map(user => (
                        <div key={user.id}>
                            <p>Username: {user.username}</p>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <br></br>
                            <Link to={`/users/${user.id}`}>
                                <div>View Profile</div>
                        </Link>
                        </div>
                    ))}
                    </div>
                    </Card>
                    {/* <Button onClick={logout} color="pink">Log Out</Button> */}
                </div>
            </Wrapper>
        </AppWrapper>
    );
};

const mapStateToProps = (state) => {
    console.log("user list", state)
    return({
        user: state.users.userInfo
    });
};

export default connect(mapStateToProps, { fetchUsers })(UsersList);

