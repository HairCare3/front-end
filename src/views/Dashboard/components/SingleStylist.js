import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link} from "react-router-dom";
import { fetchStylistsId } from "../../../store/actions/stylists";
import AddStylistReviews from "../components/AddStylistReviews";

function Stylist ({ fetchStylistsId, stylist, isFetching, error }) {

    const { id } = useParams();
    console.log("single stylist id", id)

    useEffect(() => {
        fetchStylistsId(id);
    }, [id]);
    
    if(isFetching){
        return <h2>Loading Stylist...</h2>
    }
    
    return ( 

        <div key={stylist.id} id={stylist.id}>
            {error && <p>{error}</p>}
                <img src={stylist.profile_url}></img>
                <h3>Username: {stylist.username}</h3>
                <h4>Name: {stylist.name}</h4>
                <p>Email: {stylist.email}</p>
                <p>Location: {stylist.location}</p>
                <p>Info: {stylist.profile_info}</p>
        </div>
        
    )
}

const mapStateToProps = state => {
    console.log("single stylist", state)
    return {
      stylist: state.stylists.stylists,
      isFetching: state.stylists.isFetching,
      error: state.stylists.error
    };
  };
  
  export default connect(mapStateToProps, { fetchStylistsId })(Stylist);