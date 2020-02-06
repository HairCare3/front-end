import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link} from "react-router-dom";
import { fetchStylistsId } from "../../../store/actions/stylists";

function Stylist ({ fetchStylistsId, stylist, isFetching, error }) {

    const { id } = useParams();

    useEffect(() => {
        const stylist_id = id ? id : 1
        fetchStylistsId(stylist_id);
    }, [id]);
    
    if(isFetching){
        return <h2>Loading Stylist...</h2>
    }
    return ( 
        <div>
            <Link to={`/stylists/${stylist.name && stylist.id}`}>
                <h3>Stylist: {stylist.name}</h3>
            </Link>
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