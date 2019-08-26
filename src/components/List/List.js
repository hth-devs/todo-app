import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";


const List = props => {
  return(
    <MDBContainer>
  <MDBListGroup style={{margin: "auto",
  width: "50%",
  border: "3px solid white",
  padding: "10px"  }}>
  {
      props.items.map((item, index) => <MDBListGroupItem key={index} className="d-flex justify-content-between align-items-center">{item}</MDBListGroupItem>)
    } 
  </MDBListGroup>
</MDBContainer>
    
  
  
);
};

export default List;