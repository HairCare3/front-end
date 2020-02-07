import React, { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import AddStylistReviews from "../components/AddStylistReviews";
import { connect } from "react-redux";
import { fetchStylists } from "../../../store/actions/stylists";
import { addStylistReviews } from "../../../store/actions/stylists"
import { Link } from "react-router-dom";
import { AppWrapper, Wrapper, Button, Card } from "bushido-strap";
import theme from "bushido-strap/styled/theme";

function StylistsList ({ fetchStylists, stylist }) {

    useEffect(() => {
        fetchStylists();
    }, [fetchStylists]);

    const logout = () => {
        localStorage.removeItem("token")
    };

    const picture = "https://disk.megaimg.net/d38eaf10505de357abbd3fba9c9db352";

    return (
        <AppWrapper bg_src={picture}>
            <SearchForm stylist={stylist}/>
            <Wrapper>
                <div>
                    <Card bg={theme.yellow0} m="10rem 0 0 0" color="#DE6F00"><h1>Stylist List</h1>
                    {stylist.map(stylist => (
                        <div key={stylist.id} id={stylist.id}>
                            <p>Username: {stylist.username}</p>
                            <p>Name: {stylist.name}</p>
                            <p>Email: {stylist.email}</p>
                            <p>Location: {stylist.location}</p>
                            <br></br>
                            <Link to={`/stylists/${stylist.id}`}>
                                <div>View Profile</div>
                        </Link>
                        </div>
                    ))}
                    </Card>
                    {/* <Button bg="orange" onClick={logout}>Log Out</Button> */}
                </div>
            </Wrapper>
        </AppWrapper>
    );
};

const mapStateToProps = (state) => {
    console.log(state.stylists.stylists)
    console.log(state.stylists.reviews)
    return({
        stylist: state.stylists.stylists,
        review: state.stylists.reviews
    });
};

export default connect(mapStateToProps, { fetchStylists, addStylistReviews })(StylistsList);

