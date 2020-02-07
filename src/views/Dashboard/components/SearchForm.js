
import React, { useState, useEffect } from "react";
import { AppWrapper, Wrapper, Form, Input, Button, Col} from "bushido-strap";
import theme from "bushido-strap/styled/theme";

function SearchForm(props) {
    console.log(props.stylist)
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // const results = stylist.filter(stylist =>
//     //   stylist.toLowerCase().includes(searchTerm.toLowerCase())
//     // );
//     setSearchResults(stylist.filter(stylist =>
//         stylist.toLowerCase().includes(searchTerm.toLowerCase())
//     )}, [searchTerm]);
    
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <Form align="center" >
        {/* <label htmlFor="name">Search:</label> */}
        <Input margin="4rem 0 0 3rem"
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
      <div className="stylist-list">
        <ul>
          {/* {searchResults.map(stylist => (
            <li key={stylist}>{stylist}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default SearchForm;

